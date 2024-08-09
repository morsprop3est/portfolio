'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Button from '@/components/Button/Button';
import SocialNetworkButton from '@/components/SocialNetworkButton/SocialNetworkButton';

import { TableDocument } from 'iconic-react';
import styles from './WelcomeSection.module.scss';

const WelcomeSection: React.FC = () => {
    // Создание массива символов для анимации печати
    const text = "Hi, I'm Mykola!";
    const textArray = text.split('');

    // Определение вариантов анимации для текста
    const letterAnimation = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                duration: 0.1,
                delay: i * 0.05,
            },
        }),
    };

    // Определение вариантов анимации для элементов
    const itemAnimation = {
        hidden: { opacity: 0, x: 100 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                delay: i * 1,
            },
        }),
    };

    return (
        <div className={styles.container}>
            <motion.div
                className={styles.welcomeWrapper}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {},
                }}
            >
                <motion.h2 custom={0} variants={itemAnimation}>
                    Software Developer
                </motion.h2>
                <motion.h1 custom={1} variants={itemAnimation}>
                    {textArray.map((letter, index) => (
                        <motion.span
                            key={index}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={letterAnimation}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p custom={2} variants={itemAnimation}>
                    I want to help you bring your ideas to life, whether it&apos;s a website or video project.
                </motion.p>
                <motion.h2 custom={3} variants={itemAnimation}>
                    Currently studying in <Link href="/university">university</Link>. Ready to work.
                </motion.h2>
                <motion.div custom={4} className={styles.buttonWrapper} variants={itemAnimation}>
                    <Button variant="outlined">
                        Download CV <TableDocument />
                    </Button>
                    <div className={styles.socialButtons}>
                        <SocialNetworkButton platform="facebook" />
                        <SocialNetworkButton platform="twitter" />
                        <SocialNetworkButton platform="linkedin" />
                        <SocialNetworkButton platform="github" />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default WelcomeSection;
