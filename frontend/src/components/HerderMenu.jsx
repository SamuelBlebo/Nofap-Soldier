import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout.js";
import { useAuthContext } from "../hooks/useAuthContext";
import {
  createStyles,
  Header,
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../assets/logo.png";

const useStyles = createStyles((theme) => ({
  logo: {
    width: 60,
    marginRight: "auto",
    marginLeft: "50px",
    //

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      width: 60,
      marginRight: "auto",
      marginLeft: "20px",
    },
  },
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();

  // logout
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <Box>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Link to="/">
            <div className={classes.logo}>
              <Image src={Logo} alt="Nofap Soldier Logo" />
            </div>
          </Link>

          {/* <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link to={"/"} className={classes.link}>
              Home
            </Link>
            <Link to="/" className={classes.link}>
              Features
            </Link>

            <Link to="/" className={classes.link}>
              Learn
            </Link>
            <Link to="/" className={classes.link}>
              Academy
            </Link>
          </Group> */}

          <Group className={classes.hiddenMobile}>
            {user && (
              <>
                <span>Hello, {user.name}</span>
                <Button color="green.8" onClick={handleClick}>
                  Logout
                </Button>
              </>
            )}
            {!user && (
              <>
                <Button component={Link} to="/login" variant="default">
                  Log in
                </Button>
                <Button color="green.8" component={Link} to="/signup">
                  Signup
                </Button>
              </>
            )}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          {/* <Link to={"/"} className={classes.link}>
            Home
          </Link>
          <Link to="/" className={classes.link}>
            Features
          </Link>

          <Link to="/" className={classes.link}>
            Learn
          </Link>
          <Link to="/" className={classes.link}>
            Academy
          </Link> */}

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            {user && (
              <>
                <span>Hello, {user.name}</span>
                <Button color="green.8" onClick={handleClick}>
                  Logout
                </Button>
              </>
            )}
            {!user && (
              <>
                <Button component={Link} to="/login" variant="default">
                  Log in
                </Button>
                <Button color="green.8" component={Link} to="/signup">
                  Signup
                </Button>
              </>
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
