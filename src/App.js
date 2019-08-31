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
      charClass:""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.characterCallback = this.characterCallback.bind(this);
  }

  

  characterCallback = (dataFromChild) => {
    this.setState({value:dataFromChild})
  }

  classCallback = (dataFromChild) => {
    this.setState({charClass:dataFromChild})
  }

  handleSubmit(event){
    this.setState({value : event.target.value})
    console.log(this.state.value);
  }

  componentDidUpdate(){
  }

  render() {
    return (
      <div className="App" id="main">
        <div id="header">
          <h1>Fire Emblem Growth Rates</h1>
        </div>
        <div class="contain">
          <div class="charAndClass">
            <h2 class="title" id="characterName"> Character: {this.state.value}</h2>
            <CharacterSearch callBackFromParent={this.characterCallback}  handleSubmit={this.handleSubmit.bind(this)}/>
            <GrowthRates character={this.state.value} />
            <h2 class="title" id="characterName"> Class: {this.state.charClass}</h2>
            <ClassSearch callBackFromParent={this.classCallback}/>
            <GrowthRates character={this.state.charClass} />
            <h2 class="title" id="characterName"> Character + Class:</h2>
            <GrowthRates character={this.state.charClass} />
          </div>
        </div>
      </div>  
    );
  }
}

export default App;
