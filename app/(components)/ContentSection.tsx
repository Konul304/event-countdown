import React from 'react';
import styles from "../styles/ContentSection.module.scss";
import ContentFooter from './ContentFooter';

const ContentSection = () => {
    return (
        <div className={styles.content_section}>
            <div className={styles.content_title}>
                Global Think Tanks Forum
            </div>
            <div className={styles.content}>
                <div style={{ marginBottom: '8.95px' }}>The Global Think Tanks Forum is co-organized by the Center for Analysis of Economic
                    Reforms and Communication (CAERC), the ADB Institute, the Asian Development Bank,
                    and the CAREC Institute. It is hosted by CAERC on the occasion of COP29 in Baku, as
                    announced on the sidelines of the UN Summit of the Future in New York in September 2024.<br /></div>
                <div style={{ marginBottom: '8.95px' }}>
                    Central Asian and global think tanks, along with decision-makers from government, the
                    private sector, academia, and NGOs, are gathering to boost the eﬀective delivery of climate
                    ambitions and to spotlight green finance under Azerbaijan's COP29 presidency and
                    beyond, as part of the UAE-Azerbaijan-Brazil climate COP presidencies troika. Think tanks
                    play a crucial role in enhancing COP29 outcomes by fostering collaboration, accountability,
                    advocacy, and engagement with the G20 macroeconomic forum.<br /></div>
                <div style={{ marginBottom: '8.95px' }}>
                    Climate action and development are two sides of the same coin, with the Global South,
                    particularly the most vulnerable countries, at the forefront of climate challenges and
                    transformations.
                    <br /></div>
                <div style={{ marginBottom: '8.95px' }}>
                    The Baku COP29 edition of the global think tanks cooperation will address both regional
                    and global climate agendas, focusing on the eﬀective implementation of ambitious and
                    transparent national climate plans, the financing of the loss and damage fund, and the
                    development of innovative partnerships under article 6 of the Paris Agreement to advance
                    carbon markets.<br />
                </div>
                <div style={{ marginBottom: '8.95px' }}>
                    The Forum will foster an interactive dialogue among decision-makers, researchers, and
                    practitioners.<br />
                </div>
                <div style={{ marginBottom: '8.95px' }}>
                    The first part, “Global Pathways to Sustainability: Mitigation, Adaptation, and Energy
                    Transition”, will focus on emissions reduction, climate adaptation, and energy transitions as
                    interconnected pathways to a resilient future. This section will feature insights on policies,
                    technologies, and regional initiatives that balance environmental sustainability with
                    economic growth.<br />
                </div>
                <div style={{ marginBottom: '8.95px' }}>
                    The second part, ,
                    will explore the role of green finance in strengthening global climate resilience. It will
                    examine how the financial sector, including public and private investors, can align capital
                    with sustainability goals. Topics will include green bonds, sustainable investment
                    frameworks, and innovative financial products that drive climate-resilient economies,
                    highlighting finance's critical role in advancing impactful climate solutions.<br />
                </div>
            </div>
            <ContentFooter />
        </div>
    )
}

export default ContentSection