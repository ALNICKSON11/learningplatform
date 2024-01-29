import React from "react";
import "./button.css";

function Button({ IconName, ButtonName , backgroundColor}) {
  return (
    <div className="button" style={{background:backgroundColor}}>
      <IconName color="black" />
      <div className="btnname">
        <p>{ButtonName}</p>
      </div>
    </div>
  );
}

export default Button;
