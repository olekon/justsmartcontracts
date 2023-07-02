import { TAbiFunction, TContract } from "@entities/contract";
import styles from "./ParamCalls.module.scss";
import { FunctionInputs } from "./FunctionInputs";

type TProps = {
  contract: TContract;
  abiItem: TAbiFunction;
};

export const ParamCall = ({ contract, abiItem }: TProps) => {
  const onSubmit = (values: unknown) => {
    console.log(values);
  };

  return (
    <div className={styles.root}>
      <FunctionInputs
        abiItem={abiItem}
        onSubmit={onSubmit}
        buttonText="Fetch"
      />
    </div>
  );
};
