import React from "react";

import { createStyles, AppShell, Grid } from "@mantine/core";

//Components
import { NavbarMenu } from "../../components/user/NavbarMenu";
import { Timer } from "../../components/user/Timer";

const useStyles = createStyles((theme) => ({
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
    backgroundColor: "#F8F9FA",
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
}));

export function Dashboard() {
  const { classes } = useStyles();
  return (
    <>
      <AppShell padding="md" navbar={<NavbarMenu />}>
        <div>
          <h1>Dashboard</h1>
        </div>
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
    </>
  );
}
