import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0};
  }
  
  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <Card shadow={5} style = {{minWidth:'50', margin:'auto'}}>
          <CardTitle style={{ color: 'fff', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png) center / cover'}}> 
          Project #1
          </CardTitle>

          {/* Insert Project Description Here */}
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
      )
    }else if(this.state.activeTab ===1){
      return(
        <div><h1>These are my Mobile Applications </h1></div>
      )
    }else if (this.state.activeTab ===2){
      return(
        <div><h1> These are examples from my Coursework</h1></div>
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

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
          {/* {this.toggleCategories()} */}
        </section>
      
      </div>
    )
  }
}

export default Projects;