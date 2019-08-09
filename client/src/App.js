import React from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <UserList />
      <Form />
    </div>
  );
}

export default App;
