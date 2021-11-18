import React from 'react';
import styles from '../style/foodcontainer.module.css';
import { motion } from 'framer-motion';

interface PizzaContainerProps {
    children?: JSX.Element;
}

const FoodContainer: React.FC<PizzaContainerProps> = ({ children }) => {
    return (
        <motion.div layout className={styles.container}>
            {children}
        </motion.div>
    )
}

export default FoodContainer;