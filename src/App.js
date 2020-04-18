import React, {Component} from 'react';
import './App.css';

class App extends Component{

  constructor() {
    super();
    this.state={
      title:"Wlecome"
    }
    console.log('constructor..........')
  }

  render() {
    console.log('render...........')
    return <div><h3>生命周期测试</h3>
      <h2>{this.state.title}</h2>
    </div>
  }
  componentDidMount() {
    console.log('componentDidMount..........')
    fetch('http://localhost:3001/posts',{method:"GET"})
        .then(resp=>resp.json())
        .then(info=>this.setState({title:info[0].title}))

  }

}

export default App;
