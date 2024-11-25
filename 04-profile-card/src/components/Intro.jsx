import "../styles.css";
/* eslint-disable react/prop-types */
const Intro = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.intro}</p>
    </div>
  );
};

export default Intro;
