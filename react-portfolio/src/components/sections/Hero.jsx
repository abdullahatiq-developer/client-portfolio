import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import styles from './Hero.module.css';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'Off-Page SEO Executive';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.overlay}></div>
            <motion.div
                className={styles.content}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.img
                    src="/profile.png"
                    alt="Saqib Aslam"
                    className={styles.profileImg}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.h1 className={styles.name} variants={itemVariants}>
                    Saqib Aslam
                </motion.h1>
                <motion.p className={styles.subtitle} variants={itemVariants}>
                    {displayText}
                    <span className={styles.cursor}>|</span>
                </motion.p>
                <motion.div className={styles.contactInfo} variants={itemVariants}>
                    <p>
                        <i className="bi bi-envelope"></i>
                        <a href="mailto:yourseoteammarketing@gmail.com">yourseoteammarketing@gmail.com</a>
                    </p>
                    <p>
                        <i className="bi bi-telephone"></i>
                        <a href="tel:+923237626762">+92-3237626762</a>
                    </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <Button href="#about">More About Me</Button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
