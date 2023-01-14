import React from "react";
import video from "./Assest/vid1.mp4";
import "./Signup.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function SignupComponent(props) {
 
  const navigate = useNavigate();
  const [formvalue, setValue] = useState({
    name: "",
    email:"",
    department:"",
    password: "",
    confirm_password:"",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValue({ ...formvalue, [name]: value });
  };
   

  const handleForm = (e) => {
    e.preventDefault();
  };

// for get id from database























  function createPost() {
    axios({
      method: "post",
      url: "http://localhost:9000/student/agent",
      data: {
        name: formvalue.name,
        email: formvalue.email,
        department:formvalue.department,
        password: formvalue.password,
        confirm_password:formvalue.confirm_password,
      },
    })
      .then((response) => {
        if (response.data.message === "validataion successsfully") {
          alert("Welcome to team");

          navigate("/");
        } else {
          alert("Oops! Something Wrong");
        }
      })
      .catch(function (error) {
        alert("something went wrong in regitration ");
      });
  }

  function show() {
    var x = document.getElementById("inlineFormInputGroup3");
    var y = document.getElementById("inlineFormInputGroup4");
    if (x.type === "password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
  }

  return (
    <section className="vh-100" id="video">
      <video src={video} autoPlay muted loop></video>
      <div className="overlay"></div>

      <div className="container n py-5 h-100" id="container">
        <div className=" d-flex justify-content-center align-items-center h-100">
          <div className="card rounded" id="card1">
            <div className="card-body" >
              <h3 className="mt-1 mb-4 text-center">Create An Account
                </h3>
                
              <form action="" onSubmit={handleForm}>
                <div className="col-auto ">
                
                  <label className="sr-only" htmlFor="inlineFormInputGroup1">
                    Username
                  </label>
                  <div className="input-group mb-4">
                    <span className="input-group-text bg-warning">
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroup1"
                      placeholder="Username"
                      name="name"
                      value={formvalue.name}
                      onChange={handleInput}
                    />
                  </div>
                </div>

                <div className="col-auto ">
                  <label className="sr-only" htmlFor="inlineFormInputGroup2">
                    E-mail
                  </label>
                  <div className="input-group mb-4">
                    <span className="input-group-text bg-warning">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      id="inlineFormInputGroup2"
                      placeholder="Email"
                      name="email"
                      value={formvalue.email}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                
                <div className="col-auto ">
                  <label className="sr-only" htmlFor="inlineFormInputGroup3">
                    Department
                  </label>
                  <div className="input-group mb-4">
                    <span className="input-group-text bg-warning">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                    <select class="form-select" aria-label="Default select example" name="department"
                      value={formvalue.department}
                      onChange={handleInput}
                         >
  <option selected>Department</option>
  <option value="Admin">Admin
  
  </option>
  <option value="Sales">Sales</option>
  <option value="Agent">Agent</option>
</select>









                  </div>
                </div>

                <div className="col-auto ">
                  <label className="sr-only" htmlFor="inlineFormInputGroup3">
                    Password
                  </label>
                  <div className="input-group mb-4">
                    <span className="input-group-text bg-warning">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control "
                      id="inlineFormInputGroup3"
                      placeholder="Password"
                      name="password"
                      value={formvalue.password}
                      onChange={handleInput}
                    />
                  </div>
                </div>

                <div className="col-auto ">
                  <label className="sr-only" htmlFor="inlineFormInputGroup4">
                    Confirm Password
                  </label>
                  <div className="input-group mb-2">
                    <span className="input-group-text bg-warning">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="inlineFormInputGroup4"
                      placeholder="Confirm Password"
                      name="confirm_password"
                      value={formvalue.confirm_password}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="form-check ">
                  <label className="form-check-label" htmlFor="">
                    Show Password
                  </label>
                  <input
                    type="checkbox"
                    id="fromCheckDefault"
                    className="form-check-input"
                    value="Show Password"
                    onClick={show}
                  ></input>
                </div>

                <div className="row">
                    <div className="col-sm-4 mx-auto d-grid">
                      <button onClick={createPost}  className="btn btn-primary btn-block mt-4 mb-2 text-center ">SUBMIT</button>
                    </div>
                   </div>
                   <Link to="/" className="text-white">
                    Already have an Account
                  </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
