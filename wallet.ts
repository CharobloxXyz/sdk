export async function connectWallet(){

 const provider = (window as any).solana;

 await provider.connect();

 return provider.publicKey.toString();

}
