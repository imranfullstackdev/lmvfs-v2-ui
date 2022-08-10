import React,{useState} from "react";
import "./App.css";
import Crmlogin from "./component/Login/Crmlogin";
// import SideNav from "./component/SideNav";
import SideNav from "./component/UIDesign/SideNav";
// import Crmregister from "./component/Crmregister";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddEmployee from "./component/USERS/AddEmployee";
import ViewEmployee from "./component/USERS/ViewEmployee";
// import EmployeeDesignation from "./component/EmployeeDesignation";
import EmployeeDesignation from "./component/Designation/EmployeeDesignation";
import Logohead from "./component/UIDesign/Logohead";
import Otppage from "./component/Login/Otppage";
import AddBranch from "./component/Branch/AddBranch";
import EmployeeValidation from './validations/AddEmployeeValidation'
import EditEmployee from "./component/USERS/EditEmployee";
import Sales from "./component/SALES/Sales";

function App() {
  const [modalShow, setModalShow] = useState(false);


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Crmlogin />} />
          <Route path="Logohead" element={<Logohead />} />
          <Route path="SideNav" element={<SideNav />} />
          {/* <Route path="Crmregister" element={<Crmregister />} /> */}
          <Route path="AddEmployee" element={<AddEmployee />} />
          <Route path="ViewEmployee" element={<ViewEmployee/>} />
          <Route path="EmployeeDesignation" element={<EmployeeDesignation />} />
          <Route path="Otppage" element={<Otppage />} />
          <Route path="AddBranch" element={<AddBranch />} />
          <Route path="EmployeeValidation" element={<EmployeeValidation />} />
          <Route path="EmployeeValidation" element={<EmployeeValidation />} />
          <Route path="EditEmployee" element={<EditEmployee />} />
          <Route path="Sales" element={<Sales/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
