/**
 * Problem: Build a Retry Engine with Exponential Backoff
 * Platform: Cruscible — https://beta.cruscible.com/lld/retry-engine
 * Difficulty: Easy
 * Pattern: LLD / Retry + Exponential Backoff
 *
 * Backoff formula:
 *   delay(n) = min(initialDelayMs × multiplier^(n-1), maxDelayMs)
 *   actualDelay = delay(n) × (1 + jitter)   where jitter ∈ [-0.10, +0.10]
 *
 * Status lifecycle:
 *   PENDING → RETRYING → SUCCEEDED
 *                      → FAILED
 *                      → CANCELLED
 */

type Status = "PENDING" | "RETRYING" | "SUCCEEDED" | "FAILED" | "CANCELLED";

interface OperationState {
    attempts: number;
    status: Status;
    lastError: string | null;
    timestamps: number[];
    cancelled: boolean;
}

interface RetryEngineContract {
    configure(maxRetries: number, initialDelayMs: number, backoffMultiplier: number, maxDelayMs: number): void;
    execute(operationId: string, action: () => boolean | Promise<boolean>): Promise<boolean>;
    getAttemptCount(operationId: string): number;
    getStatus(operationId: string): Status | null;
    getLastError(operationId: string): string | null;
    getNextRetryDelayMs(operationId: string): number;
    getRetryTimestamps(operationId: string): number[];
    cancel(operationId: string): void;
    reset(operationId: string): void;
}

class RetryEngineContractImpl implements RetryEngineContract {

    private maxRetries: number;
    private initialDelayMs: number;
    private backoffMultiplier: number;
    private maxDelayMs: number;
    private operations: Map<string, OperationState>;

    constructor() {
        this.maxRetries = 0;
        this.initialDelayMs=0;
        this.backoffMultiplier=0;
        this.maxDelayMs=0;
        this.operations = new Map();
    }

    configure(maxRetries: number, initialDelayMs: number, backoffMultiplier: number, maxDelayMs: number): void {
        this.maxRetries = maxRetries;
        this.initialDelayMs = initialDelayMs;
        this.backoffMultiplier = backoffMultiplier;
        this.maxDelayMs = maxDelayMs;
    }

    getAttemptCount(operationId: string): number {
        const count = this.operations.get(operationId);
        return count?.attempts ?? 0;
    }

    getStatus(operationId: string): Status | null {
        const ops = this.operations.get(operationId);
        return ops?.status ?? null;
    }

    getLastError(operationId: string): string | null {
        return this.operations.get(operationId)?.lastError ?? null;
    }

    getRetryTimestamps(operationId: string): number[] {
        return this.operations.get(operationId)?.timestamps ?? [];
    }

    async execute(operationId: string, action: () => boolean | Promise<boolean>): Promise<boolean> {
        this.operations.set(operationId, {
            attempts : 0,
            cancelled: false,
            lastError: null,
            status: 'PENDING',
            timestamps: []
        })

        const op = this.operations.get(operationId);
        if(!op) return false;

        for(let i=0; i < this.maxRetries + 1; i++) {
            if(op.cancelled === true) {
                op.status = 'CANCELLED';
                return false;
            }
            op.status = 'RETRYING';
            op.attempts++;
            op.timestamps.push(Date.now());

            try {
                const result = await action();
                if(result) {
                    op.status = 'SUCCEEDED';
                    return true;
                }
                op.lastError = 'Action did not returned results';
            } catch(e) {
                op.lastError = e as string;
            }
            if(i < this.maxRetries) {
                await this.sleep(this.computeDelay(i+1));
            }
        }
        op.status = 'FAILED';
        return false;
    }

    private computeDelay(attempt: number): number {
        const raw = Math.min(
            this.initialDelayMs * Math.pow(this.backoffMultiplier,attempt -1),
            this.maxDelayMs
        )
        const jitter = Math.random()*0.2 - 0.1;
        return raw * (1 + jitter);
    }

    private sleep(time: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    getNextRetryDelayMs(operationId: string): number {
        const ops = this.operations.get(operationId);
        if (!ops || ops.status !== 'RETRYING') return 0;
        return this.computeDelay(ops.attempts + 1);
    }

    cancel(operationId: string): void {
        const ops = this.operations.get(operationId);
        if (!ops) return;
        ops.cancelled = true;
        ops.status = 'CANCELLED';
    }

    reset(operationId: string): void {
        const ops = this.operations.get(operationId);
        if (!ops) return;
        ops.attempts = 0;
        ops.cancelled = false;
        ops.lastError = null;
        ops.status = 'PENDING';
        ops.timestamps = [];
    } 

}
