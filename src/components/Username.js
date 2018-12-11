import React from "react";

const Username = props => {
  return (
    <div className="username-title">
      { props.userName && <h4>Skill levels for: {props.userName}</h4> }
    </div>
  );
};
export default Username;
