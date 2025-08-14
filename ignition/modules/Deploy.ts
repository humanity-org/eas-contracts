import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import SchemaRegistryModule from "./SchemaRegistry";
import EASModule from "./EAS";
import IndexerModule from "./Indexer";
import EIP712ProxyModule from "./EIP712Proxy";

const DeployModule = buildModule("Deploy", (m) => {
  const { schemaRegistry } = m.useModule(SchemaRegistryModule);
  const { eas } = m.useModule(EASModule);
  const { indexer } = m.useModule(IndexerModule);
  const { eip712Proxy } = m.useModule(EIP712ProxyModule);

  return {
    schemaRegistry,
    eas,
    indexer,
    eip712Proxy,
  };
});

export default DeployModule;