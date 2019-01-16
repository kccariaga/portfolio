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
          <CardTitle style={{ color: 'white', height: '176px', background:'url(http://www.randomkittengenerator.com/cats/rotator.php) center / cover'}}> 
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

          <CardMenu style={{color:'fff'}}>
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