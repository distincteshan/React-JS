import { useState } from "react";

const Steps = () => {
  const [step, setStep] = useState(0);
  function addStep() {
    setStep((step) => step + 1);
  }

  function subStep() {
    setStep((step) => step - 1);
  }

  return (
    <div className="steps">
      <button onClick={subStep}>-</button>
      <span>Steps: {step}</span>
      <button onClick={addStep}>+</button>
    </div>
  );
};

export default Steps;
