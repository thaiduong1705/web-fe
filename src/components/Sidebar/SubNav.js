import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const SubNav = ({ item }) => {
    const [isOpened, setOpened] = useState(false);
    const showSubNav = () => setOpened(!isOpened);
    return (
        <>
            {item.subNav ? (
                <>
                    <button
                        className="flex items-center gap-5 pl-[16px] pt-[12px] pb-[12px] pr-[16px] rounded-[8px] text-md text-blue-700 font-medium dark:text-gray-200 hover:text-white hover:bg-blue-700 my-2 ml-2 hover:transition-all flex-1 w-[95%]"
                        onClick={item.subNav && showSubNav}
                    >
                        <span className="mr-auto gap-[4px] flex items-center">
                            {item.icon}
                            <span className="capitalize ml-2">{item.title}</span>
                        </span>
                        {item.subNav && (
                            <FontAwesomeIcon
                                icon={isOpened ? faChevronUp : faChevronDown}
                                className="flex items-center"
                            />
                        )}
                    </button>
                    <div
                        className={`flex flex-col w-full transition-all ease-linear ${
                            isOpened ? 'h-fit' : 'h-0 hidden'
                        }`}
                    >
                        {item?.subNav?.map((subItem, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    to={subItem.path}
                                    className={
                                        'pl-[36px] pr-[16px] py-[8px] text-md rounded-[8px] text-blue-500 font-medium dark:text-gray-200 hover:text-white hover:bg-blue-700 m-2 hover:transition-all'
                                    }
                                >
                                    {subItem.title}
                                </NavLink>
                            );
                        })}
                    </div>
                </>
            ) : (
                <NavLink
                    to={item.path}
                    className="flex items-center gap-5 pl-[16px] pt-[12px] pb-[12px] pr-[16px] rounded-[8px] text-md text-blue-600 font-medium dark:text-gray-200 hover:text-white hover:bg-blue-700 my-2 ml-2 hover:transition-all flex-1 w-[95%]"
                    onClick={item.subNav && showSubNav}
                >
                    <span className="mr-auto gap-[4px] flex">
                        {item.icon}
                        <span className="capitalize">{item.title}</span>
                    </span>
                    {item.subNav && <FontAwesomeIcon icon={isOpened ? faChevronUp : faChevronDown} />}
                </NavLink>
            )}
        </>
    );
};

export default SubNav;
