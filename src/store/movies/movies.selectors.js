import { createSelector } from 'reselect';

export const moviesSelector = state => state.movies;
export const moviesSelectedMovieIndexSelector = state => state.movies.selectedMovie;


export const moviesIsLoadingSelector = createSelector(
    [moviesSelector],
    movies => movies.isLoading
)

export const moviesListSelector = createSelector(
    [moviesSelector],
    movies => movies.datas 
)

export const moviesSelectedMovieSelector = createSelector(
    [moviesSelector, moviesSelectedMovieIndexSelector],
    (movies, index) =>  {
        return movies.datas[index]
    }
)

