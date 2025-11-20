import { network } from "hardhat";

async function main() {
    const { viem, networkName } = await network.connect();

    console.log("Deploying mock price oracle to ", networkName);

    const contract = await viem.deployContract("MockPriceOracle");

    console.log("Mock Price Oracle deployed to: ", contract.address);
}

main().catch((error) => {
    console.error(error);

    process.exit(1);
});
