import React from 'react';
import {connect} from 'react-redux';
import {fetchMovies, searchMovies, isLoading} from "../redux/ActionCreators";
import {Control, Form, Errors} from "react-redux-form";
import {SearchContainer, SearchButton, SearchInput, Parameters} from "../styles/SearchStyledComponents";

const required = (val) => val && val.length;
const isYear = (val) => /(^[12][0-9]{3}$)|^$/i.test(val);


const mapDispatchToProps = dispatch => ({
    fetchMovies: (query, year, type, plot) => {dispatch(fetchMovies(query, year, type, plot))},
    searchMovies: (query) => {dispatch(searchMovies(query))},
    isLoading: () => {dispatch(isLoading())}
});

const mapStateToProps = state => {
    return{
        query: state.query
    }
}

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAdvancedSearchOpen: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.props.searchMovies(e.target.value);
    };

    handleSubmit(values) {
        this.props.fetchMovies(values.query.toLowerCase(), values.year.toLowerCase(), values.type.toLowerCase(), values.plot.toLowerCase());
        this.props.searchMovies(values.query.toLowerCase());
        this.props.isLoading();
    };


    render() {

        return(
            <SearchContainer>
                <div>
                    <Form model='advancedSearch' onSubmit={(values) => this.handleSubmit(values)} >
                        <SearchInput>
                            <label htmlFor="query">Search: </label>
                            <Control.text model='.query' id='query' name='query' placeholder="movie, shows..."
                            validators={{required}}/>
                            <Errors model=".query" className="text-danger" show="touched" messages={{required: 'Please, enter a search request'}}/>
                        </SearchInput>
                        <Parameters>
                            <div>
                                <label htmlFor='year'>Year: </label>
                                <Control.text model='.year' id='year' name='year' className="parameter" validators={{isYear}}/>
                                <Errors model=".year" className="text-danger" show="touched" messages={{isYear: 'Please, enter year in YYYY format'}}/>

                            </div>
                            <div>
                                <label htmlFor="type">Type: </label>
                                <Control.select model='.type' id='type' name='type' className="parameter">
                                    <option>Movie</option>
                                    <option>Series</option>
                                    <option>Episode</option>
                                </Control.select>
                            </div>
                            <div>
                                <label htmlFor="plot">Plot:</label>
                                <Control.select model='.plot' id='plot' name='plot' className="parameter">
                                    <option>Short</option>
                                    <option>Full</option>
                                </Control.select>
                            </div>

                        </Parameters>
                        <SearchButton>
                            <button type="submit"><i className="fa fa-search"/> Find</button>
                        </SearchButton>

                    </Form>
                </div>
            </SearchContainer>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
