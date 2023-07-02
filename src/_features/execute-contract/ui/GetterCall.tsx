import { TAbiFunction, TContract } from "@entities/contract";
import styles from "./ParamCalls.module.scss";
import { FunctionInputs } from "./FunctionInputs";
import { useState } from "react";
import { FetchCallResult } from "./FetchCallResult";

type TProps = {
  contract: TContract;
  abiItem: TAbiFunction;
};

export const GetterCall = ({ contract, abiItem }: TProps) => {
  const [args, setArgs] = useState<string[] | null>(null);

  const onSubmit = (values: string[]) => {
    console.log("setting values", values);
    setArgs(values);
  };

  return (
    <div className={styles.root}>
      <div>
        <FunctionInputs
          abiItem={abiItem}
          onSubmit={onSubmit}
          buttonText="Fetch"
        />
      </div>

      {args && (
        <div>
          <FetchCallResult contract={contract} abiItem={abiItem} args={args} />
        </div>
      )}
    </div>
  );
};
