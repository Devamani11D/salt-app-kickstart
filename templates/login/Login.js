import React, { useState } from "react";
import {
  FlexLayout,
  StackLayout,
  Button,
  TextInput,
  FormField,
  Text,
  Link,
  Card,
} from "@salt-ds/core";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <FlexLayout
      justify="center"
      align="center"
      style={{
        height: "100vh",
        backgroundColor: "var(--salt-background-secondary)",
        padding: "var(--salt-spacing-500)",
      }}
    >
      <Card
        style={{
          padding: "var(--salt-spacing-600)",
          maxWidth: "400px",
          width: "100%",
          borderRadius: "var(--salt-border-radius-medium)",
          boxShadow: "var(--salt-shadow-2)",
        }}
      >
        <form onSubmit={handleSubmit}>
          <StackLayout gap={4}>
            {/* Title */}
            <Text
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Welcome Back
            </Text>

            {/* Username Field */}
            <FormField label="Username" required>
              <TextInput
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                style={{
                  padding: "var(--salt-spacing-300)",
                  borderRadius: "var(--salt-border-radius-medium)",
                }}
              />
            </FormField>

            {/* Password Field */}
            <FormField label="Password" required>
              <TextInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                style={{
                  padding: "var(--salt-spacing-300)",
                  borderRadius: "var(--salt-border-radius-medium)",
                }}
              />
            </FormField>

            {/* Login Button */}
            <Button
              type="submit"
              variant="cta"
              fullWidth
              style={{
                padding: "var(--salt-spacing-400)",
                fontWeight: "bold",
                fontSize: "16px",
                borderRadius: "var(--salt-border-radius-medium)",
              }}
            >
              Login
            </Button>

            {/* Links */}
            <FlexLayout
              justify="space-between"
              style={{ marginTop: "var(--salt-spacing-200)" }}
            >
              <Link
                href="/forgot-password"
                style={{ color: "var(--salt-color-primary)" }}
              >
                Forgot Password?
              </Link>
              <Link
                href="/create-account"
                style={{ color: "var(--salt-color-primary)" }}
              >
                Create Account
              </Link>
            </FlexLayout>
          </StackLayout>
        </form>
      </Card>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          form {
            max-width: 90%;
          }
          .salt-card {
            padding: var(--salt-spacing-400);
          }
          .salt-button {
            padding: var(--salt-spacing-300);
            font-size: 14px;
          }
          .salt-text {
            font-size: 24px;
          }
        }
      `}</style>
    </FlexLayout>
  );
};

export default Login;
