 export const addEmployeeValidation = (values) => {
    let initialValues = {};
    initialValues.userName = !values.userName? 'Please Enter Full Name' : /^[a-zA-Z]{3,12}[a-zA-Z\s]{3,12}$/.test(values.userName) ? '' : 'Please Enter Full Name with max of 12 characters';
    initialValues.AdharCard= !values.AdharCard? 'Please Enter 12 digit Aadhar' : /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(values.AdharCard) ? '' : 'Please Enter valid Aadhar Number';
    initialValues.MNumber = !values.MNumber ? 'Please Enter Mobile Number' : /^[6-9]\d{9}$/.test(values.MNumber) ? '' : 'Please Enter valid Mobile Number';
    initialValues.email = !values.email ? 'Please Enter Email Address' : /\S+@\S+\.\S+/.test(values.email) ? '' : 'Please Enter Valid Email Address';
    initialValues.PanCard = !values.PanCard ? 'Please Enter Pancard Number' : /^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$/.test(values.PanCard) ? '' : 'Please Enter valid Pancard Number';
    initialValues.BankName = !values.BankName ? 'Please Enter Bank Name' : /^[a-zA-Z\s]+$/.test(values.BankName) ? (values.BankName.trim().length > 2 ? '' : 'Please Enter valid Bank Name') : 'Please Enter Valid Bank Name';
    initialValues.AccountNo = !values.AccountNo ? 'Please Enter Account Number' : /^\d{9,18}$/.test(values.AccountNo) ? '' : 'Please Enter Valid Account Number';
    initialValues.IFSCCODE = !values.IFSCCODE ? 'Please Enter IFSC Code' : /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/.test(values.IFSCCODE) ? '' : 'Please Enter Valid IFSC Code';
    initialValues.BankBranch = !values.BankBranch ? 'Please Enter Bank Branch Name' : /^[a-zA-z\s]+$/.test(values.BankBranch) ? (values.BankBranch.trim().length > 2 ? '' : 'Please Enter valid Branch Name') : 'Please Enter Valid Branch Name';
    initialValues.password = !values.password ? 'Please Enter Password' : values.password.trim().length > 4 ? '' : 'Please Enter valid Password';
    initialValues.AlternateNo = !values.AlternateNo ? 'Please Enter Mobile Number' : /^[6-9]\d{9}$/.test(values.AlternateNo) ? '' : 'Please Enter valid Mobile Number';
    initialValues.MotherName = !values.MotherName? 'Please Enter Full Name' : /^[a-zA-Z]{3,12}[a-zA-Z\s]{3,12}$/.test(values.MotherName) ? '' : 'Please Enter Full Name with max of 12 characters';
  initialValues.Pincode=!values.Pincode?'Please Enter Pincode Number':/^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/.test(values.Pincode) ?'':'Please Enter Full Name with max of 9 charecter';
    return initialValues;
  };
  
  export const LoginValidation = (values) => {
    let initialValues = {};
    initialValues.email = !values.email ? 'Please Enter Email Address' : /\S+@\S+\.\S+/.test(values.email) ? '' : 'Please Enter Valid Email Address';
    initialValues.password = !values.password ? 'Please Enter Password' : values.password.trim().length > 4 ? '' : 'Please Enter valid Password';
    return initialValues;
  };