import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Form from './components/Form';
import FoodList from './components/FoodList';

function App() {
  // const [pending, setPending] = useState(false);
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   if (pending) {
  //     axios
  //       .get('http://localhost:5000/api/restricted/data')
  //       .then(res => {
  //         console.log(res)
  //         setUsers(res.data);
  //       })
  //       .catch(console.log);
  //     setPending(false);
  //   }
  // }, [pending]);

  return (
    <div className="App">
      <FoodList />
      <Form />
    </div>
  );
}

export default App;
