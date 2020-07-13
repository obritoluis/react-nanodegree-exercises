import React, { Component } from 'react';

class UserMovies extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.profiles.map((profile) => {
            const userName = this.props.users[profile.userID].name;
            const favMovieName = this.props.movies[profile.favoriteMovieID].name;
            
            return (            
              <li key={profile.id}>
                {`${userName}'s favorite movie is ${favMovieName}.`}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
    
export default UserMovies;