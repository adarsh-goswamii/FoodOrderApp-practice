import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from '../style/drawer.module.css';

interface DrawerProps {
    
}

const Drawers: React.FC<DrawerProps>= ({ }) => {
    return (
        <motion.div className={styles.drawer}>
            
        </motion.div>
    );
}

export default Drawers;