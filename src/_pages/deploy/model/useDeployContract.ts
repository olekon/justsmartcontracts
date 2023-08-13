import { useCallback, useState } from "react";
import { TAbiItem, contractModel } from "@entities/contract";
import { THexString } from "@shared/lib/web3";

export const useDeployContractInputs = () => {
  const [abi, setAbi] = useState<TAbiItem[]>([]);
  const [byteCode, setByteCode] = useState<THexString>("0x0");

  const ctor = contractModel.useContractConstructor(abi);

  const load = useCallback((abi: TAbiItem[], byteCode: THexString) => {
    setAbi(abi);
    setByteCode(byteCode);
  }, []);

  return {
    ctor,
    byteCode,
    load,
  };
};
