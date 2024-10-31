import React from 'react';
import styles from "../styles/ContentSection.module.scss";
import { calendar_icon, location_icon, onsite } from '../images/icons';
import ContentFooter from './ContentFooter';

const ContentSection = () => {
    return (
        <div className={styles.content_section}>
            <div className={styles.content_title}>
                Global Think Tanks Forum
            </div>
            <div className={styles.content}>
                <div style={{ marginBottom: '8.95px' }}>The Global Think Tanks Forum, co-organized by the Center for Analysis of
                    Economic Reforms and Communication (CAERC), the ADB Institute, the Asian
                    Development Bank, and The CAREC Institute, aims to convene diverse
                    stakeholders—government oﬃcials, think tanks, scholars, private sector leaders,
                    NGOs, and more—to boost climate ambitions and spotlight green finance under
                    Azerbaijan's COP29 presidency. The Forum encourages commitment to
                    ambitious national plans, transparency, and finance as a vital tool for reducing
                    emissions, adapting to climate change, and addressing loss and damage. Think
                    tanks are instrumental in enhancing COP29's outcomes by fostering
                    collaboration, accountability, and advocacy for robust climate action, oﬀering
                    both immediate and sustainable long-term solutions.<br /></div>
                <div style={{ marginBottom: '8.95px' }}>
                    Key discussions will focus on global climate strategies across three pillars:
                    mitigation, adaptation, and energy transition. This segment will explore
                    emissions reduction, preparation for climate impacts, and sustainable energy
                    transitions as interconnected pathways toward a resilient future, with insights on
                    policy, technology, and regional initiatives that balance environmental
                    sustainability with economic growth.<br /></div>
                Another focal discussion will address green finance's role in strengthening global
                climate resilience. Here, participants will examine how the financial sector, including
                governments, institutions, and investors, can align capital with sustainability goals.
                Topics will include green bonds, sustainable investment frameworks, and
                innovative financial products that drive climate-resilient economies, underscoring
                finance's critical role in advancing impactful climate solutions.

            </div>
            <ContentFooter />
        </div>
    )
}

export default ContentSection