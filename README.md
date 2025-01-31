# Candour Session Library

---

## Installation

Install the library using npm, yarn or bun:

```bash
npm install @candourorg/session
```

```bash
yarn add @candourorg/session
```

```bash
bun add @candourorg/session
```

# Examples of How to Use the session library
once it's instantiated, it starts the server

```
const sessionServer = new SessionServer({
  redisUrl: REDIS_URL,
  redisToken: REDIS_TOKEN,
  port?: 3976, // defaults to 3000
  path?: '/user-session' // defaults to '/session'
});

```