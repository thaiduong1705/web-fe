import React, { useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';

import styles from './SearchingCombobox.module.css';
const SearchingCombobox = ({ items = [], placeholder = 'Seaching...', icon, title = 'Search', className }) => {
    return (
        <Tippy
            render={(attrs) => (
                <div className={clsx(styles['options'], className)} tabIndex="-1" {...attrs}>
                    <input placeholder={placeholder} className={styles['input-combobox']} />
                    <ul className={clsx(styles['list-item'])}>
                        {items.map((item, index) => {
                            return (
                                <li key={index} className="py-2 px-2 hover:bg-gray-200 hover:cursor-pointer">
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
            interactive
            trigger="click"
            placement="bottom-start"
            offset={0}
        >
            <button className={clsx(styles['combobox-btn'], className)}>
                {title}
                {icon}
            </button>
        </Tippy>
    );
};

export default SearchingCombobox;
