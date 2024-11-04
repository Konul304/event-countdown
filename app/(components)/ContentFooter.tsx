import React from 'react'
import styles from "../styles/ContentSection.module.scss"
import { calendar_icon, location_icon, onsite } from '../images/icons'

const ContentFooter = () => {
    return (
        <>
            <div className={styles.content_footer}>
                <div className={styles.top}><span style={{ marginRight: '20px' }}>{onsite}</span>Hybrid: Baku and online</div>
                <div className={styles.bottom}>
                    <div className={styles.bottom_flexes}>
                        <div >{location_icon}</div>
                        <div > Center for Analysis of Economic Reforms and <br/> Communication of the Republic of Azerbaijan<br/>47 Gurban Khalilov str. <br />Baku, Azerbaijan, CAERC</div>
                    </div>
                    <div className={styles.bottom_flexes}>
                        <div>{calendar_icon}</div>
                        <div>November 16, 2024 <br />09:30 a.m.</div>
                    </div>
                </div>
            </div></>
    )
}

export default ContentFooter

// Center for Analysis of Economic Reforms and Communication of the Republic of Azerbaijan