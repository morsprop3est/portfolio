'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Sidebar.module.scss';

import Button from '@/components/Button/Button';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '100%' }
};

const overlayVariants = {
    open: { opacity: 1, pointerEvents: 'auto' },
    closed: { opacity: 0, pointerEvents: 'none' }
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    return (
        <div className={styles.wrapper}>
            <motion.div
                className={styles.overlay}
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                variants={overlayVariants}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                onClick={onClose}
            />
            <motion.div
                className={styles.sidebar}
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                variants={sidebarVariants}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <nav className={styles.nav}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About me</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <Button variant="filled">
                        <span>Hire me</span>
                    </Button>
                </nav>
            </motion.div>
        </div>
    );
};

export default Sidebar;
