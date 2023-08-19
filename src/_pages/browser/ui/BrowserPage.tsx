import { ContractsList } from "@widgets/contracts-list";
import { ContractBrowser } from "@widgets/contract-browser";
import { Sidebar, WithSidebar } from "@shared/ui/Sidebar";

import styles from "./BrowserPage.module.scss";

export const BrowserPage = () => {
  return (
    <WithSidebar
      sidebar={
        <Sidebar className={styles.sidebar}>
          <ContractsList />
        </Sidebar>
      }
    >
      <div className={styles.content}>
        <ContractBrowser />
      </div>
    </WithSidebar>
  );
};
