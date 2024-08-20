import React from 'react';
import { cx } from '@emotion/css';
import { styles } from './Input.styles';

interface InputProps {
    id?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'standard' | 'outlined';
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
    testId?: string;
}

const Input: React.FC<InputProps> = ({
    id,
    name,
    value,
    placeholder,
    size = 'medium',
    variant = 'standard',
    onChange,
    className,
    testId,
}) => {
    const inputStyles = styles.input(size, variant);

    return (
        <input
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={cx(inputStyles, className)}
            data-testid={testId}
        />
    );
};

export default Input;
