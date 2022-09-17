import * as actionTypes from "../action-types/cats-type"
import {ICategories} from "../reducer/cats-categories";

export const catsCategories = (payload:ICategories[] | any) => {
    return {
        type: actionTypes.CATS_CATEGORIES,
        payload: [...payload],
    };
};

export const seeMoreCats = (payload:ImportMeta[] | any) => {
    return {
        type: actionTypes.SEE_MORE_CATS,
        payload: [...payload]
    };
};