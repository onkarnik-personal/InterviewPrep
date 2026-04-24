# System Design Cheatsheet

## How the Web Works

### DNS hierarchy (cache order)
Browser → OS → Router → ISP resolver → Root NS → TLD NS → Authoritative NS

### Full request flow
```
DNS → TCP handshake → TLS handshake → HTTP request/response → parse HTML → fetch assets → React boots → API calls
```

### TCP 3-way handshake
SYN → SYN-ACK → ACK

### HTTPS = HTTP + TLS
- TLS = encryption layer (identity + session key negotiation)
- Session key derived in memory via Diffie-Hellman, never stored (Perfect Forward Secrecy)
- SSL certificate = server's public identity, verified by a CA

### TLS Session vs User Session
| | TLS Session | User Session |
|---|---|---|
| What | Encrypted pipe | Who is logged in |
| Configured by you? | No | Yes (express-session, JWT) |
| Lives in | Memory | Cookie / Redis / DB |

---

## Likely interview questions
1. What happens when you type a URL and hit Enter?
2. What is DNS and why does it have a cache hierarchy?
3. What's the difference between HTTP and HTTPS?
4. What is a TLS handshake and what does it establish?
5. What is Perfect Forward Secrecy?
6. What is the TCP 3-way handshake?
7. What's the difference between a TLS session and a user session?
