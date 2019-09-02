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
                        <option value="Character">Character</option>
                        <option value="Annette">Annette</option>
                        <option value="Ashe">Ashe</option>
                        <option value="Bernadetta">Bernadetta</option>
                        <option value="Byleth">Byleth</option>
                        <option value="Caspar">Caspar</option>
                        <option value="Claude">Claude</option>
                        <option value="Cyril">Cyril</option>
                        <option value="Dedue">Dedue</option>
                        <option value="Dimitri">Dimitri</option>
                        <option value="Dorothea">Dorothea</option>
                        <option value="Edelgard">Edelgard</option>
                        <option value="Felix">Felix</option>
                        <option value="Ferdinand">Ferdinand</option>
                        <option value="Flayn">Flayn</option>
                        <option value="Gilbert">Gilbert</option>
                        <option value="Hanneman">Hanneman</option>
                        <option value="Hilda">Hilda</option>
                        <option value="Hubert">Hubert</option>
                        <option value="Ignatz">Ignatz</option>
                        <option value="Ingrid">Ingrid</option>
                        <option value="Leonie">Leonie</option>
                        <option value="Linhardt">Linhardt</option>
                        <option value="Lysithea">Lysithea</option>
                        <option value="Manuela">Manuela</option>
                        <option value="Marianne">Marianne</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Petra">Petra</option>
                        <option value="Seteth">Seteth</option>
                        <option value="Shamir">Shamir</option>
                        <option value="Sylvain">Sylvain</option>


                </select>
              </label>
          </form>
    );
  }



}

export default CharacterSearch;
