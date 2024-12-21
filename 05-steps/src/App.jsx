import { useState } from "react";

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
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={PrevStep}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={NextStep}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
