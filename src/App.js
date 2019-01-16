import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';


class App extends Component {
  render() {
    return (
      /* Uses a header that scrolls with the text, rather than staying locked at the top */ 
      < div className = "demo-big-content" >
        <Layout>
          <Header className="header-color" title="My Portfolio" scroll>
            <Navigation>
              <Link to="/portfolio"><i className="fa fa-home" aria-hidden="true" /></Link>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
        </Layout>
</div >
    );
  }
}

export default App;
