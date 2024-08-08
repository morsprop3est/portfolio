'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun1 } from 'iconic-react';
import styles from './ThemeToggleButton.module.scss';

const ThemeToggleButton: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleToggle = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={styles.toggleContainer} onClick={handleToggle}>
            <motion.div
                className={styles.toggle}
                key={isDarkMode ? 'moon' : 'sun'}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 0.8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            >
                {isDarkMode ? (
                    <Moon size="25" variant="Bold" />
                ) : (
                    <Sun1 size="25" variant="Bold" />
                )}
            </motion.div>
        </div>
    );
};

export default ThemeToggleButton;
