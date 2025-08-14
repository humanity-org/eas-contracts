import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import SchemaRegistryModule from "./SchemaRegistry";

const EASModule = buildModule("EAS", (m) => {
  const { schemaRegistry } = m.useModule(SchemaRegistryModule);

  const eas = m.contract("EAS", [schemaRegistry]);

  return { eas, schemaRegistry };
});

export default EASModule;