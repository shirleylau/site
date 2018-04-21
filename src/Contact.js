import React, { Component } from 'react';
import { Icon } from './Main';

class Contact extends Component {
  render() {
    const links = [
      {
        name: 'email',
        url: 'mailto:sllau.91@gmail.com'
      },
      {
        name: 'github',
        url: 'https://github.com/shirleylau'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/shirley-lau'
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/shirley.elle'
      }
    ];
    const size = 65;
    const color = 'pink';
    return (
      <div id={this.props.name}>
        <div className="section-container">
          <div className="grid-row">
            <div></div>
            <div>
              <h1>contact <span className="contact-type">me on linkedin</span></h1>
            </div>
          </div>
        </div>
        <div className="section-container contact-button-section">
          <div className="grid-row">
            <div></div>
            <div className="contact-icons">
              {
                links.map((link, i) => {
                  return <div key={i}>
                    <a href={link.url} target="_blank">
                      <Icon name={link.name} size={size} />
                    </a>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
