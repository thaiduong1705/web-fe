import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faClose } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchingCombobox.module.css';
const SearchingCombobox = ({
    items = [],
    title = 'Search',
    className,
    onChange,
    isMulti = false,
    isSearchable = false,
    needTilte = false,
    initialValue,
}) => {
    const [showMenu, setshowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null);
    const [searchValue, setSearchValue] = useState('');
    const searchRef = useRef();
    const inputRef = useRef();
    useEffect(() => {
        if (initialValue) {
            if (isMulti) {
                const selectedItems = items.filter((item) => initialValue.includes(item.id));
                if (selectedItems.length > 0) {
                    setSelectedValue(selectedItems);
                }
            } else {
                const selectedItem = items.find((item) => item.id === initialValue);
                if (selectedItem) {
                    setSelectedValue(selectedItem);
                }
            }
        }
    }, []);
    useEffect(() => {
        setSearchValue('');
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);

    useEffect(() => {
        const handler = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                console.log('go');
                setshowMenu(false);
            }
        };
        window.addEventListener('click', handler);
        window.addEventListener('scroll', handler);
        return () => {
            window.removeEventListener('click', handler);
            window.removeEventListener('scroll', handler);
        };
    });

    const removeOption = (option) => {
        return selectedValue.filter((o) => o.value !== option.value);
    };
    const onTagRemove = (e, values) => {
        e.stopPropagation();
        const newValues = removeOption(values);
        setSelectedValue(newValues);
        onChange(newValues);
    };
    const getDisplay = () => {
        if (!selectedValue || selectedValue.length === 0) {
            if (isMulti) return title;
            return needTilte && (title || items[0]?.value);
        }
        if (isMulti) {
            return (
                <div className={clsx(styles['dropdown-tags'])}>
                    {selectedValue.map((option, index) => (
                        <div key={index} className={clsx(styles['dropdown-tag-item'])}>
                            {option.value}
                            <span
                                onClick={(e) => onTagRemove(e, option)}
                                className={clsx(styles['dropdown-tag-close'])}
                            >
                                <FontAwesomeIcon icon={faClose} />
                            </span>
                        </div>
                    ))}
                </div>
            );
        }
        return selectedValue.value;
    };

    const onItemClick = (option) => {
        let newValue;
        if (isMulti) {
            if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
                newValue = removeOption(option);
            } else {
                newValue = [...selectedValue, option];
            }
        } else {
            newValue = option;
        }
        setSelectedValue(newValue);
        onChange(newValue);
    };

    const isSelected = (option) => {
        if (!selectedValue) {
            return false;
        }
        return selectedValue.value === option.value;
    };

    const onSearch = (e) => {
        setSearchValue(e.target.value);
    };
    const getOptions = () => {
        if (!searchValue) {
            return items;
        }
        return items.filter((item) => item.value.toLowerCase().indexOf(searchValue.toLowerCase()) === 0);
    };

    const handleInputCLick = (e) => {
        setshowMenu((prev) => !prev);
    };
    return (
        <div className={clsx(styles['dropdown-container'], className)}>
            <div className={clsx(styles['dropdown-input'])} onClick={handleInputCLick} ref={inputRef}>
                <div className={clsx(styles['dropdown-selected-value'])}>{getDisplay()}</div>
                <div className={clsx(styles['dropdown-tools'])}>
                    <div className={clsx(styles['dropdown-tool'])}>
                        <FontAwesomeIcon icon={showMenu ? faChevronUp : faChevronDown} />
                    </div>
                </div>
            </div>
            {showMenu && (
                <div className={clsx(styles['dropdown-menu'])}>
                    {isSearchable && (
                        <div className={clsx(styles['search-box'])}>
                            <input
                                onChange={onSearch}
                                value={searchValue}
                                ref={searchRef}
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            />
                        </div>
                    )}

                    {getOptions().map((item, index) => (
                        <div
                            key={index}
                            className={clsx(styles['dropdown-item'], { [styles['selected']]: isSelected(item) })}
                            onClick={() => onItemClick(item)}
                        >
                            {item.value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchingCombobox;
