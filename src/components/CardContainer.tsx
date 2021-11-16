import React from 'react';
import styles from '../style/cardcontainer.module.css';
import Card from './Card';
import PIZZA from '../../src/resources/pizza.svg';
import BURGER from '../../src/resources/burger.svg';
import DRINKS from '../../src/resources/drinks.svg';

interface CardContainerProps {

}

const CardContainer: React.FC<CardContainerProps> = ({ }) => {
    return (
        <div className={styles.container}>
            <Card category='PIZZA' icon={PIZZA} />
            <Card category='BURGER' icon={BURGER} />
            <Card category='DRINKS' icon={DRINKS} />
        </div>
    );
}

export default CardContainer;