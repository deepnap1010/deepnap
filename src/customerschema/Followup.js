import React, {useEffect, useState} from 'react'
import { Link , useParams } from 'react-router-dom'
import axios from "axios";
import style from './Apps.module.css'
import Stepper from '../customerschema/Stepper/Stepper';
import { TiMediaPlayReverseOutline } from 'react-icons/ti';
export default function Followup() {
  const [content, setContent] = useState("");
   
    const[slider,setSlider]=useState(true);
    const [show, setShow] = useState(false);
    

    const[date,setDate]=useState({

date:""
    });
 const [textarea,setTeaxarea]=useState({

  textarea:""
  
  

    });
    const _id=""+useParams().id;
 
  useEffect(()=>{

  },[slider])
     const handlechange = (e) => {
      const { name, value } = e.target;
      setDate ({ ...date, [name]: value });
      
    
    };









    const handleCopyClick = () => {
      // Get the textarea element
      const textArea = document.querySelector('textarea');
  
      // Select the text in the textarea
      textArea.select();
  
      // Copy the selected text to the clipboard
      document.execCommand('copy');
    };


    const handleButtonClick = (event) => {
      event.preventDefault();
      
      setContent(" ");
    };

    

  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    let greeting;
    switch (true) {
      case currentHour < 12:
        greeting = ' Morning!';
        break;
      case currentHour < 18:
        greeting = 'Afternoon!';
        break;
      default:
        greeting = ' Evening!';
    }
    setGreeting(greeting);
  }, []);
 


    
  
    const handleSelectChange = (event) => {
      event.preventDefault();
      const selectedValue = event.target.value;
  
      if (selectedValue === "1") {
        setContent (`Hi, Good ${greeting} Sir.
As discussed 
I am sending you the ____ details.
BASIC PLAN-(DISPLAY WEBSITE OF 20 PRDCTS OF 5 PGS, GGL&FB BSZ PGS, ENQRY FORM WITH OFCL EMAILS).
Features
Our Basic+ Plan Features & Pricing
👉🏻Logo Development                     ✅
👉🏻Content Writing                           ✅
👉🏻Header Option                             ✅
👉🏻Footer Option                              ✅
👉🏻Home Page                                  ✅
👉🏻About Us Page                            ✅
👉🏻Contact Us Page                         ✅
👉🏻Landing Page                              ✅
👉🏻Social Media Button                   ✅
👉🏻Free Email's                                  3
👉🏻No. Of Pages                                5
👉🏻Products/Service                        20
👉🏻Subscribe/Quote Now               ✅
👉🏻Call Now/Apply Now                  ✅
👉🏻Lead/Enquiry/Quote Form        ✅
👉🏻Free Support                              15D
👉🏻Google Ad Campaign Tutorial ✅
👉🏻Facebook Campaign Tutorial   ✅
  
                 Pricing One-Time
Regular Price: -                       ₹15000/-
Discount: -                                      40%
Price: -                                        9000/-
Development Charge: -                  ₹0/-
------------------------------------------
Total:-                               ₹9000/+GST
------------------------------------------         
                  Pricing Monthly
Monthly: -                                   ₹750/-
Development Charge: -            ₹1500/-
Advance one month: -                ₹750/-
------------------------------------------
Total: -                               ₹3000/+GST
------------------------------------------
Please update the timing of live demo according to your actual requirement.
Thanks for giving your precious time.
Deepnap Softech
Name
Designation
www.deepnapsoftech.com
Customer Care: - +917072707091, +917042707092.`);
      }
      else if(selectedValue === "2"){

        setContent(`Hi, Good ${greeting} Sir.
As discussed 
I am sending you the ____ details.
STANDARD-(DISPLAY WEBSITE OF 40 PRDCTS OF 6 PGS, GGLBSZ PGS, ENQUIRY FORM WITH OFFICIAL EMAILS).
Features

👉🏻Logo Development                     ✅
👉🏻Content Writing                           ✅
👉🏻Header Option                             ✅
👉🏻Footer Option                              ✅
👉🏻Home Page                                  ✅
👉🏻Blog Page                                     ✅
👉🏻About Us Page                            ✅
👉🏻Contact Us Page                         ✅
👉🏻Landing Page                              ✅
👉🏻Social Media Button                   ✅
👉🏻Free Email's                                  8
👉🏻No. Of Pages                                6
👉🏻Products/Service                        40
👉🏻Subscribe/Quote Now                ✅
👉🏻Call Now/Apply Now                  ✅
👉🏻Lead/Enquiry/Quote Form        ✅
👉🏻Free Support                              15D
👉🏻Free Google Ad Campaign Tutorial✅
👉🏻Free Facebook Campaign Tutorial✅

                 Pricing One-Time
Regular Price: -                       ₹25000/-
Discount: -                                      40%
Price: -                                    ₹15000/-
Development Charge: -                  ₹0/-
------------------------------------------
Total:-                             ₹15000/+GST
------------------------------------------
                 
                   Pricing Monthly
Monthly: -                                 ₹1250/-
Development Charge: -            ₹2500/-
Advance one month: -              ₹1250/-
------------------------------------------
Total:-                               ₹5000/+GST
------------------------------------------
                 
Please update the timing of live demo according to yactual requirement.
Thanks for giving your precious time.
Deepnap Softech
Name
Designation
www.deepnapsoftech.com
Customer Care: - +917072707091, +917042707092.`);

      }
      else if(selectedValue === "3"){

        setContent(`Hi, Good ${greeting} Sir.
As discussed 
I am sending you the ____ details.
PREMIUM-E2E SALES-(Ecommerce/Appointment BookingPRDCTS - 10PGS, GGL&FB, BSZ PG, ENQRY FORM WITH OEMAILS, SMS & RV-CALLS).
Features
👉🏻Logo Development                     ✅
👉🏻Content Writing                           ✅
👉🏻Header Option                             ✅
👉🏻Footer Option                              ✅
👉🏻Home Page                                  ✅
👉🏻Blog Page                                     ✅
👉🏻About Us Page                            ✅
👉🏻Contact Us Page                         ✅
👉🏻Landing Page                              ✅
👉🏻Social Media Button                   ✅
👉🏻Free Email's                                  15
👉🏻No. Of Pages                           10SC
👉🏻Products/Service                        60
👉🏻Subscribe/Quote Now                ✅
👉🏻Call Now/Apply Now                  ✅
👉🏻Add to Cart/Buy Now                 ✅
👉🏻Payment Gateway                      ✅
👉🏻Account Login/Signup               ✅  
👉🏻Email Verification              100User
👉🏻Phone Verification             100User
👉🏻Product Listing Dashboard       ✅
👉🏻Google Business Page               ✅
👉🏻Google Map                                 ✅
👉🏻Facebook Business Page          ✅
👉🏻Lead/Enquiry/Quote Form        ✅
👉🏻Survey SMS MLY (OTD*12)       500
👉🏻SMS SENDER-ID                         ✅
👉🏻IVR Survey-Calls                       200
👉🏻Free Support                              20D
👉🏻Google Ad Campaign Tutorial ✅
👉🏻Facebook Campaign Tutorial   ✅

                 Pricing One-Time
Regular Price: -                       ₹40000/-
Discount: -                                      40%
Price: -                                    ₹24000/-
Development Charge: -                  ₹0/-
------------------------------------------
Total: -                             ₹24000/+GST
------------------------------------------
                 
                   Pricing Monthly
Monthly: -                                 ₹2000/-
Development Charge: -            ₹4000/-
Advance one month: -              ₹2000/-
------------------------------------------
Total: -                               ₹8000/+GST
------------------------------------------
Please update the timing of live demo according to yactual requirement.
Thanks for giving your precious time.
Deepnap Softech
Name
Designation
www.deepnapsoftech.com
Customer Care: - +917072707091, +917042707092.`);

      }
      else if(selectedValue === "4"){

        setContent(`Hi, Good ${greeting} Sir.
As discussed 
I am sending you the ____ details.
GOLD-E2E SALES-(Ecommerce/Appointment Booking 80 PRD- 20PGS, GGL&FB, BSZ PG, ENQRY FORM WITH OFCL EMAISMS & RV-CALLS).
Features
👉🏻Logo Development                     ✅
👉🏻Content Writing                           ✅
👉🏻Header Option                             ✅
👉🏻Footer Option                              ✅
👉🏻Home Page                                  ✅
👉🏻Blog Page                                     ✅
👉🏻About Us Page                            ✅
👉🏻Contact Us Page                         ✅
👉🏻Landing Page                              ✅
👉🏻Social Media Button                   ✅
👉🏻Free Email's                                  25
👉🏻No. of Pages                      20SC2C
👉🏻Products/Service                        80
👉🏻Subscribe/Quote Now                ✅
👉🏻Call Now/Apply Now                  ✅
👉🏻Add to Cart/Buy Now                 ✅
👉🏻Payment Gateway                      ✅
👉🏻Account Login/Signup               ✅  
👉🏻Email Verification              200User
👉🏻Phone Verification             200User
👉🏻Product Listing Dashboard       ✅
👉🏻Google Business Page               ✅
👉🏻Google Map                                 ✅
👉🏻Facebook Business Page          ✅
👉🏻Lead/Enquiry/Quote Form        ✅
👉🏻Survey SMS MLY (OTD*12)     2000
👉🏻SMS SENDER-ID                         ✅
👉🏻IVR Survey-Calls                      1000
👉🏻Free Support                              30D
👉🏻Google Ad Campaign Tutorial ✅
👉🏻Facebook Campaign Tutorial   ✅

                 Pricing One-Time
Regular Price: -                       ₹60000/-
Discount: -                                      40%
Price: -                                    ₹36000/-
Development Charge: -                  ₹0/-
------------------------------------------
Total: -                             ₹36000/+GST
------------------------------------------
                 
                   Pricing Monthly
Monthly: -                                 ₹3000/-
Development Charge: -            ₹6000/-
Advance one month: -              ₹3000/-
------------------------------------------
Total: -                              ₹12000/+GST
------------------------------------------
Please update the timing of live demo according to yactual requirement.
Thanks for giving your precious time.
Deepnap Softech
Name
Designation
www.deepnapsoftech.com
Customer Care: - +917072707091, +917042707092.`);

      }

      else if(selectedValue === "5"){

        setContent(`Hi, Good ${greeting} Sir.
As discussed 
I am sending you the ____ details.
DAIMOND-E2E SALES-(Ecommerce/Appointment Booking-PRDCTS, 50PGS, GGL&FB, BSZ PG,ENQRY FORM WITH OEMAILS, SLS MGMNT DSHBRD OF SMS & IVR, Signup and LChabot, Shipment & HR Management Dashboard).
Features
👉🏻Logo Development                     ✅
👉🏻Content Writing                           ✅
👉🏻Header Option                             ✅
👉🏻Footer Option                              ✅
👉🏻Home Page                                  ✅
👉🏻Blog Page                                     ✅
👉🏻About Us Page                            ✅
👉🏻Contact Us Page                         ✅
👉🏻Landing Page                              ✅
👉🏻Social Media Button                   ✅
👉🏻Free Email's                                  50
👉🏻No. Of Pages                      50SC2C
👉🏻Products/Service                      100
👉🏻Subscribe/Quote Now                ✅
👉🏻Call Now/Apply Now                  ✅
👉🏻Add to Cart/Buy Now                 ✅
👉🏻Payment Gateway                      ✅
👉🏻Account Login/Signup               ✅  
👉🏻Email Verification              500User
👉🏻Phone Verification             500User
👉🏻Product Listing Dashboard       ✅
👉🏻Sales Management Dashboard✅
👉🏻Live Customer Chabot              ✅
👉🏻Google Business Page               ✅
👉🏻Google Map                                 ✅
👉🏻Facebook Business Page          ✅
👉🏻Lead/Enquiry/Quote Form        ✅
👉🏻Survey SMS MLY (OTD*12)     5000
👉🏻SMS SENDER-ID                         ✅
👉🏻IVR Survey-Calls                      2500
👉🏻Free Support                              30D
👉🏻Google Ad Campaign Tutorial ✅
👉🏻Facebook Campaign Tutorial   ✅

                 Pricing One-Time
Regular Price: -                     ₹100000/-
Discount: -                                      40%
Price: -                                    ₹60000/-
Development Charge: -                  ₹0/-
------------------------------------------
Total: -                             ₹60000/+GST
------------------------------------------
               
                   Pricing Monthly
Monthly: -                                 ₹5000/-
Development Charge: -           ₹10000/-
Advance one month: -              ₹5000/-
------------------------------------------
Total: -                              ₹20000/+GST
------------------------------------------

Please update the timing of live demo according to yactual requirement.
Thanks for giving your precious time.
Deepnap Softech
Name
Designation
www.deepnapsoftech.com
Customer Care: - +917072707091, +917042707092.`);

      }

      else if(selectedValue === "6"){

        setContent(`Hi, Good ${greeting} Sir.
As discussed 
I am sending you the ____ details.
DAIMOND-E2E SALES-(Ecommerce/Appointment Booking-PRDCTS, 100 PGS, GGL&FB, BSZ PG,ENQRY FORM WITH OEMAILS, SLS MGMNT DSHBRD OF SMS & IVR, Signup and LChabot, Shipment & HR Management Dashboard.)
Features
👉🏻Logo Development                     ✅
👉🏻Content Writing                           ✅
👉🏻Header Option                             ✅
👉🏻Footer Option                              ✅
👉🏻Home Page                                  ✅
👉🏻Blog Page                                     ✅
👉🏻About Us Page                            ✅
👉🏻Contact Us Page                         ✅
👉🏻Landing Page                              ✅
👉🏻Social Media Button                   ✅
👉🏻Free Email's                                100
👉🏻No. of Pages                    100SC2C
👉🏻Products/Service                      500
👉🏻Subscribe/Quote Now                ✅
👉🏻Call Now/Apply Now                  ✅
👉🏻Add to Cart/Buy Now                 ✅
👉🏻Payment Gateway                      ✅
👉🏻Account Login/Signup               ✅  
👉🏻Email Verification         10000User
👉🏻Phone Verification        10000User
👉🏻Product Listing Dashboard       ✅
👉🏻Sales Management Dashboard✅
👉🏻HR Management Dashboard    ✅
👉🏻Live Customer Chabot              ✅
👉🏻Google Business Page               ✅
👉🏻Google Map                                 ✅
👉🏻Facebook Business Page          ✅
👉🏻Lead/Enquiry/Quote Form        ✅
👉🏻Survey SMS MLY (OTD*12) 25000
👉🏻SMS SENDER-ID                         ✅
👉🏻IVR Survey-Calls                    12500
👉🏻Free Support                              90D
👉🏻Google Ad Campaign Tutorial ✅
👉🏻Facebook Campaign Tutorial   ✅

                 Pricing One-Time
Regular Price: -                     ₹200000/-
Discount: -                                      40%
Price: -                                   ₹120000/-
Development Charge: -                  ₹0/-
------------------------------------------
Total:-                            ₹120000/+GST
------------------------------------------
                 
                   Pricing Monthly
Monthly: -                                 ₹10000/-
Development Charge: -           ₹20000/-
Advance one month: -              ₹10000/-
------------------------------------------
Total: -                              ₹40000/+GST
------------------------------------------
Please update the timing of live demo according to yactual requirement.
Thanks for giving your precious time.
Deepnap Softech
Name
Designation
www.deepnapsoftech.com
Customer Care: - +917072707091, +917042707092.`);

      }


      







    };
    const [inputdata, SetInputdata] = useState({
      name: "",
      lname:"",
      email: "",
      mobile: "",
      date:"",
      city:"",
      B_name:"",
      B_type:" ",
      Remarks: "",
      whatsap:""
    });
  
    const changehandle = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      SetInputdata({ ...inputdata, [name]: value });
      console.log(inputdata);
    };


    
