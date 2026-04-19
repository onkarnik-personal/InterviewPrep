export function runTests<TInput, TOutput>(
  fn: (input: TInput) => TOutput,
  cases: { input: TInput; expected: TOutput }[]
): void {
  for (const { input, expected } of cases) {
    const actual = fn(input);
    const pass = JSON.stringify(actual) === JSON.stringify(expected);
    console.log(
      `${pass ? "PASS" : "FAIL"} | input: ${JSON.stringify(input)} | expected: ${JSON.stringify(expected)}${pass ? "" : ` | got: ${JSON.stringify(actual)}`}`
    );
  }
}

// For in-place functions (return void) — pass a deepCopy of input, fn mutates it, compare after
export function runInPlaceTests<TInput>(
  fn: (input: TInput) => void,
  cases: { input: TInput; expected: TInput }[]
): void {
  for (const { input, expected } of cases) {
    const copy = JSON.parse(JSON.stringify(input)) as TInput;
    fn(copy);
    const pass = JSON.stringify(copy) === JSON.stringify(expected);
    console.log(
      `${pass ? "PASS" : "FAIL"} | input: ${JSON.stringify(input)} | expected: ${JSON.stringify(expected)}${pass ? "" : ` | got: ${JSON.stringify(copy)}`}`
    );
  }
}
