import React from "react";
import { NavLink } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout.js";
import { useAuthContext } from "../../hooks/useAuthContext.js";

import { createStyles, Navbar, Group, Image } from "@mantine/core";
import {
  IconGauge,
  IconTank,
  IconNews,
  IconSettings,
  IconLogout,
  IconUserCircle,
  IconStars,
} from "@tabler/icons";
import Logo from "../../assets/logo.png";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&, &:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },

        "&": {
          backgroundColor: theme.fn.variant({
            variant: "light",
            color: "green.9",
          }).background,
          color: theme.fn.variant({ variant: "light", color: "dark.9" }).color,
          [`& .${icon}`]: {
            color: theme.fn.variant({
              variant: "light",
              color: "dark.9",
            }).color,
          },
        },
      },
    },
  };
});

export function NavbarMenu() {
  const { classes } = useStyles();

  // logout
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <>
      <Navbar className={classes.nav} width={{ base: 300 }} p="xs">
        <Navbar.Section grow>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.linkActive : classes.link
            }
            to="/"
          >
            <IconGauge className={classes.linkIcon} stroke={1.5} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.linkActive : classes.link
            }
            to="/battle"
          >
            <IconTank className={classes.linkIcon} stroke={1.5} />
            <span>Battle</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.linkActive : classes.link
            }
            to="/feed"
          >
            <IconNews className={classes.linkIcon} stroke={1.5} />
            <span>Feed</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.linkActive : classes.link
            }
            to="/rate-us"
          >
            <IconStars className={classes.linkIcon} stroke={1.5} />
            <span>Rate Us</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.linkActive : classes.link
            }
            to="/settings"
          >
            <IconSettings className={classes.linkIcon} stroke={1.5} />
            <span>Settings</span>
          </NavLink>
        </Navbar.Section>

        <Navbar.Section className={classes.footer}>
          {user && (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.linkActive : classes.link
                }
                to="/account"
              >
                <IconUserCircle className={classes.linkIcon} stroke={1.5} />
                <span>Hello, {user.name}</span>
              </NavLink>
              <NavLink className={classes.link} onClick={handleClick}>
                <IconLogout className={classes.linkIcon} stroke={1.5} />
                <span>Logout</span>
              </NavLink>
            </>
          )}
        </Navbar.Section>
      </Navbar>
    </>
  );
}
