import React from 'react';
import styles from "../styles/AgendaSection.module.scss";
import image3 from "../images/speakers/image3.png";
import image1 from "../images/speakers/image1.png";
import image2 from "../images/speakers/image2.png";
import image4 from "../images/speakers/image4.png";
import image5 from "../images/speakers/image5.png";
import image6 from "../images/speakers/image6.png";
import image7 from "../images/speakers/image7.png";
import image8 from "../images/speakers/image8.png";
import image9 from "../images/speakers/image9.png";
import image10 from "../images/speakers/image10.png";
import image11 from "../images/speakers/image11.png";
import image12 from "../images/speakers/image12.png";
import image13 from "../images/speakers/image13.png";
import image17 from "../images/speakers/image17.png";
import image18 from "../images/speakers/image18.png";
import image19 from "../images/speakers/image19.png";
import image14 from "../images/speakers/image14.png";
import image20 from "../images/speakers/image20.png";
import image21 from "../images/speakers/image21.png";
import image22 from "../images/speakers/image22.png";
import image23 from "../images/speakers/image23.png";
import image24 from "../images/speakers/image24.png";
import image25 from "../images/speakers/image25.png";
import Image from 'next/image';

const AgendaSection = ({
    refProp,
    onImageClick,  // Add the onImageClick prop
}: {
    refProp: React.RefObject<HTMLDivElement>;
    onImageClick: () => void;  // Specify the type for the click handler
}) => {
    return (
        <div ref={refProp} className={styles.agenda_container} >
            <div className={styles.agenda_header_bg}>
                <div className={styles.top_part}>
                    <div className={styles.name}>Global Think Tanks Forum </div>
                    <div className={styles.date}>November 16, 2024</div>
                </div>
                <div className={styles.title}>
                    Global Green Economy:
                    <div style={{ fontFamily: 'Gotham Book' }}>
                        Climate Action, Financing <br /> and Innovation
                    </div>
                    <div className={styles.bottom_right}>
                        Physical attendance is by invitation only
                    </div>
                </div>
            </div>
            <div className={styles.agenda_content} >
                <div className={styles.agenda_flex}>
                    <div className={styles.time}>
                        9:00 - 9:30
                    </div>
                    <div className={styles.info_header} >
                        Registration for Onsite Participants Opens
                    </div>
                </div>
                <hr />
                <div className={styles.agenda_flex} style={{ gap: '0px', paddingLeft: '66px' }}>
                    <div className={styles.time}>
                    </div>
                    <div className={styles.info_header} style={{ marginTop: '20px' }}>
                        <div className={styles.info_content}>
                            <Image className={styles.image} src={image20} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div className={styles.info_header} style={{ marginLeft: '0px' }}>
                                Event Moderator : <span>KAORI HITOMI <br />Media and Partnership Consultant, ADBI</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '25px' }} className={styles.agenda_flex}>
                    <div className={styles.time}>
                        9:30 - 9:50
                    </div>
                    <div>
                        <div className={styles.info_header}>
                            Opening Remarks
                        </div>
                        <div className={styles.info_content}>
                            <Image className={styles.image} src={image1} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Prof. Dr. VUSAL GASIMLI <br />
                                Executive Director of the Center for Analysis of Economic
                                Reforms and Communication of the Republic of Azerbaijan
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image2} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Dr. TETSUSHI SONOBE <br />
                                Dean and CEO of the Asian Development Bank Institute
                            </div>
                        </div>
                        {/* <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image3} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                CANDICE McDEIGAN <br />
                                Head of the Asian Development Bank's Resident Mission
                                in Azerbaijan (TBC)
                            </div>
                        </div> */}
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image22} width={50} height={60} alt='speaker' onClick={onImageClick} />
                            <div>
                                SUNNIYA DURRANI-JAMAL   <br />
                                Country Director for the Asian Development Bank in Azerbaijan
                            </div>
                        </div>  <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image23} width={70} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Dr. ABDUL ABIAD    <br />
                                Director of the Macroeconomic Research Division, Asian Development Bank
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div style={{ marginTop: '25px' }} className={styles.agenda_flex}>
                    <div className={styles.time}>
                        9:50 - 10:00
                    </div>
                    <div>
                        <div className={styles.info_header}>
                            Special address
                        </div>
                        <div className={styles.info_content}>
                            <Image className={styles.image} src={image14} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Prof. Dr. BAMBANG BRODJONEGORO <br />
                                Special Advisor to the President of the Republic of Indonesia
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image4} width={67} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                NICOLAS J.A. BUCHOUD<br />
                                Senior Advisor to the Dean and CEO, Asian Development Bank
                                Institute
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.content_footer}>
                    <div className={styles.top}>ROUNDTABLE DISCUSSIONS (1)</div>
                    <div className={styles.bottom}>
                        <div>Global Pathways to Sustainability:<br />Mitigation, Adaptation, and Energy Transition</div>
                    </div>
                </div>
                <div style={{ marginTop: '45px' }} className={styles.agenda_flex}>
                    <div className={styles.time}>
                        10:00 - 11:15
                    </div>
                    <div>
                        <div className={styles.info_header} style={{ marginLeft: '00px', marginBottom: '22.22px' }}>
                            <div style={{ marginBottom: '12.9px' }}>
                                Roundtable Discussion
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginBottom: '17px' }}>
                            <Image className={styles.image} src={image4} width={67} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                <span className={styles.session_chair}>Session chair: </span><span>NICOLAS J.A. BUCHOUD<br />Senior Advisor to the Dean and CEO, Asian
                                    Development Bank Institute</span>
                            </div>
                        </div>
                        <div className={styles.info_header}>
                            Opening insights
                        </div>
                        <div className={styles.info_content}>
                            <Image className={styles.image} src={image5} width={59} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Dr. SHEN XIAOMENG <br />
                                UN University - Institute for Environment and Human Security
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image6} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Dr. BULAT YESSEKIN<br />
                                Regional Coordinator, Asian Platform on Water and Climate Change
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image18} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Dr. RAFAELA GUEDES<br />
                                Senior Fellow, Brazilian Center for International Relations
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image24} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Dr. VLADISLAV ZAVADSKIY <br />
                                Senior Energy Expert, CAREC Institute
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image19} width={58} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                MARGHERITA BIANCHI  <br />
                                Head of the Energy, Climate & Resources Program, IAI, Rome
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image25} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                ALEX BENKENSTEIN <br />
                                Programme Head at South African Institute of International Affairs (SAIIA)
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.agenda_flex} style={{ marginTop: '17px' }}>
                    <div className={styles.time}>
                    </div>
                    <div className={styles.info_header} style={{ marginLeft: '0px' }}>
                        Q&A and moderated discussion
                    </div>
                </div>

            </div>
            <div className={styles.agenda_content} style={{ marginTop: '72px', borderRadius: '20px', paddingTop: '0px', paddingBottom: '150px' }}>
                <div className={styles.top_part} style={{ padding: '0 77.77px' }}>
                    <div className={styles.name}>Global Think Tanks Forum </div>
                    <div className={styles.date} style={{ color: 'rgba(35, 31, 32, 1)' }}>November 16, 2024</div>
                </div>
                <div className={styles.agenda_flex}>
                    <div className={styles.time}>
                        11:15 - 11:30
                    </div>
                    <div className={styles.info_header} style={{ marginLeft: '0px' }}>
                        Coﬀee Break
                    </div>
                </div>
                <div className={styles.content_footer}>
                    <div className={styles.top}>ROUNDTABLE DISCUSSIONS (2)</div>
                    <div className={styles.bottom}>
                        <div>Green Finance for Global Climate Resilience:<br />
                            Strategies and Innovations</div>
                    </div>
                </div>
                <div style={{ marginTop: '45px', marginBottom: '20px' }} className={styles.agenda_flex}>
                    <div className={styles.time}>
                        11:30 - 12:45
                    </div>
                    <div>
                        <div className={styles.info_header} style={{ marginLeft: '0px', marginBottom: '22.22px' }}>
                            <div style={{ marginBottom: '12.9px' }}>
                                Roundtable Discussion
                            </div>

                        </div>
                        <div className={styles.info_content} style={{ marginBottom: '17px' }}>
                            <Image className={styles.image} src={image8} width={66} height={52} alt='speaker' onClick={onImageClick} />
                            <div >
                                <span className={styles.session_chair}>Session chair: </span><span>Dr. KUAT AKIZHANOV, Deputy director, CAREC
                                    Institute</span>
                            </div>
                        </div>
                        <div className={styles.info_header}>
                            Opening insights
                        </div>
                        <div className={styles.info_content}>
                            <Image className={styles.image} src={image9} width={112} height={52} alt='speaker' onClick={onImageClick} />
                            <div >
                                Prof. Dr. SIDDHARTH SAXENA <br />
                                Chairperson of the Cambridge Central Asia Forum of the
                                Cambridge University, Director of Cambridge Kazakhstan Centre                            
                                </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image17} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Prof. Dr. SHINOBU YAMAGUCHI <br />
                                Director of UNU-IAS
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image7} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Dr. FAKHRI J. HASANOV <br />
                                Senior Principal Fellow, KAPSARC
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image10} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Dr. GHULAM SAMAD <br />
                                Head of the Research Division, CAREC Institute
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image11} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Dr. JOACHIM MONKELBAAN <br />
                                Senior Fellow, KAPSARC
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image21} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Dr. DINA AZHGALIYEVA<br />
                                Senior Economist (Climate Change), ADB
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image12} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Dr. RASHAD HUSEYNOV<br />
                                Director of Agrarian Research Center, Ministry of Agriculture
                                of the Republic of Azerbaijan (TBC)
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image19} width={58} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                MARGHERITA BIANCHI<br />
                                Head of the Energy, Climate & Resources Program, IAI, Rome
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.agenda_flex} style={{ marginTop: '17px' }}>
                    <div className={styles.time}>
                    </div>
                    <div className={styles.info_header} style={{ marginLeft: '0px' }}>
                        Q&A and moderated discussion
                    </div>
                </div>
                <hr />
                <div style={{ marginTop: '45px' }} className={styles.agenda_flex}>
                    <div className={styles.time}>
                        12:45 - 13:00
                    </div>
                    <div>
                        <div className={styles.info_header} style={{ marginLeft: '0px', marginBottom: '22.22px' }}>
                            <div style={{ marginBottom: '12.9px' }}>
                                Closing notes
                            </div>

                        </div>
                        <div className={styles.info_content}>
                            <Image className={styles.image} src={image13} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Prof. Dr. AMAR BHATTACHARYA<br />
                                Senior Fellow, Brookings Institutions
                            </div>
                        </div>
                        {/* <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image15} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Prof. Dr. ADIL NAJAM<br />
                                President of WWF International
                            </div>
                        </div> */}
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image1} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Prof. Dr. VUSAL GASIMLI<br />
                                Executive Director of the Center for Analysis of Economic
                                Reforms and Communication of the Republic of Azerbaijan
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={image2} width={50} height={52} alt='speaker' onClick={onImageClick} />
                            <div>
                                Dr. TETSUSHI SONOBE<br />
                                Dean and CEO of the Asian Development Bank Institute
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.agenda_flex} style={{ marginTop: '20px' }}>
                    <div className={styles.time}>
                        13:00 - 15:00
                    </div>
                    <div className={styles.info_header} style={{ marginLeft: '0px' }}>
                        Networking lunch
                    </div>
                </div>
                {/* <hr />
                <div className={styles.agenda_flex} style={{ marginTop: '37px' }}>
                    <div className={styles.time}>
                        19:00
                    </div>
                    <div className={styles.info_header} style={{ marginLeft: '0px' }}>
                        Networking dinner 
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default AgendaSection