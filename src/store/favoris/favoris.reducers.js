import * as actions from './favoris.actions';

export default (state = {
    data: [],
    isLoading: false,
    error : null,
}, action ) => {

    switch (action.type) {
        case actions.REQUEST_FAVORIS: {
            return {
                ...state,
                isLoading: true,
                error: null
            }
        }
        case actions.FETCH_FAVORIS_SUCCESS: {
            return {
                ...state,
                datas: action.favoris,
                isLoading: false,
                error: null
            }
        }
        case actions.FETCH_FAVORIS_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        }

        case actions.REQUEST_DELETE_FAVORI:
        case actions.REQUEST_ADD_FAVORI: {
            return {
                ...state,
                isLoading: true,
                error: null
            }
        }
        case actions.FETCH_DELETE_FAVORI_SUCCESS :
        case actions.FETCH_ADD_FAVORI_SUCCESS: {
            return {
                ...state,
                datas: action.favoris,
                isLoading: false,
                error: null
            }
        }
        case actions.FETCH_DELETE_FAVORI_ERROR:
        case actions.FETCH_ADD_FAVORI_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        }
    
        default: {
            return state;
        }
    }
}