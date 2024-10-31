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
                <div style={{ marginBottom: '8.95px' }}>The Global Think Tanks Cooperation forum is co-organized by the Center for Analysis of
                    Economic Reforms and Communication (CAERC), the ADB Institute, the Asian Development
                    Bank, and the CAREC Institute. It is hosted by CAERC at the occasion of the COP29 in Baku, as
                    announced on the sides of the UN Summit of the Future in New-York in September 2024.<br /></div>
                <div style={{ marginBottom: '8.95px' }}>
                    Central Asian and global think-tanks and decision makers, including government and
                    private sector leaders, academics and NGOs, are gathering to boost the eﬀective delivery
                    of climate ambitions and spotlight green finance under Azerbaijan's COP29 presidency and
                    beyond as part of the troika of UAE, Azerbaijan and Brazil climate COP presidencies.<br /></div>
                <div style={{ marginBottom: '8.95px' }}>
                    Think tanks are instrumental in enhancing COP29's outcomes by fostering collaboration,
                    accountability, and advocacy and crossing the lines with the G20 macroeconomic forum.
                    Climate action and development are two sides of the same coin, with the Global South, and
                    especially the most vulnerable countries, on the forefront of climate challenges and
                    transformations.
                    <br /></div>
                <div style={{ marginBottom: '8.95px' }}>
                    The Baku COP29 edition of the Global Think Tanks Cooperation will address regional and
                    global climate agendas, including the eﬀective implementation of ambitious and transparent
                    national climate plans, the financing of the loss and damage fund, the organization of
                    innovative partnerships under the Paris Agreement's article 6 to develop carbon markets.<br />
                </div>
                <div style={{ marginBottom: '8.95px' }}>
                    It will privilege an interactive dialogue among decision makers, researchers and
                    practitioners.<br />
                </div>
                <div style={{ marginBottom: '8.95px' }}>
                    The first part,
                    “Global Pathways to Sustainability: Mitigation, Adaptation, and Energy
                    Transition” will focus on emissions reduction, climate adaptation, and energy transitions as
                    interconnected pathways toward a resilient future. It will include insights on policy, technology,
                    and regional initiatives that balance environmental sustainability with economic growth.<br />
                </div>
                <div style={{ marginBottom: '8.95px' }}>
                    The second part, “Green Finance for Global Climate Resilience: Strategies and Innovations”
                    will focus on the role of green finance in strengthening global climate resilience. It will
                    examine how the financial sector, including public and private investors, can align capital
                    with sustainability goals. It will include green bonds, sustainable investment frameworks,
                    and innovative financial products that drive climate-resilient economies, underscoring
                    finance's critical role in advancing impactful climate solutions.<br />
                </div>
            </div>
            <ContentFooter />
        </div>
    )
}

export default ContentSection