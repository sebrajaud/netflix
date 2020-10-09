import apiMovieRequests from '../../conf/api.movie';

export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const FECTH_MOVIES = 'FECTH_MOVIES';
export const FECTH_MOVIES_SUCCESS = 'FECTH_MOVIES_SUCCESS';
export const FECTH_MOVIES_ERROR = 'FECTH_MOVIES_ERROR';
export const SET_SELECTED_MOVIE = 'SET_SELECTED_MOVIE';

export const requestMovies = () => ({
    type: REQUEST_MOVIES
})


export const fetchMoviesSuccess = movies => ({
    type: FECTH_MOVIES_SUCCESS,
    movies
})


export const fetchMoviesError = error => ({
    type: FECTH_MOVIES_ERROR,
    error
})


export const setSelectedMovie = index => ({
    type: SET_SELECTED_MOVIE,
    index
})


export const fetchMovies = (filter) => {
    return dispatch => {
        dispatch(requestMovies());
        
        return apiMovieRequests.searchMovies(filter).then(
            
            movies => dispatch(fetchMoviesSuccess(movies)), 
            error => dispatch(fetchMoviesError(error))
        )
                
    }
}