import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logohead from "./Logohead";
import { RiTeamFill } from "react-icons/ri";
import { FaUserCog, FaUserPlus } from "react-icons/fa";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FaCog, FaUserTie, FaColumns, FaThList, FaHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiAlignJustify,
  FiUsers,
  FiFile,
  FiLoader,
  FiArchive,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog, BiWindows } from "react-icons/bi";

import "react-pro-sidebar/dist/css/styles.css";
import Crmfsfrm from "../USERS/AddEmployee";
// import "./Header.css";

const SideNav = () => {
  const [menuCollapse, setMenuCollapse] = useState(true);
  const navigate = useNavigate();

  const Empesignation = useNavigate();
  const ViewEmployeeForm = (e) => {
    e.preventDefault();
    navigate("/ViewEmployee");
    window.location.reload();
  };

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const addEmployeeForm = (e) => {
    e.preventDefault();
    navigate("/AddEmployee");
    // window.navigate.load()
    window.location.reload();
  };
  const AddBranchForm = (e) => {
    e.preventDefault();
    navigate("/AddBranch");
    // window.navigate.load()
    window.location.reload();
  };
  const employeeDesignation = (e) => {
    e.preventDefault();
    navigate("/EmployeeDesignation");
    window.location.reload();
  };

  const Salespage=(e)=>{
    e.preventDefault();
    navigate("/Sales");
    window.location.reload();
  }

  return (
    <>
      {/* its for general purpose and its just used as a home page untill home page is created */}
      {/* <Logohead/>*/}
      <div>
        <div className="closemenu" onClick={menuIconClick}>
          {menuCollapse ? <FiAlignJustify /> : <FiAlignJustify />}
        </div>
        <div id="header">
          <ProSidebar collapsed={menuCollapse}>
            <SidebarContent>
              <div className="sidebarcon">
                <Menu iconShape="square">
                  <div className="sideuser">
                    <MenuItem active={true} icon={<FiHome />}>
                      Home
                    </MenuItem>
                    <MenuItem icon={<FaList />}>Dashboard</MenuItem>
                    <SubMenu
                      title="USERS"
                      icon={<FiUsers />}
                      className="pro-inner-list-item"
                    >
                      <MenuItem>
                        <button onClick={addEmployeeForm} className="sidebtn">
                          {/* {menuCollapse} */}
                          {menuCollapse ? "Add Employee" : "Add Employee"}
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button
                          onClick={employeeDesignation}
                          className="sidebtn"
                        >
                          {menuCollapse
                            ? "Employee Designation"
                            : "Employee Designation"}
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button onClick={ViewEmployeeForm} className="sidebtn">
                          {menuCollapse ? "View Employee" : "View Employee"}
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button onClick={AddBranchForm} className="sidebtn">
                          {menuCollapse ? "Branch Location" : "Branch Location"}
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button onClick={Salespage} className="sidebtn">
                          {menuCollapse ? "Sales Map" : "Sales Map"}
                        </button>
                      </MenuItem>
                    </SubMenu>
                  </div>
                </Menu>
              </div>
            </SidebarContent>
          </ProSidebar>
        </div>
      </div>
    </>
  );
};

export default SideNav;
