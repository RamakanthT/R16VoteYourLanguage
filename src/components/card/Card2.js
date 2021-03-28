import React, { Component } from "react";

class Card2 extends Component {
  render() {
    return (
      <div key={this.props.inputId} className="language">
        <div className="voteCount">{this.props.inputObj.votes}</div>
        <div className="languageName">{this.props.inputObj.name}</div>
        <button onClick={() => this.props.voteFun(this.props.inputId)}>
          Click Here
        </button>
      </div>
    );
  }
}

export default Card2;
