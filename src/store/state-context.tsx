import React, { useState, useEffect, useReducer } from 'react';
import PIZZA1 from '../resources/pizza1.png';
import PIZZA2 from '../resources/pizza2.png';

interface State {
    toppings: string[];
    quantity: number;
    valid: boolean;
}

function btnStateFn(prevState: State, obj: { type: string, value: any }): State {
    let { type, value } = obj;
    let { toppings, quantity, valid } = prevState;

    if (type === 'ADD_TOPPING') {
        if (typeof value === 'string')
            toppings.push(value);
    } else if (type === 'SET_QUANTITY') {
        if (typeof value === 'number')
            quantity = value;
    }

    if (toppings.length > 0 && quantity > 0) valid = true;

    return { toppings, quantity, valid };
}

interface StateContextProviderProps {
    children?: JSX.Element
}

export const StateContextProvider: React.FC<StateContextProviderProps> = ({ children }) => {
    // all the logic of mananging state goes here.
    const [cartVisible, setCartVisible] = useState(false);
    const [cardActive, setCardActive] = useState('PIZZA');
    const [btnActive, dispatchFn] = useReducer(btnStateFn, { toppings: [], quantity: 0, valid: false });
    const [cart, setCart]= useState([
        { name: 'Italian Pizza', image: `${PIZZA1}`, toppings: ['Pepperoni', 'Onion', 'Corn'], price: 5, quantity: 4 },
        { name: 'Canadian Pizza', image: `${PIZZA2}`, toppings: ['Pepperoni', 'Onion', 'Corn'], price: 5, quantity: 4 },
        { name: 'Neapolitan Pizza', image: `${PIZZA2}`, toppings: ['Pepperoni', 'Onion', 'Corn'], price: 5, quantity: 4 },
        { name: 'Extra Cheese Pizza', image: `${PIZZA1}`, toppings: ['Pepperoni', 'Onion', 'Corn'], price: 5, quantity: 4 },
    ]); 

    function setCartVisiblility(): void {
        setCartVisible(!cartVisible);
    }

    return (
        <StateContext.Provider value={{
            cardActive: cardActive,
            setCardActive: setCardActive,
            btnActive: btnActive,
            cart: cart,
            cartVisible: cartVisible,
            setCart: setCart,
            toggleCartVisibility: setCartVisiblility
        }}>
            {children}
        </StateContext.Provider>
    );
}

interface CartItem {
    name: string;
    quantity: number;
    price: number;
    toppings: string[];
    image: string;
}

interface defaultStateProps {
    cardActive: string;
    setCardActive: React.Dispatch<React.SetStateAction<string>>;
    btnActive: State;
    cart: CartItem[];
    cartVisible: boolean;
    toggleCartVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const StateContext = React.createContext<defaultStateProps>({
    // all the values that we need goes on here.
    cardActive: 'pizza',
    setCardActive: () => { },
    btnActive: { toppings: [], quantity: 0, valid: false },
    cart: [],
    setCart: ()=> {},
    cartVisible: false,
    toggleCartVisibility: ()=> { }
});

export default StateContext;