function createPost () {
  console.log("reach")
   axios({
     method: "post",
     url: `http://localhost:9000/student/customer/${_id}`,
   data: {
       name: inputdata.name +" "+inputdata.lname,
       email: inputdata.email,
       mobile: inputdata.mobile,
       state:inputdata.date,
       city:inputdata.city,
       B_name:inputdata.B_name,
       B_type:inputdata.B_type ,

       status:"follow_up",

       Remarks: content,
       whatsap:inputdata.whatsap,

     },
   })
     .then(function (response) {
       
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });
 };


  return (
    <> 
  
    <Stepper state={inputdata.name && inputdata.mobile  && inputdata.email && !inputdata.date && inputdata.B_name && inputdata.B_type ?"Lead":"FollowUp"}/>
    <button class="btn btn-danger" type="submit"  style={{marginLeft:"85%"}} >Not Intrested</button>

    <div className={`${style.container} ${style.followup}`}>
    
    <form class="row g-3" onSubmit={createPost}>
  <div class="col-md-5">
    <label for="validationServer01" class="form-label">First name</label>
    <input type="text" class="form-control " name='name' value={inputdata.name} onChange={changehandle}  required/>
 
  </div>
  <div class="col-md-5">
    <label for="validationServer02" class="form-label">Last name</label>
    <input type="text" class="form-control "  name='lname' value={inputdata.lname} onChange={changehandle} />
    
  </div>
  <div class="col-md-5">
    <label for="validationServerUsername" class="form-label">Mobile</label>
    <div class="input-group ">
    
      <input type="number" class="form-control" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" name='mobile' value={inputdata.mobile} onChange={changehandle}  required/>
     
    </div>
  </div>
  <div class="col-md-5">
    <label for="validationServerUsername" class="form-label">Email</label>
    <div class="input-group ">
    
      <input type="email" class="form-control" id="validationServerEmail" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" name='email' value={inputdata.email} onChange={changehandle}  />
      
    </div>
  </div>
 
  <div class="col-md-5">
    <label for="validationServer05" class="form-label" onChange={changehandle}>FollowUp Date</label>
    <input type="date" class="form-control " id="validationServer05" aria-describedby="validationServer05Feedback" name='date' value={inputdata.date}onChange={changehandle}  />
    
  </div>
  <div class="col-md-5">
    <label for="validationServer03" class="form-label">City</label>
    <select class="form-control" id="stateSelect"   name="city" value={inputdata.city} onChange={changehandle}     >
    <option       >Select  City</option>
    <option>Andhra Pradesh</option>
    <option>Arunachal Pradesh</option>
    <option>Assam</option>
    <option>Bihar</option>
    <option>Chhattisgarh</option>
    <option>Goa</option>
    <option>Gujarat</option>
    <option>Haryana</option>
   
  </select>

  </div>
  <div class="col-md-5">
    <label for="validationServer05" class="form-label">Busness Name</label>
    <input type="text" class="form-control " 
    aria-describedby="validationServer05Feedback" name='B_name' value={inputdata.B_name}onChange={changehandle}  />
    
  </div>
  <div class="col-md-5">
    <label for="validationServer05" class="form-label">Busness Type</label>
    <input type="text" class="form-control " id="validationServer05" aria-describedby="validationServer05Feedback" name='B_type' value={inputdata.B_type}onChange={changehandle}  />
    
  </div>
  <div class="col-md-5">
    <label for="validationServer05" class="form-label"> Whatsapp</label>
    <select
        className="form-select"
        id="validationServer04"
        aria-describedby="validationServer04Feedback"
        onChange={handleSelectChange} 
        name="whatsap"   value={inputdata.whatsap}   >
        <option       selected>
          Whatsapp Content
        </option>
        <option value="1"> BASIC PLAN-(DISPLAY WEBSITE OF 20 PRDCTS OF 5 PGS, GGL&FB BSZ PGS, ENQRY FORM WITH OFCL EMAILS).</option>
        <option value="2">STANDARD-(DISPLAY WEBSITE OF 40 PRDCTS OF 6 PGS, GGL&FB BSZ PGS, ENQUIRY FORM WITH OFFICIAL EMAILS).</option>
        <option value="3">PREMIUM PLAN-(Ecommerce/Appointment Booking 60 PRDCTS - 10PGS, GGL&FB, BSZ PG, ENQRY FORM WITH OFCL EMAILS, SMS & RV-CALLS).</option>
        <option value="4"> GOLD PLAN-(Ecommerce/Appointment Booking 80 PRDCTS - 20PGS, GGL&FB, BSZ PG, ENQRY FORM WITH OFCL EMAILS, SMS & RV-CALLS).</option>
        <option value="5">DAIMOND PLAN-(Ecommerce/Appointment Booking-100 PRDCTS, 50PGS, GGL&FB, BSZ PG,ENQRY FORM WITH OFCL EMAILS, SLS MGMNT DSHBRD OF SMS & IVR, Signup and Live Chabot, Shipment & HR Management Dashboard).</option>
        <option value="6">DAIMOND PLAN-(Ecommerce/Appointment Booking-500 PRDCTS, 100 PGS, GGL&FB, BSZ PG,ENQRY FORM WITH OFCL EMAILS, SLS MGMNT DSHBRD OF SMS & IVR, Signup and Live Chabot, Shipment & HR Management Dashboard.)</option>
    

      </select>
  </div>
  <div class="col-md-5">
    <label for="validationServer05" class="form-label">Remarks</label>
    <textarea
          name="textarea"
          rows="10"
          cols="50"
          value={content}
          onChange={(e)=>{
             setContent(e.target.conten)
          }}
        >
      
        </textarea>  
        <button   className="btn btn-primary m-2"  type="button" onClick={handleButtonClick}>
        Write Text
      </button>
        <button className="btn btn-primary" type="button" onClick={handleCopyClick}>
          Copy
        </button>
  </div>
 



  <div class="col-10">
    <div class="form-check">
   

      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-6">
     <button class="btn btn-primary" type="submit"   on >Submit</button>

  </div>
  <div class="col-6">
   <Link to={{pathname:`/form/${_id}`}}>   <button class="btn btn-danger" type="button"   on >Back</button></Link> 

  </div>
</form>


{/* Meeting Link`` */}







</div>

    </>

  )
}
