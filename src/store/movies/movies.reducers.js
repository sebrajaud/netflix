import * as actions from './movies.actions';

export default (state= { 
    datas:[], 
    isLoading: false, 
    error: null, 
    selectedMovie: 0
}, action) => {

    switch (action.type) {
        case actions.REQUEST_MOVIES: {
            return {
                ...state,
                isLoading: true
            }
        }
            
        case actions.FECTH_MOVIES_SUCCESS : {

            return {
                ...state,
                isLoading: false,
                error: null,
                datas: [ ...action.movies ]
            }
        }

        case actions.FECTH_MOVIES_ERROR : {
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        }

        case actions.SET_SELECTED_MOVIE: {
            return {
                ...state,
                isLoading: false,
                selectedMovie: action.index,
                error: null
            }
        }

        default: {
            return state;
        }
    }

}
