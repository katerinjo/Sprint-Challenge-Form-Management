import React from 'react';

class UserList extends React.Component {
  render () {
    return (
      <ul>
        {this.props.users.map(user => <li>{user.name}</li>)}
      </ul>
    );
  }
}

export default UserList;