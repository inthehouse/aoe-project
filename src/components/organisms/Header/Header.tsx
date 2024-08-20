import React from 'react';
import { styles } from './Header.styles';

const Header: React.FC = () => {

    return (
        <div data-testid="header" className={styles.headerBox}>
            AOE Card Game
        </div>
    );
};

export default Header;
