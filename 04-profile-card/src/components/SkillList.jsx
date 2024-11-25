import "../styles.css";
import Skills from "./Skills";
/* eslint-disable react/prop-types */

const SkillList = (props) => {
  return (
    <div className="skill-list">
      <Skills skill={props.skills[0]} emoji="👍" color="lightblue" />
      <Skills skill={props.skills[1]} emoji="💪" color="lightyellow" />
      <Skills skill={props.skills[2]} emoji="😉" color="pink" />
      <Skills skill={props.skills[3]} emoji="🔰" color="lightgreen" />
      <Skills skill={props.skills[4]} emoji="🥶" color="lightslategrey" />
      <Skills skill={props.skills[5]} emoji="🌩️" color="lightcoral" />
    </div>
  );
};

export default SkillList;
