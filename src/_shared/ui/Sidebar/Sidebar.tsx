import { ReactNode } from "react";
import { TWithChildren, TWithClassname } from "@shared/lib/props";
import styles from "./Sidebar.module.scss";

type TProps = TWithChildren & {
  sidebar: ReactNode;
};

export const Sidebar = ({
  children,
  className,
}: TWithChildren & TWithClassname) => {
  return <aside className={className}>{children}</aside>;
};

export const WithSidebar = ({ children, sidebar }: TProps) => {
  return (
    <section className={styles.container}>
      {sidebar}
      {children}
    </section>
  );
};
