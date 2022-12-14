import React from "react";

import { NavbarMenu } from "../../components/user/NavbarMenu";

import { AppShell } from "@mantine/core";

export function Settings() {
  return (
    <>
      <AppShell padding="md" navbar={<NavbarMenu />}>
        <div>
          <h1>Settings</h1>
        </div>
      </AppShell>
    </>
  );
}
