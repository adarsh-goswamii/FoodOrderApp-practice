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
    let present= false;

    console.log(typeof value, type);

    if (type === 'TOGGLE_TOPPING') {
        if (typeof value === 'string') {
            for(let t of toppings) {
                if(t=== value) {
                    present= true;
                }
            }
            
            // console.log('present', present);
            if(!present) toppings.push(value);
            else toppings= toppings.filter(str=> str!= value);
        }
    } else if (type === 'SET_QUANTITY') {
        if (typeof value === 'number')
            quantity = value;
    }

    if (toppings.length > 0 && quantity > 0) valid = true;
    if (toppings.length === 0 || quantity === 0) valid = false;

    return { toppings, quantity, valid };
}

interface StateContextProviderProps {
    children?: JSX.Element
}

export const StateContextProvider: React.FC<StateContextProviderProps> = ({ children }) => {
    // all the logic of mananging state goes here.
    const [cartVisible, setCartVisible] = useState(false);
    const [cardActive, setCardActive] = useState('PIZZA');
    const [orderCardVisible, setOrderCardVisible]= useState(false);
    const [names, setName]= useState('Italian Pizza'); 
    const [price, setPrice]= useState(0); 
    const [btnActive, dispatchFn] = useReducer(btnStateFn, { toppings: [], quantity: 0, valid: false });
    const [cart, setCart]= useState([
        { name: 'Italian Pizza', image: `${PIZZA1}`, toppings: ['Pepperoni', 'Onion', 'Corn'], price: 5, quantity: 4 },
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
            dispatchFn: dispatchFn, 
            setCart: setCart,
            toggleCartVisibility: setCartVisiblility, 
            orderCardVisible: orderCardVisible, 
            setOrderCardVisible: setOrderCardVisible,
            namePizza: names, 
            setName: setName, 
            price: price, 
            setPrice: setPrice
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
    setName: React.Dispatch<React.SetStateAction<string>>;
    setPrice: React.Dispatch<React.SetStateAction<number>>;
    btnActive: State;
    cart: CartItem[];
    cartVisible: boolean;
    toggleCartVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
    dispatchFn: React.Dispatch<{
        type: string;
        value: any;
    }>;
    orderCardVisible: boolean;
    setOrderCardVisible: React.Dispatch<React.SetStateAction<boolean>>;
    namePizza: string;
    price: number;
}

const StateContext = React.createContext<defaultStateProps>({
    // all the values that we need goes on here.
    cardActive: 'pizza',
    setCardActive: () => { },
    btnActive: { toppings: [], quantity: 0, valid: false },
    cart: [],
    setCart: ()=> {},
    cartVisible: false,
    toggleCartVisibility: ()=> { },
    dispatchFn: ()=> {}, 
    orderCardVisible: false, 
    setOrderCardVisible: ()=> {},
    namePizza: '', 
    price: 0, 
    setName: ()=> {}, 
    setPrice: ()=> {}
});

export default StateContext;