import React, { useState, useEffect } from "react";
import video from "./Assest/vid2.mp4";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginComponent(props) {
  const navigate = useNavigate();
  const[product,setPtoduct]=useState([]);
  const [forvalue, setValue] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValue({ ...forvalue, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

// for fetch id

useEffect(() => {
  const getproductdata = async () => {
    try {
      const data = await axios.get("http://localhost:9000/student/agent");
    
      setPtoduct (data.data.id);
     
    } catch (e) {
      console.log(e);
    }
  };
  getproductdata();
}, []);

// {
// product.map((item,i)=>{
//   return(
//     <>     
//       {item._id}
//     </>

//   );
// })



// }
















  function createPost(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:9000/student/login",
      data: {
        email: forvalue.email,
        password: forvalue.password,
      },
    })
      .then((response) => {
        console.log(response.data.message._id)
        if(response.data.message.department==="Agent"){
          //write code for nevigate
         
          navigate(`/form/${response.data.message._id}`);
          console.log(response.data.message)
        }else if(response.data.message.department==='Admin'){
           //write code to nevigate admin

           navigate('/dashboard');
        }else if(response.data.message.department==='Sales'){
          //write code to nevigate sales
          navigate('/sales');
        }else{

        }
      })
      .catch(function (error) {
        alert("something went wrong in regitration ");
      });
  }
  return (
    <>
      <section className="vh-100" id="video">
        <div className="overlay"></div>
        <video src={video} autoPlay muted loop></video>
        <div className="container py-5 h-100" id="container"> 
          <div className=" d-flex justify-content-center align-items-center h-100">
            <div className="card rounded" id="card1">
              <h3 className="mt-1 mb-4 text-warning text-center">Log in</h3>

              <span className="icon row m-auto rounded-circle text-white mb-4">
                <i className="fa-solid fa-circle-user text-center"></i>
              </span>

              <div className="card-body text-center">
                <form action="" onSubmit={handleForm}>
                  <div className="col-auto ">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">
                      Username
                    </label>
                    <div className="input-group mb-4">
                      <span className="input-group-text bg-warning">
                        <i className="fa-solid fa-user"></i>
                      </span>

                      <input
                        type="email"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder="Username"
                        name="email"
                        value={forvalue.email}
                        onChange={handleInput}
                      />
                    </div>
                  </div>

                  <div className="col-auto ">
                    <label className="sr-only" htmlFor="inlineFormInputGroup2">
                      Password
                    </label>
                    <div className="input-group mb-1">
                      <span className="input-group-text bg-warning">
                        <i className="fa-solid fa-lock"></i>
                      </span>

                      <input
                        type="Password"
                        className="form-control "
                        id="inlineFormInputGroup2"
                        placeholder="Password"
                        name="password"
                        value={forvalue.password}
                        onChange={handleInput}
                      />
                    </div>
                  </div>

                  <div className="row ">
                   <Link to="/forget"> <a
                      href="/"
                      className="text-right text-decoration-none text-white"
                    >
                      Forget Password
                    </a>      </Link>  
                  </div>

                   <div className="row">
                    <div className="col-sm-4 mx-auto d-grid">
                      <button onClick={createPost}  className="btn btn-primary btn-block mt-4 mb-2 text-center ">Login</button>
                    </div>
                   </div>

                  {/* <div className="form-group col-md">
                    <input
                      type="submit"
                      value="LOGIN"
                      className="btn btn-primary btn-block mt-4 mb-2 "
                      login-btn="true"
                      onClick={createPost}
                    />
                  </div> */}
                 
                </form>

                <div className="d-flex justify-content-center text-white link">
                  Don't have an Accunt?
                  <Link to="/signup" className="text-white">
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
