import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddUser extends Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    userExists: false,
  }

  userExists = (userName) => {
    const { users } = this.props
    const doesUserExist = users.find((u) => u.userName === userName)
    if (doesUserExist) {
      return true
    } else {
      return false
    }
  }

  addUser = (event) => {
    event.preventDefault()
    const { firstName, lastName, userName } = this.state
    const userExists = this.userExists(userName)
    const user = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      gamesPlayed: 0,
    }

    !userExists && this.props.onAddUser(user)

    this.setState({userExists: userExists})

  }

  handleInputText = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  disableButton = () => {
    const { firstName, lastName, userName } = this.state
    const arr = [firstName, lastName, userName]
    return arr.includes('')
  }

  render() {
    const { firstName, lastName, userName } = this.state

    return (
      <div>
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={firstName}
            onChange={this.handleInputText}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={this.handleInputText}
          />
          <input
            type="text"
            name="userName"
            placeholder="Enter Username"
            value={userName}
            onChange={this.handleInputText}
          />
          <button
            disabled={this.disableButton()}>
            Add
          </button>
        </form>
        {this.state.userExists && (
          <div className="error-message">
            <span>This username already exists</span>
          </div>
        )}
      </div>
    )
  }
}

AddUser.propTypes = {
  onAddUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
}

export default AddUser