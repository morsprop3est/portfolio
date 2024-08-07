'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './MainBackground.module.scss';
import imageUrl from '@/../public/img/main-background-pattern.jpg';

const MainBackground: React.FC = () => {
    return (
        <div className={styles.mainBackground}>
            <motion.div
                className={styles.triangle}
                style={{ backgroundImage: `url(${imageUrl.src})` }}
                initial={{ clipPath: 'polygon(100% 50%, 0 50%, 100% 50%)' }}
                animate={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}
                transition={{
                    type: 'tween',
                    duration: 2,
                    ease: [0.5, 0, 0, 1]
                }}
            />
        </div>
    );
};

export default MainBackground;
