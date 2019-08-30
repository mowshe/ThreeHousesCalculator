import React from 'react';
 
//2 * 9 table


class GrowthRates extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading:true,
      Hp:"23",
      Str:"8",
      Mag:"5",
      Dex:"8",
      Spd:"9",
      Lck:"6",
      Def:"5",
      Res:"6",
      Cha:"5"
    }
  }

  async componentDidMount(){
    const url = "http://127.0.0.1:5000/";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({

    })
  }


  render() {
    return (
        <div>
            {this.state.loading || !this.state.person ? (
              <div>loading...</div>
            ):(

          <table>
              <tr>
                  <td>HP</td>
                  <td>STR</td>
                  <td>MAG</td>
                  <td>DEX</td>
                  <td>SPD</td>
                  <td>LCK</td>
                  <td>DEF</td>
                  <td>RES</td>
                  <td>CHA</td>

              </tr>
              <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
              </tr>
            </table>)
          }
        </div>
    );
  }
}

export default GrowthRates;
