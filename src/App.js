import React, { Component } from "react";
//import { LangCard } from "./components/card/card";
import Card2 from "./components/card/Card2";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "Go", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }

  vote = (i) => {
    let newLanguages = [...this.state.languages];
    newLanguages[i].votes++;

    this.setState({ languages: newLanguages });
  };

  render() {
    return (
      <div>
        <h1>Vote Your Language!</h1>
        <div className="languages">
          {this.state.languages.map((lang, i) => (
            // <LangCard inputObj={lang} inputId={i} voteFun={this.vote}></LangCard>
            <Card2 inputObj={lang} inputId={i} voteFun={this.vote} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
