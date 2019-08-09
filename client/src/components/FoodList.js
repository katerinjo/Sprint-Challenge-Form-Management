import React from 'react';
import axios from 'axios';

function shuffled(arr) {
  const copy = [...arr];
  const outList = [];
  while (copy.length > 0) {
    const selection = Math.floor(Math.random() * copy.length);
    outList.push(...copy.splice(selection, 1));
  }
  return outList;
}

class FoodList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { foods: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/restricted/data')
      .then(res => {
        console.log(res)
        this.setState({ foods: res.data });
      })
      .catch(console.log);
  }

  shuffle = () => {

  }

  render() {
    return (
      <>
        <ul>
          {
            this.state.foods ?
              this.state.foods.map(food => <li>{food.name}</li>) :
              <p>no foods yet</p>
          }
        </ul>
        <button onClick={this.shuffle}>shuffle</button>
      </>

    );
  }
}

export default FoodList;