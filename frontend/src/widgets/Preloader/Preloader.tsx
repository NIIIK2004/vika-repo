import { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

const loadingTexts = [
    'Загружаем...',
];

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + (Math.random() * 7 + 3.5);
                return next >= 100 ? 100 : next;
            });

            if (Math.random() > 0.6) {
                setTextIndex((prev) => (prev + 1) % loadingTexts.length);
            }

            if (progress >= 98) {
                setTimeout(() => {
                    const preloaderEl = document.querySelector(`.${styles.preloader}`);
                    if (preloaderEl) {
                        (preloaderEl as HTMLElement).style.opacity = '0';
                    }
                }, 500);
            }
        }, 85);

        return () => clearInterval(interval);
    }, [progress]);

    if (progress >= 100) return null;

    return (
        <>
            <div className="container">
                <div className={styles.preloader}>
                    <div className={styles.progressText}>
                        {Math.floor(progress)}%
                    </div>

                    <p className={styles.loadingText}>
                        {loadingTexts[textIndex]}
                    </p>
                </div>
            </div>
        </>
    );
}