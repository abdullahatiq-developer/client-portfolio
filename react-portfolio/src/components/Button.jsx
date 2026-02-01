import React from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', onClick, href, className = '' }) => {
  const classes = `${styles.btn} ${styles[variant]} ${className}`;

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {href ? (
        <a href={href} className={classes} onClick={onClick}>
          {children}
        </a>
      ) : (
        <button className={classes} onClick={onClick}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return buttonContent;
};

export default Button;
