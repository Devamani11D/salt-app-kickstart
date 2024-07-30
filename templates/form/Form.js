import React, {useEffect, useState} from 'react'
import { DatePicker } from "@salt-ds/lab";
import type { DateValue } from "@internationalized/date";
import {GridLayout,GridItem,Input,FormFieldLabel,FormField ,FormFieldHelperText,Dropdown,Option,MultilineInput,Label,Display2,H3,Display3,Display4,StackLayout,Button,FlexItem,RadioButtonGroup,RadioButton}from '@salt-ds/core'
const Form = () => {
    const countries_list=["India","Indonesia","New York"];
    const initialFormData={
        country:"India",
        booking_location:"",
        processing_unit:"Indonesia",
        agreementId:"",
        ecl:"",
        crl:"",
        lob:"",
        customer_name:"",
        other_data:""
    }
    const [validationStatus, setValidationStatus] = useState(
      undefined,
    );
    const isInvalidDate = (value) =>
      value && Number.isNaN(new Date(value).getDay());
    const getDateValidationStatus = (value) =>
      value && isInvalidDate(value) ? "error" : undefined;
    const [inputValue, setInputValue] = useState(undefined);
    const [selectedDate, setSelectedDate] = useState(undefined);
    const [isError, setIsError] = useState(false);
    const [formData,setFormData]=useState(initialFormData);
    const MAX_CHARS = 1000;
    useEffect(()=>{
        console.log(formData);
    },[formData]);
    const handleFormDataChange=(e)=>{
        e.persist();
        setFormData((prev)=>{
            const label=e.target.id;
            const value=e.target.value;
            return{...prev,[label]:value};
        })
    }
    return <GridLayout columns={8} style={{
      width:"800px",margin:"auto"
    }}>
            <GridItem colSpan={8}>
    <StackLayout>
            <Display2 style={{margin:"auto"}}>Student Registration Form</Display2>
            {/* <H3>Please complete the form below to register as a student</H3> */}
            <Display3>Section 1 : Personal Information</Display3>
            </StackLayout>
            </GridItem>
            <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>First Name</FormFieldLabel>
            <Input value={formData.agreementId} id="agreementId" onChange={handleFormDataChange}></Input>
            <FormFieldHelperText>Input your first name</FormFieldHelperText>
          </FormField>
        </GridItem>
        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Last Name</FormFieldLabel>
            <Input value={formData.agreementId} id="agreementId" onChange={handleFormDataChange}></Input>
            <FormFieldHelperText>Input your Last Name</FormFieldHelperText>
          </FormField>
        </GridItem>
        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Date of Birth</FormFieldLabel>
            <DatePicker
        selectedDate={selectedDate}
        validationStatus={validationStatus}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setInputValue(event.target.value)
        }
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
            <FormFieldHelperText>Select your Gender</FormFieldHelperText>
          </FormField>
        </GridItem>
        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Student ID</FormFieldLabel>
            <Input value={formData.ecl} id="ecl" onChange={handleFormDataChange}></Input>
            <FormFieldHelperText>Input your ID</FormFieldHelperText>
          </FormField>
        </GridItem>
        <GridItem colSpan={8}>
        <div style={{
        borderBottom: "var(--salt-size-border) var(--salt-separable-borderStyle) var(--salt-separable-secondary-borderColor)"
      }} />
      </GridItem>

      <GridItem colSpan={8}>
    <StackLayout>
            <Display3>Section 2 : Contact Information</Display3>
            </StackLayout>
            </GridItem>
        <GridItem colSpan={4}> 
          <FormField>
            <FormFieldLabel>Email Address</FormFieldLabel>
            <Input value={formData.crl} onChange={handleFormDataChange} id="crl"></Input>
            {/* <FormFieldHelperText>Input your Email ID</FormFieldHelperText> */}
          </FormField>
        </GridItem>
        <GridItem colSpan={4}>     
          <FormField>
            <FormFieldLabel>Phone Number</FormFieldLabel>
            <Input value={formData.customer_name} id="customer_name" onChange={handleFormDataChange}></Input>
            {/* <FormFieldHelperText>Input your Customer Name</FormFieldHelperText> */}
          </FormField>
        </GridItem>
        <GridItem colSpan={4}>      
          <FormField>
            <FormFieldLabel>Home Address</FormFieldLabel>
            <Input value={formData.lob} id="lob" onChange={handleFormDataChange}></Input>
            {/* <FormFieldHelperText>Input your LOB</FormFieldHelperText> */}
          </FormField>
        </GridItem>

        <GridItem colSpan={8}>
        <div style={{
        borderBottom: "var(--salt-size-border) var(--salt-separable-borderStyle) var(--salt-separable-secondary-borderColor)"
      }} />
      </GridItem>

      <GridItem colSpan={8}>
    <StackLayout>
            
            <Display3>Section 3 : Academic Details</Display3>
            </StackLayout>
            </GridItem>
        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Major Degree Course</FormFieldLabel>
            <Dropdown defaultSelected={["India"]} id="country">
              {countries_list.map((country)=>{
                return(
                    <Option value={country}>{country}</Option>
                )
              })}
            </Dropdown>
            {/* <FormFieldHelperText>Input any relevant Data</FormFieldHelperText> */}
          </FormField>
        </GridItem>
        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Year of Study</FormFieldLabel>
            <Dropdown defaultSelected={["India"]} id="country">
              {countries_list.map((country)=>{
                return(
                    <Option value={country}>{country}</Option>
                )
              })}
            </Dropdown>
            {/* <FormFieldHelperText>Input any relevant Data</FormFieldHelperText> */}
          </FormField>
        </GridItem> 
        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Grade</FormFieldLabel>
            <Input value={formData.agreementId} id="agreementId" onChange={handleFormDataChange}></Input>
            {/* <FormFieldHelperText>Input any relevant Data</FormFieldHelperText> */}
          </FormField>
        </GridItem>

        <GridItem colSpan={4}>
        <div style={{
        borderBottom: "var(--salt-size-border) var(--salt-separable-borderStyle) var(--salt-separable-secondary-borderColor)"
      }} />
      </GridItem>   
        <GridItem colSpan={8}>
        <div style={{
    width: "40vw"
  }}>
      <StackLayout direction={{
      xs: "column",
      sm: "row"
    }} style={{
      width: "100%"
    }} gap={1}>
    <FlexItem>
          <Button style={{
          width: "100%"   
        }}
        variant="secondary"
        onClick={()=>{
            setFormData(initialFormData);
        }}>Cancel</Button>
        </FlexItem>
        <FlexItem>
          <Button variant="primary" style={{
          width: "100%"
        }}>
            Save as Draft
          </Button>
        </FlexItem>
        <FlexItem>
          <Button variant="cta" style={{
          width: "100%"
        }}>
            Submit
          </Button>
        </FlexItem>      
      </StackLayout>
    </div>;
        </GridItem>
      </GridLayout>;   
}
export default Form;