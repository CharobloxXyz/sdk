import { connectWallet } from "./wallet";
import { startGame } from "./game";

async function main() {

 const wallet = await connectWallet();

 console.log("Connected:", wallet);

 await startGame(wallet);

}

main();
