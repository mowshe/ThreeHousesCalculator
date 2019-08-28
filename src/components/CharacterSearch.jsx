import React from 'react';

class CharacterSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <form>
            <label>
            <select type="text" name="class">
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
