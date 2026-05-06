const hre = require("hardhat");

async function main() {
  console.log("Đang biên dịch và triển khai Voting Contract...");

  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = await Voting.deploy();

  if (typeof voting.waitForDeployment === 'function') {
    await voting.waitForDeployment();
  } else if (typeof voting.deployed === 'function') {
    await voting.deployed();
  }

  const address = voting.address || (typeof voting.getAddress === 'function' ? await voting.getAddress() : undefined);
  console.log(`Voting dApp đã được triển khai tại địa chỉ: ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});