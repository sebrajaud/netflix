import React from 'react' ;
import { FavoriList } from './components';
import Loading from '../../components/utils/Loading'
import { connect } from 'react-redux';
import { favorisListSelector, favorisIsLoadingtSelector } from '../../store/selectors';
import { fetchDeleteFavori } from '../../store/actions'

const Favoris = (props) => {
    
    return(
        <>            
            { !props.isLoading ? (

                <div className="d-flex flex-row flex-fill pt-4 p-2">
                    <FavoriList 
                        favoris={props.favoris}
                        removeFavori={props.fetchDeleteFavori}
                    />
                </div>
            )
        
            :
                <Loading />
            }
        </>
    )
}


export default connect(state => ({
    favoris: favorisListSelector(state),
    isLoading: favorisIsLoadingtSelector(state)
}), {
    fetchDeleteFavori
})(Favoris)