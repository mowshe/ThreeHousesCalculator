import React from 'react';

class CharacterSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      value:this.props.person
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({value : e.target.value});
    this.props.callBackFromParent(e.target.value);
  }

// {this.props.callBackFromParent("Annette")}
  render() {
    return (
      // Make this a button to use callback
          <form class="selection">
              <label>
                <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Annette">Character</option>
                        <option value="Annette">Annette</option>
                        <option value="Ashe">Ashe</option>
                        <option value="Bernadetta">Bernadetta</option>
                        <option value="Byleth">Byleth</option>
                        <option value="Caspar">Caspar</option>
                        <option value="Claude">Claude</option>
                        <option value="Cyril">Cyril</option>
                        <option value="Dedue">Dedue</option>
                        <option value="Dimitri">Dimitri</option>
                </select>
              </label>
          </form>
    );
  }



}

export default CharacterSearch;
