import React, { useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchingCombobox.module.css';
const SearchingCombobox = ({ items = [], placeholder = 'Seaching...', title = 'Search', className }) => {
    const [icon, setIcon] = useState(faChevronDown);
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
            <button
                type="button"
                className={clsx(styles['combobox-btn'], className)}
                onClick={() => {
                    setIcon((prev) => (prev = prev === faChevronDown ? faChevronUp : faChevronDown));
                }}
            >
                {title}
                <FontAwesomeIcon icon={icon} />
            </button>
        </Tippy>
    );
};

export default SearchingCombobox;
