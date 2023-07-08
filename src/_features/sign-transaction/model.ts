import { TAbiFunction, TContract } from "@entities/contract";
import { prepareWriteContract } from "@wagmi/core";

// export const useGenerateTransaction = (
//   contract: TContract,
//   abiItem: TAbiFunction,
//   args: string[] | null
// ) => {
//   const res = usePrepareContractWrite({
//     address: contract.address,
//     abi: contract.abi,
//     //@ts-ignore somehow TS thinks functionName is of undefined type
//     functionName: abiItem.name,
//     args,
//   });

//   console.log(res);
//   return {
//     loading: res.isLoading,
//     data: res.data,
//   };
// };
