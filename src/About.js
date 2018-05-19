import React, { Component } from 'react';

class About extends Component {
  render() {
    const aboutText = "I'm a New York City transplant from the San Francisco Bay Area always looking to build thoughtful experiences with strong social impact. I’m a software engineer with a background in design and marketing. Front-end is my forte, but that doesn't mean I shy away from back-end work.";
    return (
      <div id={this.props.name}>
        <div className="section-container">
          <div className="grid-row">
            <div></div>
            <div>
              <h1>about</h1>
            </div>
          </div>

          <div className="subsection">
            <div className="grid-row">
              <div>
                <div></div>
              </div>
              <div>
                <p>{aboutText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
