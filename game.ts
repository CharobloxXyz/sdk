import { joinMatch } from "./api";

export async function startGame(wallet:any){

 console.log("Joining match...");

 const match = await joinMatch(wallet);

 console.log("Match ID:", match);

}
