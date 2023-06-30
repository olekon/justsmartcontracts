import Blockies from "react-blockies";
import cn from "classnames";
import { TAddress } from "@shared/lib/web3";
import { TSize, TWithClassname, TWithSize } from "@shared/lib/props";

import styles from "./AddressIcon.module.scss";

type TProps = TWithClassname &
  TWithSize & {
    address: TAddress;
  };

const toIconSize = (size: TSize) => {
  if (size === "small") {
    return 6;
  }

  if (size === "large") {
    return 12;
  }

  return 8;
};

export const AddressIcon = ({
  address,
  size = "medium",
  className,
}: TProps) => {
  return (
    <Blockies
      seed={address}
      size={toIconSize(size)}
      className={cn(styles.root, className)}
    />
  );
};
