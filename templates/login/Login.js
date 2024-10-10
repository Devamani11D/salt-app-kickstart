"use client";

import React, { useState } from "react";
import {
  FlexLayout,
  StackLayout,
  Button,
  Input,
  FormField,
  Text,
  Link,
  Card,
  Divider,
  Checkbox,
} from "@salt-ds/core";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <FlexLayout
      justify="center"
      align="center"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, var(--salt-color-blue-10) 0%, var(--salt-color-purple-20) 100%)",
        padding: "2rem",
      }}
    >
      <Card
        style={{
          padding: 0,
          maxWidth: "400px",
          width: "100%",
          borderRadius: "12px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          background: "white",
          overflow: "hidden",
        }}
      >
        <StackLayout gap={0}>
          <div
            style={{
              background:
                "linear-gradient(45deg, var(--salt-color-blue-500), var(--salt-color-purple-500))",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <Text
              styleAs="h1"
              style={{
                fontSize: "1.75rem",
                fontWeight: "bold",
                color: "#fff",
                marginBottom: "0.5rem",
              }}
            >
              Welcome Back
            </Text>
            <Text
              styleAs="subtitle"
              style={{
                fontSize: "1rem",
                color: "#f0f0f0",
                opacity: 0.9,
              }}
            >
              Please sign in to continue
            </Text>
          </div>

          <form onSubmit={handleSubmit} style={{ padding: "1.5rem" }}>
            <StackLayout gap={4}>
              {/* Username Field */}
              <FormField label="Username" labelPlacement="top" required>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  aria-label="Username"
                  style={{
                    width: "100%",
                    padding: "0.35rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#6a5acd")}
                  onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                />
              </FormField>

              {/* Password Field */}
              <FormField label="Password" labelPlacement="top" required>
                <div style={{ position: "relative" }}>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    aria-label="Password"
                    style={{
                      width: "100%",
                      padding: "0.35rem",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      transition: "border-color 0.3s ease",
                      paddingRight: "3rem", // Space for show/hide button
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#6a5acd")}
                    onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                  />
                  <Button
                    variant="secondary"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      padding: "0.25rem 0.5rem",
                      fontSize: "0.875rem",
                      color: "#6a5acd",
                    }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </div>
              </FormField>

              {/* Remember Me Checkbox */}
              <FlexLayout justify="space-between" align="center">
                <Checkbox
                  label="Remember me"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <Link
                  href="/forgot-password"
                  style={{
                    color: "#6a5acd",
                    fontSize: "0.875rem",
                  }}
                >
                  Forgot Password?
                </Link>
              </FlexLayout>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="cta"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(45deg, var(--salt-color-blue-500), var(--salt-color-purple-500))",
                  color: "#fff",
                  transition: "background 0.3s ease",
                }}
              >
                Sign In
              </Button>

              {/* Divider */}
              <Divider style={{ margin: "1rem 0" }} />

              {/* Sign Up Link */}
              <Text
                styleAs="body"
                style={{
                  textAlign: "center",
                  fontSize: "0.875rem",
                  color: "#666",
                }}
              >
                Don't have an account?{" "}
                <Link
                  href="/create-account"
                  style={{
                    color: "#6a5acd",
                    fontWeight: "600",
                  }}
                >
                  Create Account
                </Link>
              </Text>
            </StackLayout>
          </form>
        </StackLayout>
      </Card>

      <style jsx>{`
        @media (max-width: 768px) {
          .salt-card {
            max-width: 90%;
          }
          .salt-button {
            font-size: 0.875rem;
            padding: 0.5rem;
          }
        }
        .salt-input:focus,
        .salt-input:hover {
          border-color: #6a5acd;
        }
        .salt-button:hover {
          background: linear-gradient(45deg, #4b6cb7, #6a5acd);
        }
        .salt-link:hover {
          color: #4b6cb7;
        }
      `}</style>
    </FlexLayout>
  );
};

export default Login;
