import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogin } from "../hooks/useLogin";
import { HeaderMenu } from "../components/HerderMenu";

import {
  createStyles,
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Anchor,
  Stack,
} from "@mantine/core";
import { GoogleButton, TwitterButton } from "../SocialButtons/SocialButtons";

//styles
const useStyles = createStyles((theme) => ({
  container: {
    margin: "100px 750px",

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      margin: "80px 520px",
    },

    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      margin: "20px 320px",
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      margin: "50px 200px",
    },

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      margin: "50px 100px",
    },

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      margin: "50px 20px",
    },
  },

  error: {
    padding: "10px",
    background: "#ffefef",
    border: "1px solid #e7195a",
    color: "#e7195a",
    borderRadius: "4px",
    margin: "20px 0",
  },
}));

export function LoginForm() {
  const { classes } = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  if (user) {
    // user is authenticated
    return <Navigate to="/" />;
  }

  return (
    <>
      <HeaderMenu />
      <div>
        <Paper
          className={classes.container}
          radius="md"
          clear
          p="xl"
          withBorder
        >
          {error && <div className={classes.error}>{error}</div>}
          <Text size="lg" weight={500}>
            Welcome back, login with
          </Text>

          <Group grow mb="md" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>
            <TwitterButton radius="xl">Twitter</TwitterButton>
          </Group>

          <Divider
            label="Or continue with email"
            labelPosition="center"
            my="lg"
          />

          <form onSubmit={handleSubmit}>
            <Stack>
              <TextInput
                required
                label="Email"
                placeholder="hello@mantine.dev"
                onChange={(e) => setEmail(e.target.value)}
                value={email.toLowerCase()}
              />

              <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Stack>

            <Group position="apart" mt="xl">
              <Anchor component={Link} to="/signup" color="dimmed" size="xs">
                Don't have an account? Signup.
              </Anchor>
              <Button color="green.8" disabled={isLoading} type="submit">
                login
              </Button>
            </Group>
          </form>
        </Paper>
      </div>
    </>
  );
}
