'use client';

import React from 'react';
import { useUnit } from 'effector-react';
import { setLang, $lang } from '@/context/lang';
import { AllowedLangs } from '@/constans/lang';
import { motion } from 'framer-motion';
import styles from './LanguageToggle.module.scss';

const LanguageToggle: React.FC = () => {
    const lang = useUnit($lang);

    const handleToggle = () => {
        setLang(lang === AllowedLangs.EN ? AllowedLangs.UA : AllowedLangs.EN);
    };

    return (
        <div className={styles.toggleContainer} onClick={handleToggle}>
            <div className={styles.language}>
                <span className={lang === AllowedLangs.EN ? styles.active : ''}>
                    <motion.span
                        className={styles.background}
                        initial={{ opacity: lang === AllowedLangs.EN ? 1 : 0 }}
                        animate={{ opacity: lang === AllowedLangs.EN ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                    EN
                </span>
                <span className={lang === AllowedLangs.UA ? styles.active : ''}>
                    <motion.span
                        className={styles.background}
                        initial={{ opacity: lang === AllowedLangs.UA ? 1 : 0 }}
                        animate={{ opacity: lang === AllowedLangs.UA ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                    UA
                </span>
            </div>
        </div>
    );
};

export default LanguageToggle;
