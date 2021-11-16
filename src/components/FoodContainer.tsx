import React from 'react';
import styles from '../style/foodcontainer.module.css';

interface PizzaContainerProps {
    children?: JSX.Element;
}

const FoodContainer: React.FC<PizzaContainerProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default FoodContainer;