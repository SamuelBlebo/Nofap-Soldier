import React from "react";

import { NavbarMenu } from "../../components/user/NavbarMenu";

import { AppShell } from "@mantine/core";

export function RateUs() {
  return (
    <>
      <AppShell padding="md" navbar={<NavbarMenu />}>
        <div>
          <h1>RateUs</h1>
        </div>
      </AppShell>
    </>
  );
}
