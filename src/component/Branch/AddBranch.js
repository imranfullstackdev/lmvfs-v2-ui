import { useState, useEffect, useMemo } from "react";
// import SideNav from "../SideNav";
import SideNav from "../UIDesign/SideNav";
import Logohead from "../UIDesign/Logohead";
import { FaUserEdit } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { MdDeleteSweep } from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import "../App.css";

import { Container, Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

//import Pagination from "./Pagination";

const AddBranch = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState({
    CBankBranch: "",
    companylocation: "",
  });
  const { CBankBranch, companylocation } = data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //get req from backend
  const getRequest = async () => {
    const res = await fetch(`http://localhost:8001/branchloc/api/v1/get`);
    const jsonData = await res.json();
    setAllUsers(jsonData);
  };
  useEffect(() => {
    getRequest();
  }, []);
  //////////////////////////////////////////////////////////////

  const handleEdit = async (id) => {
    if (CBankBranch === "") {
      alert('enter bank branch')
    }
    else if (companylocation === "") {
      alert('enter bank companylocation')
    }else{
    const response = await fetch(
      `http://localhost:8001/branchloc/api/v1/put/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    console.log("edited");
    window.location.reload()
  };
}

  //////////////////////
  // delete req
  const handleDelete = async (id) => {
    const confirm = window.confirm(`Are you sure to delete`);
    if (confirm) {
      const deleteItem = await fetch(
        `http://localhost:8001/branchloc/api/v1/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      setAllUsers(allUsers.filter((user) => user.id !== id));
    }
  };
  /////////////////////////////////////////////////////////////////////////////////
  // @Post req
  const submitHandle = async (e) => {
    e.preventDefault();
    const body = data;
    console.log(body);

    const response = await fetch(`http://localhost:8001/branchloc/api/v1/post`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(body),
    });
  const parseRes = await response.json()
  alert()

    window.location.reload();
  };

  // for opening and closing the model
  const [show, setShow] = useState(true);

  const handleClose = () => {
    window.location.reload()
  };
  const handleShow = () => setShow(true);
  //////////////////////////////////////////////////////////////////
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value.toUpperCase() });
  };

  return (
    <>
      {<Logohead />}

      {/* pagination */}

      <div style={{ background: "#00adff" }}>
        <h3 className="text-center">
          <b className="text-white">Branch & Location</b>
        </h3>
      </div>
      <SideNav />
      <div className="text-center mb-3">
        <h5 className=" mt-5" id="empdeslabel1" style={{ color: "#00adff" }}>
          ADD BRANCH & LOCATION
        </h5>
        {/* this is form for posting designation req */}

        {/* ////<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></> */}
        <form onSubmit={submitHandle} className="mt-3" id="addbranchForm">
          <div className="text-center" id="ressearch">
            <b>Add Branch:</b>
            <br />
            <input
              style={{
                width: "271px",
                borderRadius: "6px",
                // marginLeft: "45vw",
                padding: "7px",
              }}
              type={"text"}
              className="text-center mb-2"
              name="CBankBranch"
              value={CBankBranch}
              onChange={changeHandler}
              placeholder="Add Branch"
              required
            />
            <br />
            <b>Add Location:</b>
            <br />
            <input
              style={{
                width: "271px",
                borderRadius: "6px",
                // marginLeft: "45vw",
                padding: "7px",
              }}
              type={"text"}
              className="text-center mb-2"
              name="companylocation"
              value={companylocation}
              onChange={changeHandler}
              placeholder="Add Branch"
              required
            />

            <br />
            <button
              className="btn b-border-3 mt-3"
              style={{
                backgroundColor: "#00adff",
                color: "whitesmoke",
                // marginLeft: "72px",
              }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <h5
        className=" mt-5 mb-3 text-center"
        id="empdeslabel4"
        style={{ color: "#00adff" }}
      >
        BRANCH & LOCATION
      </h5>

      <div className=" d-flex text" style={{ overflowX: "auto" }}>
        <div className="mb-3 mt-3" style={{ marginLeft: "110px" }}>
          {/* search Form */}
          <div className="d-flex mt-2" id="viewEmployeeres">
            <div
              className="ml-5"
              id="viewEmployeeinput"
              style={{
                marginLeft: "100px",
                width: "144px",
                borderRadius: "8px",
                height: "33px",
              }}
            ></div>
          </div>
          {/* end of search Form */}

          <table
            className="table table-bordered mt-3 "
            id="viewEmployeeTable"
            style={{ width: "68vw", marginLeft: "100px" }}
          >
            <thead>
              <tr style={{ background: "#00adff" }}>
                <th className="text-center" scope="col">
                  <b className="text-white">Company Branch</b>
                </th>
                <th className="text-center" scope="col">
                  <b className="text-white">Location</b>
                </th>
                <th className="text-center text-white">Edit</th>
                <th className="text-center  text-white">Delete</th>
              </tr>
            </thead>
            <thead>
              <tr></tr>
            </thead>
            {allUsers.map((user) => {
              return (
                <tbody className="align-center">
                  {/*  */}
                  <tr key={user.id}></tr>
                  {/*  */}
                  <tr>
                    <td className="text-center" scope="col">
                      {user.companybranch}
                    </td>
                    <td className="text-center" scope="col">
                      {user.location}
                    </td>

                    <td>
                      {/* edit button */}

                      <button
                        className="viewEmployeeBtn text-center"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target={`#id${user.id}`}
                      >
                        <FaUserEdit />
                      </button>
                    </td>
                    {/* delete button */}

                    <td>
                      <button
                        className="viewEmployeeBtn text-center"
                        onClick={() => handleDelete(user.id)}
                      >
                        <MdDeleteSweep />
                      </button>
                    </td>
                  </tr>
                  {/* Modal form*/}
                  <div className="modal" id={`id${user.id}`}>
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Edit Designation
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {/* //////modal form */}

                          <form
                            className="mt-3"
                            id="addbranchForm"
                          >
                            <div className="text-center" id="ressearch">
                              <b>Add Branch:</b>
                              <br />
                              <input
                                style={{
                                  width: "271px",
                                  borderRadius: "6px",
                                  // marginLeft: "45vw",
                                  padding: "7px",
                                }}
                                type={"text"}
                                className="text-center mb-2"
                                name="CBankBranch"
                                defaultValue={user.companybranch}
                                onChange={changeHandler}
                                placeholder="Add Branch"
                                required
                              />
                              <br />
                              <b>Add Location:</b>
                              <br />
                              <input
                                required={true}
                                style={{
                                  width: "271px",
                                  borderRadius: "6px",
                                  // marginLeft: "45vw",
                                  padding: "7px",
                                }}
                                type={"text"}
                                className="text-center mb-2"
                                name="companylocation"
                                defaultValue={user.location}
                                onChange={changeHandler}
                                placeholder="Add Branch"
                              />
                              <br />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                         <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={() => handleEdit(user.id)}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <tr></tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default AddBranch;
