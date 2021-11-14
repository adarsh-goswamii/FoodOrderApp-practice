import React from 'react';
import styles from '../style/banner.module.css';
import { motion } from 'framer-motion';
import Button from './Button';

interface BannerProps {

}

const Banner: React.FC<BannerProps> = ({ }) => {
    return (
        <div className={styles.banner}>
            <div className={styles.banner_text}>
                <h1 className={styles.heading}>Hungry??</h1>
                <h2 className={styles.subheading}>Don't run to food, <br /> food will run to you. </h2>
                <Button height='50px' borderRadius='25px' animateBr={['25px', '30px', '25px']}>
                    <h3 className={styles.btn_text}>Order Now</h3>
                </Button>
            </div>
        </div>
    );
}

export default Banner;