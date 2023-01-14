// import logo from './logo.svg';
// import Adminfooter from './Adminfooter';
// import './Dashboard.css';

import Chart from './Chart';

import Last from './Last';

import Navbar from './Navbar';

// import {BrowserRouter, Routes, Route} from 'react-router-dom';




function Dashboard() {
  return (
    <>
    

    <div className='Main-container' style={{
     
        backgroundSize: "cover",
        height:'auto'
      }}>
  
<Navbar></Navbar>
<div style={{marginLeft:"1vw"}}><Chart></Chart>


{/* <Last></Last> */}

</div>




</div>
  
    </>
  );
}

export default Dashboard;
