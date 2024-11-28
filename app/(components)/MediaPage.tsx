"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from "../styles/MediaPage.module.scss";
import { back, download_img, media_icon, next, play_icon, previous } from '../../public/images/icons';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import img from "../../public/images/default.png"
import { photos } from "../data/mediaPhotos"
import { Button, Modal } from 'antd';
import { news } from '../data/newsData';
import { videos } from '../data/mediaVideos';

const MediaPage = () => {
    const router = useRouter();
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState('photos_section');
    const [visiblePhotos, setVisiblePhotos] = useState(8);
    const [visibleVideos, setVisibleVideos] = useState(8);
    const [visibleNews, setVisibleNews] = useState(8);
    const photosRef = useRef<HTMLDivElement>(null);
    const videosRef = useRef<HTMLDivElement>(null);
    const newsRef = useRef<HTMLDivElement>(null);
    const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);

    const handleScroll = () => {
        // Update the active section based on section positions
        if (photosRef.current && photosRef.current.getBoundingClientRect().top <= 150) {
            setActiveSection('photos_section');
        } else if (videosRef.current && videosRef.current.getBoundingClientRect().top <= 150) {
            setActiveSection('videos_section');
        } else if (newsRef.current && newsRef.current.getBoundingClientRect().top <= 150) {
            setActiveSection('news_section');
        }
    };

    const handleNavClick = (section: any) => {
        setActiveSection(section);

        let offset = -100; // Adjust this offset as needed

        // Scroll to the section with an offset
        if (section === 'photos_section' && photosRef.current) {
            window.scrollTo({
                top: photosRef.current.offsetTop + offset,
                behavior: 'smooth'
            });
        } else if (section === 'videos_section' && videosRef.current) {
            window.scrollTo({
                top: videosRef.current.offsetTop + offset,
                behavior: 'smooth'
            });
        } else if (section === 'news_section' && newsRef.current) {
            window.scrollTo({
                top: newsRef.current.offsetTop + offset,
                behavior: 'smooth'
            });
        }
    }


    const handleLoadMorePhotos = () => {
        setVisiblePhotos((prevCount) => prevCount + 8);
    };

    const handleLoadMoreVideos = () => {
        setVisibleVideos((prevCount) => prevCount + 8);
    };

    const handleLoadMoreNews = () => {
        setVisibleNews((prevCount) => prevCount + 8);
    };

    const handleImageClick = (originalIndex: number) => {
        setModalImageIndex(originalIndex);
    };

    const closeModal = () => {
        setModalImageIndex(null);
    };

    const handlePreviousImage = () => {
        setModalImageIndex((prevIndex) => (prevIndex! > 0 ? prevIndex! - 1 : photos.length - 1));
    };

    const handleNextImage = () => {
        setModalImageIndex((prevIndex) => (prevIndex! < photos.length - 1 ? prevIndex! + 1 : 0));
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
        }
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth <= 900);
            window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 900));
            window.addEventListener('scroll', handleScroll);
        }
        const handleScrollEvent = () => {
            if (typeof window !== "undefined") {
                handleScroll();
            }
        };

        const handleKeyPress = (event: KeyboardEvent) => {
            if (modalImageIndex !== null) { // Only handle arrow keys when modal is open
                if (event.key === "ArrowLeft") {
                    handlePreviousImage();
                } else if (event.key === "ArrowRight") {
                    handleNextImage();
                }
            }
        };

        // Adding event listeners for both scroll and key press events
        window.addEventListener("scroll", handleScrollEvent);
        window.addEventListener("keydown", handleKeyPress);

        // Cleanup function to remove both event listeners
        return () => {
            window.removeEventListener('resize', () => setIsMobile(window.innerWidth <= 900));
            window.removeEventListener("scroll", handleScrollEvent);
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [modalImageIndex]);

    return (
        <>
            <div className={styles.header_container}>
                <div style={{ marginTop: '5px', marginRight: '15px' }} onClick={() => router.push('/')}>{back}</div>
                {isMobile ? (
                    <div className={styles.burgerIcon} onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}>
                        &#9776; {/* Burger icon */}
                    </div>
                ) : (
                    <div className={styles.items}>
                        <div className={activeSection === 'photos_section' ? `${styles.active} ${styles.section}` : styles.section} onClick={() => handleNavClick('photos_section')} style={{ display: 'flex', alignItems: 'center' }}>Photos</div>
                        <div className={activeSection === 'news_section' ? `${styles.active} ${styles.section}` : styles.section} onClick={() => handleNavClick('news_section')}>News</div>
                        <div className={activeSection === 'videos_section' ? `${styles.active} ${styles.section}` : styles.section} onClick={() => handleNavClick('videos_section')}>Videos</div>
                    </div>)}
                {isBurgerMenuOpen && (
                    <ul className={styles.burgerMenu}>
                        <li onClick={() => handleNavClick('photos_section')}>Photos</li>
                        <li onClick={() => handleNavClick('news_section')}>News</li>
                        <li onClick={() => handleNavClick('videos_section')}>Videos</li>
                    </ul>
                )}
            </div >
            <div className={styles.content}>
                <div ref={photosRef}>
                    <div className={styles.title}>Photos</div>
                    <div className={styles.photos_container}>
                        <div className={styles.photos}>
                            {photos
                                .filter(photo => !photo.hidden)
                                .slice(0, visiblePhotos)
                                .map((photo, filteredIndex) => {
                                    const originalIndex = photos.findIndex(p => p.src === photo.src); // Get index from the original array
                                    return (
                                        <div className='photo' key={filteredIndex}>
                                            <Image
                                                onClick={() => handleImageClick(originalIndex)}
                                                key={filteredIndex}
                                                src={photo.src}
                                                width={photo.width}
                                                height={photo.height}
                                                style={{ objectFit: 'cover', border: '1px solid #d9d0d0', cursor: 'pointer' }}
                                                alt="photo"
                                            />
                                        </div>
                                    );
                                })}
                        </div>
                        {visiblePhotos < photos.length && (
                            <div className={styles.load_more} onClick={handleLoadMorePhotos}>
                                Load more
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.news_container} ref={newsRef}>
                    <div className={styles.title}>News</div>
                    <div className={styles.photos_container}>
                        <div className={styles.photos}>
                            {news?.slice(0, visibleNews).map((news, index) => (
                                <div className={styles.card} key={index}>
                                    <Image
                                        src={news?.imgsrc}
                                        // src={img}
                                        alt="Card cover"
                                        width={296}
                                        height={182}
                                    />
                                    <div className={styles.card_content}>
                                        <div>
                                            <div className={styles.card_title}>
                                                {news?.title}
                                            </div>
                                            <div className={styles.card_description}>
                                                {news?.description}
                                            </div>

                                        </div>
                                        <div className={styles.card_footer} >
                                            <div
                                                style={{ display: 'flex', gap: '3px', alignItems: 'center' }}
                                            >
                                                <div className={styles.footer_icon}>{media_icon}</div>
                                                <span className={styles.card_date}>{news?.source}</span>
                                            </div>
                                            <button className={styles.more_button} onClick={() => window.open(news?.link, '_blank')}>
                                                Read more
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {visibleNews < news.length && (
                            <div className={styles.load_more} onClick={handleLoadMoreNews}>
                                Load more
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.videos_container} ref={videosRef}>
                    <div className={styles.title}>Videos</div>
                    <div className={styles.photos_container}>
                        <div className={styles.photos}>
                            {videos.slice(0, visibleVideos).map((video, index) => (
                                <div key={index}>
                                    <div onClick={() => window.open(video?.link, '_blank')} style={{ cursor: 'pointer' }} className={styles.play_icon}>{play_icon}</div>
                                    <Image onClick={() => window.open(video?.link, '_blank')} style={{ width: '305px', height: '166px', cursor: 'pointer' }} key={index} src={video?.imgSrc} width={300} height={237} alt="photo" />
                                    <div className={styles.video_title}>{video?.title}</div>
                                </div>
                            ))}
                        </div>
                        {visibleVideos < videos.length && (
                            <div className={styles.load_more} onClick={handleLoadMoreVideos}>
                                Load more
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Modal
                open={modalImageIndex !== null}
                onCancel={closeModal}
                footer={null}
                centered
                width={photos[modalImageIndex ? modalImageIndex : 0].width + 700}
                height={photos[modalImageIndex ? modalImageIndex : 0].height + 400}
            >
                {modalImageIndex !== null && (
                    <div >
                        <Image
                            src={photos[modalImageIndex].src}
                            alt="Modal Photo"
                            width={photos[modalImageIndex ? modalImageIndex : 0].width + 700}
                            height={photos[modalImageIndex ? modalImageIndex : 0].height + 400}
                            style={{ position: 'relative', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', objectFit: 'cover' }}
                        />
                        <Button
                            style={{ position: 'absolute', right: '54px', top: '-6px' }}
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = photos[modalImageIndex!].src;
                                link.download = `photo-${modalImageIndex! + 1}.jpg`; // You can customize the file name
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            {download_img}
                        </Button>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button className='prevBtn' onClick={handlePreviousImage}>{previous}</Button>
                            <Button className='nextBtn' onClick={handleNextImage}>{next}</Button>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    )
}

export default MediaPage