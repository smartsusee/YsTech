import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";

export function DefaultStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  // Step data with images and labels
  const steps = [
    {
      number: 1,
      label: "Frontend",
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
    },
    {
      number: 2,
      label: "Backend",
      image: "https://cdn-icons-png.flaticon.com/512/1089/1089157.png"
    },
    {
      number: 3,
      label: "Database",
      image: "https://cdn-icons-png.flaticon.com/512/1199/1199124.png"
    }
  ];

  return (
    <div className="w-full py-4 px-4 sm:px-8">
      {/* Current step image display */}
      <div className="flex justify-center mb-6 sm:mb-8 h-32 sm:h-40">
        <img 
          src={steps[activeStep].image} 
          alt={steps[activeStep].label} 
          className="h-full object-contain"
        />
      </div>

<br />
      {/* Custom Stepper with images above numbers */}
      <div className="px-2 sm:px-0">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          className="relative"
        >
          {steps.map((step, index) => (
            <Step 
              key={index} 
              onClick={() => setActiveStep(index)}
              className="flex flex-col items-center !px-2 sm:!px-4"
            >
              <div className="absolute -top-8 sm:-top-12 w-16 sm:w-20 flex flex-col items-center">
                <img 
                  src={step.image} 
                  alt={step.label} 
                  className={`h-6 sm:h-8 mb-1 transition-opacity ${activeStep === index ? 'opacity-100' : 'opacity-30'}`}
                />
                <span className={`text-xs ${activeStep === index ? 'font-bold' : 'text-gray-500'}`}>
                  {step.label}
                </span>
              </div>
              {step.number}
            </Step>
          ))}
        </Stepper>
      </div>

      {/* Navigation buttons */}
      <div className="mt-12 sm:mt-16 flex justify-center space-x-3 sm:space-x-4">
        <Button 
          onClick={handlePrev} 
          disabled={isFirstStep}
          className="px-4 sm:px-6 py-2"
        >
          Prev
        </Button>
        <Button 
          onClick={handleNext} 
          disabled={isLastStep}
          className="px-4 sm:px-6 py-2"
        >
          Next
        </Button>
      </div>
    </div>
  );
}