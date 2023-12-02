import * as web3 from '@solana/web3.js'


// key -> connection -> instruction -> transaction
async function main(){

    const publicKey = new web3.PublicKey('5U9v4heCdp2xJYDBjVoPdCMyyv22aH3jwFU2CKsgCsUN');

    const url = web3.clusterApiUrl('devnet')

    const connection = new web3.Connection(url)

    const balance = await connection.getBalance(publicKey)

    console.log(balance)
}

main()