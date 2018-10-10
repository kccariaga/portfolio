import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <div class="container-fullwidth center">
          <div className="navbar">
         
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link active" href="#!">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/kccariaga">Github</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/karen-cariaga-2a8241123/">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <header className="App-header">

                <div class="self-portrait">
                  <img src="https://media.tenor.com/images/cbff5f3a76b4da86ea39120496c6af7b/tenor.gif" class="rounded center"></img>
                
                  <h1>Karen Cariaga</h1>
                  <h4>Programmer</h4>
                  <h6>Seeking new opportunities</h6>
                </div>
              </header>
           </div>
            <div class="col-md-8">
              <body className="App-body">

                <p>
                  Thank you for stumbling across my webpage. I am a soon-to-be Computer Science
                  graduate of the beautiful campus, UC Santa Cruz. Scroll down below to learn more about
                  me and the skills I have to offer.
              </p>
              </body>
           </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
