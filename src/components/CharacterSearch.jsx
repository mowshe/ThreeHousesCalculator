import React from 'react';

class CharacterSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state ={value:""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e){
    this.setState({value : e.target.value});
  }

  handleSubmit(e){
    console.log("Submitted");
    this.setState({value:e.target.value});

  }

  render() {
    return (
          <form onSubmit={this.handleSubmit}>
              <label>
                <select value={this.state.value} onChange={this.handleChange}>
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
            <input type="submit" value="Submit"/>
          </form>
    );
  }



}

export default CharacterSearch;
