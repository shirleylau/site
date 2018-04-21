import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { Icon } from './Main';

class Home extends Component {
  render() {
    const message = 'Hi there. Nice to meet you.'.toUpperCase();
    const delay = 2000;

    const size = 65;
    const color = 'green';
    return(
      <div id={this.props.name}>
        <div className="section-container">
          <TypewriterText id="intro-typewriter" message={message} delay={delay} />
        </div>
        <Link activeClass="active" to="about-section" spy={true} smooth={true} duration={500}>
          <div className="intro-button">
            <Icon name="linkedin" size={size} />
          </div>
        </Link>
      </div>
    );
  }
}

class TypewriterText extends Component {
  constructor(props) {
    super(props);
    const { message } = this.props;
    this.charPointer = this.wordPointer = 0;
    let words = [];
    for (let i = 0; i < message.length; i++) {
      if (message.charAt(i) === ' ') {
        words.push('');
      }
    }
    words.push('');
    this.state = {
      visibleMessage: words
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.type = this.type.bind(this);
    this.stopTyping = this.stopTyping.bind(this);
  }
  componentDidMount() {
    const component = document.getElementById(this.props.id);

    setTimeout(() => {
      const caret = component.getElementsByClassName('caret')[0];
      caret.className = 'caret';
      this.intervalId = setInterval(this.type, 200);
    }, this.props.delay);
  }
  type() {
    let { visibleMessage } = this.state;
    const { message, id } = this.props;
    const newChar = message.charAt(this.charPointer);
    if (newChar === ' ') {
      const component = document.getElementById(id);
      let currWord = component.getElementsByClassName(`word-${this.wordPointer}`)[0];
      currWord.className += ' trailing-space';
      this.wordPointer++;
    } else {
      visibleMessage[this.wordPointer] += newChar;
    }
    this.charPointer++;
    this.setState({
      visibleMessage: visibleMessage
    });

    if (this.charPointer >= message.length) {
      this.stopTyping();
    }
  }
  stopTyping() {
    clearInterval(this.intervalId);
    const component = document.getElementById(this.props.id);
    const caret = component.getElementsByClassName('caret')[0];
    caret.className += ' blinking';
  }
  render() {
    const { visibleMessage } = this.state;
    return(
      <div id={this.props.id} className="typewriter">
        {
          visibleMessage.map((text, i) => {
            const classNames = `word-${i}`;
            return <div className={classNames} key={i}>{text}</div>;
          })
        }
        <div className="caret blinking"></div>
      </div>
    )
  }
}




export default Home;
