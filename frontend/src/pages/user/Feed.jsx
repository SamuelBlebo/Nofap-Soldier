import React from "react";

import { NavbarMenu } from "../../components/user/NavbarMenu";

import { AppShell } from "@mantine/core";

export function Feed() {
  return (
    <>
      <AppShell padding="md" navbar={<NavbarMenu />}>
        <div>
          <h1>Feed</h1>
        </div>
      </AppShell>
    </>
  );
}
