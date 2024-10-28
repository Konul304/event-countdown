"use client";
import React, { useEffect, useRef, useState } from 'react'
import CountdownTimer from './Countdown'
import styles from "../styles/HomePage.module.scss"
import { adb, adb_institute, carec_logo, gerb, gradient_bg } from "../images/icons"
import ContentSection from './ContentSection';
import AgendaSection from './AgendaSection';
import SpeakersSection from './SpeakersSection';
import Footer from './Footer';
import Head from 'next/head';
import RegisterModal from './RegisterModal';

const HomePage = () => {
    const [activeSection, setActiveSection] = useState('section1');
    const [navbarSolid, setNavbarSolid] = useState(false);
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);

    const handleNavClick = (section: any) => {
        setActiveSection(section);

        // Scroll to the section by calling scrollIntoView on the ref
        if (section === 'section1' && section1Ref.current) {
            section1Ref.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'section2' && section2Ref.current) {
            section2Ref.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'section3' && section3Ref.current) {
            section3Ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const triggerPoint = 100;

        // Toggle the solid navbar based on the scroll position
        setNavbarSolid(scrollY > triggerPoint);

        // Check the position of each section and update activeSection state accordingly
        if (section3Ref.current && section3Ref.current.getBoundingClientRect().top <= 100) {
            setActiveSection('section3');
        } else if (section2Ref.current && section2Ref.current.getBoundingClientRect().top <= 100) {
            setActiveSection('section2');
        } else if (section1Ref.current && section1Ref.current.getBoundingClientRect().top <= 100) {
            setActiveSection('section1');
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
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
                />
            </Head>
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
                            className={activeSection === 'section3' ? styles.active : ''}
                            onClick={() => handleNavClick('section3')}
                        >
                            Speakers
                        </li>
                        <li
                            className={activeSection === 'section2' ? styles.active : ''}
                            onClick={() => handleNavClick('section2')}
                        >
                            Agenda
                        </li>
                    </ul>
                </nav>
                <div className={styles.info_container}>
                    <div className={styles.bg_gradient}>{gradient_bg}</div>
                    <CountdownTimer />
                    <p className={styles.date}>16 November 2024 o’clock 10:00 AM</p>
                    <p className={styles.title}>Global Green Economy</p>
                    <p className={styles.description}>Financing, Innovation, and Climate Action</p>
                    <button onClick={() => setIsOpen(true)}>Register</button>
                    <div className={styles.companies} ref={section1Ref}>
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
                <div className={styles.section1}>
                    <ContentSection />
                </div>
                <div className={styles.section2}>
                    <AgendaSection refProp={section2Ref} onImageClick={() => handleNavClick('section3')}  />
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '68px' }}>
                    <button onClick={() => setIsOpen(true)}>Register</button>
                </div>
                <div ref={section3Ref} id="section3" className={styles.section3}>
                    <SpeakersSection />
                    <Footer />
                </div>
            </div>
            {isOpen && <RegisterModal isOpen={isOpen} setIsOpen={setIsOpen} />}
        </>
    )
}

export default HomePage