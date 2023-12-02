import * as web3 from '@solana/web3.js'
import dotenv from 'dotenv'
import base58 from 'bs58'
dotenv.config({ path: '../.env'})
async function main(){
    const privateKey = process.env.PRIVATE_KEY
    const decoded = base58.decode(privateKey as any);
    const userKeypair = web3.Keypair.fromSecretKey(decoded)
    const url = web3.clusterApiUrl('devnet')
    const connection = new web3.Connection(url)
    const publicKeyTo = new web3.PublicKey('9fyYcwA7msMLZv8NLcm9Fex1jvGBnzkvTFUZfrmf3bzr')
    const instruction = web3.SystemProgram.transfer({
        fromPubkey: userKeypair.publicKey,
        toPubkey: publicKeyTo,
        lamports: 1500000000
    })
    const transaction = new web3.Transaction();
    transaction.add(instruction)
    const signature = await web3.sendAndConfirmTransaction(connection,transaction,[userKeypair])
    console.log("txSig: ", signature)
}
main()