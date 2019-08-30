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
        <h1>FE3H Growth Rates Calculator</h1>
          <div class="charAndClass">
            <h2 class="title" id="characterName"> Character: {this.state.value}</h2>
          </div>
          <CharacterSearch callBackFromParent={this.characterCallback}  handleSubmit={this.handleSubmit.bind(this)}/>
          <div class="charAndClass">
            <h2 class="title" id="characterName"> Class: {this.state.charClass}</h2>
          </div>
          <ClassSearch callBackFromParent={this.classCallback}/>
          
          <GrowthRates character={this.state.value} />
      </div>  
    );
  }
}

export default App;
