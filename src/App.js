import React,{Component} from 'react';
import './App.css';
import Api from './api'

class App extends Component{
  state = {
    word:""
  }

  render(){
    return(
      <div>
        <h1>wikipedia search</h1>
        <Api searchWord={this.state.word}/>
      </div>
    )
  }
}

export default App;
