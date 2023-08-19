import { useMemo } from "react";
import { useContracts } from "./store";

export const useCurrentContract = () => {
  const { currentId, contracts } = useContracts();

  return useMemo(
    () => contracts.find((item) => item.id === currentId),
    [contracts, currentId]
  );
};
