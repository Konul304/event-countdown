"use client";
import React, { useEffect, useState } from 'react'
import CountdownTimer from './Countdown'
import styles from "../styles/HomePage.module.scss"
import { adb, adb_institute, carec_logo, gerb, gradient_bg} from "../images/icons"
import ContentSection from './ContentSection';
import AgendaSection from './AgendaSection';
import SpeakersSection from './SpeakersSection';
import Footer from './Footer';

const HomePage = () => {
    const [activeSection, setActiveSection] = useState('section1');
    const [navbarSolid, setNavbarSolid] = useState(false);

    const handleNavClick = (section: string) => {
        setActiveSection(section);
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const triggerPoint = 100;

        if (scrollY > triggerPoint) {
            setNavbarSolid(true);
        } else {
            setNavbarSolid(false);
        }

        const section1 = document.getElementById('section1');
        const section2 = document.getElementById('section2');
        const section3 = document.getElementById('section3');
        if (section1 && section2 && section3) {
            if (scrollY >= section3.offsetTop - 100) {
                setActiveSection('section3');
            } else if (scrollY >= section2.offsetTop - 100) {
                setActiveSection('section2');
            } else if (scrollY >= section1.offsetTop - 100) {
                setActiveSection('section1');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
                />
            </head>
            <div className={styles.homepage_container}>
                <nav className={`${styles.navbar} ${navbarSolid ? styles.navbar_solid : ''}`}>
                    <ul>
                        <li
                            className={activeSection === 'section1' ? styles.active : ''}
                            onClick={() => handleNavClick('section1')}
                        >
                            About training
                        </li>
                        <li
                            className={activeSection === 'section2' ? styles.active : ''}
                            onClick={() => handleNavClick('section2')}
                        >
                            Agenda
                        </li>
                        <li
                            className={activeSection === 'section3' ? styles.active : ''}
                            onClick={() => handleNavClick('section3')}
                        >
                            Speakers
                        </li>
                    </ul>
                </nav>
                <div className={styles.info_container}>
                    <div className={styles.bg_gradient}>{gradient_bg}</div>
                    <CountdownTimer />
                    <p className={styles.date}>16 November 2024 o’clock 10:00 AM</p>
                    <p className={styles.title}>Global Green Economy</p>
                    <p className={styles.description}>Financing, Innovation, and Climate Action</p>
                    <button>Register</button>
                    <div className={styles.companies} id="section1">
                        <div className={styles.logo1}>{adb_institute}</div>
                        <div className={styles.logo2}>{adb}</div>
                        <div className={styles.logo3}>{carec_logo}</div>
                        <div className={styles.logo4} style={{ display: 'flex', gap: '10.13px', alignItems: 'center' }}>
                            {gerb}
                            <div className={styles.center_name}>
                                İQTİSADİ İSLAHATLARIN TƏHLİLİ VƏ
                                KOMMUNİKASİYA MƏRKƏZİNİN MONİTORİNQ
                                VƏ QİYMƏTLƏNDİRMƏ ÜZRƏ PORTALI
                            </div>
                        </div>
                    </div>
                </div>
                <div  className={styles.section1}>
                    <ContentSection />
                </div>
                <div  className={styles.section2}>
                    <AgendaSection />
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '68px' }}>
                    <button>Register</button>
                </div>
                <div id="section3" className={styles.section3}>
                    <SpeakersSection />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default HomePage