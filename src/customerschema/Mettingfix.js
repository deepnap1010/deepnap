import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Apps.module.css'
import Stepper from '../customerschema/Stepper/Stepper';
import List from './List';
import Plain from './Plain';
export default function Mettingfix() {
  return (
   <>
   <Stepper state="Meeting fix"/>
   <button class="btn btn-danger" type="submit"  style={{marginLeft:"85%"}} >Not Intrested</button>
   <br/>
<List/>
<br></br>
<br></br>
<br></br>
<br></br>
<Plain/>
<div class="col-5">
{/* <Link to="/status">    <button class="btn btn-primary" type="submit"  style={{marginLeft:"80vw " ,width:"15vw",marginBottom:"5px"}}>Next</button></Link> */}

  </div>



   
   
   </>
  )
}
