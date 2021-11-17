import React, { useContext } from 'react';
import styles from '../style/header.module.css';
import LOGO from '../resources/burger.svg';
import Button from '../components/Button';
import CART from '../resources/cart.svg';
import StateContext from '../store/state-context';



interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({ }) => {
    const context = useContext(StateContext);
    function showCart() {
        context.toggleCartVisibility(context.cartVisible);
    }
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.logo_img} src={LOGO} alt="logo icons" />
                <h3 className={styles.logo_text} >Kill <span className={styles.text_hunger} >Hunger</span></h3>
            </div>

            <Button onClick={showCart}>
                <div className={styles.btn}>
                    <img className={styles.btn_cart} src={CART} alt="cart icon" />
                    <h3 className={styles.btn_text}>Cart</h3>
                </div>
            </Button>
        </div>
    );
}

export default Header;