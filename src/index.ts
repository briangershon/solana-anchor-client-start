// Let's call the Solana Clicker Game program (running on devnet)
// https://github.com/briangershon/solana-clicker-game/

import * as dotenv from "dotenv";
dotenv.config();

import { Wallet, web3 } from "@project-serum/anchor";
import { retrieveAllGames } from "./clicker-game";

async function main() {
  const allGames = await retrieveAllGames({
    programAddress: new web3.PublicKey(
      "Edo4xMkzByZTUiFXWf7wRpTKC2mGvpZpCWcby7REpn3w"
    ),
    endpoint: process.env.SOLANA_PROVIDER_URL,

    // it's ok to generate a wallet each time since we're just
    // calling read-only (free) methods, no SOL needed

    wallet: new Wallet(web3.Keypair.generate()),
  });

  console.log(
    `First 3 Solana Clicker games:\n\n${JSON.stringify(
      allGames.slice(0, 3),
      null,
      2
    )}`
  );
}

main();
