import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import FooterPage from './components/footer';

class App extends Component {
  render() {
    return (
      /* Uses a header that scrolls with the text, rather than staying locked at the top */ 
      < div className = "demo-big-content" >
        <Layout>
          <Header className="header-color" title="Karen Cariaga" scroll>
            <Navigation>
              <Link to="/portfolio/">Home</Link>
              <Link to="/portfolio/resume">Resume</Link>
              {/* <Link to="/portfolio/about">About Me</Link> */}
              <Link to="/portfolio/projects">Projects</Link>
              <Link to="/portfolio/contact">Contact</Link>
            </Navigation>
          </Header>

          <Drawer title="Karen Cariaga">
            <Navigation>
              <Link to="/portfolio/">Home</Link>
              <Link to="/portfolio/resume">Resume</Link>
              {/* <Link to="/portfolio/about">About Me</Link> */}
              <Link to="/portfolio/projects">Projects</Link>
              <Link to="/portfolio/contact">Contact</Link>
            </Navigation>
          </Drawer>

          <Content>
            <Main/>
          </Content>

          <FooterPage/>
        </Layout>
      </div >
    );
  }
}

export default App;
