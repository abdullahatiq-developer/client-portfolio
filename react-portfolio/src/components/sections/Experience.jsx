import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import Card3D from '../Card3D';
import styles from './Experience.module.css';

const Experience = () => {
    const experiences = [
        {
            company: 'The Link Building House',
            role: 'Team Lead',
            period: '2016 - Present',
            description: 'Develop and oversee guest posting strategies to boost website visibility. Lead and guide the guest posting team, ensure high-quality content, build relationships with influencers, track performance, train new members, and provide regular reports.',
            icon: 'bi-briefcase-fill',
        },
        {
            company: 'Huawei Consumer Business Group',
            role: 'Logistics Supervisor + Admin Officer',
            period: 'Ongoing',
            description: 'Manage store equipment using Maximo software, handle purchase requests and orders, control inventory, dispatch spares, monitor shipments, upload PODs, manage documentation, conduct stock takes, and ensure warehouse housekeeping.',
            icon: 'bi-box-seam-fill',
        },
        {
            company: 'e2e Supply Chain Management Ltd',
            role: 'Logistics Executive',
            period: 'Mar 2010 - Dec 2016',
            description: 'Tag incoming merchandise, place items on shelves, adhere to pick sheets, prepare shipments, and ensure accurate boxing and padding.',
            icon: 'bi-truck',
        },
        {
            company: 'TNT Express Shipping',
            role: 'Warehouse Executive',
            period: 'Jan 2007 - Aug 2009',
            description: 'Manage manpower attendance, store equipment with Maximo software, raise purchase orders, and receive stock.',
            icon: 'bi-building',
        },
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

    const itemVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section id="experience" className={styles.experience}>
            <div className="container">
                <SectionHeader
                    title="Experience"
                    subtitle="My Professional Journey"
                />

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {experiences.map((exp, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card3D className={`${styles.card} glass-card`}>
                                <div className={styles.iconWrapper}>
                                    <i className={`bi ${exp.icon}`}></i>
                                </div>
                                <h3>{exp.company}</h3>
                                <p className={styles.role}>{exp.role}</p>
                                <p className={styles.period}>{exp.period}</p>
                                <p className={styles.description}>{exp.description}</p>
                            </Card3D>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
