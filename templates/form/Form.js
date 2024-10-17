import React, { useEffect, useState } from "react";
import { DatePicker } from "@salt-ds/lab";
import type { DateValue } from "@internationalized/date";
import {
  GridLayout,
  GridItem,
  Input,
  FormFieldLabel,
  FormField,
  FormFieldHelperText,
  Dropdown,
  Option,
  StackLayout,
  Button,
  FlexItem,
  RadioButtonGroup,
  RadioButton,
  Display2,
  Display3,
} from "@salt-ds/core";

const Form = () => {
  const courses_list = [
    "Electronics & Communication Engineering",
    "Computer Science & Engineering",
    "Electrical & Electronics Engineering",
  ];
  const years = ["2025", "2026", "2027", "2028", "2029"];

  const initialFormData = {
    course: "Electronics & Communication Engineering",
    firstName: "",
    lastName: "",
    sid: "",
    email: "",
    phoneNumber: "",
    homeAddress: "",
    yearOfStudy: "2025",
    grade: "",
  };

  const [validationStatus, setValidationStatus] = useState(undefined);
  const [inputValue, setInputValue] = useState(undefined);
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleFormDataChange = (e) => {
    e.persist();
    setFormData((prev) => {
      const label = e.target.id;
      const value = e.target.value;
      return { ...prev, [label]: value };
    });
  };

  const isInvalidDate = (value) =>
    value && Number.isNaN(new Date(value).getDay());

  const getDateValidationStatus = (value) =>
    value && isInvalidDate(value) ? "error" : undefined;

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f0f0f0 0%, #c3cfe2 100%)", // Similar gradient background
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for elevation
        width: "850px", // Form width similar to login form
        margin: "auto", // Centering the form on the page
      }}
    >
      <GridLayout columns={8}>
        <GridItem colSpan={8}>
          <StackLayout>
            <Display2 style={{ margin: "auto" }}>
              Student Registration Form
            </Display2>
            <Display3>Section 1 : Personal Information</Display3>
          </StackLayout>
        </GridItem>

        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>First Name</FormFieldLabel>
            <Input
              value={formData.firstName}
              id="firstName"
              onChange={handleFormDataChange}
            />
            <FormFieldHelperText>Input your first name</FormFieldHelperText>
          </FormField>
        </GridItem>

        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Last Name</FormFieldLabel>
            <Input
              value={formData.lastName}
              id="lastName"
              onChange={handleFormDataChange}
            />
            <FormFieldHelperText>Input your last name</FormFieldHelperText>
          </FormField>
        </GridItem>

        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Date of Birth</FormFieldLabel>
            <DatePicker
              selectedDate={selectedDate}
              validationStatus={validationStatus}
              onChange={(event) => setInputValue(event.target.value)}
              onSelectionChange={(_, date) => {
                const validationStatus = getDateValidationStatus(inputValue);
                setValidationStatus(validationStatus);
                if (!validationStatus) {
                  setSelectedDate(date);
                }
              }}
            />
            <FormFieldHelperText>Select your birth date</FormFieldHelperText>
          </FormField>
        </GridItem>

        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Gender</FormFieldLabel>
            <RadioButtonGroup direction="horizontal">
              <RadioButton label="Male" value="male" />
              <RadioButton label="Female" value="female" />
              <RadioButton label="Other" value="other" />
            </RadioButtonGroup>
            <FormFieldHelperText>Select your gender</FormFieldHelperText>
          </FormField>
        </GridItem>

        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Student ID</FormFieldLabel>
            <Input
              value={formData.sid}
              id="sid"
              onChange={handleFormDataChange}
            />
            <FormFieldHelperText>Input your ID</FormFieldHelperText>
          </FormField>
        </GridItem>

        <GridItem colSpan={8}>
          <div
            style={{
              borderBottom: "1px solid #ccc", // Section divider similar to login form
              margin: "20px 0",
            }}
          />
        </GridItem>

        <GridItem colSpan={8}>
          <StackLayout>
            <Display3>Section 2 : Contact Information</Display3>
          </StackLayout>
        </GridItem>

        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Email Address</FormFieldLabel>
            <Input
              value={formData.email}
              onChange={handleFormDataChange}
              id="email"
            />
          </FormField>
        </GridItem>

        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Phone Number</FormFieldLabel>
            <Input
              value={formData.phoneNumber}
              id="phoneNumber"
              onChange={handleFormDataChange}
            />
          </FormField>
        </GridItem>

        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Home Address</FormFieldLabel>
            <Input
              value={formData.homeAddress}
              id="homeAddress"
              onChange={handleFormDataChange}
            />
          </FormField>
        </GridItem>

        <GridItem colSpan={8}>
          <div
            style={{
              borderBottom: "1px solid #ccc", // Section divider similar to login form
              margin: "20px 0",
            }}
          />
        </GridItem>

        <GridItem colSpan={8}>
          <StackLayout>
            <Display3>Section 3 : Academic Details</Display3>
          </StackLayout>
        </GridItem>

        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Major Degree Course</FormFieldLabel>
            <Dropdown
              defaultSelected={["Electronics & Communication Engineering"]}
              id="course"
            >
              {courses_list.map((course) => (
                <Option value={course} key={course}>
                  {course}
                </Option>
              ))}
            </Dropdown>
          </FormField>
        </GridItem>

        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Year of Study</FormFieldLabel>
            <Dropdown defaultSelected={["2025"]} id="yearOfStudy">
              {years.map((year) => (
                <Option value={year} key={year}>
                  {year}
                </Option>
              ))}
            </Dropdown>
          </FormField>
        </GridItem>

        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Grade</FormFieldLabel>
            <Input
              value={formData.grade}
              id="grade"
              onChange={handleFormDataChange}
            />
          </FormField>
        </GridItem>

        <GridItem colSpan={8}>
          <div
            style={{
              borderBottom: "1px solid #ccc", // Section divider similar to login form
              margin: "20px 0",
            }}
          />
        </GridItem>

        <GridItem colSpan={8}>
          <div style={{ width: "100%" }}>
            <StackLayout direction="horizontal" gap={1}>
              <FlexItem>
                <Button
                  style={{ width: "100%" }}
                  variant="secondary"
                  onClick={() => setFormData(initialFormData)}
                >
                  Cancel
                </Button>
              </FlexItem>
              <FlexItem>
                <Button variant="primary" style={{ width: "100%" }}>
                  Save as Draft
                </Button>
              </FlexItem>
              <FlexItem>
                <Button variant="cta" style={{ width: "100%" }}>
                  Submit
                </Button>
              </FlexItem>
            </StackLayout>
          </div>
        </GridItem>
      </GridLayout>
    </div>
  );
};

export default Form;
