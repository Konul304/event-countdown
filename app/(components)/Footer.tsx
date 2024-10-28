import React from 'react'
import styles from "../styles/Footer.module.scss";
import { mini_map } from '../images/icons';

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.organization}>© 2024 | Azərbaycan Respublikası İqtisadi İslahatların Təhlili və Kommunikasiya Mərkəzi</div>
            <div className={styles.address}>{mini_map}47 Gurban Khalilov str. | Baku, Azerbaijan, CAERC</div>
        </div>
    )
}

export default Footer