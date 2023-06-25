"use client";

import { Layout } from "antd";
import { ContractsList } from "@widgets/contracts-list";

export const BrowserPage = () => {
  return (
    <main>
      <Layout>
        <Layout.Sider>
          <ContractsList />
        </Layout.Sider>
        <Layout.Content>
          <h1>Contracts browser</h1>
        </Layout.Content>
      </Layout>
    </main>
  );
};
