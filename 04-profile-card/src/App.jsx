import Cards from "./components/Cards";
import "./styles.css";
import { personData } from "./components/peopleData";

const App = () => {
  return (
    <div className="cardslist">
      <Cards personData={personData[0]} />
      <Cards personData={personData[1]} />
    </div>
  );
};

export default App;
