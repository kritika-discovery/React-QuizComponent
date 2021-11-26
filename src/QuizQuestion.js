import React, { Component } from "react";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <main>
          <section>
            <p>{this.props.quiz_question.instruction_text}</p>
          </section>
          <section className="buttons">
            <ul>
                        <button>{this.props.button_text}</button>
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default QuizQuestion;

//   <li> {this.props.quiz_question.answer_options[0]}</li>
