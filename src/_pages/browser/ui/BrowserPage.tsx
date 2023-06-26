import { ContractsList } from "@widgets/contracts-list";
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
      <h1>Contracts browser</h1>
    </WithSidebar>
  );
};
