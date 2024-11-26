"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from "../styles/MediaPage.module.scss";
import { back, next, previous } from '../../public/images/icons';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import img from "../../public/images/default.png"
import { photos } from "../data/mediaPhotos"
import { Button, Modal } from 'antd';

const MediaPage = () => {
    const router = useRouter();
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
    console.log(modalImageIndex)

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
        }
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const videos = Array(20).fill(img);
    const news = Array(20).fill(img);

    useEffect(() => {
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
            window.removeEventListener("scroll", handleScrollEvent);
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [modalImageIndex]);

    return (
        <>
            <div className={styles.header_container}>
                <div style={{ marginTop: '5px', marginRight: '15px' }} onClick={() => router.push('/')}>{back}</div>
                <div className={styles.items}>
                    <div className={activeSection === 'photos_section' ? `${styles.active} ${styles.section}` : styles.section} onClick={() => handleNavClick('photos_section')} style={{ display: 'flex', alignItems: 'center' }}>Photos</div>
                    <div className={activeSection === 'news_section' ? `${styles.active} ${styles.section}` : styles.section} onClick={() => handleNavClick('news_section')}>News</div>
                    <div className={activeSection === 'videos_section' ? `${styles.active} ${styles.section}` : styles.section} onClick={() => handleNavClick('videos_section')}>Videos</div>
                </div>
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
                                        <Image
                                            onClick={() => handleImageClick(originalIndex)}
                                            key={filteredIndex}
                                            src={photo.src}
                                            width={photo.width}
                                            height={photo.height}
                                            style={{ objectFit: 'cover', border: '1px solid #d9d0d0' }}
                                            alt="photo"
                                        />
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
                            {news.slice(0, visibleNews).map((news, index) => (
                                <Image key={index} src={news} width={300} height={237} alt="photo" />
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
                                <Image key={index} src={video} width={300} height={237} alt="photo" />
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
                    <div>
                        <Image
                            src={photos[modalImageIndex].src}
                            alt="Modal Photo"
                            width={photos[modalImageIndex ? modalImageIndex : 0].width + 700}
                            height={photos[modalImageIndex ? modalImageIndex : 0].height + 400}
                            style={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px', objectFit: 'cover' }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button onClick={handlePreviousImage}>{previous}</Button>
                            <Button onClick={handleNextImage}>{next}</Button>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    )
}

export default MediaPage