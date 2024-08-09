'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/hooks/useLang';
import Link from 'next/link';

import LanguageToggle from '@/components/LanguageToggle/LanguageToggle';
import ThemeToggleButton from '@/components/ThemeToggleButton/ThemeToggleButton';
import Button from '@/components/Button/Button';

import styles from './Sidebar.module.scss';

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
    const { lang, translations } = useLang();

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
                        <li><Link href="/">{translations[lang].home.sidebar.home}</Link></li>
                        <li><Link href="/about">{translations[lang].home.sidebar.about}</Link></li>
                        <li><Link href="/resume">{translations[lang].home.sidebar.resume}</Link></li>
                        <li><Link href="/portfolio">{translations[lang].home.sidebar.portfolio}</Link></li>
                        <li><Link href="/contact">{translations[lang].home.sidebar.contact}</Link></li>
                    </ul>
                    <Button variant="filled">
                        <span>{translations[lang].home.sidebar.button}</span>
                    </Button>
                </nav>
                <div className={styles.footer}>
                    <ThemeToggleButton />
                    <LanguageToggle />
                </div>
            </motion.div>
        </div>
    );
};

export default Sidebar;
