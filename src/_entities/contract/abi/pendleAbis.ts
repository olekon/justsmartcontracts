import { abi as PendleERC20ABI } from "@pendle/core-v2/build/artifacts/contracts/core/erc20/PendleERC20.sol/PendleERC20.json";
import { abi as PendleMarketABI } from "@pendle/core-v2/build/artifacts/contracts/core/Market/PendleMarket.sol/PendleMarket.json";
import { abi as PendleMarketFactoryABI } from "@pendle/core-v2/build/artifacts/contracts/core/Market/PendleMarketFactory.sol/PendleMarketFactory.json";
import { abi as PendlePrincipalTokenABI } from "@pendle/core-v2/build/artifacts/contracts/core/YieldContracts/PendlePrincipalToken.sol/PendlePrincipalToken.json";
import { abi as SYBaseABI } from "@pendle/core-v2/build/artifacts/contracts/core/StandardizedYield/SYBase.sol/SYBase.json";
import { abi as VotingEscrowTokenBaseABI } from "@pendle/core-v2/build/artifacts/contracts/LiquidityMining/VotingEscrow/VotingEscrowTokenBase.sol/VotingEscrowTokenBase.json";
import { abi as VotingEscrowPendleMainchainABI } from "@pendle/core-v2/build/artifacts/contracts/LiquidityMining/VotingEscrow/VotingEscrowPendleMainchain.sol/VotingEscrowPendleMainchain.json";
import { abi as PendleVotingControllerUpgABI } from "@pendle/core-v2/build/artifacts/contracts/LiquidityMining/VotingController/PendleVotingControllerUpg.sol/PendleVotingControllerUpg.json";
import { abi as PendleYieldContractFactoryABI } from "@pendle/core-v2/build/artifacts/contracts/core/YieldContracts/PendleYieldContractFactory.sol/PendleYieldContractFactory.json";
import { abi as PendleYieldTokenABI } from "@pendle/core-v2/build/artifacts/contracts/core/YieldContracts/PendleYieldToken.sol/PendleYieldToken.json";
import { abi as RouterStaticABI } from "@pendle/core-v2/build/artifacts/contracts/interfaces/IPRouterStatic.sol/IPRouterStatic.json";
import { abi as IApeStakingABI } from "@pendle/core-v2/build/artifacts/contracts/interfaces/IApeStaking.sol/IApeStaking.json";

import { abi as PendleFeeDistributorV2ABI } from "@pendle/core-v2/build/artifacts/contracts/LiquidityMining/VeDistributor/PendleFeeDistributorV2.sol/PendleFeeDistributorV2.json";
import { abi as IWETH_ABI } from "@pendle/core-v2/build/artifacts/contracts/interfaces/IWETH.sol/IWETH.json";
import { abi as PendleRouterHelperABI } from "@pendle/core-v2/build/artifacts/contracts/router/PendleRouterHelper.sol/PendleRouterHelper.json";
import { abi as PendleRouterV3ABI } from "@pendle/core-v2/build/artifacts/contracts/interfaces/IPAllActionV3.sol/IPAllActionV3.json";
import { abi as PendleLimitRouterABI } from "@pendle/core-v2/build/artifacts/contracts/limit/PendleLimitRouter.sol/PendleLimitRouter.json";

import { abi as Multicall2Abi } from "@pendle/core-v2/build/artifacts/contracts/offchain-helpers/Multicall2.sol/Multicall2.json";
import { abi as PendleMulticallV1Abi } from "@pendle/core-v2/build/artifacts/contracts/offchain-helpers/PendleMulticallV1.sol/PendleMulticallV1.json";
import { abi as PendleMulticallV2Abi } from "@pendle/core-v2/build/artifacts/contracts/offchain-helpers/PendleMulticallV2.sol/PendleMulticallV2.json";
import { abi as PendleMerkleDistributorABI } from "@pendle/core-v2/build/artifacts/contracts/LiquidityMining/PendleMerkleDistributor.sol/PendleMerkleDistributor.json";

export const ABI_LIST = [
  // Router related
  { name: "PendleRouterV3", abi: PendleRouterV3ABI },
  { name: "PendleLimitRouter", abi: PendleLimitRouterABI },
  { name: "PendleFeeDistributorV2", abi: PendleFeeDistributorV2ABI },
  { name: "PendleRouterHelper", abi: PendleRouterHelperABI },
  { name: "RouterStatic", abi: RouterStaticABI },

  // token related
  { name: "PendleERC20", abi: PendleERC20ABI },
  { name: "PendleMarket", abi: PendleMarketABI },
  { name: "PendleMarketFactory", abi: PendleMarketFactoryABI },
  { name: "PendlePrincipalToken", abi: PendlePrincipalTokenABI },
  { name: "SYBase", abi: SYBaseABI },
  { name: "VotingEscrowTokenBase", abi: VotingEscrowTokenBaseABI },
  { name: "VotingEscrowPendleMainchain", abi: VotingEscrowPendleMainchainABI },
  { name: "PendleYieldContractFactory", abi: PendleYieldContractFactoryABI },
  { name: "PendleYieldToken", abi: PendleYieldTokenABI },
  { name: "IWETH", abi: IWETH_ABI },

  // multicall
  { name: "Multicall2", abi: Multicall2Abi },
  { name: "PendleMulticallV1", abi: PendleMulticallV1Abi },
  { name: "PendleMulticallV2", abi: PendleMulticallV2Abi },
  { name: "PendleMerkleDistributor", abi: PendleMerkleDistributorABI },
];
