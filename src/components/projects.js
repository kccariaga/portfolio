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

        {/* Let's Code Together */}
        <Card shadow={5} style = {{minWidth:'50', margin:'auto'}}>
          <CardTitle style={{ color: 'gray', height: '176px', 
          background:'url(/portfolio/images/letscodetogether.png) center / cover'}}>    
          Let's Code Together
          </CardTitle>
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
            {/* <Button colored >Live Demo(Coming Soon!)</Button> */}
          </CardActions>

          <CardMenu style={{color:'fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Mercenary */}
        <Card shadow={5} style={{ minWidth: '50', margin: 'auto' }}>
          <CardTitle style={{ color: 'gray', height: '176px', background: 'url(/portfolio/images/mercenary.png) center / cover' }}>
            Mercenary
          </CardTitle>
          <CardText>
            CMPS183: Web Applications<br/>
            Mercenary is an rpg-idle game that follows an 
            unnamed mercenary who has taken the task of hunting down 
            a mysterious group that attacked the noble house Lancaster 
            and rescue their kidnapped child. Gather clues, recruit warriors,
            and gain resources to empower your band to defeat stronger foes
            and reach your final destination.
          <br/>
          <br/>
              This website is powered by web2py, vue.js, HTML, CSS,
          </CardText>

          <CardActions border>
              <Button colored href="https://github.com/JCastelan/mercenary_game" target="_blank">Github</Button>
            {/* <Button colored >Live Demo(Coming Soon!)</Button> */}
          </CardActions>

          <CardMenu style={{ color: 'fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* SEADS Data Visualization */}
          <Card shadow={5} style={{ minWidth: '50', margin: 'auto' }}>
            <CardTitle style={{ color: 'gray', height: '176px', background: 'url(/portfolio/images/seads.png) center / cover' }}>
              SEADS Data Visualization
          </CardTitle>
            <CardText>
              CMPS119: Software for Society<br/>
              This application was created for the non-profit organization 
              SEADS at UC-Santa Cruz. This single-page application displays
              energy consumption data from various panels(HVAC, Water Heater, Solar, Kitchen)
              in the form of a radial pi chart with a time slider.
              
              <br />
              <br />
              <br />
              This website is powered by D3.js, Javascript, HTML and CSS.
          </CardText>

            <CardActions border>
              <Button colored href="https://github.com/sharad97/SEADS_Visualization" target="_blank">Github</Button>
              <Button colored href="https://sharad97.github.io/SEADS_Visualization/FInal/index.html" target="_blank" >Live Demo</Button>
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
        {/* KZSC Radio */}
          <Card shadow={5} style={{ minWidth: '50', margin: 'auto' }}>
            <CardTitle style={{ color: 'gray', height: '176px', background: 'url(/portfolio/images/kzsc.png) center / cover' }}>
              KZSC Radio
          </CardTitle>
            <CardText>
            CMPS121: Mobile Applications<br/>
            This is an improved version of the existing KZSC Radio app where the 
            user can stream 88.1FM on their phones. The new features include live 
            chat with the DJ and other listeners, a donate page, playlist schedule,
            and album information.
            <br/>
             <br/>
             The tools used to create this application were Android Studio, Java and XML.
          </CardText>

            <CardActions border>
              <Button colored href="https://github.com/kemunoz/kzscradio" target="_blank">Github</Button>
              <Button colored href="https://drive.google.com/file/d/1URhyYZD5JEdcOoTjqVTmRkHZO6qxalRo/view?usp=sharing"
                              target="_blank" >Live Demo</Button>
            </CardActions>

            <CardMenu style={{ color: 'fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Script Scribble */}
            <Card shadow={5} style={{ minWidth: '50', margin: 'auto' }}>
              <CardTitle style={{ color: 'gray', height: '176px', background: 'url(/portfolio/images/scriptscribble.png) center / cover' }}>
                Script Scribble
          </CardTitle>
              <CardText>
                CMPS115: Intro to Software Engineering <br />
                Inspired by Scratch, Script Scribble is an education mobile app intended to 
                teach programming logic to younger audiences through the use
                of draggable blocks. This was a project done in a team of 5, using SCRUM
                to handle project management
             <br />
              <br/>
                The tools used to create this application were Android Studio, Java and XML.
          </CardText>

              <CardActions border>
                <Button colored href="https://bitbucket.org/mcsquizzy123/script_scribble/src/master/" target="_blank">Bitbucket</Button>
                <Button colored href="https://streamable.com/xqblv"
                  target="_blank" >Live Demo</Button>
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
        <h1> Coming Soon! </h1>
          


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