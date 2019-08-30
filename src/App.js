import React from 'react';
import './App.css';
import GrowthRates from './components/GrowthRates';
import CharacterSearch from './components/CharacterSearch';
import ClassSearch from './components/ClassSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:"",
      class:""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.characterCallback = this.characterCallback.bind(this);
  }

  characterCallback = (dataFromChild) => {
    this.setState({value:dataFromChild})
  }

  handleSubmit(event){
    this.setState({value : event.target.value})
    console.log(this.state.value);
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <h1>FE Three Houses Growth Rates Calculator</h1>

          <h2> Character: {this.state.value}</h2>
          <CharacterSearch callBackFromParent={this.characterCallback}  handleSubmit={this.handleSubmit.bind(this)}/>
          <h2>Class:</h2>
          <ClassSearch/>
          
          <GrowthRates/>
      </div>  
    );
  }
}

export default App;
