import * as api from '../api';

export const getSongs = () => async (dispatch) => {

    try {
        const { data } = await api.fetchSongs();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createSong = (Song) => async (dispatch) => {

    try {
        const { data } = await api.createSong(Song);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log("Error! ", error.message)
    }
}