import React, { useState, useEffect } from "react";
import ZonalManagerModal from "./ZonalManagerModal";
import AreaManagerModal from './AreaManagerModal'
import ReginalManagerModal from "./ReginalManagerModal";
import { useForm } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SideNav from "../UIDesign/SideNav";
import { addEmployeeInitialValues } from "../../validations/initialValues";
import Logohead from "../UIDesign/Logohead";
const AddEmployee = (props) => {
  const [show, setShow] = useState(false);
  const [designations, setDesignations] = useState([]); /////// limited roles
  const [allDesignation, setAllDesignation] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const handleClose = () => setShow(false);
  // for disabling the assigned manager
  const [showhide, setShowhide] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const initialValues = addEmployeeInitialValues();

  // for disabbling the assigned Manager
  const [userdata, setUserdata] = useState({
    ...initialValues,
  });
const {Employeeid,userName,MNumber,email,AlternateNo,PanCard,AdharCard,Status,BankName,AccountNo,IFSCCODE,BankBranch,Address,AAddress,Pincode,state,district,city,
  officialState,companylocation,companybranch,officialEmail,officialNum,designation,AssignedManager,ZonalManager
  } = userdata;

const changeHandler = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value.toUpperCase() });
    console.log(userdata.ZonalManager);

  };

  const submitHandler = async (e) => {
    console.log(userdata)
    const body = userdata;
    console.log(body);
    const response = await fetch(
      `http://localhost:8001/viewEmployee/lmv/register`,
      {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(body),
      }
    );
  };
