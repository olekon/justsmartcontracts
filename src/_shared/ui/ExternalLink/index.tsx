import cx from "classnames";
import { TWithClassname } from "@shared/lib/props";
import styles from "./ExternalLink.module.scss";
import { truncateAddress } from "@entities/contract/helper/address";

type TProps = TWithClassname & {
  href: string;
  children: string;
};

export const ExternalLink = ({ children, className, href }: TProps) => {
  return (
    <a
      className={cx(styles.root, className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {truncateAddress(children)}
    </a>
  );
};
