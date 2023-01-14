import React ,{useState,useEffect} from 'react'

import './Dashboard.css';
import axios from "axios";

export default function Chart() {

  const [searchValue, setSearchValue] = useState('');
  

    function handleSearch(e) {
        setSearchValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Filter the table data based on the mobile number
        let filteredData = product.filter(item => item.mobile === searchValue);
        setProduct(filteredData);
    }
 

  // for table data save and show
  const [product, setProduct] = useState([]);
 
      

  useEffect(() => {
    const getproductdata = async () => {
      try {
        const data = await axios.get(`http://45.90.109.11:9000/student/agent/customer`);
      
        setProduct(data.data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    getproductdata();
  }, []);





  return (
    <>
    
  
    <div className="container-fluid  mytable">
          <div className="row flex-nowrap">
          
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <h1 className="page-header">Dashboard</h1>

            

                  <h2 className="sub-header">Manage Customer</h2>
                  <form onSubmit={handleSubmit}>
                <input class="form-control me-4" type="search" placeholder="Search mobile number" aria-label="Search" value={searchValue} onChange={handleSearch} />
                <button class="btn btn-outline-success me-4" type="submit">Search</button>
            </form>

                   <div className="table-responsive">
                
                     <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Sr. no</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>State</th>
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
                           
                      
                         <td >{item.name}</td>
                          
                          <td>{item.email}</td>
                          <td>{item.mobile}</td>
                          <td>{item.state}</td>
                          <td>{item.city}</td>
                          <td>{item.B_name}</td>
                          <td>{item.B_type}</td>

                          <td>{item.Remarks}</td>

                          
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


    </>
  )
}
