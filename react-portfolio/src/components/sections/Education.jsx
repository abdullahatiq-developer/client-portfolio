import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import Card3D from '../Card3D';
import styles from './Education.module.css';

const Education = () => {
    const educationData = [
        {
            degree: 'Bachelor in Commerce',
            institution: 'Allama Iqbal Open University, Islamabad, Pakistan',
            description: "Completed a Bachelor's degree in Commerce, focusing on business and management principles.",
        },
        {
            degree: 'Intermediate in Commerce',
            institution: 'BISE Faisalabad',
            description: 'Completed intermediate education with a focus on commerce and foundational business concepts.',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section id="education" className={styles.education}>
            <div className="container">
                <SectionHeader
                    title="Education"
                    subtitle="My Academic Background"
                />

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {educationData.map((edu, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card3D className={`${styles.card} glass-card`}>
                                <div className={styles.iconWrapper}>
                                    <i className="bi bi-mortarboard-fill"></i>
                                </div>
                                <h3>{edu.degree}</h3>
                                <p className={styles.institution}>{edu.institution}</p>
                                <p className={styles.description}>{edu.description}</p>
                            </Card3D>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
