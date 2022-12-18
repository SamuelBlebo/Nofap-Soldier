import React, { useState } from "react";
import {
  AppShell,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  createStyles,
  Navbar,
  Group,
  Image,
  Grid,
} from "@mantine/core";
import Logo from "../../assets/logo.png";

import { NavbarMenu } from "../../components/user/NavbarMenu";
import { Timer } from "../../components/user/Timer";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
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
        margin: "0px 10px",
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
        padding: "0px 10",
      },
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        padding: "20px 30px",
      },
    },
  };
});

export function Dashboard() {
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
        <Header height={{ base: 70, md: 70 }} p="md">
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
        <Grid gutter="md">
          <Grid.Col md={4} lg={4}>
            <div className={classes.iconBox}>
              <Timer />
            </div>
          </Grid.Col>
          <Grid.Col md={4} lg={8}>
            <div className={classes.iconBox}></div>
          </Grid.Col>
          <Grid.Col md={4} lg={7}>
            <div className={classes.iconBox}></div>
          </Grid.Col>
          <Grid.Col md={4} lg={5}>
            <div className={classes.iconBox}></div>
          </Grid.Col>
        </Grid>
      </div>
    </AppShell>
  );
}
