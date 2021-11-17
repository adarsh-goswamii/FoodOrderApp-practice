import React, { useContext } from 'react';
import styles from '../style/quantity.module.css';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import StateContext from '../store/state-context';

const Quantity: React.FC<{}> = ({ }) => {
    const context = useContext(StateContext);
    return (
        <div className={styles.quantity}>
            <h3 style={{ marginRight: '32px' }}>Quantity</h3>
            <div className={styles.div}>

                <AiFillCaretUp className={styles.icon1} />
                <AiFillCaretDown className={styles.icon2} />

                <input onChange={(e)=> {
                    context.dispatchFn({type: 'SET_QUANTITY', value: Number(e.target.value)});
                    // console.log(context.btnActive);
                 }} className={styles.qty} type="number" step='1' max={100} min={0} placeholder='0' />
            </div>
        </div>
    )
}

export default Quantity;