import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styles from '../style/cartitem.module.css';
import { MdDelete } from 'react-icons/md';
import Button from './Button';
import StateContext from '../store/state-context';

interface CartItemProps {
    name: string;
    image: string;
    toppings: string[];
    quantity: number;
    price: number;
}

const CartItem: React.FC<CartItemProps> = ({ name, image, toppings, quantity, price }) => {
    const context = useContext(StateContext);
    const itemVariants = {
        open: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            },
        },
        close: {
            y: 50,
            x: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    };

    function removeCartItem(): void {
        context.setCart(context.cart.filter(({ name: name_to_remove, quantity: quantity_to_remove, toppings: toppings_to_rem }) => {
            if(toppings.length!== toppings_to_rem.length) return true;
            if(name!== name_to_remove) return true;
            if(quantity!== quantity_to_remove) return true;
            
            for (let i of toppings) {
                let found = false;
                for (let j of toppings_to_rem) {
                    if (i === j) found = true;
                }
                if (!found) return true;
            }

            return false;
        }));
    }

    return (
        <motion.div
            key={name}
            variants={itemVariants}
            className={styles.cartItem}>
            <img className={styles.image} src={image} alt="" />
            <div style={{ width: '100%' }}>
                <pre className={styles.heading}>{`${name}      QTY: ${quantity}`}</pre>
                <div className={styles.top}>{
                    toppings.map(str => <p className={styles.topping}>{str}</p>)
                }</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', width: '100%' }}>
                    <h3>$ <span className={styles.price}>{price * quantity}</span></h3>
                    <Button onClick={removeCartItem} color='#9d0208' width='60%'>
                        <div className={styles.btn}>
                            <h3 className={styles.btn_text}>Delete</h3>
                            <MdDelete className={styles.icon} />
                        </div>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}

export default CartItem;