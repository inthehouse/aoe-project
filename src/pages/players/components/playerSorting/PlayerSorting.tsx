import React from 'react';

import { usePlayerStore, SortOrder } from 'store/playerStore';

import Select from 'components/atoms/Select/Select';

const PlayerSorting: React.FC = () => {
    const { sortOrder, setSortOrder } = usePlayerStore();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as SortOrder;
        setSortOrder(value);
    };

    const options = [
        { label: 'Sort By', value: '', disabled: true },
        { label: 'Ascending', value: 'asc', disabled: false },
        { label: 'Descending', value: 'desc', disabled: false },
    ];

    const selectValue = sortOrder === 'none' ? '' : sortOrder;

    return (
        <Select
            value={selectValue}
            onChange={handleChange}
            size="small"
            testId="sorting-select"
        >
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                >
                    {option.label}
                </option>
            ))}
        </Select>
    );
};

export default PlayerSorting;
