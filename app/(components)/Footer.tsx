import React from 'react'
import styles from "../styles/Footer.module.scss";
import { mini_map } from '../../public/images/icons';

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.organization}>© 2024 | Center for Analysis of Economic
                Reforms and Communication of
                the Republic Azerbaijan</div>
            <div className={styles.address}>{mini_map}47 Gurban Khalilov str. | Baku, Azerbaijan, CAERC</div>
        </div>
    )
}

export default Footer