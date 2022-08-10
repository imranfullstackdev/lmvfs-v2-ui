import React from "react";
import { useForm } from "react-hook-form";

const AddEmployeeValidation = (initialValues) => {
  const {
    register,
  } = useForm();
  const EmployeeValidation = {
    Employeeid: {
      ...register("Employeeid", {
        required: "Please Enter Your Employee Id",
        pattern: {
          value: /(?<!\d)\d{5}(?!\d)/g,
          message: "Invalid  Employee Id",
        },
      }),
    },
    userName: "",
    Address: "",
    Pincode: "",
    MNumber: "",
    BankName: "",
    BankBranch: "",
    IFSCCODE: "",
    AccountNo: "",
    AdharCard: "",
    PanCard: "",
    AlternateNo: "",
    email: "",
    state: "",
    designation: "",
    AssignedManager: "",
    companylocation: "",
    Status: "",
    AAddress: "",
    CBankBranch: "",
    district: "",
    city: "",
    officialNum: "",
    officialEmail: "",
    officialState: "",
  };

  return (
    <>{<AddEmployeeValidation EmployeeValidation={EmployeeValidation} />}</>
  );
};

export default AddEmployeeValidation;
