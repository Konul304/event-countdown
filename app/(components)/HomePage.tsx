"use client";
import React, { useEffect, useState } from 'react'
import CountdownTimer from './Countdown'
import styles from "../styles/HomePage.module.scss"

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
        if (section1 && section2) {
            if (scrollY >= section2.offsetTop - 100) {
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
        <div className={styles.homepage_container}>
            <nav className={`${styles.navbar} ${navbarSolid ? styles.navbar_solid : ''}`}>
                <ul>
                    <li
                        className={activeSection === 'section1' ? styles.active : ''}
                        onClick={() => handleNavClick('section1')}
                    >
                        Təlim haqqında
                    </li>
                    <li
                        className={activeSection === 'section2' ? styles.active : ''}
                        onClick={() => handleNavClick('section2')}
                    >
                        Qeydiyyat
                    </li>
                </ul>
            </nav>
            <div className={styles.info_container}>
                <p className={styles.title}>16 NOYABR </p>
                <CountdownTimer />
            </div>
            <div id="section1" className={styles.other_section}>
                <h2>Section 1 Content</h2>
                <p>Some other content for this section.</p>
            </div>

            <div id="section2" className={styles.other_section}>
                <h2>Section 2 Content</h2>
                <p>Some other content for this section.</p>
            </div>
        </div>
    )
}

export default HomePage