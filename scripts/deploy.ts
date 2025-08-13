import { ethers } from 'hardhat';

async function main() {
  console.log('Starting deployment to humanityArbitrum...');

  // Deploy SchemaRegistry first
  console.log('Deploying SchemaRegistry...');
  const SchemaRegistry = await ethers.getContractFactory('SchemaRegistry');
  const schemaRegistry = await SchemaRegistry.deploy();
  await schemaRegistry.waitForDeployment();
  const schemaRegistryAddress = await schemaRegistry.getAddress();
  console.log('SchemaRegistry deployed to:', schemaRegistryAddress);

  // Deploy EAS with SchemaRegistry address
  console.log('Deploying EAS...');
  const EAS = await ethers.getContractFactory('EAS');
  const eas = await EAS.deploy(schemaRegistryAddress);
  await eas.waitForDeployment();
  const easAddress = await eas.getAddress();
  console.log('EAS deployed to:', easAddress);


  console.log('\nDeployment completed!');
  console.log('===================');
  console.log('SchemaRegistry:', schemaRegistryAddress);
  console.log('EAS:', easAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});