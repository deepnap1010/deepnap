import React, { useState } from 'react'
import { Link ,useParams} from 'react-router-dom'

import Stepper from './Stepper/Stepper'
export default function Status() {
    const[date,setDate]=useState(false);
    const _id1=""+useParams().id1;
    const _id2=""+useParams().id2;
   
  return (
    <>
    <Stepper state={"M Status"}/>
    <button class="btn btn-danger" type="submit"  style={{marginLeft:"85%"}} >Not Intrested</button>
    <br/>
    <div class="container " style={{border:"2px solid black", borderRadius:"15px", width:"50vw", paddingLeft:"15vw", paddingTop:"50px", paddingBottom:"50px"}}>
   <button type="button" class="btn btn-primary btn-lg">Meeting Status</button>

   <div class="form-check" style={{color:"black",padding:"5px"}}>
  <input class="form-check-input" type="radio" value="one"name='one' id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Sucessfull
  </label>
</div>
<div class="form-check" style={{color:"black",padding:"5px"}}>
  <input class="form-check-input" type="radio" value="one" name="one"id="flexCheckDefault" onClick={()=>{setDate(!date)}}/>
  <label class="form-check-label" for="flexCheckDefault">
    take time
  </label>
</div>

<div class="row">
  <div class="col-5">
  {date &&
    <input type="date" class="form-control" placeholder="First name" aria-label="First name"/>
}
  </div>

</div>
<div class="col-5" style={{color:"black",padding:"5px"}}>
<Link to={{
                      pathname:`/status/${_id1}/${_id2}}`
                     }}>    <button class="btn btn-primary" type="submit"  >Next</button></Link>

  </div>




</div>
    
    </>
  )
}
