import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import { useForm } from "react-hook-form";
import FormControl from "react-bootstrap/FormControl";
import { Container, Row, Col } from "react-bootstrap";
import { addEmployeeInitialValues } from "../../validations/initialValues";

import Button from "react-bootstrap/Button";

const ReginalManagerModal = ({todo}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [showhide, setShowhide] = useState("");
  const [userinfo, setUserInfo] = useState({
    Employeeid: "",
    userName: "",
    telangana:"",
    ap:"",
    karnataka:"",
    tn:"",
    maharastra:"",
    // languages: [],
    // response: [],
  });
  const initialValues = addEmployeeInitialValues();
  const [userdata, setUserdata] = useState({
    ...initialValues,
  });
  const {
    Employeeid,
    userName,
    designation,
    REGIONALMANAGER,
  } = userdata;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler1 = async (e) => {
    // e.preventDefault();
    const body = userinfo;
    console.log(body);

    const response = await fetch(
      `http://localhost:8001/viewEmployee/lmv/permissionzonal`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  };
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { Employeeid, userName, designation,  telangana,ap,karnataka,tn,maharastra,} = userinfo;
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({...userinfo,[e.target.name]:e.target.value})
        // userinfo: [...userinfo, value],
        // response: [...languages, value],
    //   });
    }
    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: userinfo.filter((e) => e !== value),
        response: userinfo.filter((e) => e !== value),
      });
    }
  };
  const changeHandler = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value.toUpperCase() });
    setUserInfo({ ...userinfo, [e.target.name]: e.target.value.toUpperCase() });
    
    console.log(userdata.REGIONALMANAGER);
  };
  const handleshowhide = (event) => {
    const getuser = event.target.value;
    console.log(getuser);
    setShowhide(getuser);
  };
  return (
    <>
      <option
        name={designation}
        value="Zonal Manager"
        data-toggle="modal"
        data-target="#exampleModal"
        style={{ color: "blue" }}
        onClick={(e) => setShow(true)}
      >CLICK HERE TO ADD REGIONAL MANAGER </option>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>PERMISSIONS FOR REGIONAL MANAGER </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(submitHandler1)}>
          <Modal.Body>
            <h6>SELECT ONLY FOR REGIONAL MANAGER</h6>
            <div>
              <div className="d-flex sm-grid" style={{ gap: "45px" }}>
                <div md={4} lg={3} sm={12}>
                  <div className="mb-3 ">
                    <label>
                      <b>EMPLOYEE ID:</b>
                    </label>
                    <InputGroup
                      className="mb-3"
                      {...register("Employeeid", {
                        required: "Please Enter Your Employee Id",
                        pattern: {
                          value: /^([0-9]{4}|[0-9]{5})$/,
                          message: "Invalid Employeeid",
                        },
                      })}
                    >
                      <FormControl
                        placeholder="EmployeeId"
                        type="tel"
                        name="Employeeid"
                       value={Employeeid}
                        onChange={changeHandler}
                        
                      />
                    </InputGroup>
                    {errors.Employeeid && (
                      <small className="text-danger">
                        {errors.Employeeid.message}
                      </small>
                    )}
                  </div>
                </div>
                <div md={4} lg={3} sm={12}>
                  <div className="mb-3 ">
                    <label>
                      <b> EMPLOYEE NAME:</b>
                    </label>
                    <InputGroup
                      className="mb-3"
                      {...register("userName", {
                        required: "Please Enter Your User Name ",
                        pattern: {
                          value: /[A-Za-z]/,
                          message: "Invalid User Name",
                        },
                      })}
                    >
                      <FormControl
                        placeholder="User Name"
                        value={userName}
                        name="userName"
                        onChange={changeHandler}
                        
                      />
                    </InputGroup>
                    {errors.userName && (
                      <small className="text-danger">
                        {errors.userName.message}
                      </small>
                    )}<br/>
                  </div>
                  <Col md={4} lg={3} sm={12}>
                    {/* ///////////  //form of zonal manager ///////////////////////////////////// */}
                    <div
                      className=" form-group"
                      style={{ width: "206px", marginLeft: "-247px" }}
                    >
                      <label className="">
                        <b>DESIGNATION:</b>
                      </label>
                      <select
                        name="designation"
                        className="form-control"
                        onClick={(e) => handleshowhide(e)}
                        onChange={changeHandler}
                        disabled
                      >
                        <option
                          name="designation"
                          value={REGIONALMANAGER}
                          onClick={(e) => setShow(false)}
                        >
                          REGIONAL MANAGER
                        </option>
                      </select>
                    </div>
                  </Col>
                </div>
              </div>
            </div>
            <h5>STATE:</h5>
            <div className=" d-flex align-items-center ml-25" lg={4} sm={12}>
              <br />
              <div className="d-grid">
                <div className="form-check m-3">
                  {/* adding employeeeid and username */}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="telangana"
                    value={"telangana"}
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label>Telangana</label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="ap"
                    value={"ap"}
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label>ANDHRAPRADESH</label>
                </div>
              </div>
              <div className="d-grid">
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="karnataka"
                    value={"karnataka"}
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label>KARNATAKA</label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="tn"
                    value={"tn"}
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label>TAMILNADU</label>
                </div>
              </div>
              <div className="form-check m-3" id="zonalmodal">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="maharastra"
                  value={"maharastra"}
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label>MAHARASTRA</label>
              </div>
            </div>
            <div className="d-flex w-100 mt-3 " lg={4} sm={12}>
              <br />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ReginalManagerModal;









