import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";

const AddBranchModel = (user) => {
  console.log(user.companybranch)
  const [data, setData] = useState({
    CBankBranch: "",
    companylocation: "",
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandle = async (e) => {
    e.preventDefault();
    const body = data;
    console.log(body);

    const response = await fetch(
      `http://localhost:8001/branchloc/api/v1/post`,
      {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(body),
      }
    );
    const parseRes = await response.json();
    alert();

    window.location.reload();
  };

  const handleClose = () => {
    window.location.reload();
  };
  const handleEdit = async (id) => {
    window.location.reload();
    const response = await fetch(
      `http://localhost:8001/branchloc/api/v1/put/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
      );
      
    console.log("edited");
    
  };
  return (
    <>
      <button
        className="viewEmployeeBtn text-center"
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#id${user.id}`}
      >
        <FaUserEdit />
      </button>
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

              <form onSubmit={submitHandle} className="mt-3" id="addbranchForm">
                <div className="text-center" id="ressearch">
                  <b>Add Branch:</b>
                  <br />
                  <input
                    style={{
                      width: "271px",
                      borderRadius: "6px",
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
              <button variant="secondary" onClick={handleClose}>
                Close
              </button>

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
    </>
  );
};

export default AddBranchModel;
