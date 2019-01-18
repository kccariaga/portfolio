import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0};
  }
  
  toggleCategories(){

  
    if(this.state.activeTab === 0){
      // Web  Applications
      return(
        <div className="projects-grid">
        <Card shadow={5} style = {{minWidth:'50', margin:'auto'}}>
          <CardTitle style={{ color: 'white', height: '176px', 
          background:'url(/portfolio/images/letscodetogether.png) center / cover'}}> 
          <div className="card-title">
          Let's Code Together
          </div>
          </CardTitle>
          {/* Insert Project Description */}
          <CardText>
           Lets Code Together is a Facebook Build Day Hack-a-thon collaboration
           with the aim to bring developers together to meet up, create applications and 
           learn new skills. The user has the option to post project ideas for other users
           to find, as well as search for projects to collaborate on with others. 
           Another portion of the website is dedicated to users who with to teach or learn
           new skills from other people. 

          <br/>
            This website is powered by React, Bootstrap, HTML, CSS.
          </CardText>

          <CardActions border>
              <Button colored href="https://github.com/kccariaga/facebook_build_day_challenge" target="_blank" >Github</Button>
            <Button colored >Live Demo(Coming Soon!)</Button>
          </CardActions>

          <CardMenu style={{color:'fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>


        <Card shadow={5} style={{ minWidth: '50', margin: 'auto' }}>
          <CardTitle style={{ color: 'white', height: '176px', background: 'url(/portfolio/images/mercenary.png) center / cover' }}>
            Mercenary
          </CardTitle>

          {/* Insert Project Description */}
          <CardText>
            Mercenary is an rpg-idle game that follows an 
            unnamed mercenary who has taken the task of hunting down 
            a mysterious group that attacked the noble house Lancaster 
            and rescue their kidnapped child. Gather clues, recruit warriors,
            and gain resources to empower your band to defeat stronger foes
            and reach your final destination.
          <br/>
          <br/>
          <br/>
              This website is powered using web2py, vue.js, HTML, CSS,
          </CardText>

          <CardActions border>
              <Button colored href="https://github.com/JCastelan/mercenary_game" target="_blank">Github</Button>
            <Button colored >Live Demo(Coming Soon!)</Button>
          </CardActions>

          <CardMenu style={{ color: 'fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

       </div>

        
      )
    }else if(this.state.activeTab ===1){
      return(
        //Mobile Applications
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '50', margin: 'auto' }}>
            <CardTitle style={{ color: 'white', height: '176px', background: 'url(http://www.randomkittengenerator.com/cats/rotator.php) center / cover' }}>
              Project Title
          </CardTitle>

            {/* Insert Project Description */}
            <CardText>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat...
          </CardText>

            <CardActions border>
              <Button colored >Github</Button>
              <Button colored >Live Demo</Button>
            </CardActions>

            <CardMenu style={{ color: 'fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


        </div>

      )
    }else if (this.state.activeTab ===2){
      return(
        //Course Code Examples
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '50', margin: 'auto' }}>
            <CardTitle style={{ color: 'white', height: '176px', background: 'url(http://www.randomkittengenerator.com/cats/rotator.php) center / cover' }}>
              Project Title
          </CardTitle>

            {/* Insert Project Description */}
            <CardText>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat...
          </CardText>

            <CardActions border>
              <Button colored >Github</Button>
              <Button colored >Live Demo</Button>
            </CardActions>

            <CardMenu style={{ color: 'fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '50', margin: 'auto' }}>
            <CardTitle style={{ color: 'white', height: '176px', background: 'url(http://www.randomkittengenerator.com/cats/rotator.php) center / cover' }}>
              Project Title
          </CardTitle>

            {/* Insert Project Description */}
            <CardText>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat...
          </CardText>

            <CardActions border>
              <Button colored >Github</Button>
              <Button colored >Live Demo</Button>
            </CardActions>

            <CardMenu style={{ color: 'fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>



        </div>

      )
    }
  }



  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>Web Development</Tab>
          <Tab>Mobile Development</Tab>
          <Tab>Various Coursework</Tab>

        </Tabs>

       
          <Grid >
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
   
      
      </div>
    )
  }
}

export default Projects;