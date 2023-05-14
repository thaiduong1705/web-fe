import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Dropdown() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div
            className={dropdown ? 'hidden' : 'w-[170px] absolute top-[40px] text-start bg-slate-50 p-3'}
            onClick={() => setDropdown(!dropdown)}
        >
            <ul>
                <li key="" className="flex">
                    <FontAwesomeIcon icon={faRightFromBracket} className="m-2" />
                    <Link className="submenu-item" onClick={() => setDropdown(false)}>
                        Đăng xuất
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Dropdown;
