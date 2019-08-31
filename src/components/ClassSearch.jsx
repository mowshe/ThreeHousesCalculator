import React from 'react';

class ClassSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state ={value:""}
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e){
    this.setState({value : e.target.value});
    this.props.callBackFromParent(e.target.value);
  }

  render() {
    return (
            <form class="selection">
              <label>
                <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Base">Base</option>
                        <option value="Commoner">Commoner</option>
                        <option value="Myrmidon">Myrmidon</option>
                        <option value="Soldier">Soldier</option>
                        <option value="Fighter">Fighter</option>
                        <option value="Monk">Monk</option>
                        <option value="Lord">Lord</option>
                        <option value="Mercenary">Mercenary</option>
                        <option value="Thief">Thief</option>
                        <option value="Armored Knight	">Armored Knight	</option>
                        <option value="Cavalier">Cavalier</option>
                </select>
              </label>
          </form>
    );
  }



}

export default ClassSearch;
