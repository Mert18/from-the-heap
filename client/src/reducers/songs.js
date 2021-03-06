/* eslint-disable import/no-anonymous-default-export */

export default (songs = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...songs, action.payload];
        default:
            return songs;
    }
}