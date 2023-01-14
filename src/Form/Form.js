
import './Form.css';
import { useLocation } from 'react-router-dom';




import UserDashboard from './UserDashboard';
function Form() {
  const location = useLocation();

  
  
 return(
    <>
    <div >

<UserDashboard ></UserDashboard>

</div>
    </>   
  );
}

export default Form;
