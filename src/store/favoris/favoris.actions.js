
import apiFirebaseRequest from '../../conf/api.firebase';

export const REQUEST_FAVORIS = 'REQUEST_FAVORIS';
export const FETCH_FAVORIS = 'FETCH_FAVORIS';
export const FETCH_FAVORIS_SUCCESS = 'FETCH_FAVORIS_SUCCESS';
export const FETCH_FAVORIS_ERROR = 'FETCH_FAVORIS_ERROR';

export const REQUEST_ADD_FAVORI = 'REQUEST_ADD_FAVORI';
export const FETCH_ADD_FAVORI = 'FETCH_ADD_FAVORI';
export const FETCH_ADD_FAVORI_SUCCESS = 'FETCH_ADD_FAVORI_SUCCESS';
export const FETCH_ADD_FAVORI_ERROR = 'FETCH_ADD_FAVORI_ERROR';

export const REQUEST_DELETE_FAVORI = 'REQUEST_DELETE_FAVORI';
export const FETCH_DELETE_FAVORI = 'FETCH_DELETE_FAVORI';
export const FETCH_DELETE_FAVORI_SUCCESS = 'FETCH_DELETE_FAVORI_SUCCESS';
export const FETCH_DELETE_FAVORI_ERROR = 'FETCH_DELETE_FAVORI_ERROR';


export const requestFavori = () => ({
    type: REQUEST_FAVORIS
})


export const fetchFavorisSuccess = (favoris) => ({
    type: FETCH_FAVORIS_SUCCESS,
    favoris
})


export const fetchFavorisError = (error) => ({
    type: FETCH_FAVORIS_ERROR,
    error
})

export const fetchFavoris = () => {
    return dispatch => {
        dispatch(requestFavori());
        return apiFirebaseRequest.fetchFavoris().then(
            favoris => dispatch(fetchFavorisSuccess(favoris)),
            error => dispatch(fetchFavorisError(error))
        )
    }
}

export const requestAddFavori = () => ({
    type: REQUEST_ADD_FAVORI
})

export const fetchAddFavoriSuccess = favoris => ({
    type: FETCH_ADD_FAVORI_SUCCESS,
    favoris
})

export const fetchAddFavoriError = error => ({
    type: FETCH_ADD_FAVORI_ERROR,
    error
})

export const fetchAddFavori = (movie) => {
    return (dispatch, getState) => {
        const favoris = [...getState().favoris.datas, movie];
        dispatch(requestAddFavori);
        
        return apiFirebaseRequest.saveFavori(favoris).then(
            () => dispatch(fetchAddFavoriSuccess(favoris)),
            error => dispatch(fetchAddFavoriError(error))
        )
    }
}



export const requestDeleteFavori = () => ({
    type: REQUEST_DELETE_FAVORI
})

export const fetchDeleteFavoriSuccess = favoris => ({
    type: FETCH_DELETE_FAVORI_SUCCESS,
    favoris
})

export const fetchDeleteFavoriError = error => ({
    type: FETCH_DELETE_FAVORI_ERROR,
    error
})

export const fetchDeleteFavori = (title) => {
    return (dispatch, getState) => {
        const favoris = [...getState().favoris.datas];

        const index = favoris.findIndex(f => f.title === title)
        favoris.splice(index, 1);
        
        dispatch(requestDeleteFavori);
        
        return apiFirebaseRequest.saveFavori(favoris).then(
            () => dispatch(fetchDeleteFavoriSuccess(favoris)),
            error => dispatch(fetchDeleteFavoriError(error))
        )
        
    }
}