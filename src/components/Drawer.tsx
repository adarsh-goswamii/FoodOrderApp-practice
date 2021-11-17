import React, { useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from '../style/drawer.module.css';
import StateContext from '../store/state-context';
import { GrClose } from 'react-icons/gr';
import CartItem from './CartItem';

interface DrawerProps {

}

const Drawers: React.FC<DrawerProps> = ({ }) => {
    const context = useContext(StateContext);
    const control = useAnimation();

    const cartVariants = {
        open: {
            transform: 'translateX(0rem)',
            transition: {
                type: "spring",
                stiffness: 30,
                restDelta: 2, 
                staggerChildren: 0.07,
                delayChildren: 0.2
            }

        },
        close: {
            transform: 'translateX(40rem)',
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    return (
        // <motion.div className={styles.overlay}>
        <motion.div
            animate={context.cartVisible ? 'open' : 'close'}
            variants={cartVariants}
            className={styles.drawer}>
            <div className={styles.top}>
                <h1 className={styles.heading}>Your Cart</h1>
                <GrClose className={styles.close} onClick={() => context.toggleCartVisibility(context.cartVisible)} />
            </div>
            {
                context.cart.length == 0 ?
                    <div className={styles.empty}>

                    </div>
                    :
                    context.cart.map(({ name, quantity, toppings, price, image }) => (
                        <CartItem
                            name={name}
                            image={image}
                            quantity={quantity}
                            toppings={toppings}
                            price={price} />
                    ))
            }
        </motion.div>
        // </motion.div>
    );
}

export default Drawers;