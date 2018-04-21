import React, { Component } from 'react';

class About extends Component {
  render() {
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
                <p>I'm a New York City transplant from the San Francisco Bay Area who's always looking forward to building thoughtfully-designed experiences (too fluffy). I’m a software engineer with a background in design and marketing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
