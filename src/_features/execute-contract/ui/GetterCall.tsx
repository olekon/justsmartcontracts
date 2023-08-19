import { Card } from "antd";
import { useState } from "react";
import { FunctionInputs, TAbiFunction, TContract } from "@entities/contract";
import { FetchCallResult } from "./FetchCallResult";

import styles from "./ParamCalls.module.scss";

type TProps = {
  contract: TContract;
  abiItem: TAbiFunction;
};

export const GetterCall = ({ contract, abiItem }: TProps) => {
  const [args, setArgs] = useState<string[] | null>(null);

  return (
    <div className={styles.root}>
      <div className={styles.inputs}>
        <FunctionInputs
          abiItem={abiItem}
          onSubmit={setArgs}
          buttonText="Fetch"
        />
      </div>

      {args && (
        <div className={styles.results}>
          <Card title="Result" size="small">
            <FetchCallResult
              contract={contract}
              abiItem={abiItem}
              args={args}
            />
          </Card>
        </div>
      )}
    </div>
  );
};
