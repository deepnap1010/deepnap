import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
 
  <div>
         
  <nav class="navbar navbar-expand-lg  bg-body-tertiary p-2 fixed-top">
  <div class="container-fluid  ">
    <a class="navbar-brand " >Admin</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
     
      </ul>
      <form class="d-flex" role="search">
   
      <ul class="navbar-nav me-5">
       
        
       <li class="nav-item dropdown">
         <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Department
         </a>
         <ul class="dropdown-menu">
           <Link to='/sales'> <li><a class="dropdown-item" href="#">Sales</a></li></Link>
           <li><a class="dropdown-item" href="#">DigitalMarketing</a></li>
           
           <li><a class="dropdown-item" href="#">Dialor</a></li>
         </ul>
       </li>
       
     </ul>
     <ul class="navbar-nav  me-5">
       
        
       <li class="nav-item dropdown">
         <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="default">
           User
         </a>
         
         <ul class="dropdown-menu ">
           <li><a class="dropdown-item" href="#">Team Leader</a></li>
           <li><a class="dropdown-item" href="#">Agent</a></li>
           <li><a class="dropdown-item" href="#">Customer</a></li>
         </ul>
       </li>
       
     </ul>
<div className='mobile' current-Count="8">
      <i class='fa fa-phone me-4' style={{color: "green", fontSize:"35px",marginTop:"1vh",paddingRight:"3vw"}}> </i></div>
      

      <Link to="/"><button type="button" className="btn btn-danger ">Logout</button></Link>
  
  
      </form>
    </div>
  </div>
</nav>


         
         <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark mmn fixed-top " style={{marginTop:"6.5vh"}}>
                     <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                         <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                             <span class="fs-5 d-none d-sm-inline">Menu</span>
                         </a>
                         <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                             <li class="nav-item">
                                 <a class="nav-link align-middle px-0 text-white">
                                    <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline " id="home" current-Count="8">All</span>   
                                 </a>
                             </li>
                             <li>
                                 <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                                     <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline" id="follo" current-Count="1">Follow-Up</span> </a>
                                
                             </li>
                             <li>
                                 <a class="nav-link px-0 align-middle text-white">
                                     <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline" id="lead" current-Count="5">Lead</span></a>
                             </li>
                             <li>
                                 <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                                     <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline" id="meet" current-Count="10">Metting</span></a>
                                 
                             </li>
                             <li>
                                 <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                                     <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Plain Selected</span> </a>
                                     
                             </li>
                             <li>
                                 <a class="nav-link px-0 align-middle text-white">
                                     <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline text-white"id="payment" current-Count="0">Payment</span> </a>
                                     <li>
                                 <a class="nav-link px-0 align-middle text-white">
                                     <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline text-white"id="satisfication" current-Count="50">Satisfaction</span> </a>
                             </li>
                             <li>
                                 <a class="nav-link px-0 align-middle text-white">
                                     <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline text-white"id="notintrested" current-Count="6">Not Intrested</span> </a>
                             </li>
                             <li>
                                 <a class="nav-link px-0 align-middle text-white">
                                     <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline text-white">Select Date </span> </a>
                                     <div class="col">
    <label for="validationServerUsername" class="form-label">From   -   To</label>
    
    
      <input type="date" class="form-control text-white" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" />
     
      <input type="date" class="form-control text-white" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" />
  
  </div>
                             </li>
                             </li>
                         </ul>
                         <hr/>
                        
                                       </div>
                            </div>
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
             </div>



    </>
  )
}
