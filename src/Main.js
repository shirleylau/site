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
    constructor() {
        super();
        this.state = {
            isMobile: window.innerWidth <= 600
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.updateWindowState = this.updateWindowState.bind(this);
    }
    componentDidMount() {
        this.updateWindowState();
        window.addEventListener("resize", this.updateWindowState);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowState);
    }
    updateWindowState() {
        this.setState({ isMobile: window.innerWidth <= 600 });
    }
    render() {
        const { isMobile } = this.state;
        const sections = {'home': 'intro-section', 'about': 'about-section', 'work': 'work-section', 'contact': 'contact-section'};

        return(
            <HashRouter>
                <div>
                    {
                        isMobile ?
                        <MobileNav options={sections} /> :
                        <NavBar options={sections} />
                    }
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
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.updateVisibility = this.updateVisibility.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.updateVisibility);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateVisibility);
    }
    updateVisibility() {
        var currScrollY = window.scrollY;

        if (Math.abs(this.prevScrollY - currScrollY) <= 2) return;

        let navBar = document.getElementById('nav-bar');
        if (currScrollY > Math.max(this.prevScrollY, navbarHeight)) {
            navBar.className = 'nav-hide';
        } else {
            navBar.className = 'nav-show';
        }

       this.prevScrollY = window.scrollY;
    }
    render() {
        return(
            <div id="navigation">
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
            </div>
        );
    }
}

class MobileNav extends Component {
    constructor() {
        super();
        this.state = {
            showOptions: false
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.toggleOptions = this.toggleOptions.bind(this);
        this.collapseOptions = this.collapseOptions.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.collapseOptions);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.collapseOptions);
    }
    toggleOptions() {
        this.setState({ showOptions: !this.state.showOptions });
    }
    collapseOptions() {
        if (this.state.showOptions) {
            this.setState({ showOptions: false });
        }
    }
    render() {
        return(
            <div id="navigation">
                <div id="nav-bar">
                    <div onClick={this.toggleOptions}>
                        <a><h1 class={this.state.showOptions ? 'med-grey' : ''}>whut</h1></a>
                    </div>
                </div>
                <div id="nav-options" class={(this.state.showOptions ? 'nav-options-show' : 'nav-options-hide')}>
                    {Object.keys(this.props.options).map((optionLabel, i) => {
                        return <NavOption label={optionLabel} target={this.props.options[optionLabel]} onSelect={this.collapseOptions} key={i} />;
                    })}
                </div>
            </div>
        );
    }
}

class NavOption extends Component {
    constructor() {
        super();
        this.select = this.select.bind(this);
    }
    select() {
        this.props.onSelect();
    }
    render() {
        const { label, target, onSelect } = this.props;
        return(
            <div className="nav-option">
                <Link activeClass="active" to={target} spy={true} smooth={true} duration={500} onClick={onSelect}>
                    <h2>
                        {label}
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
var navbarHeight = 65;

// window.onscroll = () => {
//     scrolling = true;
// }
//
// setInterval(() => {
//     if (scrolling) {
//         updateNavBar();
//         scrolling = false;
//     }
// }, 300);

// const updateNavBar = () => {
//     var currScrollY = window.scrollY;
//     if (Math.abs(prevScrollY - currScrollY) <= 2) return;
//     let navBar = document.getElementById('nav-bar');
//     if (currScrollY > prevScrollY && currScrollY > navbarHeight){
//         navBar.className = 'nav-hide';
//     } else {
//         navBar.className = 'nav-show';
//     }
//     prevScrollY = currScrollY;
// }

export default Main;
