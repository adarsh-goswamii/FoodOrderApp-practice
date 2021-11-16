import React, { useState, useEffect, useReducer } from 'react';

interface State {
    toppings: string[];
    quantity: number;
    valid: boolean;
}

function btnStateFn(prevState: State, obj: {type: string, value: any }): State {
    let { type, value }= obj;
    let { toppings, quantity, valid }= prevState;

    if(type=== 'ADD_TOPPING') {
        if(typeof value=== 'string') 
            toppings.push(value);
    } else if(type=== 'SET_QUANTITY') {
        if(typeof value=== 'number')
            quantity= value;
    }

    if(toppings.length> 0 && quantity> 0) valid= true;

    return { toppings, quantity, valid };
}

interface StateContextProviderProps{
    children?: JSX.Element
}

export const StateContextProvider: React.FC<StateContextProviderProps> = ({children}) => {
    // all the logic of mananging state goes here.
    const [cardActive, setCardActive ] = useState('PIZZA');
    const [btnActive, dispatchFn] = useReducer( btnStateFn, { toppings: [], quantity: 0, valid: false  } );
    
    return (
        <StateContext.Provider value={{
            cardActive: cardActive, 
            setCardActive: setCardActive,
            btnActive: btnActive,
            cart: {},
            cartVisible: false,
        }}>
            {children}
        </StateContext.Provider>
    );
}

interface defaultStateProps {
    cardActive: string;
    setCardActive: React.Dispatch<React.SetStateAction<string>>;
    btnActive: State;
    cart: object;
    cartVisible: boolean;
}

const StateContext = React.createContext<defaultStateProps>({
    // all the values that we need goes on here.
    cardActive: 'pizza',
    setCardActive: ()=> {},
    btnActive: { toppings: [], quantity: 0, valid: false },
    cart: {},
    cartVisible: false,
});

export default StateContext;