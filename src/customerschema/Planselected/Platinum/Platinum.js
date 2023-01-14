import React from "react";
import { Link ,useParams} from "react-router-dom";
import Stepper from '../../Stepper/Stepper'
export default function Platinum() {
  const _id=""+useParams().id;
  return (
    <>
    <Stepper state={"Plan"}  />
      <div className="container bg-warning h-200" id="cstname">
        <h3 className="text-center mt-4">
          Dear Name You Have Selected Platinum
        </h3>
      </div>

      <table id="customers" className="table table-striped mt-2 mx-auto ">
        <thead>
          <tr className="bg-dark">
            <th className="text-center fs-5 text-white"> Features</th>
            <th className="text-center fs-5 text-white" colSpan={10}>
              {" "}
              Price
            </th>
          </tr>
          <tr>
            <th className="text-left"> Content Writing</th>
            <th className="text-center"> Regular Price</th>
            <th className="text-center"> Discount</th>
            <th className="text-center">OneTime</th>

            <th className="text-center"> Development Charge</th>
            <th className="text-center"> Advance Payment</th>
            <th className="text-center"> Monthly Start Price</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>

          <tr>
            <td>Header and Footer Options</td>

            <td>
              <span />
              ₹200000
            </td>
            <td>
              <span />
              40%
            </td>
            <td>
              <span />
              ₹120000
            </td>

            <td>
              <span />
              ₹0
            </td>
            <td>
              <span />
              ₹0
            </td>
            <td>
              <span />
              ₹0
            </td>
          </tr>

          <tr>
            <td>Home Page</td>{" "}
          </tr>

          <tr>
            <td>About Page</td>
          </tr>
          <tr>
            <td>Contactus Page</td>{" "}
          </tr>
          <tr>
            <td>Landing Page</td>
          </tr>

          <tr>
            <td>Social Media Button</td>
          </tr>

          <tr>
            <td>Button/Quote Option/Others</td>
          </tr>
          <tr>
            <td>Lead/Enquriy/Quote Form</td>
          </tr>

          <tr>
            <td>Google & Facebook Ad campaign Tutorial.</td>
          </tr>

          <tr>
            <td>Google Map </td>
          </tr>
          <tr>
            <td>100 No. of Pages</td>
          </tr>

          <tr>
            <td>500 Products/Services Display</td>
          </tr>
          <tr>
            <td>Premium Products/Services Self Listing Dashboard</td>
          </tr>
          <tr>
            <td>100 Official Email ID</td>
          </tr>
          <tr>
            <td>Logo </td>
          </tr>

          <tr>
            <td>Blog Page </td>
          </tr>
          <tr ><td >Account Login with email Verification 
 </td></tr>
            <tr ><td >Google Business Page Creation.
 </td></tr>
            <tr ><td >Facebook Business Page Creation.
 </td></tr>
            <tr ><td >SMS SENDER-ID
 </td></tr>
            <tr ><td >25000 Survey SMS MLY (OTD*12)
 </td></tr>
            <tr ><td >12500 IVR Survey-Calls.
 </td></tr>
            <tr ><td >Add to Cart
 </td></tr>
            <tr ><td >Buy Now with payment gateway
 </td></tr>
            <tr ><td >Shipment Integration
 </td></tr>
            <tr ><td >Sale/Appointment Management Dashboard
 </td></tr>
            <tr ><td >Account Login with Mobile Verification 
 </td></tr>
            <tr ><td >Live Customer Chat </td></tr>
            
            <tr ><td >Shipment Integration
 </td></tr>
            
            <tr ><td >HR Management Dashboard
 </td></tr>
            <tr ><td >60 Days Free Support </td></tr>




        </tbody>
      </table>
   
      <Link to={{pathname:`/payment/${_id}`}}> <button type="button" id="btnright"  class="btn btn-primary mt-3 ">Procedd to Payment</button></Link>
    </>
  );
}
