import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    const handleClick = buttonText => {
      if (buttonText === this.props.quiz_question.answer) {
        this.props.showNextQuestionHandler ();
      }
    };
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          {this.props.quiz_question.answer_options.map ((a, index) => {
            return (
              <QuizQuestionButton
                key={index}
                button_text={a}
                clickHandler={handleClick.bind (this)}
              />
            );
          })}
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
