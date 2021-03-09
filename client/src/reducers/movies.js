/* eslint-disable import/no-anonymous-default-export */

export default (movies = [], action) => {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return action.payload;
        case 'CREATE_MOVIE':
            return [...movies, action.payload];
        default:
            return movies;
    }
}