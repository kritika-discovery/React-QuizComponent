import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer)
      this.props.showNextQuestionHandler();
  }
  render() {
    var ele = this.props.quiz_question.answer_options.map((item, index) => (
      <div>
        <QuizQuestionButton
          clickHandler={this.handleClick.bind(this)}
          button_text={item}
          key={index}
        />
      </div>
    ));
    return (
      <div>
        <main>
          <section>
            <p>{this.props.quiz_question.instruction_text}</p>
          </section>
          <section className="buttons">
            <ul>{ele}</ul>
          </section>
        </main>
      </div>
    );
  }
}

export default QuizQuestion;

//   <li> {this.props.quiz_question.answer_options[0]}</li>
