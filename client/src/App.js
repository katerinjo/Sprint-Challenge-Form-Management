import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([{name: 'test1'}, {name: 'test2'}]);

  function addUser(user) {
    setUsers([...users, user]);
  }

  return (
    <div className="App">
      <UserList users={users} />
      <Form subFun={addUser} />
    </div>
  );
}

export default App;
