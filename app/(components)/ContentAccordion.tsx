import { Collapse } from 'antd'
import { CollapseProps } from 'antd/es/collapse/Collapse';
import { SettingOutlined } from '@ant-design/icons';
import { calendar_icon, location_icon, minus, onsite, plus } from '../images/icons';
import styles from "../styles/ContentSection.module.scss";
import ContentFooter from './ContentFooter';


const ContentAccordion = () => {

    const MinusIcon = () => {
        return <div>{minus}</div>
    };
    const PlusIcon = () => {
        return <div>{plus}</div>
    }

    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    const genExtra = () => {
        return (
            <SettingOutlined
                onClick={(event: any) => {
                    // If you don't want click extra trigger collapse, you can prevent this:
                    event.stopPropagation();
                }} />
        );
    };

    const item1: CollapseProps['items'] = [
        {
            label: 'This is panel header 1',
            children: <div>The Global Think Tanks Forum, co-organized by the Center for Analysis of
                Economic Reforms and Communication (CAERC), the ADB Institute, the Asian
                Development Bank, and The CAREC Institute, aims to convene diverse
                stakeholders—government officials, think tanks, scholars, private sector leaders,
                NGOs, and more—to boost climate ambitions and spotlight green finance under
                Azerbaijan's COP29 presidency. The Forum encourages commitment to
                ambitious national plans, transparency, and finance as a vital tool for reducing
                emissions, adapting to climate change, and addressing loss and damage. Think
                tanks are instrumental in enhancing COP29's outcomes by fostering
                collaboration, accountability, and advocacy for robust climate action, offering
                both immediate and sustainable long-term solutions.</div>,
            extra: genExtra(),
        },

    ];
    const item2: CollapseProps['items'] = [
        {
            label: 'This is panel header 1',
            children: <div>Key discussions will focus on global climate strategies across three pillars:
                mitigation, adaptation, and energy transition. This segment will explore
                emissions reduction, preparation for climate impacts, and sustainable energy
                transitions as interconnected pathways toward a resilient future, with insights on
                policy, technology, and regional initiatives that balance environmental
                sustainability with economic growth.</div>,
            extra: genExtra(),
        },

    ];
    const item3: CollapseProps['items'] = [
        {
            label: 'This is panel header 1',
            children: <div>Another focal discussion will address green finance's role in strengthening global
                climate resilience. Here, participants will examine how the financial sector, including
                governments, institutions, and investors, can align capital with sustainability goals.
                Topics will include green bonds, sustainable investment frameworks, and
                innovative financial products that drive climate-resilient economies, underscoring
                finance's critical role in advancing impactful climate solutions.</div>,
            extra: genExtra(),
        },

    ];
    return (
        <div className={styles.accordion_container}>
            <Collapse
                onChange={onChange}
                expandIcon={({ isActive }) =>
                    isActive ? <MinusIcon /> : <PlusIcon />
                }
                expandIconPosition={"end"}
                items={item1}
            />
            <Collapse
                expandIcon={({ isActive }) =>
                    isActive ? <MinusIcon /> : <PlusIcon />
                }
                onChange={onChange}
                expandIconPosition={"end"}
                items={item2}
            />
            <Collapse
                expandIcon={({ isActive }) =>
                    isActive ? <MinusIcon /> : <PlusIcon />
                }
                onChange={onChange}
                expandIconPosition={"end"}
                items={item3}
            />
            <ContentFooter />
        </div>
    )
}

export default ContentAccordion