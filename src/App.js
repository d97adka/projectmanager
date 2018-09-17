import React, { Component } from 'react';
import './App.css';
import Projects from './components/projects';

class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App ',
          category: ' Mobile Dev'
        },
        {
          title: 'Ecommerce',
          category: 'Web Development'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
          MyApp
          <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
