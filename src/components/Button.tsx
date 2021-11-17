import React from 'react';
import styles from '../style/button.module.css';
import { animate, motion, useAnimation } from 'framer-motion';

interface ButtonProps {
    children?: JSX.Element;
    height?: string;
    width?: string;
    borderRadius?: string;
    animateBr?: string[];
    onClick?: any;
    color?: string;
    block?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, height, width, borderRadius, animateBr, onClick, color, block })=> {
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
            className={`${styles.button} ${block? styles.block: ''}`} 
            onClick={()=> {
                if(onClick=== undefined) animate()
                else onClick();
            }}
            style={{ width: width, height: height, borderRadius: borderRadius, background: color}}>
            {children}
        </motion.button>
    );
}

export default Button;

