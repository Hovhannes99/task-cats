import { combineReducers } from 'redux';
import catsCategories from "./cats-categories";
import moreCats from "./seeMoreCats";


const rootReducer = combineReducers({
    catsCategories,
    moreCats
});

export default rootReducer;
