import {SEE_MORE_CATS} from "../action-types/cats-type"

const INITIAL_STATE = {
    data: []
};

export interface  IMoreCats {
        id: string
        width: number
        height: number
        url: string
}

interface IAction {
    payload: IMoreCats[] | any
    type: string
}

const moreCats = (state = INITIAL_STATE, action: IAction) => {
    switch (action.type) {
        case SEE_MORE_CATS:
            return {...state, data: action.payload};
        default:
            return state;
    }
}

export default moreCats
