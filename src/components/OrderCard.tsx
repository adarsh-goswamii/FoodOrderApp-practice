import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styles from '../style/ordercard.module.css';
import PIZZA from '../resources/wallpaperflare.com_wallpaper (18).jpg';
import StateContext from '../store/state-context';
import Topping from './Toppings';
import Button from './Button';
import Quantity from './Quantity';
import { GrClose } from 'react-icons/gr';
import PIZZA2 from '../resources/pizza2.png';


const OrderCard: React.FC<{}> = () => {
    const context = useContext(StateContext);
    const variants = {
        open: { transform: 'scale(1) translateY(-50%) translateX(-50%)', opacity: 1 },
        close: { transform: 'scale(0.1) translateY(-50%) translateX(-50%)', opacity: 0 }
    }
    return (
        <motion.div
            animate={context.orderCardVisible ? 'open' : 'close'}
            variants={variants}
            className={styles.card}>

            <div className={styles.info}>
                <div className={styles.heading}>
                    <h1>{context.namePizza}</h1>
                    <h1 className={styles.price}>${context.price}</h1>
                </div>

                <p className={styles.desc}>An oven baked flat, round pizza type with tomato and cheese. </p>

                <div>
                    <h3>Toppings</h3>
                    <div className={styles.toppings_container}>
                        <Topping name='Onion' />
                        <Topping name='Capsicum' />
                        <Topping name='Corn' />
                        <Topping name='Tomato' />
                        <Topping name='Pepperoni' />
                    </div>
                </div>

                <Quantity />

                <Button block={!context.btnActive.valid} onClick={() => {
                    context.setOrderCardVisible(false)
                    context.setCart(prev=> [...prev, {name: context.namePizza, quantity: context.btnActive.quantity, toppings: context.btnActive.toppings, price: context.price, image: PIZZA2}])
                    }}>
                    <h2 style={{ fontFamily: 'poppins-bold' }}>Add to Cart</h2>
                </Button>
            </div>

            <div className={styles.img_container}>
                <GrClose onClick={() => {
                    context.setOrderCardVisible(false)
                    // context.dispatchFn({type: 'SET_QUANTITY', value: 0});
                    // let val= [...context.btnActive.toppings];
                    // val.map(i=> context.dispatchFn({type: 'TOGGLE_TOPPING', value: i}));
                    }} style={{ cursor: 'pointer', background: 'var(--yellow)', borderRadius: '50%', fontSize: '32px', padding: '8px', color: '#ffffff', zIndex: 101 }} />
                <img className={styles.img} src={PIZZA} alt="" />
            </div>
        </motion.div>
    )
}

export default OrderCard;