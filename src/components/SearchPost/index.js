import React from 'react';

import {} from '@tippyjs/react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchingCombobox from '../SearchingCombobox';
import styles from './SearchPost.module.css';
function SearchPost() {
    return (
        <div className={clsx(styles['wrapper'])}>
            <div className={clsx(styles['panel'])}>
                <div className={clsx(styles['row-big'])}>
                    <input className={clsx(styles['search-input'])} placeholder="Tên công việc..." />

                    <SearchingCombobox
                        placeholder="Tên vị trí công việc..."
                        icon={<FontAwesomeIcon icon={faSearch} />}
                        title="Tên vị trí"
                    />
                </div>
                <div className={clsx(styles['row-small'])}>
                    <SearchingCombobox
                        placeholder="Tên vị trí công việc..."
                        icon={<FontAwesomeIcon icon={faSearch} />}
                        title="Tên vị trí"
                    />
                    <SearchingCombobox
                        placeholder="Tên vị trí công việc..."
                        icon={<FontAwesomeIcon icon={faSearch} />}
                        title="Tên vị trí"
                    />
                </div>
                <div className={clsx(styles['row-small'])}>
                    <SearchingCombobox
                        placeholder="Tên vị trí công việc..."
                        icon={<FontAwesomeIcon icon={faSearch} />}
                        title="Tên vị trí"
                    />
                    <SearchingCombobox
                        placeholder="Tên vị trí công việc..."
                        icon={<FontAwesomeIcon icon={faSearch} />}
                        title="Tên vị trí"
                    />
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default SearchPost;
