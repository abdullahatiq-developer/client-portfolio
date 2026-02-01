import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import Card from '../Card';
import Card3D from '../Card3D';
import styles from './About.module.css';

const About = () => {
    const seoSkills = [
        { icon: 'bi-people-fill', name: 'Team Leadership' },
        { icon: 'bi-link-45deg', name: 'Guest Posting' },
        { icon: 'bi-diagram-3-fill', name: 'Link Building' },
        { icon: 'bi-patch-check-fill', name: 'Quality Assurance' },
        { icon: 'bi-handshake-fill', name: 'Influencer Relations' },
        { icon: 'bi-graph-up-arrow', name: 'Performance Tracking' },
    ];

    const logisticsSkills = [
        { icon: 'bi-building', name: 'Inventory Management' },
        { icon: 'bi-truck', name: 'Shipment Handling' },
        { icon: 'bi-file-earmark-text', name: 'Documentation' },
        { icon: 'bi-clipboard-check', name: 'Stock Takes' },
    ];

    const otherSkills = [
        { icon: 'bi-puzzle-fill', name: 'Problem Solving' },
        { icon: 'bi-headset', name: 'Client Support' },
        { icon: 'bi-tools', name: 'Troubleshooting' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <SectionHeader
                    title="About Me"
                    subtitle="Get to know me."
                />

                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className={styles.quote}>
                        "Leading guest posting with expertise and strategy."
                    </p>
                    <p>
                        I am Saqib Aslam, a dedicated Off-Page SEO Executive with extensive experience in crafting effective guest
                        posting strategies. I specialize in team leadership, ensuring high-quality content, and fostering influencer
                        relationships to enhance online visibility.
                    </p>
                    <p>
                        My background in logistics and administration equips me with strong problem-solving skills, efficient
                        inventory management, and strategic oversight to drive organizational success.
                    </p>
                    <p className={styles.info}>
                        <strong>DOB:</strong> 9th April 1990 | <strong>Marital Status:</strong> Married
                    </p>
                </motion.div>

                <div className={styles.skillsCategory}>
                    <h3>SEO Skills</h3>
                    <motion.div
                        className={styles.skillsGrid}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {seoSkills.map((skill, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card3D className={`${styles.skillItem} glass-card`} intensity={8}>
                                    <i className={`bi ${skill.icon}`}></i>
                                    <span>{skill.name}</span>
                                </Card3D>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className={styles.skillsCategory}>
                    <h3>Logistics Skills</h3>
                    <motion.div
                        className={styles.skillsGrid}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {logisticsSkills.map((skill, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card3D className={`${styles.skillItem} glass-card`} intensity={8}>
                                    <i className={`bi ${skill.icon}`}></i>
                                    <span>{skill.name}</span>
                                </Card3D>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className={styles.skillsCategory}>
                    <h3>Other Skills</h3>
                    <motion.div
                        className={styles.skillsGrid}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {otherSkills.map((skill, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card3D className={`${styles.skillItem} glass-card`} intensity={8}>
                                    <i className={`bi ${skill.icon}`}></i>
                                    <span>{skill.name}</span>
                                </Card3D>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
