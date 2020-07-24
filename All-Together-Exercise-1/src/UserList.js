import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserList extends Component {
  state = {
    hidePlayedGames: false,
  }

  toggleGamesPlayedColumn = () => {
    this.setState((prevState) => ({
      hidePlayedGames: !prevState.hidePlayedGames,
    }))
  }

  toggleVisibility = () => {
    const { hidePlayedGames } = this.state;
    return hidePlayedGames === false ? "" : "hide"
  }

  render() {
    const { hidePlayedGames } = this.state;
    const { users } = this.props;

    const gamesPlayedButton = (
      <button onClick={this.toggleGamesPlayedColumn}>
        {hidePlayedGames ? 'Show ' : 'Hide '}
        the number os games played column
      </button>
    )

    return (
      <div>        
        {(users && users.length > 0) ? gamesPlayedButton : ''}
        <h3>Users</h3>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Name</th>
              <th className={this.toggleVisibility()}>Games Played</th>
          </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userName}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.userName}</td>
                <td className={this.toggleVisibility()}>{user.gamesPlayed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UserList