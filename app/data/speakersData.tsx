import { StaticImageData } from "next/image";
import { AdilNajamBio, AmarBhattacharyaBio, BambangBrodjonegoroBio, BulatYessekinBio, CandiceMcDeiganBio, DinaAzghaliyevaBio, FakhriJHasanovBio, GhulamSamadBio, IzabellaTeixeiraBio, JoachimMonkelbaanBio, KuatAkizhanovBio, MargheritaBianchiBio, NicolasBuchoudBio, RafaelaGuedesBio, RashadHuseynovBio, ShenXiaomengBio, ShinobuYamaguchiBio, SiddharthSaxenaBio, TetsushiSonobeBio, VusalGasimliBio } from "../data/bio";

interface Speaker {
    name: string;
    position: string;
    image: StaticImageData;
    bio: React.ReactNode;
    style?: React.CSSProperties;
    link?: any
}


export const speakersData: Speaker[] = [
    {
        name: "Prof. Dr. VUSAL GASIMLI",
        position: "Executive Director of the Center for Analysis of Economic Reforms and Communication of the Republic of Azerbaijan",
        image: require("../images/speakers/image1.png"),
        bio: VusalGasimliBio,
        link: "https://www.linkedin.com/in/vusal-gasimli-b7a78616/"
    },
    {
        name: "Dr. TETSUSHI SONOBE",
        position: "Dean and CEO of the Asian Development Bank Institute",
        image: require("../images/speakers/image2.png"),
        bio: TetsushiSonobeBio,
        link: "sonobete@grips.ac.jp"
    },
    {
        name: "CANDICE McDEIGAN",
        position: "Head of the Asian Development Bank's Resident Mission in Azerbaijan (TBC)",
        image: require("../images/speakers/image3.png"),
        bio: CandiceMcDeiganBio,
        style: { objectFit: 'cover', paddingTop: '10px' },
    },
    {
        name: "NICOLAS J.A. BUCHOUD",
        position: "Senior Consultant and Advisor to the Dean, ADBI",
        image: require("../images/speakers/image4.png"),
        bio: NicolasBuchoudBio,
        link: 'https://www.linkedin.com/in/nicolasbuchoud/?originalSubdomain=jp'
    },
    {
        name: "Dr. SHEN XIAOMENG",
        position: "UN University - Institute for Environment and Human Security",
        image: require("../images/speakers/image5.png"),
        bio: ShenXiaomengBio,
        link: 'https://www.linkedin.com/in/shenxiaomeng/?originalSubdomain=de'
    },
    {
        name: "Dr. BULAT YESSEKIN",
        position: "Regional Coordinator, Asian Platform on Water and Climate Change",
        image: require("../images/speakers/image6.png"),
        bio: BulatYessekinBio,
        link: 'https://www.linkedin.com/in/bulat-yessekin-8925792a/?originalSubdomain=kz'
    },
    {
        name: "Dr. FAKHRI J. HASANOV",
        position: "Senior Principal Fellow, KAPSARC",
        image: require("../images/speakers/image7.png"),
        bio: FakhriJHasanovBio,
        link: 'hasanov.fakhri@gmail.com'
    },
    {
        name: "RAFAELA GUEDES",
        position: "Senior fellow, Brazilian Center for International Relations",
        image: require("../images/speakers/image18.png"),
        bio: RafaelaGuedesBio,
        link: 'rafaelammonnerat@gmail.comyamaguchi@unu.edu'
    },
    {
        name: "Dr. KUAT AKIZHANOV",
        position: "Deputy director, CAREC Institute",
        image: require("../images/speakers/image8.png"),
        bio: KuatAkizhanovBio,
        link: 'https://www.facebook.com/kuat.akizhanov.3/?locale=el_GR'
    },
    {
        name: "Prof. Dr. SIDDHARTH SAXENA",
        position: "Chairperson of the Cambridge Central Asia Forum of the Cambridge University, Director of Cambridge Kazakhstan Centre",
        image: require("../images/speakers/image9.png"),
        bio: SiddharthSaxenaBio,
        style: { objectFit: 'cover' },
        link: 'https://www.linkedin.com/in/siddharthsaxenacambridge/?originalSubdomain=uk'
    },
    {
        name: "Dr. GHULAM SAMAD",
        position: "Head of the Research Division, CAREC Institute",
        image: require("../images/speakers/image10.png"),
        bio: GhulamSamadBio,
        style: { paddingTop: '10px' },
        link: 'https://www.linkedin.com/in/ghulam-samad-20b556a5/'
    },
    {
        name: "Dr. JOACHIM MONKELBAAN",
        position: "Senior Fellow, KAPSARC",
        image: require("../images/speakers/image11.png"),
        bio: JoachimMonkelbaanBio,
        link: 'https://www.linkedin.com/in/joachim9/?originalSubdomain=ch'
    },
    {
        name: "Dr. DINA AZHGALIYEVA",
        position: "Senior Economist (Climate Change), ADB",
        image: require("../images/speakers/image21.png"),
        bio: DinaAzghaliyevaBio,
        link: 'https://www.linkedin.com/in/dina-a-7800b891/?originalSubdomain=sg'
    },
    {
        name: "Dr. RASHAD HUSEYNOV",
        position: "Director of Agrarian Research Center, Ministry of Agriculture of the Republic of Azerbaijan (TBC)",
        image: require("../images/speakers/image12.png"),
        bio: RashadHuseynovBio,
        link: 'https://www.linkedin.com/in/rashad-huseynov-phd-720ab3a/?originalSubdomain=az'
    },
    {
        name: "MARGHERITA BIANCHI ",
        position: "Head of the Energy, Climate & Resources Programme",
        image: require("../images/speakers/image19.png"),
        bio: MargheritaBianchiBio,
        link: 'm.bianchi@iai.it'
    },
    {
        name: "Prof. Dr. AMAR BHATTACHARYA",
        position: "Senior Fellow, Brookings Institution",
        image: require("../images/speakers/image13.png"),
        bio: AmarBhattacharyaBio,
        link: 'ABhattacharya@brookings.edu'
    },
    {
        name: "Prof. Dr. ADIL NAJAM",
        position: "Dean Emeritus; Professor of International Relations and Earth & Environment",
        image: require("../images/speakers/image15.png"),
        bio: AdilNajamBio,
        style: { objectFit: 'cover', paddingTop: '5px' },
        link: 'anajam@bu.edu'
    },

];

export const guestsData: Speaker[] = [
    {
        name: "Prof. Dr. BAMBANG BRODJONEGORO",
        position: "Former Finance Minister, Indonesia",
        image: require("../images/speakers/image14.png"),
        bio: BambangBrodjonegoroBio,
        link: 'office@bambangbrodjonegoro.com'
    },
    {
        name: "IZABELLA TEIXEIRA",
        position: "Co-chair, UNEP International Resource Panel; Former Brazilian Environment Minister",
        image: require("../images/speakers/image16.png"),
        bio: IzabellaTeixeiraBio,
        link: 'izabella.monica@gmail.com'
    },
    {
        name: "SHINOBU YAMAGUCHI",
        position: "Director, United Nations University Institute for the Advanced Study of Sustainability",
        image: require("../images/speakers/image17.png"),
        bio: ShinobuYamaguchiBio,
        link: 'h.ishijima@unu.edu'
    },

];