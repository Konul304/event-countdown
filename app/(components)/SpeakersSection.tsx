import React from 'react';
import styles from "../styles/SpeakersSection.module.scss"
import Image from 'next/image';
import image1 from "../images/speakers/image1.png"
import image2 from "../images/speakers/image2.png"
import image3 from "../images/speakers/image3.png"
import image4 from "../images/speakers/image4.png"
import image5 from "../images/speakers/image5.png"
import image6 from "../images/speakers/image6.png"
import image7 from "../images/speakers/image7.png"
import image8 from "../images/speakers/image8.png"
import image9 from "../images/speakers/image9.png"
import image10 from "../images/speakers/image10.png"
import image11 from "../images/speakers/image11.png"
import image12 from "../images/speakers/image12.png"
import image13 from "../images/speakers/image13.png"
import image14 from "../images/speakers/image14.png"
import image15 from "../images/speakers/image15.png"
import image16 from "../images/speakers/image16.png"
import image17 from "../images/speakers/image17.png"
import image18 from "../images/speakers/image18.png"
import image19 from "../images/speakers/image19.png"
import { BulatYessekinBio, CandiceMcDeiganBio, FakhriJHasanovBio, GhulamSamadBio, JoachimMonkelbaanBio, KuatAkizhanovBio, NicolasBuchoudBio, RashadHuseynovBio, ShenXiaomengBio, SiddharthSaxenaBio, TetsushiSonobeBio, VusalGasimliBio } from "../data/bio";
import { Popover } from 'antd';

