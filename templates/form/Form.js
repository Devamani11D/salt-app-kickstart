import React, {useEffect, useState} from 'react'
import {GridLayout,GridItem,Input,FormFieldLabel,FormField ,FormFieldHelperText,Dropdown,Option,MultilineInput,Label,Display2,Display3, StackLayout,Button,FlexItem}from '@salt-ds/core'
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
            <Display2 style={{margin:"auto"}}>Create Client Profile</Display2>
            <Display3>Client Details</Display3>
            </StackLayout>
            </GridItem>
            <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Country</FormFieldLabel>
            <Dropdown defaultSelected={["India"]} id="country">
              {countries_list.map((country)=>{
                return(
                    <Option value={country}>{country}</Option>
                )
              })}
            </Dropdown>
            <FormFieldHelperText>Choose your Country</FormFieldHelperText>
          </FormField>
        </GridItem>
        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Processing Unit</FormFieldLabel>
            <Dropdown defaultSelected={["Indonesia"]} id="processing_unit">
              {countries_list.map((country)=>{
                return(
                    <Option value={country}>{country}</Option>
                )
              })}
            </Dropdown>
            <FormFieldHelperText>Choose your Processing Unit</FormFieldHelperText>
          </FormField>
        </GridItem>
        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Booking Location</FormFieldLabel>
            <Dropdown defaultSelected={["India"]} id="booking_location">
              {countries_list.map((country)=>{
                return(
                    <Option value={country}>{country}</Option>
                )
              })}
            </Dropdown>
            <FormFieldHelperText>Choose your Booking Location</FormFieldHelperText>
          </FormField>
        </GridItem>
        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Agreement ID</FormFieldLabel>
            <Input value={formData.agreementId} id="agreementId" onChange={handleFormDataChange}></Input>
            <FormFieldHelperText>Input your Agreement ID</FormFieldHelperText>
          </FormField>
        </GridItem>
        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>ECI</FormFieldLabel>
            <Input value={formData.ecl} id="ecl" onChange={handleFormDataChange}></Input>
            <FormFieldHelperText>Input your ECI</FormFieldHelperText>
          </FormField>
        </GridItem>
        <GridItem colSpan={4}> 
          <FormField>
            <FormFieldLabel>CRL</FormFieldLabel>
            <Input value={formData.crl} onChange={handleFormDataChange} id="crl"></Input>
            <FormFieldHelperText>Input your CRL</FormFieldHelperText>
          </FormField>
        </GridItem>
        <GridItem colSpan={4}>     
          <FormField>
            <FormFieldLabel>Customer Name</FormFieldLabel>
            <Input value={formData.customer_name} id="customer_name" onChange={handleFormDataChange}></Input>
            <FormFieldHelperText>Input your Customer Name</FormFieldHelperText>
          </FormField>
        </GridItem>
        <GridItem colSpan={4}>      
          <FormField>
            <FormFieldLabel>LOB</FormFieldLabel>
            <Input value={formData.lob} id="lob" onChange={handleFormDataChange}></Input>
            <FormFieldHelperText>Input your LOB</FormFieldHelperText>
          </FormField>
        </GridItem>
        <GridItem colSpan={4}>
          <FormField>
            <FormFieldLabel>Other Information</FormFieldLabel>
            <MultilineInput bordered endAdornment={<Label variant={!isError ? "secondary" : "primary"}>
                  {!isError && `${formData.other_data.length}/${MAX_CHARS}`}
                  {isError && <strong>{`${formData.other_data.length}/${MAX_CHARS}`}</strong>}
                </Label>} onChange={handleFormDataChange} value={formData.other_data} validationStatus={isError ? "error" : undefined} id="other_data"/>
            <FormFieldHelperText>Input any relevant Data</FormFieldHelperText>
          </FormField>
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