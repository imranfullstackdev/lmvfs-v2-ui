import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

import logo from "../images/Lmv-fs-logo.jpg";

const Crmlogin = () => {
  const navigate = useNavigate();
  const [otpVerify, setOtpVerify] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setDate] = useState({
    Employeeid: "",
  });
  const employyedetailsnav = useNavigate();
  const changeHandler = (e) => {
    setDate({ ...data, [e.target.name]: [e.target.value] });
  };

  const { Employeeid } = data;

  const submitHandler = async (e) => {
    const body = data;
    console.log(body.Employeeid);
     navigate("/Otppage");

  

    // const response = await fetch(`http://localhost:8001/lmv/login`, {
    //   method: "POST",
    //   headers: { "Content-Type": "Application/json" },
    //   body: JSON.stringify(body),
    // });

    // const parseResponse = await response.json();
    // setOtpVerify(parseResponse.message);
  };

  // const parseResponse =await response.json()
  //    setOtpVerify(parseResponse.message)

  return (
    <>
      {otpVerify.map((otp) => {
        return (
          <div>
            {otp.pancard}
            {otp.state}
          </div>
        );
      })}

      <div className="dialog">
        <div className="dialog-content">
          <h2>
            <b className="m-3 mt-2">Login:</b>
          </h2>
          <div className="text-center">
            <img src={logo} alt="logo" />
          </div>

          <form
            autoComplete="off"
            onSubmit={handleSubmit(submitHandler)}
            method="POST"
          >
            <br />
              <div className="mx-auto" style={{width:"200px"}}>
                <div  className=" d-flex" >
                  <div
                    style={{
                      fontsize: "25px",
                      marginTop: "-6px",
                      height: "12px",
                      fontSize: "27px",
                  
                    }}
                  >
                    <FaUserAlt />
                  </div>
                  <span className="m-1"></span>
                  <div>
                    <input
                      {...register("Employeeid", {
                        required: "Please Enter Your Employee Id",
                        pattern: {
                          value: /^([0-9]{4}|[0-9]{5})$/,
                          message: "Invalid  Employee Id",
                        },
                      })}
                      type="number"
                      placeholder="EMPLOYEE ID"
                      className="form-control w-100"
                      name="Employeeid"
                      value={Employeeid}
                      onChange={changeHandler}
                    />
                  </div>
                </div>
              </div>
            <div className="text-center">
              {errors.Employeeid && (
                <small className="text-danger">
                  {errors.Employeeid.message}
                </small>
              )}
            </div>
            <hr></hr>
            <div className="text-center mb-4">
              <button
                type="submit"
                className="btn text-bold text-white"
                style={{ background: "rgb(63, 162, 218)" }}
              >
                <b>Send Otp</b>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Crmlogin;
