import React from 'react';
import styles from "../styles/SpeakersSection.module.scss"
import Image from 'next/image';
import { Popover } from 'antd';
import { guestsData, speakersData } from '../data/speakersData';

const speakers = speakersData


const SpeakersSection = () => (
    <div className={styles.speakers_container}>
        <div className={styles.speakers_header}>Speakers</div>
        <div className={styles.speakers}>
            {speakers.map((speaker, index) => (
                <Popover key={index} placement="right" content={speaker.bio}>
                    <div className={styles.speaker}>
                        <div className={styles.image}>
                            <a className={styles.link} href="#" target='_blank'>
                                <Image style={speaker.style} className={styles.img} src={speaker.image} alt='speaker' width={115} height={115} />
                            </a>
                        </div>
                        <div className={styles.name}>{speaker.name}</div>
                        <div className={styles.position}>{speaker.position}</div>
                    </div>
                </Popover>
            ))}
        </div>
        <div className={styles.speakers_header} style={{marginTop:'5%'}}>Guests</div>
        <div className={styles.speakers}>
            {guestsData.map((speaker, index) => (
                <Popover key={index} placement="right" content={speaker.bio}>
                    <div className={styles.speaker}>
                        <div className={styles.image}>
                            <a className={styles.link} href="#" target='_blank'>
                                <Image style={speaker.style} className={styles.img} src={speaker.image} alt='speaker' width={115} height={115} />
                            </a>
                        </div>
                        <div className={styles.name}>{speaker.name}</div>
                        <div className={styles.position}>{speaker.position}</div>
                    </div>
                </Popover>
            ))}
        </div>
    </div>
)

export default SpeakersSection