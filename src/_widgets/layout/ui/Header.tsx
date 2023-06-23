import { Routes } from "@shared/config/routes";
import { Navigation } from "./Navigation";
import { SetCurrentChain } from "@features/set-current-chain";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Navigation pages={Routes} />
        <SetCurrentChain />
      </div>
    </div>
  );
};
