"use client";

import { useState } from "react";

// Calendar component
const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to get the days in the current month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get the first day of the month
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Function to handle month change
  const changeMonth = (offset) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + offset
    );
    setCurrentDate(newDate);
  };

  // Get month, year, and today's date
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();

  // Get days and first day of the current month
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  // Days of the week
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Create an array to display the days
  const daysArray = Array.from({ length: firstDayOfMonth }, () => "").concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  // Function to handle day click
  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <div
      style={{
        width: "60vw",
        maxWidth: "600px",
        margin: "20px auto",
        marginTop: "5%",
        padding: "15px",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        background: "linear-gradient(135deg, var(--salt-color-blue-10), var(--salt-color-purple-20))",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        color: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <button onClick={() => changeMonth(-1)} style={buttonStyle}>
          &lt;
        </button>
        <h2 style={{ margin: 0, fontSize: "18px" }}>
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <button onClick={() => changeMonth(1)} style={buttonStyle}>
          &gt;
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "8px",
          textAlign: "center",
        }}
      >
        {daysOfWeek.map((day, index) => (
          <div key={index} style={{ fontWeight: "bold", color: "black" }}>
            {day}
          </div>
        ))}
        {daysArray.map((day, index) => {
          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();
          const isSelected = day === selectedDate;

          return (
            <div
              key={index}
              onClick={() => day && handleDayClick(day)}
              style={{
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: isToday
                  ? "#ffd700"
                  : isSelected
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(255, 255, 255, 0.2)",
                color: isToday ? "#333" : "#333",
                cursor: day ? "pointer" : "default",
                boxShadow: day ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
                transition: "background-color 0.3s, transform 0.2s",
                transform: day ? "scale(1)" : "none",
              }}
              onMouseEnter={(e) =>
                day &&
                (e.currentTarget.style.backgroundColor = isToday
                  ? "#ffd700"
                  : "rgba(255, 255, 255, 0.1)")
              }
              onMouseLeave={(e) =>
                day &&
                (e.currentTarget.style.backgroundColor = isToday
                  ? "#ffd700"
                  : isSelected
                  ? "rgba(255, 255, 255, 0.3)"
                  : "rgba(255, 255, 255, 0.1)")
              }
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Button styles
const buttonStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  border: "none",
  padding: "6px 12px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  color: "#fff",
  transition: "background-color 0.3s",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
};

// Add hover effect for buttons
buttonStyle[':hover'] = {
  backgroundColor: "rgba(0, 0, 0, 0.6)"
};

// Main Calendar component
const Calendar = () => {
  return <CalendarComponent />;
};

export default Calendar;
