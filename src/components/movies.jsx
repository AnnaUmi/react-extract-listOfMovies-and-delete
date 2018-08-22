import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

export default class Movies extends Component {
    state = {
        movies: getMovies()
    }
    render() {
        const {length: count} = this.state.movies;
        if (count === 0) return <p>no movies</p>
        return (
            <React.Fragment>
            <p>Showing {count} movies database</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button onClick={() => this.deleteItem(movie)} className="btn btn-warning">Delete</button></td>
                        </tr>))}
                </tbody>
            </table>
            </React.Fragment>
        )
    }
    deleteItem = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({
            movies: movies
        })
    }

}