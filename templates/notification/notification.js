"use client";

import { useState, useEffect } from "react";
import { Button } from "@salt-ds/core";

// Toast component for displaying individual toasts
const Toast = ({ message, type, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const toastStyle = {
    background:
      type === "success"
        ? "rgba(0, 128, 0, 0.8)" // Green for success
        : type === "error"
        ? "rgba(255, 0, 0, 0.8)" // Red for error
        : "rgba(255, 165, 0, 0.8)", // Orange for warning
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, opacity 0.3s ease",
    zIndex: 1000,
    marginBottom: "10px", // Space between toasts
    opacity: 1, // Keep opacity at 1
  };

  return (
    <div style={toastStyle}>
      {message}
      <Button
        onClick={onClose}
        variant="cta"
        style={{
          marginLeft: "10px",
          background: "rgba(255, 0, 0, 0.6)",
          color: "#fff",
        }}
      >
        Close
      </Button>
    </div>
  );
};

// ToastContainer for managing multiple toasts
const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type) => {
    setToasts((prevToasts) => [...prevToasts, { message, type }]);
  };

  // Functions to show different types of toasts
  const showSuccessToast = () =>
    addToast("Success! Your action was successful.", "success");
  const showErrorToast = () =>
    addToast("Error! Something went wrong.", "error");
  const showWarningToast = () =>
    addToast("Warning! Please check your input.", "warning");

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {/* Centered Button Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Button
          onClick={showSuccessToast}
          variant="success"
          style={{ margin: "5px" }}
        >
          Show Success Toast
        </Button>
        <Button
          onClick={showErrorToast}
          variant="danger"
          style={{ margin: "5px" }}
        >
          Show Error Toast
        </Button>
        <Button
          onClick={showWarningToast}
          variant="warning"
          style={{ margin: "5px" }}
        >
          Show Warning Toast
        </Button>
      </div>
      {/* Render toasts in a dynamic stacking manner */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        {toasts.map((toast, index) => (
          <Toast
            key={index}
            message={toast.message}
            type={toast.type}
            onClose={() =>
              setToasts((prevToasts) =>
                prevToasts.filter((_, i) => i !== index)
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ToastContainer;
