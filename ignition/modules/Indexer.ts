import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import EASModule from "./EAS";

const IndexerModule = buildModule("Indexer", (m) => {
  const { eas } = m.useModule(EASModule);

  const indexer = m.contract("Indexer", [eas]);

  return { indexer };
});

export default IndexerModule;