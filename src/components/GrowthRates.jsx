import React from 'react';
//2 * 9 table


class GrowthRates extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
        </table>
    );
  }
}

export default GrowthRates;
