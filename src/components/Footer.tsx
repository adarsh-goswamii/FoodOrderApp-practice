import React from 'react';
import styles from '../style/footer.module.css';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import WAVE from '../resources/wave.svg';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({})=> {
    return (
        <div className={styles.footer}>
            <img className={styles.wave} src={WAVE} alt="wave" />
            <p className={styles.text}>{'Designed & Developed by Adarsh Goswami'}</p>
            <div className={styles.socials}>
                <GrLinkedinOption className={styles.icon}/>
                <AiFillGithub className={styles.icon}/>
            </div>
        </div>
    );
}

export default Footer;