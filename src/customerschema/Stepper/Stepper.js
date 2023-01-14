import React, { useEffect, useState } from "react";
import "./Stepper.css";
import { TiTick } from "react-icons/ti";
const Stepper = (props) => {
  const steps = ["FollowUp", "Lead","Meeting fix","M Status", "Plan", "Payment", "Satisfied"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const[j,setJ]=useState(-1)
  console.log(props.state)

  useEffect(()=>{
    if(j===steps.indexOf(props.state)){
      return 
    }
    if(j!==steps.indexOf(props.state)-1){
      setJ((pre)=>pre+1)
      currentStep === steps.length
      ? setComplete(true)
      : setCurrentStep((prev) => prev + 1);
    }
   
      
      

  },[j,props.state])

  return (
    <>
      <div className="d-flex justify-content-between m-5">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={28} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
     
      {!complete && (
        <div className="container d-flex justify-content-center  align-item-center ">
     
        </div>
      )}
      
    </>
  );
};

export default Stepper;