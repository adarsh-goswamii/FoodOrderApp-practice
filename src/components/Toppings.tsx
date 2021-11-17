import React, { MouseEventHandler, useContext } from 'react';
import StateContext from '../store/state-context';
import styles from '../style/ordercard.module.css';

interface ToppingProps {
    name?: string;
}

const Topping: React.FC<ToppingProps> = ({name})=> {
    const context= useContext(StateContext);

    function toggleToppings(e: any): void {
        e.target.classList.toggle(`${styles.active}`);
        // console.log(e.target.textContent);
        context.dispatchFn({ type: 'TOGGLE_TOPPING', value: e.target.textContent });
        console.log(context.btnActive);
    }

    return (
        <div className={styles.topping} onClick={toggleToppings}>
            {name}
        </div>
    );
}

export default Topping;