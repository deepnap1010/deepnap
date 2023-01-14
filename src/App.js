
import './App.css';
import './Login.css'; 
import Login from './LoginComponent';
import Signup from './SignupComponent';
import Dashboard from './Component/Dashboard';
import Sales from './SalesComponent/Sale';
import Forget from './Forget'

import Form from "./Form/Form"

import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Error from './Error';
import UserDashboard from './Form/UserDashboard';
import Followup from './customerschema/Followup';
import Mettingfix from './customerschema/Mettingfix';
import Stepper from '../src/customerschema/Stepper/Stepper'

import Payment from './customerschema/Payment';
import Rating from '../src/customerschema/Rating/Rating'
import Status from './customerschema/Status';
import Listprice from './customerschema/Planselected/Listprice/Listprice';
import Standard from './customerschema/Planselected/Standard/Standard';
import Platinum from './customerschema/Planselected/Platinum/Platinum';
import Gold from './customerschema/Planselected/Gold/Gold';
import Diamond from './customerschema/Planselected/Diamond/Diamond';
import Mlistprice from './customerschema/Planselected/MonthlyPlain Select/Mlistprice';
import Mstandard from './customerschema/Planselected/MonthlyPlain Select/Mstandard';
import Mgold from './customerschema/Planselected/MonthlyPlain Select/Mgold';
import Mdiamond from './customerschema/Planselected/MonthlyPlain Select/Mdiamond';
import Mplatinum from './customerschema/Planselected/MonthlyPlain Select/Mplatinum';
import Lead from './customerschema/Lead';
function App() {


  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route  path ='/dashboard' element={<Dashboard />}></Route>
        <Route  path ='/sales' element={<Sales />}></Route>
        <Route  path ='/forget' element={<Forget />}></Route>
         <Route  path ='/form/:id' element={<UserDashboard/>}></Route>
        <Route  path ='/forget' element={<Forget/>}></Route>
        <Route  path ='*' element={<Error/>}></Route>
        <Route  path ='/cfollow/:id' element={<Followup/>}> </Route>
        <Route  path ='/mettingfix/:id' element={<Mettingfix/>}></Route>
        <Route  path ='/lead/:id' element={<Lead/>}></Route>
        <Route  path ='/rating/:id' element={<Rating/>}></Route>
        <Route  path ='/payment/:id' element={<Payment/>}></Route>
        <Route  path ='/M/:id1/:id2' element={<Status/>}></Route>
        <Route  path ='/status/1/:id' element={<Listprice/>}></Route>
        <Route  path ='/status/2/:id' element={<Standard/>}></Route>
        <Route  path ='/status/5/:id' element={<Platinum/>}></Route>
        <Route  path ='/status/3/:id' element={<Gold/>}></Route>
         <Route  path ='/status/4/:id' element={<Diamond/>}></Route>
         <Route  path ='/status/6/:id' element={<Mlistprice/>}></Route>
         <Route  path ='/status/7/:id' element={<Mstandard/>}></Route>
         <Route  path ='/status/8/:id' element={<Mgold/>}></Route>
         <Route  path ='/status/9/:id' element={<Mdiamond/>}></Route>
         <Route  path ='/status/10/:id' element={<Mplatinum/>}></Route>

      </Routes>
      

    </BrowserRouter>

    

    

    


    
     
     
     
    
  

  

   
    </>
  );
}

export default App;
