import React, { Component } from 'react';

class UserList extends Component {
  render() {

    const { usersWhoLikedMovie, users } = this.props;

    if (!usersWhoLikedMovie || usersWhoLikedMovie.length === 0) {
      return <p>None of the current users liked this movie</p>;
    }

    const userList = usersWhoLikedMovie.map(id => (
      <li key={id}>
        <p>{users[id].name}</p>
      </li>
    ));
    
    /*
    Return JSX
    */
    return <ul>{userList}</ul>;
  }
}

export default UserList;