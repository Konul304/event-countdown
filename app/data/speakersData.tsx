import { StaticImageData } from "next/image";
import { AdilNajamBio, AmarBhattacharyaBio, BambangBrodjonegoroBio, BulatYessekinBio, CandiceMcDeiganBio, FakhriJHasanovBio, GhulamSamadBio, IzabellaTeixeiraBio, JoachimMonkelbaanBio, KuatAkizhanovBio, MargheritaBianchiBio, NicolasBuchoudBio, RafaelaGuedesBio, RashadHuseynovBio, ShenXiaomengBio, ShinobuYamaguchiBio, SiddharthSaxenaBio, TetsushiSonobeBio, VusalGasimliBio } from "../data/bio";

interface Speaker {
    name: string;
    position: string;
    image: StaticImageData;
    bio: React.ReactNode;
    style?: React.CSSProperties;
}


export const speakersData: Speaker[] = [
    {
        name: "Prof. Dr. VUSAL GASIMLI",
        position: "Executive Director of the Center for Analysis of Economic Reforms and Communication of the Republic of Azerbaijan",
        image: require("../images/speakers/image1.png"),
        bio: VusalGasimliBio,
    },
    {
        name: "Dr. TETSUSHI SONOBE",
        position: "Dean and CEO of the Asian Development Bank Institute",
        image: require("../images/speakers/image2.png"),
        bio: TetsushiSonobeBio,
    },
    {
        name: "CANDICE McDEIGAN",
        position: "Head of the Asian Development Bank's Resident Mission in Azerbaijan (TBC)",
        image: require("../images/speakers/image3.png"),
        bio: CandiceMcDeiganBio,
        style: { objectFit: 'cover', paddingTop: '10px' }
    },
    {
        name: "NICOLAS J.A. BUCHOUD",
        position: "Senior Consultant and Advisor to the Dean, ADBI",
        image: require("../images/speakers/image4.png"),
        bio: NicolasBuchoudBio,
    },
    {
        name: "Dr. SHEN XIAOMENG",
        position: "UN University - Institute for Environment and Human Security",
        image: require("../images/speakers/image5.png"),
        bio: ShenXiaomengBio,
    },
    {
        name: "Dr. BULAT YESSEKIN",
        position: "Regional Coordinator, Asian Platform on Water and Climate Change",
        image: require("../images/speakers/image6.png"),
        bio: BulatYessekinBio,
    },
    {
        name: "Dr. FAKHRI J. HASANOV",
        position: "Senior Principal Fellow, KAPSARC",
        image: require("../images/speakers/image7.png"),
        bio: FakhriJHasanovBio,
    },
    {
        name: "RAFAELA GUEDES",
        position: "Senior fellow, Brazilian Center for International Relations",
        image: require("../images/speakers/image18.png"),
        bio: RafaelaGuedesBio,
    },
    {
        name: "Dr. KUAT AKIZHANOV",
        position: "Deputy director, CAREC Institute",
        image: require("../images/speakers/image8.png"),
        bio: KuatAkizhanovBio,
    },
    {
        name: "Prof. Dr. SIDDHARTH SAXENA",
        position: "Chairperson of the Cambridge Central Asia Forum of the Cambridge University, Director of Cambridge Kazakhstan Centre",
        image: require("../images/speakers/image9.png"),
        bio: SiddharthSaxenaBio,
        style: { objectFit: 'cover' }
    },
    {
        name: "Dr. GHULAM SAMAD",
        position: "Head of the Research Division, CAREC Institute",
        image: require("../images/speakers/image10.png"),
        bio: GhulamSamadBio,
        style: { paddingTop: '10px' }
    },
    {
        name: "Dr. JOACHIM MONKELBAAN",
        position: "Senior Fellow, KAPSARC",
        image: require("../images/speakers/image11.png"),
        bio: JoachimMonkelbaanBio,
    },
    {
        name: "Dr. RASHAD HUSEYNOV",
        position: "Director of Agrarian Research Center, Ministry of Agriculture of the Republic of Azerbaijan (TBC)",
        image: require("../images/speakers/image12.png"),
        bio: RashadHuseynovBio,
    },
    {
        name: "MARGHERITA BIANCHI ",
        position: "Head of the Energy, Climate & Resources Programme",
        image: require("../images/speakers/image19.png"),
        bio: MargheritaBianchiBio,
    },
    {
        name: "Prof. Dr. AMAR BHATTACHARYA",
        position: "Senior Fellow, Brookings Institution",
        image: require("../images/speakers/image13.png"),
        bio: AmarBhattacharyaBio,
    },
    {
        name: "Prof. Dr. ADIL NAJAM",
        position: "Dean Emeritus; Professor of International Relations and Earth & Environment",
        image: require("../images/speakers/image15.png"),
        bio: AdilNajamBio,
        style: { objectFit: 'cover', paddingTop: '5px' }
    },

];

export const guestsData: Speaker[] = [
    {
        name: "Prof. Dr. BAMBANG BRODJONEGORO",
        position: "Former Finance Minister, Indonesia",
        image: require("../images/speakers/image14.png"),
        bio: BambangBrodjonegoroBio,
    },
    {
        name: "IZABELLA TEIXEIRA",
        position: "Co-chair, UNEP International Resource Panel; Former Brazilian Environment Minister",
        image: require("../images/speakers/image16.png"),
        bio: IzabellaTeixeiraBio,
    },
    {
        name: "SHINOBU YAMAGUCHI",
        position: "Director, United Nations University Institute for the Advanced Study of Sustainability",
        image: require("../images/speakers/image17.png"),
        bio: ShinobuYamaguchiBio,
    },

];