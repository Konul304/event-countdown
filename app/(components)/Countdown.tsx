'use client';
import React, { useState, useEffect } from 'react';
import styles from '../styles/CountDown.module.scss'

const CountdownTimer = () => {
    // Set the target date to November 16 at 10:00 AM of the current year
    const targetDate = new Date(new Date().getFullYear(), 10, 16, 10, 0, 0); // Months are 0-indexed, so November is 10
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining((prevTime) => {
                const newTimeRemaining = calculateTimeRemaining(targetDate);

                if (newTimeRemaining <= 0) {
                    clearInterval(timerInterval);
                    console.log('Countdown complete!');
                    return 0;
                } else {
                    return newTimeRemaining;
                }
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    function calculateTimeRemaining(targetDate: Date): number {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime(); // Time difference in milliseconds
        return Math.max(0, Math.floor(difference / 1000)); // Convert to seconds, ensure it's not negative
    }

    const days = Math.floor(timeRemaining / 86400); // 86400 seconds in a day
    const hours = Math.floor((timeRemaining % 86400) / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    return (
        <div>
            <div className={styles.countdown_container}>
                <div className={styles.item}>
                    <div>{days}</div>
                    <p>Day</p>
                </div>
                <div className={styles.item}>
                    <div>{hours}</div>
                    <p>Hour</p>
                </div>
                <div className={styles.item}>
                    <div>{minutes}</div>
                    <p>Minute</p>
                </div>
                <div className={styles.item}>
                    <div>{seconds}</div>
                    <p>Second</p>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;