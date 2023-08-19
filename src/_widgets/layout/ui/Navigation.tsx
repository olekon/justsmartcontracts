type TPageLink = {
  path: string;
  title: string;
};

type TProps = {
  pages: TPageLink[];
};

import Link from "next/link";
import styles from "./Navigation.module.scss";

export const Navigation = ({ pages }: TProps) => {
  return (
    <div className={styles.root}>
      {pages.map(({ path, title }) => (
        <Link key={path} href={path}>
          {title}
        </Link>
      ))}
    </div>
  );
};