//////////designation get limited roles////////////////////////////////////////////////
  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:8001/designation/api/v1/conditional`
    );
    const jsonData = await response.json();
    setDesignations(jsonData);
  };
  //////////designation get all roles except admin, ceo ////////////////////////////////////////////////
  const fetchDesignation = async () => {
    const response = await fetch(
      `http://localhost:8001/designation/api/v1/all `
    );
    const jsonData = await response.json();
    setAllDesignation(jsonData);
  };
  useEffect(() => {
    fetchDesignation();
    fetchData();
    getRequest();

  }, []);
  //////////////////////////////////////////////////////////
  //get req from backend
  const getRequest = async () => {
    const res = await fetch(`http://localhost:8001/branchloc/api/v1/get`);
    const jsonData = await res.json();
    setAllUsers(jsonData);
  };
  //
  const handleshowhide = (event) => {
    const getuser = event.target.value;
    console.log(getuser);
    setShowhide(getuser);
  };

  return (
    <>
      {<Logohead />}
      <div style={{ background: "#00adff" }}>
        <h3 className="text-center"><b className="text-white">Add Employee</b></h3>
      </div>
      <div className="container-fluid d-flex">
        <SideNav />
        
        <Form
          id="addEmployeeFrom"
          onSubmit={handleSubmit(submitHandler)}   //for  form add user
          // autoComplete="off"
        >
          <div className="text-center mb-3">
            <h5 className="mb-5" id="empdeslabel" style={{ color: "#00adff" }}>
              ADD EMPLOYEE DETAILS
            </h5>
          </div>
          <h5>
            <u style={{ color: "#3fa2da", marginLeft: "13px" }}>
              <b>PERSONAL DETAILS:-</b>
            </u>
          </h5>
          <Container>
            <Row>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 ">
                  <label><b>EMPLOYEE ID:</b></label>
                  <InputGroup
                    className="mb-3"
                    {...register("Employeeid", {required: "Please Enter Your Employee Id",pattern: {value: /^([0-9]{4}|[0-9]{5})$/,message: "Invalid  Employee Id",},
                    })}
                  >
                    <FormControl
                      placeholder="EmployeeId"
                      name="Employeeid"
                      value={Employeeid}
                      onChange={changeHandler}
                      maxLength={5}
                    />
                  </InputGroup>
                  {errors.Employeeid && (<small className="text-danger">{errors.Employeeid.message}</small>)}
                </div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 ">
                  <label><b> EMPLOYEE NAME:</b></label>
                  <InputGroup
                    className="mb-3"
                    {...register("userName", {required: "Please Enter Your User Name ",pattern: {value: /[A-Za-z]/,message: "Invalid User Name",},})}
                  >
                    <FormControl
                      placeholder="User Name"
                      value={userName}
                      name="userName"
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.userName && (<small className="text-danger">{errors.userName.message}</small>
                  )}
                </div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 ">
                  <label><b>MOBILE NUMBER:</b></label>
                  <InputGroup
                    {...register("MNumber", {required: "Please Enter The Mobile Number",pattern: {value: /^[6-9]\d{9}$/,message: "Invalid Mobile Number",},})}
                  >
                    <FormControl
                      placeholder="Mobile Number"
                      name="MNumber"
                      type="number"
                      value={MNumber}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.MNumber && (<small className="text-danger">{errors.MNumber.message}</small>
                  )}
                </div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3">
                  <label><b> EMAIL:</b></label>
                  <InputGroup
                    {...register("email", {required: "Please Enter Your Email",pattern: {value: /\S+@\S+\.\S+/,message: "Invalid Email",},})}
                  >
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      id="emailid"
                      name="email"
                      value={email}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.email && (<small className="text-danger">{errors.email.message}</small>)}
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col md={4} lg={3} sm={12}>
                <label><b>ALTERNATE NUMBER:</b></label>
                <InputGroup
                  className="mb-3"
                  {...register("AlternateNo", {required: "Alternate Number Is Required",pattern: {value: /^[6-9]\d{9}$/,message: "Invalid Alternate Number",},})}>
                  <FormControl
                    placeholder="Alternate  Number"
                    type="number"
                    name="AlternateNo"
                    value={AlternateNo}
                    onChange={changeHandler}
                  />
                </InputGroup>
                {errors.AlternateNo && (<small className="text-danger">{errors.AlternateNo.message}</small>)}
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 ">
                  <label><b>PANCARD NO:</b></label>
                  <InputGroup
                    className="mb-3"
                    {...register("PanCard", {required: "Please Enter Your PanCard",pattern: {value: /^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$/,message: "Invalid Pan Card",},})}
                  >
                    <FormControl
                      placeholder="PAN card Number"
                      name="PanCard"
                      value={PanCard}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.PanCard && (<small className="text-danger">{errors.PanCard.message}</small>)}
                </div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 ">
                  <label><b>AADHAR CARD NO:</b></label>
                  <InputGroup
                    className="mb-3"
                    {...register("AdharCard", {required: "Please Enter Your Adhar Card",pattern: {value: /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/,message: "Invalid Adhar Card",},})}
                  >
                    <FormControl
                      placeholder="AAdhard Card Number"
                      name="AdharCard"
                      value={AdharCard}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.AdharCard && (<small className="text-danger">{errors.AdharCard.message}</small>)}</div>
              </Col>
              <Col>
                <Col className="wrapper">
                  <div className="mb-3 form-check" id={"crmselect"}>
                    <label><b>STATUS:</b></label>
                    <InputGroup
                      className="mb-3"
                      name="Status"
                      onChange={changeHandler}
                    >
                      <FormControl
                        className="MentorList_DropdownMenu"
                        placeholder="Select Status"
                        name="Status"
                        onChange={changeHandler}
                        list="datalistOptions1"
                        id="exampleDataList"
                        {...register("Status", {required: "Please Select Your Status",
                        })}
                      />
                      <datalist id="datalistOptions1" className="overflowY-scroll">
                        <option name={Status} value="Active">Active</option><option name={Status} value="In Active">In Active
                        </option>
                      </datalist>
                    </InputGroup>
                    {errors.Status && (<small className="text-danger">{errors.Status.message}</small>)}
                  </div>
                </Col>
              </Col>
            </Row>
          </Container>
          <h5><u style={{ color: "#3fa2da", marginLeft: "13px" }}><b>BANK DETAILS</b></u></h5>
          <Container>
            <Row>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 flex ">
                  <label><b>BANK NAME:</b></label>
                  <InputGroup
                    className="mb-3"
                    {...register("BankName", {required: "Please Enter your Bank Name",pattern: {value: /^[a-zA-Z\s]+$/,message: "Invalid Bank Name",}})}
                  >
                    <FormControl
                      placeholder="Bank Name"
                      name="BankName"
                      onChange={changeHandler}
                      value={BankName}
                    />
                  </InputGroup>
                  {errors.BankName && (<small className="text-danger">{errors.BankName.message}</small>)}</div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 flex  ">
                  <label><b>ACCOUNT NUMBER</b></label>
                  <InputGroup
                    className="mb-3"
                    {...register("AccountNo", {required: "Please Enter Your Account Number",pattern: {value: /^\d{9,18}$/,message: "Invalid Account Number",},})}
                  >
                    <FormControl
                      placeholder="Bank Account Number"
                      name="AccountNo"
                      value={AccountNo}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.AccountNo && (<small className="text-danger">{errors.AccountNo.message}</small>)}
                </div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 ">
                  <label><b>IFSC CODE:</b></label>
                  <InputGroup
                    className="mb-3"
                    {...register("IFSCCODE", {required: "Please Enter Your IFSC code",pattern: {value: /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/,message: "Invalid IFSC Code",},})}
                  >
                    <FormControl
                      placeholder="IFSC Code"
                      name="IFSCCODE"
                      value={IFSCCODE}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.IFSCCODE && (<small className="text-danger">{errors.IFSCCODE.message}</small>)}
                </div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3"><label><b> BRANCH NAME:</b></label>
                  <InputGroup
                    className="mb-3"
                    {...register("BankBranch", {required: "Please Enter Your Branch Name ",pattern: {value: /[A-Za-z]/,message: "Invalid User Name",},})}
                  >
                    <FormControl
                      placeholder="Branch Name"
                      value={BankBranch}
                      name="BankBranch"
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.BankBranch && (<small className="text-danger">{errors.BankBranch.message}</small>)}
                </div>
              </Col>
            </Row>
          </Container>

          <div>
            <h5>
              <u style={{ color: "#3fa2da", marginLeft: "13px" }}>
                <b>ADDRESS:</b>
              </u>
            </h5>
            <Container>
              <Row>
                <Col md={4} lg={3} sm={12}>
                  <div className="mb-3  ">
                    <label><b>ADDRESS 1:</b></label>
                    <InputGroup
                      className="mb-3"
                      {...register("Address", {required: "Please Enter Your Address",})}>
                      <FormControl
                        placeholder="Address"
                        value={Address}
                        name="Address"
                        onChange={changeHandler}
                      />
                    </InputGroup>
                    {errors.Address && (
                      <small className="text-danger">
                        {errors.Address.message}
                      </small>
                    )}
                  </div>
                </Col>
                <Col md={4} lg={3} sm={12}>
                  <div className="mb-3   ">
                    <label><b> ADDRESS 2:</b></label>
                    <InputGroup
                      className="mb-3"
                      {...register("AAddress", {required: "Please Enter Your Address",})}
                    >
                      <FormControl
                        placeholder="Alternate Address"
                        value={AAddress}
                        name="AAddress"
                        onChange={changeHandler}
                      />
                    </InputGroup>
                    {errors.Address && (
                      <small className="text-danger">
                        {errors.Address.message}
                      </small>
                    )}
                  </div>
                </Col>
                <Col md={4} lg={3} sm={12}>
                  <div className="mb-3 ">
                    <label><b>PINCODE:</b></label>
                    <InputGroup
                      className="mb-3"
                      {...register("Pincode", {required: "Please Enter Your Pincode",pattern: {value: /^[1-9][0-9]{5}$/,message: "Invalid Pincode",},})}
                    >
                      <FormControl
                        placeholder="PINCODE"
                        name="Pincode"
                        value={Pincode}
                        onChange={changeHandler}
                      />
                    </InputGroup>
                    {errors.Pincode && (<small className="text-danger">{errors.Pincode.message}</small>)}
                  </div>
                </Col>
                <Col md={4} lg={3} sm={12}>
                  <div className="mb-3 ">
                    <label><b>STATE:</b></label>
                    <InputGroup
                      className="mb-3"{...register("state", {required: "Please Enter Your State Name",})}
                    >
                      <FormControl
                        placeholder="Please Enter Your State"
                        value={state}
                        name="state"
                        onChange={changeHandler}
                      />
                    </InputGroup>
                    {errors.state && (<small className="text-danger">{errors.state.message}</small>)}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="districtdiv">
            <Container>
              <Row>
                <Col md={4} lg={6} sm={12}>
                  <div className="mb-3">
                    <label><b>DISTRICT:</b></label>
                    <InputGroup
                      className="mb-3"
                      {...register("district",{required: "Please Enter Your State Name",})}
                    >
                      <FormControl
                        placeholder="Please Enter Your State"
                        value={district}
                        name="district"
                        onChange={changeHandler}
                      />
                    </InputGroup>
                    {errors.district && (<small className="text-danger">{errors.district.message}</small>)}
                  </div>
                </Col>
                <Col md={4} lg={6} sm={12}>
                  <div className="mb-3 ">
                    <label><b>CITY:</b></label>
                    <InputGroup 
                    className="mb-3"{...register("city", {required: "Please Enter Your State Name",})}
                    >
                      <FormControl
                        placeholder="Please Enter Your State"
                        value={city}
                        name="city"
                        onChange={changeHandler}
                      />
                    </InputGroup>
                    {errors.city && (<small className="text-danger">{errors.city.message}</small>)}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <h5>
            <u style={{ color: "#3fa2da", marginLeft: "6px" }}>
              <b>COMPANY DETAILS:</b>
            </u>
          </h5>

          <Container style={{ marginLeft: "-12px" }}>
            <Row>
              <Col className="wrapper">
                <div className="mb-3 ">
                  <label><b>STATE:</b></label>
                  <InputGroup
                    className="mb-3"
                    {...register("officialState", {required: "Please Enter Company State ",})}
                  >
                    <FormControl
                      placeholder="Please Enter Your State"
                      value={officialState}
                      name="officialState"
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.officialState && (<small className="text-danger">{errors.officialState.message}</small>)}
                </div>
              </Col>

              <Col md={4} lg={3} sm={12}>
                {/* test */}
                <label><b>LOCATION:</b></label>
                <InputGroup
                  className="mb-3"
                  name="companylocation"
                  onChange={changeHandler}
                  value={companylocation}
                >
                  <FormControl
                    className="MentorList_DropdownMenu"
                    placeholder="Location"
                    name="companylocation"
                    onChange={changeHandler}
                    list="datalistOptions2"
                    id="exampleDataList"
                    {...register("companylocation", {required: "Please Select Your companylocation",})}
                  />

                  <datalist id="datalistOptions2" className="overflowY-scroll">
                    {/* modal */}
                    {allUsers.map((option) => (
                      <option key={option.id} value={option.location}>
                        {option.location} 
                      </option>
                    ))}
                      <option value={"companylocation"}>Active</option>
                  </datalist>
                </InputGroup>
                {errors.companylocation && (<small className="text-danger">{errors.companylocation.message}</small>)}
              </Col>
              <Col md={4} lg={3} sm={12}>
                <label><b> BRANCH:</b></label>
                <InputGroup
                  className="mb-3"
                  name="companybranch"
                  onChange={changeHandler}
                  value={companybranch}
                >
                  <FormControl
                    className="MentorList_DropdownMenu"
                    placeholder="Bank Branch"
                    name="companybranch"
                    onChange={changeHandler}
                    list="datalistOptions3"
                    id="exampleDataList111"
                    {...register("companybranch", {required: "Please Select Your Company Bank Branch",})}
                  />

                  <datalist id="datalistOptions3" className="overflowY-scroll">
                    {/* modal */}
                    {allUsers.map((Cbranch) => (
                      <option key={Cbranch.id} value={Cbranch.companybranch}>
                        {Cbranch.companybranch} key={Cbranch.id}
                      </option>
                    ))}
                  </datalist>
                </InputGroup>
                {errors.CBankBranch && (<small className="text-danger">{errors.CBankBranch.message}</small>
                )}
                <div className="mb-3 "></div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3">
                  <label><b>OFFICIAL EMAIL:</b></label>
                  <InputGroup
                    {...register("officialEmail", {required: "Please Enter Your  Official Email",pattern: {value: /\S+@\S+\.\S+/,message: "Invalid Email",},})}
                    style={{ marginLeft: "-10px" }}
                  >
                    <Form.Control
                      type="officialEmail"
                      placeholder="Official  Email"
                      id="officialEmailid"
                      name="officialEmail"
                      value={officialEmail}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.officialEmail && (<small className="text-danger">{errors.officialEmail.message}</small>)}</div>
              </Col>
            </Row>
          </Container>
          <Container style={{ marginLeft: "-12px" }}>
            <Row>
              <Col md={4} lg={3} sm={12} className="wrapper">
                <div className="mb-3 " style={{width:"max-width"}}>
                  <label><b> OFFICIAL NUMBER:</b></label>
                  <InputGroup
                    {...register("officialNum", {required: "Please Enter The Official Number",pattern: {value: /^[6-9]\d{9}$/,message: "Invalid Mobile Number",},})}
                  >
                    <FormControl
                      placeholder=" Official Mobile Number"
                      name="officialNum"
                      type="number"
                      value={officialNum}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.officialNum && (<small className="text-danger">{errors.officialNum.message}</small>)}
                </div>
              </Col>

              <Col md={4} lg={3} sm={12}>
                <div className=" form-group">
                  <label ><b>DESIGNATION:</b></label>
                  <select
                    name="designation"
                    className="form-control"
                    value={designation}
                    onClick={(e) => handleshowhide(e)}
                    onChange={changeHandler}
                    required
                  >
                    <option name="designation" value="">-- Designation--</option>
                    <option name="designation" value="ADMIN">ADMIN</option>
                    <option name="designation" value="MD">MD</option>
                    <option name="designation" value="CEO">CEO</option>
                    <option name="designation" value="ZONAL MANAGER" onClick={(e) => setShow(false)} >ZONAL MANAGER</option>
                    <option name="designation" value="REGIONAL MANAGER" onClick={(e) => setShow(false)} >REGIONAL MANAGER</option>
                    <option name="designation" value="AREA MANAGER" onClick={(e) => setShow(false)} >AREA MANAGER</option>

                    {allDesignation.map((option) => {
                      return (
                        <option key={option.id} value={option.designation}>
                          {option.designation}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {errors.designation && (<small className="text-danger">{errors.designation.message}</small>)}
              </Col>
              <Col md={4} lg={3} sm={12}>
                {showhide === "ADMIN" ? ("") : showhide === "MD" ? ("") : showhide === "CEO" ? ("") : showhide === "PRINCIPLE MANAGER" ? ("") : (
                  <div className="mb-3 " id="ShowAndHide">
                    <label><b>ASSIGNED MANAGER:</b></label>
                    <InputGroup
                      className="mb-3"
                      {...register("AssignedManager", {required: "Please Enter Your assigned Manager",})}
                    >
                      <FormControl
                        placeholder="Assigned Manager"
                        name="AssignedManager"
                        value={AssignedManager}
                        onChange={changeHandler}
                      />
                    </InputGroup>
                    {errors.AssignedManager && (<small className="text-danger">{errors.AssignedManager.message}</small>
                    )}
                  </div>
                )}
              </Col>
              <Col md={4} lg={3} sm={12}>
            <div style={{width: "50vw"}}></div>
              </Col>
            </Row>
          </Container>
          <div className="companydetails">
            <Container>
              <div className="d-flex">
                <Row>
                  {/* for showing the zonal manager button */}
                  <Col>
                  {showhide === "ZONAL MANAGER" && (<ZonalManagerModal todo={userdata} />
                    )}
                    {showhide === "REGIONAL MANAGER" && (<ReginalManagerModal todo={userdata} />)}
                    {showhide === "AREA MANAGER" && (<AreaManagerModal todo={userdata} />)}
                  </Col>
                  {/* Zonal MANAGER MODAl*/}
                </Row>
              </div>
            </Container>
          </div>
          <div className=" text-center">
            <Button style={{backgroundColor: "#3fa2da",text: "white",width: "142px",marginTop: "40px",}}
              type="submit"><b>SUBMIT</b></Button>
          </div>
          </Form>
          </div>
    </>
  );
};
export default AddEmployee;
