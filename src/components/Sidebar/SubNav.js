import React from 'react';
import { Link } from 'react-router-dom';

const SubNav = ({ item }) => {
    return (
        <Link to={item}>
            {item.icon}
            <span>{item.title}</span>
        </Link>
    );
};

export default SubNav;
