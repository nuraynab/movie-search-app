import React from 'react'
import {fetchMovie, isLoading} from "../redux/ActionCreators";
import {connect} from 'react-redux';
import Loading from "./LoadingComponent";
import {LoadingContainer} from "../styles/LoadingStyledComponents";
import { MovieContainer, Poster, AboutBox, DescriptionBox} from "../styles/AboutMovieStyledComponents"

const mapStateToProps = state => {
    return{
        movie: state.movies.movie,
        loading: state.movies.isLoading
    }
}

const mapDispatchToProps = dispatch => ({
    fetchMovie: (id) => {dispatch(fetchMovie(id))},
    isLoading: () => {dispatch(isLoading())}

});

function ShowMovieInfo({movie}) {
    const hasPoster = movie.Poster !== "N/A";
    return(
        <MovieContainer>
            <Poster hasPoster={hasPoster}>
                <img src={movie.Poster} className="thumbnail" alt="Poster" />
            </Poster>
            <DescriptionBox hasPoster={hasPoster}>
                <h2 className="mb-4">{movie.Title} ({movie.Year})</h2>
                <ul className="list-group">
                    <li className="list-group-item">
                        <strong>Released:</strong> {movie.Released}
                    </li>
                    <li className="list-group-item">
                        <strong>Country:</strong> {movie.Country}
                    </li>
                    <li className="list-group-item">
                        <strong>Genre:</strong> {movie.Genre}
                    </li>
                    <li className="list-group-item">
                        <strong>Director:</strong> {movie.Director}
                    </li>
                    <li className="list-group-item">
                        <strong>Writer:</strong> {movie.Writer}
                    </li>
                    <li className="list-group-item">
                        <strong>Actors:</strong> {movie.Actors}
                    </li>
                    <li className="list-group-item">
                        <strong>IMDB Rating:</strong> {movie.imdbRating}
                    </li>
                    <li className="list-group-item">
                        <strong>Runtime:</strong> {movie.Runtime}
                    </li>
                </ul>
            </DescriptionBox>
            <AboutBox>
                <h3>About </h3>
                {movie.Plot}
                <hr />
                <a href={'https://www.imdb.com/title/' + movie.imdbID}
                   type="button"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="btn btn-primary">

                    Watch on IMDB
                </a>
                <a href="/" id="back" type="button"> Go Back To Search </a>
            </AboutBox>
        </MovieContainer>
    )

}

class AboutMovie extends React.Component{

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id);
        this.props.isLoading();

    }

    render() {
        return(
            <div>
                {this.props.loading ? <LoadingContainer> <Loading /> </LoadingContainer>  : <ShowMovieInfo movie={this.props.movie}/>}
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutMovie);



