import React from 'react';
import './App.css';
import GrowthRates from './components/GrowthRates';
import CharacterSearch from './components/CharacterSearch';
import ClassSearch from './components/ClassSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>FE Three Houses Growth Rates Calculator</h1>

          <h2> Character:</h2>
          <CharacterSearch/>
          <h2>Class:</h2>
          <ClassSearch/>
          
        <GrowthRates/>
      </div>
    );
  }
}

export default App;
