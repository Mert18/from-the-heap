import { combineReducers } from 'redux';

import posts from './posts';
import movies from './movies'

export default combineReducers({
    posts,
    movies
})