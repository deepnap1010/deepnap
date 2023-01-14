import { useState , useEffect } from "react";
import './Sale.css';
import axios from "axios";
import { Link, UNSAFE_DataStaticRouterContext } from "react-router-dom";
export default function Button() {
   
    const [show,setShow] =useState(false);
    const [edit,setEdit]=useState(false);
    const [data,setData]=useState();
    const [id,setId]=useState("");
    const [how,setHow] =useState(false);
    const[delet,setDelet]=useState("")
    // const [isBlurred, setIsBlurred] = useState(false);

    // for table data save and show
      const [product,setProduct]=useState([]);
    const [sendRequest, setSendRequest] = useState(false);
    // image code
    
    
    
    // table data fetching and show
    

    
    useEffect(()=>{
    
      const getproductdata=async()=>{
        try{
          const data=await axios.get("http://45.90.109.11:9000/student/agent");
          data.data.map((data)=>(
            console.log(data.name)
          ))
          setProduct( data.data)
        }
        catch(e){
        //   console.log(e)
        }
      }
    getproductdata()
    
    
    } , [sendRequest,edit,delet]);
     
    
      const[inputdata,SetInputdata]=useState({
        name:"",
        email:"",
        password:"",
         department:""

      });
    
    // data posting <code></code>
    
    const createPost = () => {
    
      console.log(id)
    
        axios({
          method: 'post',
          url: 'http://45.90.109.11:9000/student/agent',
          data: {
            name:inputdata.name,
            email:inputdata.email,
             department:inputdata.department,
            password:inputdata.password,
          }
      })
      .then(function (response) {
           console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
        
      }
    
      
      const changehandles = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        // SetInputdata({...setData,[name]:value});
      };

        const changehandle = (e) => {
          e.preventDefault();
          const { name, value } = e.target;
          SetInputdata({ ...inputdata, [name]: value });
          console.log(inputdata);
        };

// For Update

const createUpdate=(e)=> {
 
  console.log(id)

  
};




// for delete


const  createDlete=()=> {
 
  console.log(id)
  setDelet(true);
  axios({
    method: 'delete',
    url: `http://45.90.109.11:9000/student/agent/${id}`,
   })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log("bye");
      console.log(error);
    });
};


  return (

    <>
 
    <div >
   
    <br></br>
    <br></br>
    <br></br>

    <div className="container-fluid  mytable" style={{ borderRadius:"8px"}}>
          <div className="row flex-nowrap">
          
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

                  <h2 className="sub-header">Manage Agents</h2>
                  <div         >
      <input
        className="form-control me-4 "
        type="search"
        placeholder="Search"
        aria-label="Search"
        
      />
      <button className="btn btn-outline-success me-4" type="submit" >Search</button>
     
    </div>

    <div className="table-responsive ">
                
                <table className="table table-striped">
             
              
                <thead>
                <tr>
                <th> Sr.No</th>
                 <th>Name</th>
                 <th>Email</th>
                 <th>Department</th>
                 <th>Edit</th>
                 <th>Delete</th>
                 </tr>
                </thead>
                 
               
             
                      <tbody>
               {product.map((item, i) => {
                 return (
                   <tr>
                    <td>{i+1}</td>
                     <td  ><Link to={{
                      pathname:`/form/${item._id}`
                     }} ><buttton style={{ color: "black" }} >{item.name}</buttton>  </Link> </td>

                     <td>{item.email}</td>
                     <td>{item.department}</td>
                   
                    
                     {/* <td>{item.password</td> */}
                     <td>
                       <button className="btn " 
                        onClick={()=>{
                         setEdit(true)
                         setData(item)
                     
                       }} 
                       >✏️</button>
                      
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
                          setDelet(true)
                    
                          axios({
                            method: 'delete',
                            url: `http://45.90.109.11:9000/student/agent/${item._id}`,
                           })
                            .then(function (response) {
                              console.log(response);
                            })
                            .catch(function (error) {
                              console.log("bye");
                              console.log(error);
                            });
                        }
                       }
                          ></button>
                     </td>
                   </tr>
                 );
               })}
             </tbody>
           </table>
         </div>
         </div>
         </div>
         </div>

         <br></br>
   <div className="container mt-4 mb-lg-4 botem ">
    <div className="row ">
      <div className="col-sm-8 "><Link to="/"><button type="button" className="btn btn-danger ">Logout</button></Link></div>
      <div className="col-sm-2"><button type="button" className="btn btn-success  shadow-lg" onClick={()=>setShow(!show)}>Create user</button></div>
    </div>
    <br/>
    <br/>


{/* </>
    )
  }
)

} */}
</div>
  
  </div>



{ show &&


   <div className="container " id="move">
<form className="row g-3"   onSubmit={createPost} method="Post">
<button id='cross' onClick={()=>setShow(!show)} >❌</button>
<div className="row mb-3">
    <label htmlFor="inputtext" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-5">
      <input type="text" className="form-control"   id="" name='name' value={inputdata.name} onChange={changehandle}/>
      
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-5">
      <input type="email" className="form-control" id="inputEmail3"name='email' value={inputdata.email} onChange={changehandle}/>
    </div>
  </div>
 
  <div className="row mb-3">
    <label htmlFor="inputtext" className="col-sm-2 col-form-label">Department</label>
    <div className="col-sm-5">
      <input type="text" className="form-control" id="inputtext" name='department' value={inputdata.department} onChange={changehandle}/>
    </div>
  </div>

  <div className="row mt-2  ">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-5">
      <input type="password" className="form-control" id="inputPassword3"name='password' value={inputdata.password} onChange={changehandle}/>
    </div>
  </div>
  <div className="col-10">
    <button type="submit" className="btn btn-primary"  onChange={changehandle} >Submit</button>
  </div>
  <div className="col-2">
   
  </div>
 

</form>



</div>


}


{ edit &&

(
  <div className="container " id="move">
    <form className="row g-3" >
      <button id="cross" onClick={()=>setEdit(!edit)}    >
        ❌
      </button>
      <div className="row mb-3">
        <label htmlFor="inputtext" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id=""
            name="name"
            value={data.name}
            onChange={changehandles}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label
          htmlFor="inputEmail3"
          className="col-sm-2 col-form-label"
        >
          Email
        </label>
        <div className="col-sm-5">
          <input
            type="email"
            className="form-control"
            id="inputEmail3"
            name="email"
            value={data.email}
            onChange={changehandles}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label
          htmlFor="inputmobile"
          className="col-sm-2 col-form-label"
        >
          Department
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="inputmobile"
            name="department"
            value={data.department}
            onChange={changehandles}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputtext" className="col-sm-2 col-form-label">
          password
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="inputtext"
            name="password"
            value={data.password}
            onChange={changehandles}
          />
        </div>
      </div>
     
     
      <div className="col-10">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={()=>{
            axios({
              method: 'put',
              url: `http://45.90.109.11:9000/student/agent/${data._id}`,
              data: {
                name: data.name,
                email: data.email,
                password:data.password,
                department:data.department
               
              },
            })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
          
        >
          Update
        </button>
      </div>
      
    </form>
  </div>
)






}

















    </>
  )
}



