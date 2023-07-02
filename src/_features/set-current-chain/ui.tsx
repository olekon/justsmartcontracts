import { chainModel, ChainSelect } from "@entities/chain";
import { useUpdateChain } from "./model";

export const SetCurrentChain = () => {
  const { chain } = chainModel.useCurrentChain();
  const update = useUpdateChain();

  return <ChainSelect value={chain} onChange={update} />;
};
