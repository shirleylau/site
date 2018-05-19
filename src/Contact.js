import React, { Component } from 'react';
import { Icon } from './Main';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      hovering: false,
      hoverMessage: ''
    };
    this.activeHover = this.activeHover.bind(this);
    this.inactiveHover = this.inactiveHover.bind(this);
  }
  activeHover(message) {
    this.setState({
      hovering: true,
      hoverMessage: message
    });
  }
  inactiveHover(e) {
    this.setState({ hovering: false });
    setTimeout(() => {
      if (!this.state.hovering) {
        this.setState({ hoverMessage: '' });
      }
    }, 500);
  }
  render() {
    const icons = [
      {
        name: 'email',
        url: 'mailto:sllau.91@gmail.com',
        hoverMessage: ' me via email'
      },
      {
        name: 'github',
        url: 'https://github.com/shirleylau',
        hoverMessage: ' me on github'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/shirley-lau',
        hoverMessage: ' me on linkedin'
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/shirley.elle',
        hoverMessage: ' me on instagram'
      }
    ];
    const size = 65;
    let { hovering, hoverMessage } = this.state;
    return (
      <div id={this.props.name} className={hovering ? "active-hover" : ""}>
        <div className="section-container">
          <div className="grid-row">
            <div></div>
            <div>
              <h1>contact <span className="contact-message">{hoverMessage}</span></h1>
            </div>
          </div>
        </div>
        <div className="contact-button-section">
          <div className="section-container">
            <div className="grid-row">
              <div></div>
              <div className="contact-icons">
                {
                  icons.map((icon, i) => {
                    return <ContactIcon name={icon.name} url={icon.url} size={size} hoverMessage={icon.hoverMessage} mouseEnter={this.activeHover} mouseLeave={this.inactiveHover} key={i} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ContactIcon extends Component {
  constructor() {
    super();
    this.nullState = this.nullState.bind(this);
    this.setActive = this.setActive.bind(this);
    this.setInactive = this.setInactive.bind(this);
    this.state = this.nullState();
  }
  nullState() {
    return {active: false};
  }
  setActive() {
    const { hoverMessage, mouseEnter } = this.props;
    this.setState({active: true});
    mouseEnter(hoverMessage);
  }
  setInactive() {
    const { mouseLeave } = this.props;
    this.setState(this.nullState());
    mouseLeave();
  }
  render() {
    const { active } = this.state;
    const { name, url, size } = this.props;
    return (
      <div className={"contact-icon" + (active ? " active" : "")} onMouseEnter={this.setActive} onMouseLeave={this.setInactive}>
        <a href={url} target="_blank">
          <Icon name={name} size={size} />
        </a>
      </div>
    )
  }
}

export default Contact;
