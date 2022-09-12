# solana-anchor-client-start

This project demonstrates the code needed to call a live deployed Solana program built with the [Anchor](https://github.com/coral-xyz/anchor) framework.

There are many examples of how to use the Anchor framework when building your own program, though often you may want to call existing program on the Solana blockchain.

Here's a good place to start.

This project demonstrates:

- connecting to Solana network
- automatically downloading a program's interface (IDL)
- calling the program from a Node-based TypeScript program (though this same code will run in the front-end as well)

## What program are we going to call?

The Solana program we'll call is a basic Clicker game. The complete project is at <https://github.com/briangershon/solana-clicker-game/>.

This example code will download all the Clicker games played. Each game includes the player's publicKey and their score ("number of clicks").

```
First 3 Solana Clicker games:

[
  {
    "playerPublicKey": "8QzheFjSyu5Lk9a8u9sj9Nm2WDofm3ru28w4amBXokpC",
    "clicks": 0
  },
  {
    "playerPublicKey": "2CT3GsMffomxM132NEzWgDH7Efa7PtQR14HKudJohEmF",
    "clicks": 4
  },
  {
    "playerPublicKey": "GFC2jtciuWfgxZ7WoA9xwxkr6ZbXS1cPg3rWw36KMbqR",
    "clicks": 1
  }
]
```

## How to run

1. Copy `.env.sample` to `.env` and add a Solana Provider pointing to devnet. An example provider is Alchemy.com.

2. Run `npm start`.
