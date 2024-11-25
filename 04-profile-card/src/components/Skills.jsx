/* eslint-disable react/prop-types */
import "../styles.css";

const Skills = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.skill} {props.emoji}
    </div>
  );
};
export default Skills;
