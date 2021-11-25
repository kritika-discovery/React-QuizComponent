import React, { Component } from "react";
let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.State = {
      quiz_position: 1
    };
    console.log(quizData.quiz_questions[0].instruction_text);
  }

  render() {
    var data = quizData.quiz_questions.map((item) => (
      <div>{item.instruction_text}</div>
    ));
    return (
      <div>
        <div className="QuizQuestion">{data}</div>
      </div>
    );
  }
}

export default Quiz;
