import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../images/Lmv-fs-logo.jpg"

const Logohead = () => {
  const navigate = useNavigate();
  const logoutfun = () => {
    navigate("/ ");
  };
  return (
    <>
    <div className="d-fixed">


        <div className="d-flex">
          <div>
            <img src={logo} alt={"LOGO IMAGE"} className="brand"/>
          </div>
          <button className="log-btn btn float-right" id="logoutbtn" onClick={logoutfun} >
            {<FiLogOut />}
          </button>
        </div>
    </div>
    </>
  );
};

export default Logohead;
