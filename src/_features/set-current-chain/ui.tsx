import { chainModel, ChainSelect } from "@entities/chain";

export const SetCurrentChain = () => {
  const { chain, update } = chainModel.useCurrentChain();

  return <ChainSelect value={chain} onChange={update} />;
};
