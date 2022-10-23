export const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0
}

export function reducer(state, action){
    switch(action.type){
        case 'numberAdd2': 
            return {...state, number: state.number + 2};
        case 'login':
            return {...state, user: { name: action.payload }};
        case 'mult7': 
            return {...state, number: state.number * 7};
        case 'div25':
            return {...state, number: state.number / 25};
        case 'transformInt':
            return {...state, number: parseInt(state.number)};
        case 'numberAddN':
            return {...state, number: state.number + action.payload};
        default:
            return state;
    }
}