import React, { useState } from 'react'
import "../App.css"
import "../Step.css";

const StepForm = () => {
    const fragments = ["VendorInfo", "VenueInfo"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    
  return (
    <div>
      <div className="flex justify-between">
        {fragments?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} 
      ${(i + 1 < currentStep || complete) && "complete"} `}
          >
            <p>{step}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === fragments.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === fragments.length ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
}


export default StepForm