import React from 'react';
import styles from '../style/button.module.css';
import { animate, motion, useAnimation } from 'framer-motion';

interface ButtonProps {
    children?: JSX.Element;
    height?: string;
    width?: string;
    borderRadius?: string;
    animateBr?: string[];
}

const Button: React.FC<ButtonProps> = ({ children, height, width, borderRadius, animateBr })=> {
    const control= useAnimation();

    function animate(): void {
        control.start({ 
            scale: [.9, 1.1, 1.0], 
            borderRadius: animateBr=== undefined? ['1.2rem', '1.2rem', '1rem']: animateBr, 
            transition: { duration: 0.8 }
        });
    }


    return (
        <motion.button 
            animate={control}
            className={styles.button} 
            onClick={()=> animate()}
            style={{ width: width, height: height, borderRadius: borderRadius}}>
            {children}
        </motion.button>
    );
}

export default Button;

