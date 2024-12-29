import { useState } from "react";
import DateCounter from "./components/DateCounter";

const App = () => {
  const [sliderVal, setsliderVal] = useState(1);
  return (
    <div>
      <input
        type="range"
        min={1}
        max={20}
        onInput={(e) => setsliderVal(e.target.value)}
        value={sliderVal}
      ></input>
      <p>Steps: {sliderVal}</p>
      <DateCounter steps={Number(sliderVal)} />
    </div>
  );
};

export default App;
