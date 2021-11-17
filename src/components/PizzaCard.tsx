import React, { useContext } from 'react';
import StateContext from '../store/state-context';
import styles from '../style/pizzacard.module.css';
import Button from './Button';

interface PizzaCardProps {
    name: string;
    image: string;
}

const PizzaCard: React.FC<PizzaCardProps>= ({ name, image })=> {
    const context= useContext(StateContext);
    return (
        <div className={styles.card} style={{ backgroundImage: `url(${image})`}}>
            <p className={styles.text}>{name}</p>
            <Button width='80%' onClick={()=> {
                console.log(name, 'clicked');
                context.setName(name);
                context.setPrice(3);
                context.setOrderCardVisible(true)
            }} >
                <p className={styles.btn_text}>{'Order Now >>'}</p>
            </Button>
        </div>
    )
}

export default PizzaCard;