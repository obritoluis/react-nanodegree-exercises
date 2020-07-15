import React, { Component } from "react";
import MovieCard from "./MovieCard";

class Dashboard extends Component {
  render() {

    const { usersByMovie, users, movies } = this.props;

    const movieCards = Object.keys(movies).map(id => (
      <MovieCard
        key={id}
        usersWhoLikedMovie={usersByMovie[id]}
        movieInfo={movies[id]}
        users={users}
      />
    ));

    /*
    Return JSX
    */
    return <ul>{movieCards}</ul>;
  }
}

export default Dashboard;
