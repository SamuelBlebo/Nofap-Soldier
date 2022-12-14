import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      "&, &:hover": {
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
  };
});

const data = [
  { link: "/", label: "Dashboard", icon: IconGauge },
  { link: "/battle", label: "Battle", icon: IconTank },
  { link: "/feed", label: "Feed", icon: IconNews },
  { link: "/rate-us", label: "Rate us", icon: IconStars },
  { link: "/settings", label: "Settings", icon: IconSettings },
];

export function NavbarMenu() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Dashboard");

  // logout
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      to={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <>
      <Navbar height={600} width={{ sm: 300 }} p="md">
        <Navbar.Section grow>
          <Group className={classes.header} position="apart">
            <div className={classes.logo}>
              <Image src={Logo} alt="Nofap Soldier Logo" />
            </div>
            <span className={classes.appName}>Nofap Soldier</span>
          </Group>
          {links}
        </Navbar.Section>

        <Navbar.Section className={classes.footer}>
          {user && (
            <>
              <Link
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                <IconUserCircle className={classes.linkIcon} stroke={1.5} />
                <span>Hello, {user.name}</span>
              </Link>
              <Link className={classes.link} onClick={handleClick}>
                <IconLogout className={classes.linkIcon} stroke={1.5} />
                <span>Logout</span>
              </Link>
            </>
          )}
        </Navbar.Section>
      </Navbar>
    </>
  );
}
