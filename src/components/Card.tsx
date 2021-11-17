import React, { useState, useContext } from 'react';
import styles from '../style/card.module.css';
import { motion, useAnimation } from 'framer-motion';
import StateContext from '../store/state-context';

interface CardProps {
    category: string;
    icon: string;
}

const Card: React.FC<CardProps>= ({ category, icon }) => {
    const controls = useAnimation();
    const context = useContext(StateContext);

    // console.log("context card", context.cardActive);
    return (
        <div 
            onClick={()=> context.setCardActive(category)}
            className={`${styles.card} ${context.cardActive === category? styles.active: ' '}`}>
            <div className={styles.icon_container}>
                <img className={styles.icon} src={icon} alt="icon" />
            </div>
            <p className={styles.text}>{category}</p>
        </div>
    );
}

export default Card;