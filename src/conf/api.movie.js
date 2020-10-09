import * as axios from 'axios';


export const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {

    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmYwMmE0NDdlYmQ5YTAyM2U3OTQzYmM4NGNlNDkyZSIsInN1YiI6IjVjOGEwMDlmMGUwYTI2NDJiNWMwYzAzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CTF_jzNdPFusjQZcxx_cXQ9K2Kjge-1ilcDLa-BXpSI'
    return req;
})




export const apiMovieMap = (moviesApi) => {
   
    const movies = moviesApi.map( m => ({ 
        img: `https://image.tmdb.org/t/p/w500/${m.poster_path}`,
        title: m.title,
        details: `${ m.release_date } - ${ m.vote_average}/10 (${ m.vote_count })`,
        description: m.overview
    }))

    return movies;

}

export default {
    searchMovies: (filter) => {
        const query =
        "?" +
        Object.keys(filter)
          .map(k => `${k}=${filter[k]}&`)
          .join("");
        
        return apiMovie.get(`/search/movie${query}`)
                .then(response =>  response.data.results )
                .then( moviesApi => {
                    
                    if(moviesApi.length > 0){ 
                        return apiMovieMap(moviesApi);                        
                    } else {  return [] }

                })
                .catch( err => {
                    console.log(err)
                })
    }
}