const SpeakersSection = () => (
    <div className={styles.speakers_container}>
        <div className={styles.speakers_header}>Speakers</div>
        <div className={styles.speakers}>
            <Popover placement="right" content={VusalGasimliBio}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <a className={styles.link} href="#" target='_blank'>
                            <Image className={styles.img} src={image1} alt='speaker' width={115} height={115} />
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
                            <Image className={styles.img} src={image2} alt='speaker' width={115} height={115} />
                        </a>
                    </div>
                    <div className={styles.name}>Dr. TETSUSHI SONOBE</div>
                    <div className={styles.position}>Dean and CEO of the Asian Development Bank Institute</div>
                </div>
            </Popover>
            <Popover placement="right" content={CandiceMcDeiganBio}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <a className={styles.link} href="#" target='_blank'>
                            <Image className={styles.img} style={{ objectFit: 'cover', paddingTop: '10px' }} src={image3} alt='speaker' width={115} height={115} />
                        </a>
                    </div>
                    <div className={styles.name}>CANDICE McDEIGAN</div>
                    <div className={styles.position}>Head of the Asian Development Bank's Resident Mission in Azerbaijan (TBC)</div>
                </div>
            </Popover>
            <Popover placement="right" content={NicolasBuchoudBio}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <a className={styles.link} href="#" target='_blank'>
                            <Image className={styles.img} src={image4} alt='speaker' width={115} height={115} />
                        </a>
                    </div>
                    <div className={styles.name}>NICOLAS J.A. BUCHOUD</div>
                    <div className={styles.position}>Senior Consultant and
                        Advisor to the Dean, ADBI</div>
                </div>
            </Popover>
            <Popover placement="right" content={ShenXiaomengBio}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <a className={styles.link} href="#" target='_blank'>
                            <Image className={styles.img} src={image5} alt='speaker' width={115} height={115} />
                        </a>
                    </div>
                    <div className={styles.name}>Dr. SHEN XIAOMENG</div>
                    <div className={styles.position}>UN University - Institute for Environment and Human Security</div>
                </div>
            </Popover>
            <Popover placement="right" content={BulatYessekinBio}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <a className={styles.link} href="#" target='_blank'>
                            <Image className={styles.img} src={image6} alt='speaker' width={115} height={115} />
                        </a>
                    </div>
                    <div className={styles.name}>Dr. BULAT YESSEKIN</div>
                    <div className={styles.position}>Regional Coordinator, Asian Platform on Water and Climate
                        Change</div>
                </div>
            </Popover>
            <Popover placement="right" content={FakhriJHasanovBio}>
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
            <Popover placement="right" content={KuatAkizhanovBio}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <a className={styles.link} href="#" target='_blank'>
                            <Image className={styles.img} src={image8} alt='speaker' width={115} height={115} />
                        </a>
                    </div>
                    <div className={styles.name}>Dr. KUAT AKIZHANOV</div>
                    <div className={styles.position}>Deputy director, CAREC
                        Institute</div>
                </div>
            </Popover>
            <Popover placement="right" content={SiddharthSaxenaBio}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <a className={styles.link} href="#" target='_blank'>
                            <Image className={styles.img} src={image9} alt='speaker' width={115} height={115} />
                        </a>
                    </div>
                    <div className={styles.name}>Prof. Dr. SIDDHARTH SAXENA</div>
                    <div className={styles.position}>Chairperson of the Cambridge Central Asia Forum of the
                        Cambridge University, Director of Cambridge Kazakhstan
                        Centre</div>
                </div>
            </Popover>
            <Popover placement="right" content={GhulamSamadBio}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <a className={styles.link} href="#" target='_blank'>
                            <Image className={styles.img} src={image10} alt='speaker' width={115} height={115} />
                        </a>
                    </div>
                    <div className={styles.name}>Dr. GHULAM SAMAD</div>
                    <div className={styles.position}>Head of the Research Division, CAREC Institute</div>
                </div>
            </Popover>
            <Popover placement="right" content={JoachimMonkelbaanBio}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <a className={styles.link} href="#" target='_blank'>
                            <Image className={styles.img} src={image11} alt='speaker' width={115} height={115} />
                        </a>
                    </div>
                    <div className={styles.name}>Dr. JOACHIM MONKELBAAN</div>
                    <div className={styles.position}>Senior Fellow, KAPSARC</div>
                </div>
            </Popover>
            <Popover placement="right" content={RashadHuseynovBio}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <a className={styles.link} href="#" target='_blank'>
                            <Image className={styles.img} src={image12} alt='speaker' width={115} height={115} />
                        </a>
                    </div>
                    <div className={styles.name}>Dr. RASHAD HUSEYNOV</div>
                    <div className={styles.position}>Director of Agrarian Research Center, Ministry of Agriculture
                        of the Republic of Azerbaijan (TBC)</div>
                </div>
            </Popover>
            <Popover placement="right" content={TetsushiSonobeBio}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <a className={styles.link} href="#" target='_blank'>
                            <Image className={styles.img} src={image13} alt='speaker' width={115} height={115} />
                        </a>
                    </div>
                    <div className={styles.name}>Amar Bhattacharya</div>
                    <div className={styles.position}>Senior Fellow, Brookings Institution</div>
                </div>
            </Popover>
            <Popover placement="right" content={TetsushiSonobeBio}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <a className={styles.link} href="#" target='_blank'>
                            <Image className={styles.img} src={image14} alt='speaker' width={115} height={115} />
                        </a>
                    </div>
                    <div className={styles.name}>Bambang Brodjonegoro</div>
                    <div className={styles.position}>Former Finance Minister, Indonesia</div>
                </div>
            </Popover>
            <Popover placement="right" content={TetsushiSonobeBio}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <a className={styles.link} href="#" target='_blank'>
                            <Image style={{ objectFit: 'cover', paddingTop: '5px' }} className={styles.img} src={image15} alt='speaker' width={115} height={115} />
                        </a>
                    </div>
                    <div className={styles.name}>Adil Najam</div>
                    <div className={styles.position}>Dean Emeritus; Professor of International Relations and Earth & Environment</div>
                </div>
            </Popover>
            <Popover placement="right" content={TetsushiSonobeBio}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <a className={styles.link} href="#" target='_blank'>
                            <Image className={styles.img} src={image16} alt='speaker' width={115} height={115} />
                        </a>
                    </div>
                    <div className={styles.name}>Izabella Teixeira</div>
                    <div className={styles.position}>Co-chair, UNEP International Resource Panel; Former Brazilian Environment Minister</div>
                </div>
            </Popover>
            <Popover placement="right" content={TetsushiSonobeBio}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <a className={styles.link} href="#" target='_blank'>
                            <Image className={styles.img} src={image17} alt='speaker' width={115} height={115} />
                        </a>
                    </div>
                    <div className={styles.name}>Shinobu Yamaguchi</div>
                    <div className={styles.position}>Director, United Nations University Institute
                        for the Advanced Study of Sustainability</div>
                </div>
            </Popover>
            <Popover placement="right" content={TetsushiSonobeBio}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <a className={styles.link} href="#" target='_blank'>
                            <Image className={styles.img} src={image18} alt='speaker' width={115} height={115} />
                        </a>
                    </div>
                    <div className={styles.name}>Rafaela Guedes – Brazil</div>
                    <div className={styles.position}>Senior fellow, Brazilian Center for
                        International Relations</div>
                </div>
            </Popover>
            <Popover placement="right" content={TetsushiSonobeBio}>
                <div className={styles.speaker}>
                    <div className={styles.image}>
                        <a className={styles.link} href="#" target='_blank'>
                            <Image className={styles.img} src={image19} alt='speaker' width={115} height={115} />
                        </a>
                    </div>
                    <div className={styles.name}>Margherita Bianchi</div>
                    <div className={styles.position}>Head of the Energy, Climate & Resources Programme</div>
                </div>
            </Popover>
        </div>
    </div>
)

export default SpeakersSection