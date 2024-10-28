"use client";

import { useState } from "react";
import { Button } from "@salt-ds/core";

// Accordion Item component
const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div
    style={{
      border: "1px solid rgba(0, 0, 0, 0.15)",
      borderRadius: "8px",
      marginBottom: "12px",
      backgroundColor: isOpen ? "rgba(245, 245, 245, 0.8)" : "transparent",
      transition: "background-color 0.3s ease, transform 0.2s ease",
      transform: isOpen ? "scale(1.02)" : "scale(1)",
      width: "100%",
    }}
  >
    <Button
      onClick={onClick}
      variant="cta"
      style={{
        width: "100%",
        textAlign: "left",
        padding: "18px 18px",
        cursor: "pointer",
        backgroundColor: "transparent",
        color: "#222",
        fontSize: "16px",
        fontWeight: "500",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "none",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <span>{title}</span>
      <span style={{ fontSize: "20px" }}>{isOpen ? "\u2212" : "\u002B"}</span>
    </Button>
    {isOpen && (
      <div
        style={{
          padding: "14px 18px",
          color: "#444",
          fontSize: "14px",
          borderTop: "1px solid rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fafafa",
          borderRadius: "0 0 8px 8px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {content}
      </div>
    )}
  </div>
);

// Main Accordion component
const AccordionComponent = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle an accordion item
  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div
      style={{
        width: "80vw",
        maxWidth: "1000px",
        margin: "30px auto",
        marginTop: "5%",
        padding: "20px",
        border: "1px solid rgba(0, 0, 0, 0.3)",
        borderRadius: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

// Sample Accordion data
const accordionData = [
  {
    title: "Introduction to Salt Design",
    content:
      "Learn about Salt Design's modern approach to building accessible, customizable components.",
  },
  {
    title: "Building with Salt Design",
    content:
      "Get started with Salt Design and learn how to incorporate its components into your projects.",
  },
  {
    title: "Customization & Theming",
    content:
      "Easily customize and theme components with Salt Design to match your brand's style.",
  },
  {
    title: "Performance Optimization",
    content:
      "Optimize your application performance with lightweight and flexible components.",
  },
];

const Accordion = () => {
  return <AccordionComponent items={accordionData} />;
};

export default Accordion;
