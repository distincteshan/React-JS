import "../styles.css";
/* eslint-disable react/prop-types */
const Avatar = (props) => {
  return <img src={props.image} className="avatar" alt={props.imagename}></img>;
};

export default Avatar;
