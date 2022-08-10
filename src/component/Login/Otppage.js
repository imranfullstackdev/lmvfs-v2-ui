import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";






const Otp = () => {
const [otpNumber,setOtpNumber]=useState([])

  useEffect(() => {
    document.querySelector(`input[name="input1"]`).focus();
   otpFunc()
  }, []);
  const [otp, setOtp] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });
  const { input1, input2, input3, input4 } = otp;
  const otpverify = `${
    input1 * 1000 + input2 * 100 + input3 * 10 + input4 * 1
  }`;
  // const { input1*1000+input2* input3, input4 } = otp;

  const [myOtp, setMyOtp] = useState([]);
  const navigation = useNavigate();
  // forward function for otp input
  const changeHandler = (e) => {
    if (e.target.name === "input1") {
      onFocusHandler(e, "input2");
    }
    if (e.target.name === "input2") {
      onFocusHandler(e, "input3");
    }
    if (e.target.name === "input3") {
      onFocusHandler(e, "input4");
    }
    if (e.target.name === "input4") {
      onFocusHandler(e, "input4");
    }
    setOtp({ ...otp, [e.target.name]: e.target.value });
  };
  const onFocusHandler = (e, focusOn) => {
    if (e.target.value.length === 0 || e.target.value === 1) {
      setOtp({ ...otp, [e.target.name]: e.target.value });
    }
    if (e.target.value.length === 1) {
      document.querySelector(`input[name=${focusOn}]`).focus();
      return;
    }
  };
  // for backfunction of otp
  const onKeyDownHandler = (e) => {
    if (e.keyCode === 8) {
      if (e.target.value === "") {
        if (e.target.name === "input1") {
          document.querySelector(`input[name="input1"]`).focus();
        }
        if (e.target.name === "input2") {
          document.querySelector(`input[name="input1"]`).focus();
        }
        if (e.target.name === "input3") {
          document.querySelector(`input[name="input2"]`).focus();
        }
        if (e.target.name === "input4") {
          document.querySelector(`input[name="input3"]`).focus();
        }
      }
    }
  };

const otpFunc=async()=>{
// const res = await fetch(`http://localhost:8001/viewEmployee/lmv/otp`)
// const jsonData = await res.json()
// console.log(jsonData);
}


//   const otpHandle = async () => {
//     const response = await fetch(
//       `http://localhost:8001/viewEmployee/lmv/otp`,
//       {
//         method: "get",
//         headers: { "Content-Type": "Application/json" },
//         //body: JSON.stringify(body),
//       }
//     )


//  };
  const submitHandler = (e) => {
    e.preventDefault();
   navigation("/SideNav  ");
  };
  //   e.preventDefault();
  //     if(!otp){
  //       alert("PLease enter the valid otp")
  //     }else if(otp!==otpHandle.parseRes){
  // alert("Otp Dont Match")
  //     }else{

  //     }

  //get otp from backend

  return (
    <>
      {/* <button onClick={otpHandle}>otp</button> */}
{otpNumber.map((otp)=>{
return(<div>
  {otp.val}
</div>)
})}
      <div
        className="logintab"
        style={{ backgroundColor: "#4c4c4c", text: "white" }}
      >
        <div className="login-con col-lg-4">
          {/* <img src={logo} alt="logo" /> */}
          <h3 className="px-3 mt-3">Enter an OTP to verify your account</h3>
          <h6 className="px-3 mt-3" style={{ color: "#3fa2da" }}>
            A code has been sent to your mobile phone
            <span className="text-danger">+91630XXXX879</span>
          </h6>
          <form id="otpfrm" onSubmit={submitHandler} className="">
            <div className="d-flex form m-2 px-3">
              <div className="p-2">
                <input
                  placeholder="0"
                  className="form-control"
                  type="text"
                  maxLength="1"
                  // onInput="this.value=this.value.replace(/[^0-9]/g,'');"
                  max="1"
                  value={input1}
                  name="input1"
                  onChange={changeHandler}
                  onKeyDown={onKeyDownHandler}
                  required
                />
              </div>
              <div className="p-2">
                <input
                  placeholder="0"
                  className="form-control"
                  name="input2"
                  type="text"
                  maxLength="1"
                  // onInput="this.value=this.value.replace(/[^0-9]/g,'');"
                  max="1"
                  value={input2}
                  onChange={changeHandler}
                  onKeyDown={onKeyDownHandler}
                  required
                />
              </div>
              <div className="p-2">
                <input
                  placeholder="0"
                  className="form-control"
                  name="input3"
                  type="text"
                  maxLength="1"
                  // onInput="this.value=this.value.replace(/[^0-9]/g,'');"
                  max="1"
                  value={input3}
                  onChange={changeHandler}
                  onKeyDown={onKeyDownHandler}
                  required
                />
              </div>
              <div className="p-2">
                <input
                  placeholder="0"
                  className="form-control"
                  name="input4"
                  type="text"
                  maxLength="1"
                  // onInput="this.value=this.value.replace(/[^0-9]/g,'');"
                  max="1"
                  value={input4}
                  onChange={changeHandler}
                  onKeyDown={onKeyDownHandler}
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <button
              
                className="btn mb-3"
                style={{ background: "#3fa2da", text: "white" }}
                type="submit"
              >
                <b>Verify</b>
              </button>
              <hr></hr>

              <h6 className="mt-3" style={{ color: "#3fa2da" }}>
                Don't receive the code? Check your registered email for OTP.
              </h6>
              <h6 className="text-danger">
                Enter today's OTP to redirect to home page.
              </h6>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Otp;
