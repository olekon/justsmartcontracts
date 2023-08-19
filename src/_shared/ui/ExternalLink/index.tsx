import cx from "classnames";
import { TWithChildren, TWithClassname } from "@shared/lib/props";
import styles from "./ExternalLink.module.scss";

type TProps = TWithChildren &
  TWithClassname & {
    href: string;
  };

export const ExternalLink = ({ children, className, href }: TProps) => {
  return (
    <a
      className={cx(styles.root, className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
