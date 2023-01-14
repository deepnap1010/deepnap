import React, { useState, useEffect } from "react";
import "./Form.css";
import axios from "axios";
import Navbar from "../SalesComponent/Navbar";
import { Link,useParams } from 'react-router-dom'
import Avatar from "react-avatar-edit";

export default function UserDashboard(props) {
  // for new button






  // const wordCount = item.Remarks.split(' ').length;
  // const overflowStyle = wordCount > 20 ? { overflow: 'scroll' } : null;

















  const _id=""+useParams().id;



  const [how, setHow] = useState(false);
  const [show, setShow] = useState(false);
  const [edit,setEdit]=useState(false);
  const [data,setData]=useState();
  const [id,setId]=useState("");
  // for table data save and show
  const [product, setProduct] = useState([]);
  const [sendRequest, setSendRequest] = useState(false);
  const [delet,setDelet]=useState("");
      

  useEffect(() => {
    const getproductdata = async () => {
      try {
        const data = await axios.get(`http://localhost:9000/student/agent/customer/${_id}`);
      
        setProduct(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    getproductdata();
  }, [sendRequest,edit,delet]);

  


  return (
    <>
      <Navbar  title="Customer Dashboard "/>
        <div className="container-fluid  mytable">
          <div className="row flex-nowrap">
          
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <h1 className="page-header">Dashboard</h1>

            

                  <h2 className="sub-header">Manage Customer</h2>
                   <div className="table-responsive">
                
                     <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Sr. no</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Status</th>
                      <th>City</th>
                      <th>B.name</th>
                      <th>B.type</th>
                      <th>Remarks</th>
                      <th><th>whatsapp</th></th>
                      <th>Email</th>
                    
                    
                    </tr>
                      </thead>
                           <tbody>
                    {product.map((item, i) => {
                      return (
                        <tr key={i}>
                             <td>{i+1}</td>
                           
                      
                         <td  > <Link to={{pathname:`/lead/${item._id}`}} style={{color:"blue"}}>{item.name} </Link></td>
                          
                          <td>{item.email}</td>
                          <td>{item.mobile}</td>
                          <td >{item.status}</td>
                          <td>{item.city}</td>
                          <td>{item.B_name}</td>
                          <td>{item.B_type}</td>

                          <textarea rows={3} cols={30} style={{border:"none"}}>{item.Remarks}</textarea>

                          
                          <td> <a  href={"https://wa.me/+91" +item.mobile } style={{ color: "blue" }}> <i class="fa fa-whatsapp" aria-hidden="true" style={{
                           color: "Green",
                         marginLeft:"2vw",
                           fontSize: "2rem",
                           backgroundColor: "transparent",
                         }}>     </i>
                       
                          
                            </a> </td>
                            <td><a  href={"mailto:gopalasthana36@gmail.com"+item.email} style={{ color: "blue" }}> <i class="fa fa-envelope" aria-hidden="true" style={{
                           color: "black",
                         marginLeft:"2vw",
                           fontSize: "2rem",
                           backgroundColor: "transparent",
                         }}>     </i>
                       
                          
                            </a>  </td>
                          
                          {/* <td>{item.password</td> */}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="row  bbt  " >
          <div className="col-3 lmg">
          <Link to="/"><button type="button" className="btn btn-danger ">Logout</button></Link>
          </div>



         
         
          <div className="col-3 ml-5">
       {   <Link to={{pathname:`/cfollow/${_id}`}} style={{color:"black"}}>     <button
              className="btn btn-primary"
              type="submit"
           
            >
               New Customer
            </button></Link>
            }
          </div>


         
        </div>
       





       
      
    </>
  );
}


// function createPost () {
//   console.log("reach")
//    axios({
//      method: "post",
//      url: `http://localhost:9000/student/customer/${_id}`,
//    data: {
//        name: inputdata.name,
//        email: inputdata.email,
//        mobile: inputdata.mobile,

//        state:inputdata.state,
//        city:inputdata.city,
//        B_name:inputdata.B_name,
//        B_type:inputdata.B_type ,
// status:"follow_up",

//        Remarks: inputdata.Remarks,
    
//      },
//    })
//      .then(function (response) {
       
//        console.log(response);
//      })
//      .catch(function (error) {
//        console.log(error);
//      });
//  };


// // update data in the database
//  const createUpdate = () => {
//   setId(data._id)

//    axios({
//      method: 'put',
//      url: `http://localhost:9000/student/customer/${id}`,
//      data: {
//        name: data.name,
//        email: data.email,
//        mobile: data.mobile,

//        state:data.state,
//        city:data.city,
//        B_name:data.B_name,
//        B_type:data.B_type ,
//        status:"follow_up",

//        Remarks: data.Remarks,
    
      
//      },
//    })
//      .then(function (response) {
//        console.log(response);
//      })
//      .catch(function (error) {
//        console.log(error);
//      });
//  };


//  //delete the data database
//  function createDlete(e) {
//    setId(data._id)
//    console.log(id)

//    axios({
//      method: 'delete',
//      url: `http://localhost:9000/student/customer/${id}`,
//     })
//      .then(function (response) {
//        console.log(response);
//      })
//      .catch(function (error) {
//        console.log("bye");
//        console.log(error);
//      });
//  };


//  const changehandle = (e) => {
//    const { name, value } = e.target;
//    SetInputdata({ ...inputdata, [name]: value });
//    console.log(inputdata);
//  };

//  // edit function code
//  const changehandles = (e) => {
//    const { name, value } = e.target;
//    setData({ ...data, [name]: value });
  
//  };



                          {/* <td>
                            <button className="btn "  onClick={()=>{
                              setEdit(true)
                               setData(item)
                             
                             
                          

                            }} >✏️</button>
                           
                          </td>
                          
                          <td>
                            <button
                              className="btn   bi bi-trash"
                              style={{
                                color: "red",
                                border: "none",
                                fontSize: "2rem",
                                backgroundColor: "transparent",
                              }}
                              onClick={()=>{
                                setDelet(item._id)
                                axios({
                                  method: 'delete',
                                  url: `http://localhost:9000/student/customer/${item._id}`,
                                 })
                                  .then(function (response) {
                                    console.log(response);
                                  })
                                  .catch(function (error) {
                                    console.log("bye");
                                    console.log(error);
                                  });
                              }
                             } ></button>
                          </td> */}