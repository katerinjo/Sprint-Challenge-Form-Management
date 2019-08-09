import React from 'react';
import axios from 'axios';

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
        this.setState({foods: res.data});
      })
      .catch(console.log);
  }

  render() {
    return (
      <ul>
        {
          this.state.foods ?
          this.state.foods.map(food => <li>{food.name}</li>) :
          <p>no foods yet</p>
        }
      </ul>
    );
  }
}

export default FoodList;