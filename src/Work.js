import React, { Component } from 'react';

class Work extends Component {
  render() {
    const workExperience = [
      {
        company: 'Renaissance Learning',
        title: 'software engineer',
        startYear: '2015',
        endYear: 'present',
        url: 'https://www.renaissance.com'
      },
      {
        company: 'UClass',
        title: 'front-end engineer, director of marketing, ux',
        startYear: '2013',
        endYear: '2015',
        url: 'https://www.edsurge.com/news/2015-02-19-renaissance-learning-acquires-uclass-a-dropbox-for-education'
      }
    ];
    const skills = [
        {
          category: 'languages',
          items: ['Javascript', 'Python', 'C#', 'Terraform', 'CSS', 'HTML', 'SQL']
        },
        {
          category: 'frameworks',
          items: ['AngularJS', 'ReactJS', 'Node', 'Angular 2', 'React Native', 'Flask']
        },
        {
          category: 'tools',
          items: ['AWS', 'Git / GitHub', 'Postman', 'Bash', 'Jenkins', 'Docker', 'Visual Studio']
        },
        {
          category: 'design',
          items: ['Illustrator', 'Photoshop', 'InDesign', 'Axure']
        }
    ]
    return(
      <div id={this.props.name}>
        <div className="section-container">
          <div className="grid-row">
            <div></div>
            <div>
              <h1>work</h1>
            </div>
          </div>

          <div className="subsection">
            {
              workExperience.map((experience, i) =>
                <ExperienceRow experience={experience} key={i} />
              )
            }
          </div>
          <div className="subsection">
            <div className="grid-row">
              <div>
                <h3>skills</h3>
              </div>
              <div className="column-wrapper">
                {
                  skills.map((skill, i) =>
                    <SkillColumn skill={skill} key={i} />
                  )
                }
              </div>
            </div>
          </div>
          <div className="subsection">
            <div className="grid-row">
              <div></div>
              <div>
                <a>check out my resume <span className="animated-caret"></span></a>
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

class ExperienceRow extends Component {
  render() {
    const { experience } = this.props;
    return(
      <div className="grid-row">
        <div className="tagline">[ {experience.startYear} - {experience.endYear} ]</div>
        <div>
          <div><a href={experience.url} target="_blank">{experience.company}</a></div>
          <div>{experience.title}</div>
        </div>
      </div>
    );
  }
}

class SkillColumn extends Component {
  render() {
    const { skill } = this.props;
    return(
      <div className="column">
        <div>
          <h2>{skill.category}</h2>
        </div>
        <ul>
          {
            skill.items.map((item, i) =>
              <li key={i}>{item}</li>
            )
          }
        </ul>
      </div>
    );
  }
}


export default Work;
