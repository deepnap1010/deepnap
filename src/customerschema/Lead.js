import React, {useEffect, useState} from 'react'
import { Link , useParams } from 'react-router-dom'
import axios from "axios";
import style from './Apps.module.css'
import Stepper from '../customerschema/Stepper/Stepper';

export default function Lead() {
    const [metting, setMetting] = useState(false);
    const [physicalmetting, setPhysicalmetting] = useState(false);
    const [virtualmetting, setVirtualmetting] = useState(false);
    const[slider,setSlider]=useState(true);
    const [show, setShow] = useState(false);
    const _id=""+useParams().id; 

    const[date,setDate]=useState({

        date:""
            });
         const [textarea,setTeaxarea]=useState({
        
          textarea:""
          
          
        
            });

    useEffect(()=>{

    },[slider])
       const handlechange = (e) => {
        const { name, value } = e.target;
        setDate ({ ...date, [name]: value });
        
      
      };


  return (
    <>
     <Stepper state={"Lead"}/>
<div className={`${style.container} ${style.follow}`}>
  <div class="container">
  
  <div class="row mb-5 ">
    <div class="col-9">  <button type="button" class="btn btn-primary btn-lg"onClick={() => setMetting(!metting)}>Metting</button></div>
 
  </div>


</div>
{metting &&
<div class="row justify-content-around mb-5 ml-0">
    <div class="col-4">
   {  <button type="button" class="btn btn-primary btn-lg"onClick={() => {
      setPhysicalmetting(true)
      setVirtualmetting(false) 
    
    
    }}>Physical Meeting</button>}
    </div>
    <div class="col-4">
    { <button type="button" class="btn btn-primary btn-lg"onClick={() => {
      setPhysicalmetting(false)
      setVirtualmetting(true)}}>Virtual Metting</button>}
    </div>
  </div>
  }
  <div class="container text-center mb-5">
  <div class="row align-items-start mb-5 ">
   {physicalmetting &&    <div class="col-3">
    <button type="button" class="btn btn-primary btn-lg">Metting Adress</button>
   
    </div  > }
   
   
    {physicalmetting && 
    <div class="col-3">
    <button type="button" class="btn btn-primary btn-lg" >Meeting date</button>
    </div>  }
   
   
    {virtualmetting &&
    <div class="col-3">
    <button type="button" class="btn btn-primary btn-lg">Metting Date</button>
    </div>}
   
   
    {virtualmetting &&
    <div class="col-3">
       <button type="button" class="btn btn-primary btn-lg">Meeting Link</button>
    </div>}
    
  </div>
</div>
<div className='d-flex ms-2 px-5'>
{physicalmetting && 
          <textarea
          name="textarea"
          rows="10"
          cols="50"
         
        
        >

        </textarea>                                        }
      
      {physicalmetting && 
     <div className='ms-4'>  <input type="date" name='date' value={ date.date}  onChange={handlechange}></input> </div>}

{virtualmetting && 
     <div className='ms-4'>  <input type="date" name="date" value={ date.date}  onChange={handlechange}></input> </div>}

{virtualmetting && 
     <div className='ms-4'>  <a href="#">Click to join a meeting</a> </div>}
   
   </div>



{metting &&
<div class="row justify-content-around mb-5 ml-0">
    <div class="col-4">
<Link to={{pathname:`/mettingfix/${_id}`}}> <button type="submit" class="btn btn-primary btn-lg" onClick={() => {


 setPhysicalmetting(! physicalmetting)}}>Next</button> </Link>
    </div>
    
  </div>
  }


</div></>
  )
}
