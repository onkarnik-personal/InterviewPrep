# System Design — How the Web Works

## DNS Resolution

When a user types `app.pattern.com` and hits Enter, DNS resolution happens in this order (each step only runs on cache miss):

1. **Browser cache** — visited recently?
2. **OS cache** — `hosts` file + OS DNS cache
3. **Router cache** — home/office router
4. **ISP's DNS resolver** — your internet provider's DNS server
5. **Root nameserver → TLD nameserver (`.com`) → Authoritative nameserver** (e.g. Route53)

Most requests resolve at ISP level and never reach the authoritative nameserver.

---

## Full Request Flow

```
DNS resolve → TCP handshake → TLS handshake → HTTP request → HTML response
→ fetch JS/CSS → React boots → API calls → Node.js → MySQL
```

### TCP Handshake (3-way)
Establishes the connection before any data is sent:
```
Browser → SYN       → Server
Browser ← SYN-ACK  ← Server
Browser → ACK       → Server
```

### HTTPS = HTTP + TLS
- **TCP** — connection (reliable delivery)
- **TLS** — encryption (identity + secure channel)
- **HTTP** — request/response format (methods, headers, status codes)

Order: TCP handshake → TLS handshake → HTTP traffic

### TLS Handshake
- Server sends its **SSL certificate** (public, contains public key + CA-verified identity)
- Both sides use key exchange (e.g. Diffie-Hellman) to derive a **session key in memory**
- All HTTP traffic is encrypted with that session key
- Session key is thrown away when connection closes — never stored

This is **Perfect Forward Secrecy** — recorded traffic can't be decrypted later even if the server's private key is stolen.

### What IS stored permanently
| Thing | Where |
|---|---|
| Server's private key | Server (never leaves) |
| SSL certificate | Public — anyone can inspect |
| Session key | Memory only — gone after connection |

---

## TLS Session vs User Session

| | TLS Session | User Session |
|---|---|---|
| What | Encrypted connection | Who is logged in |
| Where | OS / TLS library | Your app code |
| You configure? | No | Yes |
| Lives in | Memory, milliseconds | Cookie / Redis / DB |

TLS runs silently underneath. User sessions are what you configure with `express-session`, JWTs, etc.

---

### What happens after HTML arrives
1. Browser receives HTML shell
2. Sees `<script src="main.js">` → fires new HTTP request for JS bundle
3. React boots, makes API calls → HTTP requests to Node.js backend
4. Node.js queries MySQL → returns JSON → React renders UI

---

> Coming next session: REST vs WebSocket
