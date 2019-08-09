import React from 'react';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.users = props.users; //not 100% sure which to use
    this.state = props.users;
  }
  render () {
    return (
      <ul>
        {this.users.map(user => <li>{user.name}</li>)}
      </ul>
    );
  }
}

export default UserList;