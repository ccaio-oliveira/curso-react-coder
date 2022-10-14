import React from 'react'
import { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from './../../components/layout/SectionTitle';

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0
}

function reducer(state, action){
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

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                {state.user ? 
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem usuário</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'login', payload: 'Maria'})}
                        >Login</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'numberAdd2'})}>+2</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'mult7'})}
                        >x 7</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'div25'})}
                        >% 25</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'transformInt'})}
                        >Int</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'numberAddN', payload: - 9})}
                        >-9</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'numberAddN', payload: + 11})}
                        >+11</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer;
