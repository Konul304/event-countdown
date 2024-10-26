import React from 'react'
import styles from "../styles/Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.organization}>© 2024 | Azərbaycan Respublikası İqtisadi İslahatların Təhlili və Kommunikasiya Mərkəzi</div>
            <div className={styles.address}>47 Gurban Khalilov str. <br />Baku, Azerbaijan, CAERC</div>
        </div>
    )
}

export default Footer