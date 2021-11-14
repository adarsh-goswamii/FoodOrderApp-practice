import React from 'react';
import styles from '../style/card.module.css';
import { motion, useAnimation } from 'framer-motion';

interface CardProps{
    category: string;
    icon ?: any;

}

const Card: React.FC<CardProps>= ({ category, icon })=> {

    const controls= useAnimation();

    // function start() {
    //     controls.start({
    //         background: 
    //     });
    // }

    return (
        <motion.div className={styles.card}>
            <motion.div>
                <img src={icon} alt="icon" />
            </motion.div>
            {category}
        </motion.div>
    );
}

export default Card;