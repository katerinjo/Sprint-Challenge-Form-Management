import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Form from './components/Form';
import UserList from './components/UserList';

function App() {
  const [pending, setPending] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (pending) {
      setUsers([{name: 'test'}]);
      setPending(false);
    }
  }, [pending]);

  return (
    <div className="App">
      <UserList users={users} />
      <Form subFun={() => setPending(true)} />
    </div>
  );
}

export default App;
