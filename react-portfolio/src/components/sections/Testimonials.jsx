import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import Card3D from '../Card3D';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Saqib's leadership in our guest posting campaigns has significantly boosted our site's authority. His strategic approach and team management skills are exceptional.",
            author: 'Marketing Director at The Link Building House',
        },
        {
            quote: "Saqib's expertise in logistics ensured seamless operations in our warehouse. His attention to detail and problem-solving abilities are unmatched.",
            author: 'Operations Manager at Huawei Consumer Business Group',
        },
        {
            quote: "Working under Saqib's guidance was a game-changer. His ability to mentor and maintain high-quality standards made our SEO projects highly successful.",
            author: 'SEO Specialist',
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
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <section id="testimonials" className={styles.testimonials}>
            <div className="container">
                <SectionHeader
                    title="Testimonials"
                    subtitle="What others say about my work."
                />

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card3D className={`${styles.testimonialCard} glass-card`} intensity={6}>
                                <div className={styles.quoteIcon}>
                                    <i className="bi bi-quote"></i>
                                </div>
                                <p className={styles.quote}>{testimonial.quote}</p>
                                <div className={styles.divider}></div>
                                <p className={styles.author}>{testimonial.author}</p>
                            </Card3D>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
