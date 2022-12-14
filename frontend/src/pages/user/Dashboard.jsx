import React from "react";

import { NavbarMenu } from "../../components/user/NavbarMenu";

import { AppShell } from "@mantine/core";

export function Dashboard() {
  return (
    <>
      <AppShell padding="md" navbar={<NavbarMenu />}>
        <div>
          <h1>Dashboard</h1>
        </div>
      </AppShell>
    </>
  );
}