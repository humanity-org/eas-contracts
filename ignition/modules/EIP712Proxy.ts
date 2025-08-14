import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import EASModule from "./EAS";

const EIP712ProxyModule = buildModule("EIP712Proxy", (m) => {
  const { eas } = m.useModule(EASModule);

  const eip712Proxy = m.contract("EIP712Proxy", [eas, "EAS Proxy"]);

  return { eip712Proxy };
});

export default EIP712ProxyModule;