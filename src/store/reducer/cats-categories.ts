import {CATS_CATEGORIES,} from "../action-types/cats-type"

export interface ICategories {
        name:string,
        id:string,
}

interface IAction {
    type: string
    payload: ICategories[] | any
}

const INITIAL_STATE = {
    data: []
};

const catsCategories = (state = INITIAL_STATE, action: IAction) => {
    switch (action.type) {
        case CATS_CATEGORIES:
            return {...state, data: action.payload};
        default:
            return state;
    }
}

export default catsCategories
