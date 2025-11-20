import { network } from "hardhat";

async function main() {
    const { viem, networkName } = await network.connect();
    // const client = await viem.getPublicClient();
    
    console.log(`Deploying Custom Token to ${networkName}`);

    const name = "USD Coin";
    const symbol = "USDC";
    const decimals = 6;
    const initialSupply = 10000000000;
    
    const token = await viem.deployContract("CustomToken", [
        name,
        symbol,
        decimals,
        initialSupply
    ]);

    console.log("USDC deployed to:", token.address);
}

main().catch((error) => {
    console.error(error);

    process.exit(1);
});
