import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class LandingPage extends Component {
  render() {
    return (
      <div style ={{width: '100%', margin:'auto'}}>
        <Grid className = "landing-grid">
          <Cell col={12}>
            <img
              src="/images/profilepic3.jpg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Software Engineer</h1>
              <hr/>
              <p> Java | C/C++ | Python | Javascript | HTML5 | CSS | React | Node | Bootstrap  </p>


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

        </Grid>
      </div>
    )
  }
}

export default LandingPage;