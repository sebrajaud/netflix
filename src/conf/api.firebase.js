import * as axios from 'axios';


export const apiFirebase = axios.create({
    baseURL: 'https://netflix-eecb0.firebaseio.com'
})

export default {
   fetchFavoris: () => {
    return apiFirebase.get('favoris.json')
        .then( response => response.data ? response.data : [] )
   },
   saveFavori: favoris => apiFirebase.put('favoris.json', favoris )
   
};