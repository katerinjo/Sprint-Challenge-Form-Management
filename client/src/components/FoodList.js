import React from 'react';
import axios from 'axios';
import shuffled from '../utils/shuffled';

class FoodList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { foods: [] };
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    axios
      .get('http://localhost:5000/api/restricted/data')
      .then(res => {
        console.log(res)
        this.setState({ foods: res.data });
      })
      .catch(console.log);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  shuffle = () => {
    this.setState({foods: shuffled(this.state.foods)});
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
        <button onClick={this._isMounted ? this.shuffle : () => console.log('unmounted')}>shuffle</button>
      </>

    );
  }
}

export default FoodList;