import React from "react";

import { NavbarMenu } from "../../components/user/NavbarMenu";

import { AppShell } from "@mantine/core";

export function Battle() {
  return (
    <>
      <AppShell padding="md" navbar={<NavbarMenu />}>
        <div>
          <h1>Battle</h1>
        </div>
      </AppShell>
    </>
  );
}
