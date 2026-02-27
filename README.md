# CHAROBLOX

**CHAROBLOX** is a strategic Solana-based battle royale where players compete to survive a mysterious curse and become the last standing warrior.

Built on Solana, CHAROBLOX combines strategy, survival mechanics, and on-chain assets into a fast and competitive blockchain game.

---

## Overview

CHAROBLOX introduces a new type of battle royale experience powered by blockchain technology.

Players must:

- Survive the curse
- Collect resources
- Upgrade abilities
- Eliminate opponents
- Become the last survivor

The game integrates on-chain mechanics for ownership, rewards, and competitive gameplay.

---

## Features

- ⚔️ Strategic Battle Royale Mechanics
- ⚡ Solana Fast Transactions
- 🔐 On-chain Assets
- 🎮 Skill-Based Gameplay
- 🧠 Strategic Decision Making
- 🪙 Tokenized Rewards
- 🧩 Modular Game Engine

---

## Architecture

```
CHAROBLOX
│
├── client/
│   ├── ui
│   ├── game-engine
│   └── wallet
│
├── program/
│   ├── instructions
│   ├── state
│   └── utils
│
├── server/
│   ├── matchmaking
│   ├── sessions
│   └── leaderboard
│
└── assets/
    ├── characters
    ├── maps
    └── items
```

---

## Tech Stack

- Solana
- Rust (Smart Contracts)
- Typescript
- Node.js
- Web3.js

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourname/charoblox.git
```

Enter directory:

```bash
cd charoblox
```

Install dependencies:

```bash
npm install
```

---

## Running Locally

Start local validator:

```bash
solana-test-validator
```

Run backend:

```bash
npm run server
```

Run client:

```bash
npm run dev
```

---

## Solana Program

Program handles:

- Player registration
- Match creation
- Rewards distribution
- Game state tracking

Example interaction:

```ts
import { Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com");

async function getStatus(account) {
  const info = await connection.getAccountInfo(
    new PublicKey(account)
  );
  console.log(info);
}
```

---

## Gameplay Loop

1. Connect wallet
2. Join match
3. Spawn on map
4. Avoid the curse
5. Collect upgrades
6. Fight opponents
7. Survive

---

## Token Utility

CHAROBLOX tokens can be used for:

- Entry fees
- Upgrades
- Cosmetics
- Rewards
- Governance

---

## Roadmap

### Phase 1
- Core gameplay
- Solana integration
- Basic combat

### Phase 2
- NFT characters
- Marketplace
- Ranking system

### Phase 3
- Competitive tournaments
- Advanced AI enemies
- Clan system

### Phase 4
- Mobile support
- Cross-chain assets
- Esports integration

---

## Security

- Multi-signature treasury
- On-chain verification
- Secure transactions

---

## Project Structure

```
charoblox/
 ├── client/
 │    ├── index.ts
 │    ├── game.ts
 │    └── wallet.ts
 │
 ├── program/
 │    ├── lib.rs
 │    ├── player.rs
 │    └── match.rs
 │
 ├── server/
 │    ├── server.js
 │    ├── matchmaking.js
 │    └── leaderboard.js
 │
 ├── assets/
 │    ├── map.json
 │    └── characters.json
 │
 ├── package.json
 └── README.md
```

---

## Vision

CHAROBLOX aims to create a new generation of competitive blockchain games where strategy and survival matter more than speculation.

---

## License

MIT License

---

## Contributing

Pull requests are welcome.

For major changes, open an issue first to discuss what you would like to change.

---

## Community

Twitter: https://x.com/CharobloxXyz

---

**CHAROBLOX**

**Survive the curse. Be the last standing.**
