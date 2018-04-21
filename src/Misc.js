// import React, { Component } from 'react';
//
// class Misc extends Component {
//   render() {
//     return (
//       <div id={this.props.name}>
//         <div className="section-container">
//           <div className="grid-row">
//             <div></div>
//             <div>
//               <h1>misc</h1>
//             </div>
//           </div>
//           <div className="subsection">
//             <CarouselWithMenu />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
//
// class CarouselWithMenu extends Component {
//   render() {
//     return (
//       <div className="grid-row">
//         <CarouselMenu />
//         <Carousel name="carousel"/>
//       </div>
//     )
//   }
// }
//
// class CarouselMenu extends Component {
//   constructor() {
//     super();
//   }
//   render() {
//     const placeholder = "I'm the Menu...";
//     return (
//       <div>
//         <h3>{placeholder}</h3>
//       </div>
//     )
//   }
// }
//
// class Carousel extends Component {
//   // Iterate on images (no scroll or carousel)
//   // Add scrolling
//   // Add menu
//   constructor() {
//     super();
//     this.state = {
//       type: 'recommendation'
//     }
//   }
//   render() {
//     const designs = [
//       'http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg',
//       'http://www.petspet.org/wp-content/uploads/2016/03/shutterstock_19820554-slide1.jpg',
//       'https://puppydogweb.com/wp-content/uploads/2015/05/husky-puppy-18220-1920x1200.jpg'
//     ];
//
//     const recommendations = [
//       {
//         src: 'https://media.licdn.com/media/AAMAAQDGAAwAAQAAAAAAAA81AAAAJDg0YmQyMDIzLTM4NmMtNGIzNC05NDJhLWVjZTZkNmExOWI1Nw.jpg',
//         text: "I wish Shirley could work with me wherever I go. Having started and sold a company, I would say Shirley is employee #1 for talent and dedication. When given a project, she doesn't just complete it -- she puts her whole self into and won't stop until it reaches a level of excellence I have almost never seen with anyone else. Early in her career, we gave her the job of redesigning our homepage and she made it her goal to make it the best designed site in education technology. After learning Parallax and mastering other front end coding skills, she built a homepage that I still get compliments for across the industry."
//       }
//     ];
//     // ,
//     // {
//     //   src: 'https://media.licdn.com/media/AAMAAQDGAAwAAQAAAAAAABEdAAAAJDBkOTZiYmFhLWFjN2UtNDJkNy1iOTg4LWYzMjc5NjE4MjNlYw.jpg',
//     //   text: "It’s rare that you meet an individual with such an outstanding level of competence that you blindly trust the work that they do. Shirley is, without question, in this category. She was Employee #1 at our start-up, which meant that she had to be a wearer of many hats — and she more than stepped up to the challenge. She single-handedly built our brand presence, re-did our website, championed our marketing, and ultimately became one of our strongest engineers. It’s a testament to her ability that our company was acquired."
//     // }
//
//     const {type} = this.state;
//     const items = type === 'recommendation' ? recommendations : designs;
//
//     return(
//       <div id={this.props.name}>
//         <div className="carousel-wrapper">
//         {
//           items.map((item, i) =>
//             type === 'recommendation'
//             ? <CarouselRecommendation src={item.src} text={item.text} key={i} />
//             : <CarouselImage src={item} key={i} />
//           )
//         }
//
//       </div>
//       </div>
//     )
//   }
// }
//
// class CarouselImage extends Component {
//   render() {
//     return(
//       <div className="carousel-item">
//         <img src={this.props.src} />
//       </div>
//     )
//   }
// }
//
// class CarouselRecommendation extends Component {
//   render() {
//     const { src, text } = this.props;
//
//     return(
//       <div className="carousel-item carousel-recommendation">
//         <div>
//           <img src={src} />
//         </div>
//         <div>
//           {text}
//         </div>
//       </div>
//     )
//   }
// }
//
//
//
// export default Misc;
