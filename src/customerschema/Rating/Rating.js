import { useState } from "react";
import '../Rating/Rating.css';
import { FaStar } from "react-icons/fa";
import Stepper from '../Stepper/Stepper';
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"  
};

function Rating() {

  const[show,setShow]=useState(false);
const[one,setOne]=useState(true); 
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <>
    <div> 
    
     <Stepper state="Satisfied"/>
    
     {one &&
    <div className="container  d-flex flex-column justify-content-center align-item-center mt-5 maincontainer ">
      <h2 className="text-center"> Ratings </h2>
      <div className="d-flex flex-direction-column justify-content-center align-item-center">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea
        placeholder="What's your experience?"
        className="textarea"
      />

      <button  onClick={()=>{
        setOne(!one)
        setShow(!show)}} 
      className="btn btn-primary"
      >
        Submit
      </button>
      
    </div>
    }
    </div>

{show &&
    <div style={{marginLeft:"35vw" ,fontSize:"100px"}}>    Thank You    </div>
  }
    </>
  );
};

export default Rating;