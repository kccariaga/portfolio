import React, { Component } from 'react';
import { Grid, Cell, } from 'react-mdl';



class LandingPage extends Component {
  render() {
    return (
      <div style ={{width: '100%', margin:'auto', }}>
        <Grid className = "landing-grid">
          <Cell col={3}></Cell>
          <Cell col={6}>
            <img
              src="/portfolio/images/profilepic4.jpg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">  
              <h2>Hello World.</h2>
              <p> My name is Karen and I'm a Software Engineer based in the Greater Sacramento Area. Thank you for stumbling upon my personal portfolio. I strive to find new ways 
                to refine my skills through personal projects and opportunities in my professional work.  </p>



              <div className="social-links">
                {/* target:"_blank" ensures that your website stays open on a tab when they click your link */}
                
                {/* LinkedIn */}
                <a href= "https://www.linkedin.com/in/karen-cariaga-2a8241123/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>

                {/* Github */}
                <a href="https://github.com/kccariaga" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>


              </div>
            </div>
          </Cell>

          <Cell col={3}></Cell>

        </Grid>
  
      </div>
    )
  }
}

export default LandingPage;