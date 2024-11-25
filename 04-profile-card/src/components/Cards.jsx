import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";
/* eslint-disable react/prop-types */

const Cards = (props) => {
  return (
    <div className="card">
      <Avatar image={props.personData.avatar} alt={props.personData.name} />
      <div className="data">
        <Intro name={props.personData.name} intro={props.personData.intro} />
        <SkillList skills={props.personData.skills} />
      </div>
    </div>
  );
};

export default Cards;
