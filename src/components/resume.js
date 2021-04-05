import React, { Component } from 'react';
import { Grid, Cell, Button} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="/portfolio/images/resumepic.jpg"
                alt="avatar"
                style={{ height: '350px' }}
              />
            </div>

            <h2 style={{ paddingTop: '20px' }}>Karen Cariaga</h2>
            <h4 style={{ color: 'grey' }}>Programmer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>I am a recent graduate of Computer Science who is seeking new
              opportunities in technology. I am passionate about developing
              my skills in both front-end and back-end development. 
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Email</h5>
            <p>karenc.cariaga@gmail.com</p>
            <h5>Website</h5>
            <p>https://kccariaga.github.io/portfolio/</p>

            <Button raised accent ripple href="https://drive.google.com/file/d/1QYCV8rKnpZ4EJL4X8epNciaPa8VfpdBr/view?usp=sharing" target="_blank">Download My Resume </Button>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2016}
              endYear={2018}
              schoolName="University of California- Santa Cruz"
              schoolDescription="Bachelor's in Computer Science"
            />

            <Education
              startYear={2013}
              endYear={2016}
              schoolName="Folsom Lake College"
              schoolDescription="Associates in Math and Science"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={"Present"}
              jobName="Inductive Automation - Software Support Engineer"
              jobDescription="Troubleshooting through issues for customers with Ignition SCADA/HMI software. 
              Skills utilized for troubleshooting include but are not limited to:
              OPC-UA, OPC-DA/COM, SQL, SMTP Servers, Networking, Redundant Systems, Distributed Systems"
            />

            <Experience
              startYear={2019}
              endYear={2019}
              jobName="iD Tech Camps - Brand Ambassador"
              jobDescription="Attending to ground marketing and recruiting events in order to
              spread the word of iD Tech to potential clients and future employees."
            />

            <Experience
              startYear={2017}
              endYear={2018}
              jobName="iD Tech Camps, Sacramento State - Coding Instructor"
              jobDescription="
              • Worked at iD Tech Camps for two summer sessions.Taught beginning to advanced 
                computer programming courses in C++, Java, Python, and Scratch to class sizes
                 of up to 10 students(ages 13-18)."
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill="C/C++"
              progress={100}
            />
            <Skills
              skill="Java"
              progress={100}
            />
            <Skills
              skill="Python"
              progress={100}
            />
            <Skills
              skill="SQL"
              progress={85}
            />
            <Skills
              skill="JavaScript"
              progress={70}
            />
            <Skills
              skill="HTML"
              progress={90}
            />
            <Skills
              skill="CSS"
              progress={90}
            />
            <Skills
              skill="React"
              progress={60}
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;