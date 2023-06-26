"use client";

import { ReactNode } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

import styles from "./Layout.module.scss";

type TProps = {
  children: ReactNode;
};

export const Layout = ({ children }: TProps) => {
  return (
    <main className={styles.body}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </main>
  );
};
