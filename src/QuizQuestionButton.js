import React, {Component} from 'react';

class QuizQuestionButton extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    return <li><button>{this.props.answer}</button></li>;
  }
}

export default QuizQuestionButton;
