import ethNode from "./eth";
import goerliNode from "./goerli";
import kovanNode from "./kov";
import ropstenNode from "./rop";
import rinkebyNode from "./rin";
import etcNode from "./etc";
import maticNode from "./matic";
import bscNode from "./bsc";
import moonbeamNode from "./moonbeam";
import moonriverNode from "./moonriver";
import karuraEvmNode from "./karura";
import shidenEvmNode from "./sdn";
import astarEvmNode from "./astr";

export default {
  goerli: goerliNode,
  ethereum: ethNode,
  kovan: kovanNode,
  ropsten: ropstenNode,
  rinkeby: rinkebyNode,
  etc: etcNode,
  matic: maticNode,
  bsc: bscNode,
  moonbeam: moonbeamNode,
  moonriver: moonriverNode,
  karuraEvm: karuraEvmNode,
  shidenEvm: shidenEvmNode,
  astarEvm: astarEvmNode,
};
