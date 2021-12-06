import {FRUITS_NAME} from '../action/FruitAction'
const initialState = {
    fruitName: []
}

export default fruitReducer = (state = initialState, action) => {

    console.log('**product ', state)
    switch (action.type) {
        case  FRUITS_NAME:
            return {
                ...state,
                fruitName : action.fruitName
            }
        default:
            return state;

    }
}