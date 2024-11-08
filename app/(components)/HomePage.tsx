"use client";
import React, { useEffect, useRef, useState } from 'react'
import CountdownTimer from './Countdown'
import styles from "../styles/HomePage.module.scss"
import { adb, adb_institute, carec_logo, download, gerb } from "../images/icons"
import ContentSection from './ContentSection';
import AgendaSection from './AgendaSection';
import SpeakersSection from './SpeakersSection';
import Footer from './Footer';
import Head from 'next/head';
import RegisterModal from './RegisterModal';
import ContentAccordion from './ContentAccordion';


const HomePage = () => {
    const [activeSection, setActiveSection] = useState('section1');
    const [navbarSolid, setNavbarSolid] = useState(false);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);

    const handleNavClick = (section: any) => {
        setActiveSection(section);

        let offset = -100; // Adjust this offset as needed

        // Scroll to the section with an offset
        if (section === 'section1' && section1Ref.current) {
            window.scrollTo({
                top: section1Ref.current.offsetTop + offset,
                behavior: 'smooth'
            });
        } else if (section === 'section2' && section2Ref.current) {
            window.scrollTo({
                top: section2Ref.current.offsetTop + offset,
                behavior: 'smooth'
            });
        } else if (section === 'section3' && section3Ref.current) {
            window.scrollTo({
                top: section3Ref.current.offsetTop + offset,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const triggerPoint = 150; // Increase this if needed

        // Toggle the solid navbar based on the scroll position
        setNavbarSolid(scrollY > triggerPoint);

        // Update the active section based on section positions
        if (section3Ref.current && section3Ref.current.getBoundingClientRect().top <= 150) {
            setActiveSection('section3');
        } else if (section2Ref.current && section2Ref.current.getBoundingClientRect().top <= 150) {
            setActiveSection('section2');
        } else if (section1Ref.current && section1Ref.current.getBoundingClientRect().top <= 150) {
            setActiveSection('section1');
        }
    };

    const handleDownload = () => {
        console.log('object')
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1au3NMzTzWrXUV4xuJHM77T5BOXmtbUjm/view?usp=sharing'; // Change this path to the relative path of your PDF file
        link.target = '_blank'; // Open in a new tab
        link.rel = 'noopener noreferrer'; // Security measure for opening new tabs
        link.click();
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth <= 900);
            window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 900));
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('resize', () => setIsMobile(window.innerWidth <= 900));
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
                    {isMobile ? (
                        <div className={styles.burgerIcon} onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}>
                            &#9776; {/* Burger icon */}
                        </div>
                    ) : (
                        <ul>
                            <li className={activeSection === 'section1' ? styles.active : ''} onClick={() => handleNavClick('section1')}>About</li>
                            <li className={activeSection === 'section3' ? styles.active : ''} onClick={() => handleNavClick('section3')}>Speakers</li>
                            <li className={activeSection === 'section2' ? styles.active : ''} onClick={() => handleNavClick('section2')}>Agenda</li>
                        </ul>
                    )}
                    {isBurgerMenuOpen && (
                        <ul className={styles.burgerMenu}>
                            <li onClick={() => handleNavClick('section1')}>About</li>
                            <li onClick={() => handleNavClick('section3')}>Speakers</li>
                            <li onClick={() => handleNavClick('section2')}>Agenda</li>
                        </ul>
                    )}
                </nav>
                <div className={styles.info_container}>
                    <CountdownTimer />
                    <p className={styles.date}> November 16 2024, 09:00 AM</p>
                    <p className={styles.title}>Global Green Economy</p>
                    <p className={styles.description}> Climate Action, Financing and Innovation<br /> Forum</p>
                    <div className={styles.buttons_container}>
                        <div className={styles.download_agenda} onClick={handleDownload}>
                            <div>{download}</div>
                            <div>Agenda</div>
                        </div>
                        <button className={styles.register_button}
                            onClick={() =>
                                window.open('https://docs.google.com/forms/d/e/1FAIpQLSf5AfCrNYW4ZmmqqhUPiH3HOfBQC6U7hWYFm4-fcUCu038lhw/viewform?usp=sf_link', '_blank')
                            }
                        >Register</button>
                    </div>
                    <div className={styles.companies} ref={section1Ref}>
                        <div className={styles.logo1}>{adb_institute}</div>
                        <div className={styles.logo2}>{adb}</div>
                        <div className={styles.logo3}>{carec_logo}</div>
                        <div className={styles.logo4} style={{ display: 'flex', gap: '10.13px', alignItems: 'center' }}>
                            {gerb}
                            <div className={styles.center_name}>
                                Center for Analysis of Economic <br />
                                Reforms and Communication of<br />
                                the Republic of Azerbaijan
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sections_container}>
                    <div className={styles.section1}>
                        <ContentSection />
                        <ContentAccordion />
                    </div>
                    <div className={styles.section2}>
                        <AgendaSection refProp={section2Ref} onImageClick={() => handleNavClick('section3')} />
                    </div>
                    <div className={styles.button_container} >
                        <button className={styles.secondButton}
                            onClick={() =>
                                window.open('https://docs.google.com/forms/d/e/1FAIpQLSf5AfCrNYW4ZmmqqhUPiH3HOfBQC6U7hWYFm4-fcUCu038lhw/viewform?usp=sf_link', '_blank')
                            }
                        >Register</button>
                    </div>
                    <div ref={section3Ref} id="section3" className={styles.section3}>
                        <SpeakersSection />
                        <Footer />
                    </div>
                </div>
            </div>
            {isOpen && <RegisterModal isOpen={isOpen} setIsOpen={setIsOpen} />}
        </>
    )
}

export default HomePage