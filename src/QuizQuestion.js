import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectAnswer: false
    };
  }

  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.setState({
        incorrectAnswer: false
      });
      this.props.showNextQuestionHandler();
    }
    this.setState({
      incorrectAnswer: true
    });
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
          {this.state.incorrectAnswer ? (
            <p className="error"> Sorry, that's not right </p>
          ) : null}
        </main>
      </div>
    );
  }
}

export default QuizQuestion;

//   <li> {this.props.quiz_question.answer_options[0]}</li>
