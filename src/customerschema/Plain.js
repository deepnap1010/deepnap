import React ,{useState ,useRef} from 'react'
import { Link,useParams } from 'react-router-dom';
import './plan.css';
import Stepper from '../customerschema/Stepper/Stepper';
export default function Plain() {

const[show,setShow]=useState(false);
const[one,setOne]=useState(true);
const btnRef = useRef(null);
const _id=""+useParams().id;

function leftClick() {
    btnRef.current.style.left = '0';
   setOne(true)
   setShow(false);
  }

  function rightClick() {
    btnRef.current.style.left = '130px';
    setOne(false)
    setShow(true);
  }



  return (
   <>
  
   <div>

   <div id="button-box" className="mt-5 mx-auto">
        <div ref={btnRef} id="btn"></div>
        <button type="button" id="toggle-btn" onClick={leftClick}>OneTime</button>
        <button type="button" id="toggle-btn1" onClick={rightClick}>Monthly</button>
      </div>



{one&&
   <table id="customers" >
        <tbody>
            <tr>
                <td width="15%" class="pricing-table-box-text">
                    <h2>OUR <br/> FEATURES</h2>
                </td>
                <td width="3%">
                    <div class="pricing-table-box-item">
                        <div class="pricing-table-box-item-head p-4">
                            <p id="basic">Basic</p>
                        </div>
                        <div id="line" style={{fontSize:" 22px", textDecoration: "line-through", opacity:" 0.5"}}>15000
                        </div>
                        <div class="pricing-table-box-item-price">
                            <p>₹9000<span>/OneTime</span></p>
                        </div>
                    </div>
                </td>
                <td width="3%">
                    <div class="pricing-table-box-item">
                        <div class="pricing-table-box-item-head p-4">
                            <p id="standard">Standard </p>

                        </div>
                        <div id="line"  style={{fontSize:" 22px", textDecoration: "line-through", opacity:" 0.5"}}>25000
                        </div>
                        <div class="pricing-table-box-item-price">
                            <p>₹15000<span>/OneTime</span></p>

                        </div>

                    </div>
                </td>




                <td width="3%">
                    <div class="pricing-table-box-item">
                        <div class="pricing-table-box-item-head p-4 ">
                            <p id="gold">Gold </p>
                        </div>
                        <div id="line"  style={{fontSize:" 22px", textDecoration: "line-through", opacity:" 0.5"}}>60000
                        </div>
                        <div class="pricing-table-box-item-price">
                            <p>₹36000<span>/OneTime</span></p>
                        </div>
                    </div>
                </td>
                <td width="3%">
                    <div class="pricing-table-box-item">
                        <div class="pricing-table-box-item-head p-4">
                            <p id="diamond">Diamond </p>

                        </div>
                        <div id="line"  style={{fontSize:" 22px", textDecoration: "line-through", opacity:" 0.5"}}>100000
                        </div>
                        <div class="pricing-table-box-item-price">
                            <p>₹60000<span>/OneTime</span></p>

                        </div>

                    </div>
                </td>
                <td width="3%">
                    <div class="pricing-table-box-item">
                        <div class="pricing-table-box-item-head p-4">
                            <p id="platinum">Platinum </p>

                        </div>
                        <div id="line"  style={{fontSize:" 22px", textDecoration: "line-through", opacity:" 0.5"}}>200000
                        </div>
                        <div class="pricing-table-box-item-price">
                            <p>₹120000<span>/OneTime</span></p>
                        </div>

                    </div>
                </td>
            </tr>


            <tr class="pricing-table-box-list">
                <td class="first-row">Content Writting</td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>




            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Header and Footer Option</td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
    





            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Home Page</td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">About Us Page.</td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Contact Us Page.</td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Landing Page</td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Social Media Button</td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Button/Quote Option/Others
                </td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Lead/Enquriy/Quote Form
                </td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Google & Facebook Ad campaign Tutorial.


                </td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Google Map Share Location Button


                </td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>

            <tr class="pricing-table-box-list">
                <td class="first-row">No of Pages.</td>

                <td class="second-row">5</td>
                <td class="third-row">8</td>


                <td class="second-row">20SC2C</td>
                <td class="third-row">50SC2C</td>
                <td class="fourth-row">100+SC2SC2C</td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Products/Services</td>

                <td class="second-row">20</td>
                <td class="third-row">40</td>


                <td class="second-row">80</td>
                <td class="third-row">100</td>
                <td class="fourth-row">500</td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Products/Services Self Listing Dashboard
                </td>

                <td class="second-row">XLS</td>
                <td class="third-row">XLS</td>


                <td class="second-row">XLS</td>
                <td class="third-row">Premium
                </td>
                <td class="fourth-row">Premium
                </td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Official Email ID

                </td>

                <td class="second-row">3</td>
                <td class="third-row">8</td>


                <td class="second-row">25</td>
                <td class="third-row">50</td>
                <td class="fourth-row">100</td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Logo</td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
    
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row"> Blog Page.
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row"> Account Login with email Verification
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Google Business Page Creation.
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Facebook Business Page Creation.
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">SMS SENDER-ID
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Survey SMS MLY (OTD*12)
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/>2000</td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/>5000</td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/>25000</td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">IVR Survey-Calls.
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/>1000</td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/>2500</td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/>12500</td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Add to Cart
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Buy Now with payment gateway
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Google Map</td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Sale/Appointment Management Dashboard
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Account Login with Mobile Verification
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Live Customer Chatbot
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>

            <tr class="pricing-table-box-list">
                <td class="first-row">Shipment Integration
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">HR Management Dashboard
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Free Support Upto Days
                </td>
                <td class="second-row"><span class="glyphicon glyphicon-remove">7</span></td>
                <td class="third-row"><span class="glyphicon glyphicon-remove">10</span></td>
                <td class="second-row"><span class="glyphicon glyphicon-ok">30</span></td>
                <td class="third-row"><span class="glyphicon glyphicon-ok">60</span></td>
                <td class="fourth-row"><span class="glyphicon glyphicon-ok">90</span></td>
            </tr>

            <tr>
                <td></td>
                <td> <Link to={{
                      pathname:`/M/1/${_id}`
                     }} >  <button id="btn1">
                    Buy now
                </button> </Link></td>
                <td> <Link to={{
                      pathname:`/M/2/${_id}`
                     }}>  <button id="btn2">
                    Buy now
                </button> </Link></td>
                <td>  <Link to={{
                      pathname:`/M/3/${_id}`
                     }}> <button id="btn3">
                    Buy now
                </button></Link></td>
                <td>  <Link to={{
                      pathname:`/M/4/${_id}`
                     }}> <button id="btn4">
                    Buy now
                </button></Link></td>
                <td>  <Link to={{
                      pathname:`/M/5/${_id}`
                     }}> <button id="btn5">
                    Buy now
                </button> </Link></td>
            </tr>
            </tbody>
           </table>
           }

{show &&

    <table id="customers"  style={{position:"relative"}}>
        <tbody>
            <tr>
                <td width="15%" class="pricing-table-box-text">
                    <h2>OUR <br/> FEATURES</h2>
                </td>
                <td width="3%">
                    <div class="pricing-table-box-item">
                        <div class="pricing-table-box-item-head p-4">
                            <p id="basic">Basic</p>
                        </div>
                        <div id="line"  style={{fontSize:" 22px", textDecoration: "line-through", opacity:" 0.5"}}>15000
                        </div>
                        <div class="pricing-table-box-item-price">
                            <p>₹750<span>/Monthly</span></p>
                        </div>
                    </div>
                </td>
                <td width="3%">
                    <div class="pricing-table-box-item">
                        <div class="pricing-table-box-item-head p-4">
                            <p id="standard">Standard </p>

                        </div>
                        <div id="line"  style={{fontSize:" 22px", textDecoration: "line-through", opacity:" 0.5"}}>25000
                        </div>
                        <div class="pricing-table-box-item-price">
                            <p>₹1250<span>/Monthly</span></p>

                        </div>

                    </div>
                </td>




                <td width="3%">
                    <div class="pricing-table-box-item">
                        <div class="pricing-table-box-item-head p-4 ">
                            <p id="gold">Gold </p>
                        </div>
                        <div id="line"  style={{fontSize:" 22px", textDecoration: "line-through", opacity:" 0.5"}}>60000
                        </div>
                        <div class="pricing-table-box-item-price">
                            <p>₹3000<span>/Monthly </span></p>
                        </div>
                    </div>
                </td>
                <td width="3%">
                    <div class="pricing-table-box-item">
                        <div class="pricing-table-box-item-head p-4">
                            <p id="diamond">Diamond </p>

                        </div>
                        <div id="line"  style={{fontSize:" 22px", textDecoration: "line-through", opacity:" 0.5"}}>100000
                        </div>
                        <div class="pricing-table-box-item-price">
                            <p>₹5000<span>/Monthly</span></p>

                        </div>

                    </div>
                </td>
                <td width="3%">
                    <div class="pricing-table-box-item">
                        <div class="pricing-table-box-item-head p-4">
                            <p id="platinum">Platinum </p>

                        </div>
                        <div id="line"  style={{fontSize:" 22px", textDecoration: "line-through", opacity:" 0.5"}}>200000
                        </div>
                        <div class="pricing-table-box-item-price">
                            <p>₹10000<span>/Monthly</span></p>
                        </div>

                    </div>
                </td>
            </tr>


            <tr class="pricing-table-box-list">
                <td class="first-row">Content Writting</td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>


                  

            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Header and Footer Option</td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
    





            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Home Page</td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">About Us Page.</td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Contact Us Page.</td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Landing Page</td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Social Media Button</td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Button/Quote Option/Others
                </td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Lead/Enquriy/Quote Form
                </td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Google & Facebook Ad campaign Tutorial.


                </td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Google Map Share Location Button


                </td>
                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>

            <tr class="pricing-table-box-list">
                <td class="first-row">No of Pages.</td>

                <td class="second-row">5</td>
                <td class="third-row">8</td>


                <td class="second-row">20SC2C</td>
                <td class="third-row">50SC2C</td>
                <td class="fourth-row">100+SC2SC2C</td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Products/Services</td>

                <td class="second-row">20</td>
                <td class="third-row">40</td>


                <td class="second-row">80</td>
                <td class="third-row">100</td>
                <td class="fourth-row">500</td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Products/Services Self Listing Dashboard
                </td>

                <td class="second-row">XLS</td>
                <td class="third-row">XLS</td>


                <td class="second-row">XLS</td>
                <td class="third-row">Premium
                </td>
                <td class="fourth-row">Premium
                </td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Official Email ID

                </td>

                <td class="second-row">3</td>
                <td class="third-row">8</td>


                <td class="second-row">25</td>
                <td class="third-row">50</td>
                <td class="fourth-row">100</td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Logo</td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
    
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row"> Blog Page.
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row"> Account Login with email Verification
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Google Business Page Creation.
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Facebook Business Page Creation.
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">SMS SENDER-ID
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Survey SMS MLY (OTD*12)
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/>2000</td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/>5000</td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/>25000</td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">IVR Survey-Calls.
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/>1000</td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/>2500</td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/>12500</td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Add to Cart
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Buy Now with payment gateway
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Google Map</td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Sale/Appointment Management Dashboard
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Account Login with Mobile Verification
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Live Customer Chatbot
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>

            <tr class="pricing-table-box-list">
                <td class="first-row">Shipment Integration
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">HR Management Dashboard
                </td>

                <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-times"></i></td>
                    <td class="second-row"><span class="glyphicon glyphicon-ok"/><i class="fas fa-check"></i></td>
            </tr>
            <tr class="pricing-table-box-list">
                <td class="first-row">Free Support Upto Days
                </td>
                <td class="second-row"><span class="glyphicon glyphicon-remove">7</span></td>
                <td class="third-row"><span class="glyphicon glyphicon-remove">10</span></td>
                <td class="second-row"><span class="glyphicon glyphicon-ok">30</span></td>
                <td class="third-row"><span class="glyphicon glyphicon-ok">60</span></td>
                <td class="fourth-row"><span class="glyphicon glyphicon-ok">90</span></td>
            </tr>
            <tr>
                <td></td>
                <td> <Link to={{
                      pathname:`/M/6/${_id}`
                     }} >  <button id="btn1">
                    Buy now
                </button> </Link></td>
                <td> <Link to={{
                      pathname:`/M/7/${_id}`
                     }}>  <button id="btn2">
                    Buy now
                </button> </Link></td>
                <td>  <Link to={{
                      pathname:`/M/8/${_id}`
                     }}> <button id="btn3">
                    Buy now
                </button></Link></td>
                <td>  <Link to={{
                      pathname:`/M/9/${_id}`
                     }}> <button id="btn4">
                    Buy now
                </button></Link></td>
                <td>  <Link to={{
                      pathname:`/M/10/${_id}`
                     }}> <button id="btn5">
                    Buy now
                </button> </Link></td>
            </tr>
            </tbody>
        </table>
        }


   </div>
   
   
   
   
   </>
  )
}
