import React from "react";
//able to use styles only if css name is ****.module.css

export const LangCard = (props) => {
  return (
    <div key={props.inputId} className="language">
      <div className="voteCount">{props.inputObj.votes}</div>
      <div className="languageName">{props.inputObj.name}</div>
      <button onClick={() => props.voteFun(props.inputId)}>Click Here</button>
    </div>
  );
};
