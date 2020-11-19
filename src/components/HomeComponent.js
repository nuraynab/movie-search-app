import React from 'react';
import {connect} from 'react-redux';
import Movies from "./MoviesComponent";
import Loading from "./LoadingComponent";
import Search from "./SearchComponent";
import {LoadingContainer} from "../styles/LoadingStyledComponents";

const mapStateToProps = state => {
    return{
        movies: state.movies.movies,
        isLoading: state.movies.isLoading
    }
}

class Home extends React.Component{

    render() {

        return(
            <div>
                <Search/>
                {this.props.isLoading ? <LoadingContainer><Loading/></LoadingContainer> : <Movies movies={this.props.movies}/>}
            </div>
        )
    }
}

export default connect(mapStateToProps, {})(Home);


