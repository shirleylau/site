import React, { Component } from 'react';
import { Icon } from './Main';

class Contact extends Component {
  constructor() {
    super();
    this.state = this.nullState();
    this.activeHover = this.activeHover.bind(this);
    this.inactiveHover = this.inactiveHover.bind(this);
  }
  nullState() {
    return { hoverMessage: '' };
  }
  activeHover(message) {
    this.setState({hoverMessage: message});
    console.log('ACTIVE hovering!');
  }
  inactiveHover(e) {
    //e.preventDefault();
    console.log('DONE hovering.');
    this.setState(this.nullState());
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
    let { hoverMessage } = this.state;
    return (
      <div id={this.props.name}>
        <div className="section-container">
          <div className="grid-row">
            <div></div>
            <div>
              <h1>contact <span className="contact-type"></span></h1>
            </div>
          </div>
        </div>
        <div className="section-container contact-button-section">
          <div className="grid-row">
            <div></div>
            <div className="contact-icons">
              {
                icons.map((icon, i) => {
                  return <ContactIcon name={icon.name} url={icon.url} size={size} hoverMessage={icon.hoverMessage} onMouseEnter={this.activeHover} onMouseLeave={this.inactiveHover} key={i} />
                })
              }
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
    this.state = {
      active: false
    }
  }
  render() {
    //<div onMouseEnter={onMouseEnter(hoverMessage)} onMouseLeave={onMouseLeave}>
    const { name, url, size, hoverMessage, onMouseEnter, onMouseLeave } = this.props;
    return (
      <div onMouseLeave={onMouseLeave}>
        <a href={url} target="_blank">
          <Icon name={name} size={size} />
        </a>
      </div>
    )
  }
}

export default Contact;
