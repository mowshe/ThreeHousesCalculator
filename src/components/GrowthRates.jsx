import React from 'react';
 
//2 * 9 table


class GrowthRates extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = { 
      unit:{
        Hp:0,
        Str:0,
        Mag:0,
        Dex:0,
        Spd:0,
        Lck:0,
        Def:0,
        Res:0,
        Cha:0
      },
      loading:true,
      charClass:{
        Hp:0,
        Str:0,
        Mag:0,
        Dex:0,
        Spd:0,
        Lck:0,
        Def:0,
        Res:0,
        Cha:0
      }
    }
  }
  
  addStats = (unitName,unitClass) =>{
    
  }

  // Make a specific case where instead of 
  async componentDidUpdate(prevProp){
    if (this.props.type !== "both"){
      if(prevProp.character !== this.props.character){      
            const url = "http://127.0.0.1:5000/growth/";
            const urlAddition = this.props.character;
            const response = await fetch(url+urlAddition);
            const data = await response.json();            
            if(this.props.type === "charUnit"){
              this.setState({
                loading:false,
                unit:data
              });
            }
            else{
              this.setState({
                loading:false,
                // this SHOULD be charClass:data
                charClass:data
              });
            }
        }
      }
    else{
      // this is where you should put both objects
      const url = "http://127.0.0.1:5000/growth/";
            const urlAddition = this.props.character;
            const response = await fetch(url+urlAddition);
            const data = await response.json();
            const res2 =  this.props.charClass;
            const data2 = await response.json();
            this.setState({
              loading:false,
              unit:data,
              charClass:data2
            });
    }
  }

  render() {
    return (
        <div id="tableloadingspot">
            {this.state.loading  || !this.state.unit? (
              <div  id="loading"></div>
            ):(

          <table>
              <tr class="statNames">
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
              <tr class="actualStats">
                  <td>{+this.state.unit.Hp + +this.state.charClass.Hp}</td>
                  <td>{this.state.unit.Str}</td>
                  <td>{this.state.unit.Mag}</td>
                  <td>{this.state.unit.Dex}</td>
                  <td>{this.state.unit.Spd}</td>
                  <td>{this.state.unit.Lck}</td>
                  <td>{this.state.unit.Def}</td>
                  <td>{this.state.unit.Res}</td>
                  <td>{this.state.unit.Cha}</td>
              </tr>
            </table>)
          }
        </div>
    );
  }
}

export default GrowthRates;
