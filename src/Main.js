import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Icons from './images/icons.svg';

class Main extends Component {
  render() {
    const sections = {'home': 'intro-section', 'about': 'about-section', 'work': 'work-section', 'contact': 'contact-section'};
    return(
      <HashRouter>
        <div>
          <NavBar options={sections} />
          <div className="content">
            <Home name="intro-section" />
            <About name="about-section" />
            <Work name="work-section" />
            <Contact name="contact-section" />
          </div>
        </div>
      </HashRouter>
    );
  }
}

class NavBar extends Component {
  render() {
    return(
      <div id="nav-bar">
        <div>
          <h1>shirley<span className="bold-emph">lau</span></h1>
        </div>
        <div>
          {Object.keys(this.props.options).map((optionLabel, i) => {
            return <NavOption label={optionLabel} target={this.props.options[optionLabel]} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

class NavOption extends Component {
  render() {
    return(
      <div className="nav-option">
        <Link activeClass="active" to={this.props.target} spy={true} smooth={true} duration={500}>
          <h2>
            {this.props.label}
          </h2>
        </Link>
      </div>
    )
  }
}

export class Icon extends Component {
  render() {
    const { name, size } = this.props;
    return(
      <svg className={`icon icon-${name}`} width={`${size}px`} height={`${size}px`}  viewBox={`0 0 100 100`}>
        <use xlinkHref={`${Icons}#icon-${name}`} />
      </svg>
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number
}


let scrolling;
var prevScrollY = 0;
var navbarHeight = 65;

window.onscroll = () => {
  scrolling = true;
}

setInterval(() => {
  if (scrolling) {
    updateNavBar();
    scrolling = false;
  }
}, 300);

const updateNavBar = () => {
    var currScrollY = window.scrollY;
    if (Math.abs(prevScrollY - currScrollY) <= 2) return;
    let navBar = document.getElementById('nav-bar');
    if (currScrollY > prevScrollY && currScrollY > navbarHeight){
      navBar.className = 'nav-hide';
    } else {
      navBar.className = 'nav-show';
    }
    prevScrollY = currScrollY;
}

export default Main;
