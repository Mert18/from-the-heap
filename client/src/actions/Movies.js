import * as api from '../api';

export const getMovies = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMovies();
        dispatch({ type: 'FETCH_MOVIES', payload: data });
    } catch (err) {
        console.log("Error!", err.message)
    }
}

export const createMovie = (Movie) => async (dispatch) => {
    try {
        const { data } = await api.createMovie(Movie);
        dispatch({ type: 'CREATE_MOVIE', payload: data });
    } catch (err) {
        console.log("Error!", err.message)
    }
}
