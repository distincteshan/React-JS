import { useState } from "react";
import Bill from "./components/Bill";
import Tip from "./components/Tip";
import Total from "./components/Total";

const App = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  function handleReset() {
    setBillAmount(0);
    setTip1(0);
    setTip2(0);
  }
  return (
    <div>
      <Bill amount={billAmount} onAmountChange={setBillAmount} />
      <Tip tip={tip1} onHandleTip={setTip1}>
        How did you like the service?
      </Tip>
      <Tip tip={tip2} onHandleTip={setTip2}>
        How did your friend like the service?
      </Tip>
      <Total
        amount={billAmount}
        tip1={tip1}
        tip2={tip2}
        onReset={handleReset}
      />
    </div>
  );
};

export default App;
