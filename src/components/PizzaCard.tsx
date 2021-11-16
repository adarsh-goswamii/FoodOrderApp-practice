import React from 'react';
import styles from '../style/pizzacard.module.css';
import Button from './Button';

interface PizzaCardProps {
    name: string;
    image: string;
}

const PizzaCard: React.FC<PizzaCardProps>= ({ name, image })=> {
    return (
        <div className={styles.card} style={{ backgroundImage: `url(${image})`}}>
            <p className={styles.text}>{name}</p>
            <Button width='80%' >
                <p className={styles.btn_text}>{'Order Now >>'}</p>
            </Button>
        </div>
    )
}

export default PizzaCard;