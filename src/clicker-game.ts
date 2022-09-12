import { Wallet, Program, AnchorProvider, web3 } from "@project-serum/anchor";

// Type of object coming back from `program.account.game.all()` call
type ClickerGameObject = {
  publicKey: web3.PublicKey; // game's key
  account: {
    player: web3.PublicKey; // player's key
    clicks: number; // total clicks
  };
};

// friendly version of the results coming back from the call
type LeaderboardItem = {
  playerPublicKey: string;
  clicks: number;
};

export async function retrieveAllGames({
  programAddress,
  endpoint,
  wallet,
}: {
  programAddress: web3.PublicKey;
  endpoint: string | undefined;
  wallet: Wallet;
}): Promise<LeaderboardItem[]> {
  if (!endpoint) {
    throw new Error(
      "Missing Solana provider endpoint. Did you add in .env file?"
    );
  }

  const connection = new web3.Connection(endpoint, "processed");
  const provider = new AnchorProvider(connection, wallet, {
    preflightCommitment: "processed",
    commitment: "processed",
  });

  const idl = await Program.fetchIdl(programAddress, provider);
  if (idl === null) {
    throw new Error("Solana program missing IDL");
  }

  //   console.log("IDL", JSON.stringify(idl, null, 2));

  const program = new Program(idl, programAddress, provider);

  let games = (await program.account.game.all()) as ClickerGameObject[];

  // create nice looking list of results
  const gameResults = games.map((g) => {
    const item: LeaderboardItem = {
      playerPublicKey: g.account.player.toString(),
      clicks: g.account.clicks,
    };
    return item;
  });

  //   console.log("gameResults", gameResults);
  return gameResults;
}
