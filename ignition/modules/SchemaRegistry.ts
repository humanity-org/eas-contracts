import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SchemaRegistryModule = buildModule("SchemaRegistry", (m) => {
  const schemaRegistry = m.contract("SchemaRegistry");

  return { schemaRegistry };
});

export default SchemaRegistryModule;