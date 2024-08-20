import React from 'react';
import { styles } from './Select.styles';

interface SelectProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
    size?: 'small' | 'medium';
    children: React.ReactNode;
    testId?: string;
}

const Select: React.FC<SelectProps> = ({
    value,
    onChange,
    className,
    size = 'small',
    children,
    testId,
}) => {
    const selectClass = styles.select(size);
    const containerClass = styles.container;

    return (
        <div className={`${containerClass} ${className || ''}`}>
            <select
                value={value}
                onChange={onChange}
                className={selectClass}
                data-testid={testId}
            >
                {children}
            </select>
        </div>
    );
};

export default Select;
