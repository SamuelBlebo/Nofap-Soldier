import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

import {
  createStyles,
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Anchor,
  Stack,
} from "@mantine/core";
import { GoogleButton, TwitterButton } from "../SocialButtons/SocialButtons";

//styles
const useStyles = createStyles((theme) => ({
  container: {
    margin: "100px 480px",

    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      margin: "20px 200px",
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      margin: "20px 200px",
    },

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      margin: "50px 50px",
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

export function LoginForm(props: PaperProps) {
  const { classes } = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div>
      <Paper
        className={classes.container}
        radius="md"
        clear
        p="xl"
        withBorder
        {...props}
      >
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
              value={email}
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
            <Button disabled={isLoading} type="submit">
              login
            </Button>
          </Group>
        </form>
        {error && <div className={classes.error}>{error}</div>}
      </Paper>
    </div>
  );
}
