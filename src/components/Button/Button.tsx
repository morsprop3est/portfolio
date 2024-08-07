'use client';

import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    variant: 'filled' | 'outlined';
    children: ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
    return (
        <button className={`${styles.button} ${variant === 'filled' ? styles.filled : styles.outlined}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
