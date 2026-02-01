import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import styles from './Contact.module.css';

const Contact = () => {
    const contactInfo = [
        {
            icon: 'bi-envelope-fill',
            title: 'Email',
            value: 'yourseoteammarketing@gmail.com',
            link: 'mailto:yourseoteammarketing@gmail.com',
            description: 'Send me an email'
        },
        {
            icon: 'bi-telephone-fill',
            title: 'Phone',
            value: '+92-3237626762',
            link: 'tel:+923237626762',
            description: 'Give me a call'
        },
        {
            icon: 'bi-geo-alt-fill',
            title: 'Location',
            value: 'Pakistan',
            link: 'https://www.google.com/maps/place/Pakistan',
            description: 'View on Google Maps',
            external: true
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <SectionHeader
                    title="Get In Touch"
                    subtitle="Let's connect"
                />

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {contactInfo.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link}
                            target={item.external ? '_blank' : '_self'}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            className={styles.contactCard}
                            variants={cardVariants}
                            whileHover={{ y: -6 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className={styles.icon}>
                                <i className={`bi ${item.icon}`}></i>
                            </div>
                            <h3>{item.title}</h3>
                            <p className={styles.value}>{item.value}</p>
                            <p className={styles.description}>{item.description}</p>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
