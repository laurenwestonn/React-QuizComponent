import React, {Component} from 'react';
class QuizQuestionButton extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    const handleClick = () => {
      this.props.clickHandler (this.props.button_text);
    };
    return (
      <li>
        <button onClick={handleClick.bind (this)}>
          {this.props.button_text}
        </button>
      </li>
    );
  }
}

export default QuizQuestionButton;
