import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './Footer.module.css';

const Footer = () => {
    const socialLinks = [
        { icon: 'bi-facebook', url: 'https://www.facebook.com/share/1AnDKpFf5X/', label: 'Facebook' },
        { icon: 'bi-instagram', url: 'https://www.instagram.com/saqibaslamseomarketing?igsh=MWNnYzgzcTRqZjQ3ZA==', label: 'Instagram' },
        { icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/saqib-aslam-1b07551b8/', label: 'LinkedIn' },
        { icon: 'bi-twitter', url: 'https://x.com/SaqibAs93926331?t=Q7kPIFrbdG_9KcSJtKQM9w&s=08', label: 'Twitter' },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <motion.p
                    className={styles.copyright}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    © 2025 Saqib Aslam. All Rights Reserved.
                </motion.p>

                <motion.div
                    className={styles.socialLinks}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <i className={`bi ${social.icon}`}></i>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
