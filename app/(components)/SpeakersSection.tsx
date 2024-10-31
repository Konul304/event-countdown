import React from 'react';
import styles from "../styles/SpeakersSection.module.scss"
import Image from 'next/image';
import image3 from "../images/speakers/image3.png"
import image4 from "../images/speakers/image4.png"
import image6 from "../images/speakers/image6.png"
import image7 from "../images/speakers/image7.png"
import image8 from "../images/speakers/image8.png"
import image9 from "../images/speakers/image9.png"
import image10 from "../images/speakers/image10.png"
import { ShenXiaomengBio, TetsushiSonobeBio, VusalGasimliBio } from "../data/bio";
import { Popover } from 'antd';

const SpeakersSection = () => {

    return (
        <div className={styles.speakers_container}>
            <div className={styles.speakers_header}>Speakers</div>
            <div className={styles.speakers}>
                <Popover placement="right" content={VusalGasimliBio}>
                    <div className={styles.speaker}>
                        <div className={styles.image}>
                            <a className={styles.link} href="#" target='_blank'>
                                <Image className={styles.img} src={image3} alt='speaker' width={115} height={115} />
                            </a>
                        </div>
                        <div className={styles.name}>Prof. Dr. VUSAL GASIMLI</div>
                        <div className={styles.position}>Executive Director of the Center for Analysis of Economic Reforms and Communication of the Republic of Azerbaijan</div>
                    </div>
                </Popover>
                <Popover placement="right" content={TetsushiSonobeBio}>
                    <div className={styles.speaker}>
                        <div className={styles.image}>
                            <a className={styles.link} href="#" target='_blank'>
                                <Image className={styles.img} src={image3} alt='speaker' width={115} height={115} />
                            </a>
                        </div>
                        <div className={styles.name}>Dr. TETSUSHI SONOBE</div>
                        <div className={styles.position}>Dean and CEO of the Asian Development Bank Institute</div>
                    </div>
                </Popover>
                <Popover placement="right" content={TetsushiSonobeBio}>
                    <div className={styles.speaker}>
                        <div className={styles.image}>
                            <a className={styles.link} href="#" target='_blank'>
                                <Image className={styles.img} src={image3} alt='speaker' width={115} height={115} />
                            </a>
                        </div>
                        <div className={styles.name}>TBC</div>
                        <div className={styles.position}>Representative of the COP29 organizing committee</div>
                    </div>
                </Popover>
                <Popover placement="right" content={TetsushiSonobeBio}>
                    <div className={styles.speaker}>
                        <div className={styles.image}>
                            <a className={styles.link} href="#" target='_blank'>
                                <Image className={styles.img} src={image4} alt='speaker' width={115} height={115} />
                            </a>
                        </div>
                        <div className={styles.name}>CANDICE McDEIGAN</div>
                        <div className={styles.position}>Head of the Asian Development Bank's Resident Mission in Azerbaijan (TBC)</div>
                    </div>
                </Popover>
                <Popover placement="right" content={ShenXiaomengBio}>
                    <div className={styles.speaker}>
                        <div className={styles.image}>
                            <a className={styles.link} href="#" target='_blank'>
                                <Image className={styles.img} src={image6} alt='speaker' width={115} height={115} />
                            </a>
                        </div>
                        <div className={styles.name}>Dr. SHEN XIAOMENG</div>
                        <div className={styles.position}>UN University - Institute for Environment and Human Security</div>
                    </div>
                </Popover>
                <Popover placement="right" content={TetsushiSonobeBio}>
                    <div className={styles.speaker}>
                        <div className={styles.image}>
                            <a className={styles.link} href="#" target='_blank'>
                                <Image className={styles.img} src={image6} alt='speaker' width={115} height={115} />
                            </a>
                        </div>
                        <div className={styles.name}>Dr. FABRIZIO BOZZATO</div>
                        <div className={styles.position}>Director, Ocean Policy Research Institute (TBC)</div>
                    </div>
                </Popover>
                <Popover placement="right" content={TetsushiSonobeBio}>
                    <div className={styles.speaker}>
                        <div className={styles.image}>
                            <a className={styles.link} href="#" target='_blank'>
                                <Image className={styles.img} src={image7} alt='speaker' width={115} height={115} />
                            </a>
                        </div>
                        <div className={styles.name}>Dr. FAKHRI J. HASANOV</div>
                        <div className={styles.position}>Senior Principal Fellow, KAPSARC</div>
                    </div>
                </Popover>
                <Popover placement="right" content={TetsushiSonobeBio}>
                    <div className={styles.speaker}>
                        <div className={styles.image}>
                            <a className={styles.link} href="#" target='_blank'>
                                <Image className={styles.img} src={image8} alt='speaker' width={115} height={115} />
                            </a>
                        </div>
                        <div className={styles.name}>Dr. JOACHIM MONKELBAAN</div>
                        <div className={styles.position}>KAPSARC</div>
                    </div>
                </Popover>
                <Popover placement="right" content={TetsushiSonobeBio}>
                    <div className={styles.speaker}>
                        <div className={styles.image}>
                            <a className={styles.link} href="#" target='_blank'>
                                <Image className={styles.img} src={image9} alt='speaker' width={115} height={115} />
                            </a>
                        </div>
                        <div className={styles.name}>Dr. ASIF RAZZAQ</div>
                        <div className={styles.position}>Senior researcher, CAREC Institute</div>
                    </div>
                </Popover>
                <Popover placement="right" content={TetsushiSonobeBio}>
                    <div className={styles.speaker}>
                        <div className={styles.image}>
                            <a className={styles.link} href="#" target='_blank'>
                                <Image className={styles.img} src={image10} alt='speaker' width={115} height={115} />
                            </a>
                        </div>
                        <div className={styles.name}>Dr. VLADISLAV ZAVADSKIY</div>
                        <div className={styles.position}>CAREC Institute</div>
                    </div>
                </Popover>
                <Popover placement="right" content={TetsushiSonobeBio}>
                    <div className={styles.speaker}>
                        <div className={styles.image}>
                            <a className={styles.link} href="#" target='_blank'>
                                <Image className={styles.img} src={image3} alt='speaker' width={115} height={115} />
                            </a>
                        </div>
                        <div className={styles.name}>Dr. ELCHIN SULEYMANOV</div>
                        <div className={styles.position}>Representative of the COP29 organizing committee</div>
                    </div>
                </Popover>
                <Popover placement="right" content={TetsushiSonobeBio}>
                    <div className={styles.speaker}>
                        <div className={styles.image}>
                            <a className={styles.link} href="#" target='_blank'>
                                <Image className={styles.img} src={image3} alt='speaker' width={115} height={115} />
                            </a>
                        </div>
                        <div className={styles.name}>CANDICE McDEIGAN</div>
                        <div className={styles.position}>Head of the Asian Development Bank's Resident Mission in Azerbaijan (TBC)</div>
                    </div>
                </Popover>
            </div>
        </div>
    )
}

export default SpeakersSection