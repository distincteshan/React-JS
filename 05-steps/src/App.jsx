/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./components/Button";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  function NextStep() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  function PrevStep() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function ChangeIsOpen() {
    setisOpen(!isOpen);
  }
  return (
    <>
      <button className="close" onClick={ChangeIsOpen}>
        <h3>&times;</h3>
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={PrevStep}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={NextStep}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
}
export default App;
