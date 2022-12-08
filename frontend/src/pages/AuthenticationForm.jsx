import { useToggle, upperFirst } from "@mantine/hooks";
import { useState } from "react";

import { useSignup } from "../hooks/useSignup";
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
    margin: "100px 500px",

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

export function AuthenticationForm(props: PaperProps) {
  const { classes } = useStyles();
  const [type, toggle] = useToggle(["login", "register"]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(name, email, password);
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
          Welcome to Nofap Solder, {type} with
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
            {type === "register" && (
              <TextInput
                label="Name"
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            )}

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
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button disabled={isLoading} type="submit">
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
        {error && <div className={classes.error}>{error}</div>}
      </Paper>
    </div>
  );
}
