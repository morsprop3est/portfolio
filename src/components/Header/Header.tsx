'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Header.module.scss';
import Sidebar from '@/components/Sidebar/Sidebar';

const lineVariants = {
    closed: { opacity: 1, x: 0 },
    open: { opacity: 0, x: -20 },
    line2Closed: { opacity: 1, x: 0 },
    line2Open: { opacity: 0, x: -20}
};

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <motion.div
                    className={styles.logo}
                    initial={{ rotate: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{type: 'spring', stiffness: 400, damping: 15 }}
                >
                    {/* Image component is not needed here if you use background-image */}
                </motion.div>
                <motion.div
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.div
                        className={styles.line1}
                        variants={lineVariants}
                        animate={isMenuOpen ? 'open' : 'closed'}
                        transition={{ duration: 0.3, delay: 0.1, type: 'spring', stiffness: 300, damping: 20}}
                    />
                    <motion.div
                        className={styles.line2}
                        variants={lineVariants}
                        animate={isMenuOpen ? 'line2Open' : 'line2Closed'}
                        transition={{ duration: 0.2, type: 'spring', stiffness: 400, damping: 15}}
                    />
                    <motion.div
                        className={styles.line3}
                        variants={lineVariants}
                        animate={isMenuOpen ? 'open' : 'closed'}
                        transition={{ duration: 0.3, delay: 0.1, type: 'spring', stiffness: 300, damping: 20}}
                    />
                </motion.div>
            </header>
            <Sidebar isOpen={isMenuOpen} onClose={toggleMenu} />
        </div>
    );
};

export default Header;
