import { Collapse } from 'antd'
import { CollapseProps } from 'antd/es/collapse/Collapse';
import { SettingOutlined } from '@ant-design/icons';
import { minus, plus } from '../../public/images/icons';
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
            label: 'Global Think Tanks Forum: Advancing Climate Ambitions',
            children: <div>The Global Think Tanks Forum is co-organized by the Center for Analysis of Economic Reforms and Communication (CAERC), the ADB Institute, the Asian Development Bank, and the CAREC Institute. It is hosted by CAERC on the occasion of COP29 in Baku, as announced on the sidelines of the UN Summit of the Future in New York in September 2024. Central Asian and global think tanks, along with decision-makers from government, the private sector, academia, and NGOs, are gathering to boost the effective delivery of climate ambitions and to spotlight green finance under Azerbaijan's COP29 presidency and beyond, as part of the UAE-Azerbaijan-Brazil climate COP presidencies troika. Think tanks play a crucial role in enhancing COP29 outcomes by fostering collaboration, accountability, advocacy, and engagement with the G20 macroeconomic forum.</div>,
            extra: genExtra(),
        },

    ];
    const item2: CollapseProps['items'] = [
        {
            label: 'Baku COP29: Climate Action, Finance, and Partnerships',
            children: <div>Climate action and development are two sides of the same coin, with the Global South, particularly the most vulnerable countries, at the forefront of climate challenges and transformations. The Baku COP29 edition of the global think tanks cooperation will address both regional and global climate agendas, focusing on the effective implementation of ambitious and transparent national climate plans, the financing of the loss and damage fund, and the development of innovative partnerships under article 6 of the Paris Agreement to advance carbon markets.</div>,
            extra: genExtra(),
        },

    ];
    const item3: CollapseProps['items'] = [
        {
            label: 'Sustainability and Green Finance: Pathways to Climate Resilience',
            children: <div>The Forum will foster an interactive dialogue among decision-makers, researchers, and practitioners.
                The first part, “Global Pathways to Sustainability: Mitigation, Adaptation, and Energy Transition”, will focus on emissions reduction, climate adaptation, and energy transitions as interconnected pathways to a resilient future. This section will feature insights on policies, technologies, and regional initiatives that balance environmental sustainability with economic growth.The second part, “Green Finance for Global Climate Resilience: Strategies and Innovations”, will explore the role of green finance in strengthening global climate resilience. It will examine how the financial sector, including public and private investors, can align capital with sustainability goals. Topics will include green bonds, sustainable investment frameworks, and innovative financial products that drive climate-resilient economies, highlighting finance's critical role in advancing impactful climate solutions.</div>,
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