import React from 'react';
import styles from "../styles/SpeakersSection.module.scss"
import Image from 'next/image';
import a from "../images/image.png"

const SpeakersSection = () => {
    return (
        <div className={styles.speakers_container}>
            <div className={styles.speakers_header}>Speakers</div>
            <div className={styles.speakers}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <Image className={styles.img} src={a} alt='speaker' width={115} height={115} />
                    </div>
                    <div className={styles.name}>Prof. Dr. VUSAL GASIMLI</div>
                    <div className={styles.position}>Executive Director of the Center for Analysis of Economic Reforms and Communication of the Republic of Azerbaijan</div>
                </div>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <Image className={styles.img} src={a} alt='speaker' width={115} height={115} />
                    </div>
                    <div className={styles.name}>Dr. TETSUSHI SONOBE</div>
                    <div className={styles.position}>Dean and CEO of the Asian Development Bank Institute</div>
                </div>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <Image className={styles.img} src={a} alt='speaker' width={115} height={115} />
                    </div>
                    <div className={styles.name}>TBC</div>
                    <div className={styles.position}>Representative of the COP29 organizing committee</div>
                </div>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <Image className={styles.img} src={a} alt='speaker' width={115} height={115} />
                    </div>
                    <div className={styles.name}>CANDICE McDEIGAN</div>
                    <div className={styles.position}>Head of the Asian Development Bank's Resident Mission in Azerbaijan (TBC)</div>
                </div>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <Image className={styles.img} src={a} alt='speaker' width={115} height={115} />
                    </div>
                    <div className={styles.name}>Dr. SHEN XIAOMENG</div>
                    <div className={styles.position}>UN University - Institute for Environment and Human Security</div>
                </div>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <Image className={styles.img} src={a} alt='speaker' width={115} height={115} />
                    </div>
                    <div className={styles.name}>Dr. FABRIZIO BOZZATO</div>
                    <div className={styles.position}>Director, Ocean Policy Research Institute (TBC)</div>
                </div>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <Image className={styles.img} src={a} alt='speaker' width={115} height={115} />
                    </div>
                    <div className={styles.name}>Dr. FAKHRI J. HASANOV</div>
                    <div className={styles.position}>Senior Principal Fellow, KAPSARC</div>
                </div>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <Image className={styles.img} src={a} alt='speaker' width={115} height={115} />
                    </div>
                    <div className={styles.name}>Dr. JOACHIM MONKELBAAN</div>
                    <div className={styles.position}>KAPSARC</div>
                </div>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <Image className={styles.img} src={a} alt='speaker' width={115} height={115} />
                    </div>
                    <div className={styles.name}>Dr. ASIF RAZZAQ</div>
                    <div className={styles.position}>Senior researcher, CAREC Institute</div>
                </div>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <Image className={styles.img} src={a} alt='speaker' width={115} height={115} />
                    </div>
                    <div className={styles.name}>Dr. VLADISLAV ZAVADSKIY</div>
                    <div className={styles.position}>CAREC Institute</div>
                </div>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <Image className={styles.img} src={a} alt='speaker' width={115} height={115} />
                    </div>
                    <div className={styles.name}>Dr. ELCHIN SULEYMANOV</div>
                    <div className={styles.position}>Representative of the COP29 organizing committee</div>
                </div>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <Image className={styles.img} src={a} alt='speaker' width={115} height={115} />
                    </div>
                    <div className={styles.name}>CANDICE McDEIGAN</div>
                    <div className={styles.position}>Head of the Asian Development Bank's Resident Mission in Azerbaijan (TBC)</div>
                </div>
            </div>
        </div>
    )
}

export default SpeakersSection