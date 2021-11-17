import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import styles from '../style/drawer.module.css';
import StateContext from '../store/state-context';

interface OverlayProps {

}

const Overlay: React.FC<OverlayProps> = ({ }) => {
    const context = useContext(StateContext);

    const overlayVariants = {
        open: { opacity: 1 },
        close: { opacity: 0 }
    }

    let val = document.getElementById('overlay');

    if (val === null) return <></>;
    else {
        return ReactDOM.createPortal(
            <motion.div
                style={{ pointerEvents: `${context.cartVisible || context.orderCardVisible? 'all': 'none'}`}}
                className={styles.overlay}
                variants={overlayVariants}
                animate={context.cartVisible|| context.orderCardVisible ? 'open' : 'close'} >

            </motion.div>, val
        )
    }
}

export default Overlay;