import { useContracts } from "./store";

export const useCurrentContract = () => {
  const { current } = useContracts();
  // TODO add function groups: no-arg calls, arg calls, transactions, events
  return current;
};
