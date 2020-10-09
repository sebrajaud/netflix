import React from 'react';
import { MovieDetails, MovieList, SearchBar } from './components/'
import Loading from '../../components/utils/Loading'
import { connect } from 'react-redux';
import { moviesIsLoadingSelector, moviesListSelector, favoriListTitleSelector, moviesSelectedMovieSelector } from '../../store/selectors';
import { fetchDeleteFavori, fetchAddFavori, fetchMovies, setSelectedMovie } from '../../store/actions';

export const Films = (props) => {
    console.log( props)
    return(
        <>
            <SearchBar fetchMovies={props.fetchMovies} />
            { props.isLoading ? (
                <Loading />
            )
            
            :
                <div className="d-flex flex-row flex-fill pt-4 p-2">
                    <MovieList 
                        movies={props.movies} 
                        updateSelectedMovie={props.setSelectedMovie} 
                        addFavori={props.fetchAddFavori}
                        removeFavori={props.fetchDeleteFavori}
                        favoris={props.favorisListTitle}
                    />
                    <MovieDetails  
                        movie={ props.selectedMovie } 
                    />
                </div>
            }
        </>
    )
}

export default connect(state => ({
    isLoading: moviesIsLoadingSelector(state),
    movies: moviesListSelector(state),
    favorisListTitle:  favoriListTitleSelector(state),
    selectedMovie: moviesSelectedMovieSelector(state)
}), {
    fetchMovies,
    setSelectedMovie,
    fetchDeleteFavori,
    fetchAddFavori
})(Films);