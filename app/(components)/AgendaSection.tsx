import React from 'react';
import styles from "../styles/AgendaSection.module.scss";
import a from "../images/image.png";
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
                    <div className={styles.info_header}>
                        Registration for Onsite Participants Opens
                    </div>
                </div>
                <hr />
                <div style={{ marginTop: '45px' }} className={styles.agenda_flex}>
                    <div className={styles.time}>
                        9:30 - 9:45<br />(15 min)
                    </div>
                    <div>
                        <div className={styles.info_header}>
                            Opening Remarks
                        </div>
                        <div className={styles.info_content}>
                            <Image className={styles.image} src={a} width={39} height={39} alt='speaker' onClick={onImageClick} />
                            <div>
                                Prof. Dr. VUSAL GASIMLI <br />
                                Executive Director of the Center for Analysis of Economic
                                Reforms and Communication of the Republic of Azerbaijan
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={a} width={37} height={37} alt='speaker' onClick={onImageClick} />
                            <div>
                                Dr. TETSUSHI SONOBE <br />
                                Dean and CEO of the Asian Development Bank Institute
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={a} width={37} height={37} alt='speaker' onClick={onImageClick} />
                            <div>
                                CANDICE McDEIGAN <br />
                                Head of the Asian Development Bank's Resident Mission
                                in Azerbaijan (TBC)
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
                        9:45 - 11:00<br />(75 min)
                    </div>
                    <div>
                        <div className={styles.info_header} style={{ marginLeft: '00px', marginBottom: '22.22px' }}>
                            <div style={{ marginBottom: '12.9px' }}>
                                Roundtable Discussion: confirmed participants
                            </div>
                        </div>

                        <div className={styles.info_content}  style={{marginBottom:'17px'}}>
                            <Image className={styles.image} src={a} width={39} height={39} alt='speaker' onClick={onImageClick} />
                            <div>
                            <span className={styles.session_chair}>Session chair: </span><span>NICOLAS J.A. BUCHOUD, Senior Consultant and
                            Advisor to the Dean, ADBI</span>
                            </div>
                        </div>
                        
                        <div className={styles.info_content}>
                            <Image className={styles.image} src={a} width={39} height={39} alt='speaker' onClick={onImageClick} />
                            <div>
                                Prof. Dr. VUSAL GASIMLI <br />
                                Executive Director of the Center for Analysis of Economic
                                Reforms and Communication of the Republic of Azerbaijan
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={a} width={37} height={37} alt='speaker' onClick={onImageClick} />
                            <div>
                                Dr. TETSUSHI SONOBE <br />
                                Dean and CEO of the Asian Development Bank Institute
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={a} width={37} height={37} alt='speaker' onClick={onImageClick} />
                            <div>
                                CANDICE McDEIGAN <br />
                                Head of the Asian Development Bank's Resident Mission
                                in Azerbaijan (TBC)
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.agenda_flex} style={{ marginTop: '17px' }}>
                    <div className={styles.time}>
                    </div>
                    <div className={styles.info_header} style={{ marginLeft: '0px' }}>
                        Q&A
                    </div>
                </div>
                <hr />
                <div className={styles.agenda_flex} style={{ marginTop: '17px' }}>
                    <div className={styles.time}>
                        11:00 - 11:30<br />(30 min)
                    </div>
                    <div className={styles.info_header} style={{ marginLeft: '0px' }}>
                        Break
                    </div>
                </div>
            </div>
            <div className={styles.agenda_content} style={{ marginTop: '72px', borderRadius: '20px', paddingTop: '0px', paddingBottom: '210px' }}>
                <div className={styles.top_part} style={{ padding: '0 77.77px' }}>
                    <div className={styles.name}>Global Think Tanks Forum </div>
                    <div className={styles.date} style={{ color: 'rgba(35, 31, 32, 1)' }}>November 16, 2024</div>
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
                        11:30 - 12:45<br />(75 min)
                    </div>
                    <div>
                        <div className={styles.info_header} style={{ marginLeft: '0px', marginBottom: '22.22px' }}>
                            <div style={{ marginBottom: '12.9px' }}>
                                Roundtable Discussion: confirmed participants
                            </div>
                            
                        </div>
                        <div className={styles.info_content} style={{marginBottom:'17px'}}>
                            <Image className={styles.image} src={a} width={39} height={39} alt='speaker' onClick={onImageClick} />
                            <div>
                            <span className={styles.session_chair}>Session chair: </span><span>Dr. KUAT AKIZHANOV, Deputy director, CAREC
                            Institute</span>
                            </div>
                        </div>
                        <div className={styles.info_content}>
                            <Image className={styles.image} src={a} width={39} height={39} alt='speaker' onClick={onImageClick} />
                            <div>
                                Prof. Dr. SIDDHARTH SAXENA <br />
                                Chairperson of the Cambridge Central Asia Forum of the
                                Cambridge University, Director of Cambridge Kazakhstan
                                Centre
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={a} width={37} height={37} alt='speaker' onClick={onImageClick} />
                            <div>
                                Dr. GHULAM SAMAD <br />
                                Head of the Research Division, CAREC Institute
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={a} width={37} height={37} alt='speaker' onClick={onImageClick} />
                            <div>
                                Dr. JOACHIM MONKELBAAN <br />
                                Senior Fellow, KAPSARC
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={a} width={37} height={37} alt='speaker' onClick={onImageClick} />
                            <div>
                                Dr. RASHAD HUSEYNOV<br />
                                Director of Agrarian Research Center, Ministry of Agriculture
                                of the Republic of Azerbaijan (TBC)
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={a} width={37} height={37} alt='speaker' onClick={onImageClick} />
                            <div>
                                VUSALA JAFAROVA<br />
                                Head of the Turkic World Research Center, CAERC (TBC)
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.agenda_flex} style={{ marginTop: '17px' }}>
                    <div className={styles.time}>
                    </div>
                    <div className={styles.info_header} style={{ marginLeft: '0px' }}>
                        Q&A
                    </div>
                </div>
                <hr />
                <div style={{ marginTop: '45px' }} className={styles.agenda_flex}>
                    <div className={styles.time}>
                        12:45 - 13:00<br />(15 min)
                    </div>
                    <div>
                        <div className={styles.info_header} style={{ marginLeft: '0px', marginBottom: '22.22px' }}>
                            <div style={{ marginBottom: '12.9px' }}>
                                Closing remarks
                            </div>

                        </div>
                        <div className={styles.info_content}>
                            <Image className={styles.image} src={a} width={39} height={39} alt='speaker' onClick={onImageClick} />
                            <div>
                                Prof. Dr. VUSAL GASIMLI<br />
                                Executive Director of the Center for Analysis of Economic
                                Reforms and Communication of the Republic of Azerbaijan
                            </div>
                        </div>
                        <div className={styles.info_content} style={{ marginTop: '23px' }}>
                            <Image className={styles.image} src={a} width={37} height={37} alt='speaker' onClick={onImageClick} />
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
                        Lunch
                    </div>
                </div>
                <hr />
                <div className={styles.agenda_flex} style={{ marginTop: '37px' }}>
                    <div className={styles.time}>
                        19:00
                    </div>
                    <div className={styles.info_header} style={{ marginLeft: '0px' }}>
                        Networking dinner (will be announced)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgendaSection