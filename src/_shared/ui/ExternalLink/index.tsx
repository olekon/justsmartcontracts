import { TWithChildren } from "@shared/lib/props";
import styles from "./ExternalLink.module.scss";

type TProps = TWithChildren & {
  href: string;
};

export const ExternalLink = ({ children, href }: TProps) => {
  return (
    <a
      className={styles.root}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
