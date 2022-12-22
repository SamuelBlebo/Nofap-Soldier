import React, { useState } from "react";
import {
  AppShell,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  createStyles,
  Navbar,
  Group,
  Image,
} from "@mantine/core";
import Logo from "../../assets/logo.png";

import { NavbarMenu } from "../../components/user/NavbarMenu";

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    logo: {
      width: 60,
      marginRight: "auto",
      //

      [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
        width: 60,
        marginRight: "auto",
      },
    },

    appName: {
      fontSize: theme.fontSizes.md,
      fontWeight: 800,
      textTransform: "uppercase",
    },

    //other styles
    root: {
      margin: "20px 30px",

      [`@media (max-width: ${theme.breakpoints.md}px)`]: {
        marginBottom: 35,
        marginLeft: 120,
        marginRight: 80,
        padding: theme.spacing.xl,
      },

      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        marginBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        padding: theme.spacing.sm * 2,
      },
    },

    iconBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      paddingTop: 25,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 10,
      height: "50vh",
      [`@media (max-width: ${theme.breakpoints.md}px)`]: {
        paddingLeft: 50,
        paddingRight: 50,
      },
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
      },
    },
  };
});

export function Feed() {
  const { classes } = useStyles();

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <NavbarMenu />
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Group className={classes.header} position="apart">
              <div className={classes.logo}>
                <Image src={Logo} alt="Nofap Soldier Logo" />
              </div>
              <span className={classes.appName}>Nofap Soldier</span>
            </Group>
          </div>
        </Header>
      }
    >
      <div className={classes.root}>
        <h1>Feed</h1>
      </div>
    </AppShell>
  );
}
