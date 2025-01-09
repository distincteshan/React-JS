/* eslint-disable react/prop-types */
import { useState } from "react";
import Items from "./Items";

const Accordion = ({ data }) => {
  const [CurrKey, setCurrKey] = useState(null);

  return (
    <div className="accordion">
      <ul>
        {data.map((faq, index) => (
          <Items
            title={faq.title}
            number={index + 1}
            key={index}
            selectedKey={CurrKey}
            onHandleClick={setCurrKey}
          >
            {faq.text}{" "}
          </Items>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
