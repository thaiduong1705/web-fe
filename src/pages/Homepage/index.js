import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import { Stacked, Pie, SparkLine, Button, JobItem } from '~/components';

import styles from './Homepage.module.css';
const Homepage = () => {
    return (
        <div className="w-auto">
            <div className={clsx(styles['wrapper'])}>
                <div className="flex flex-wrap lg:flex-nowrap justify-center ">
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  rounded-xl lg:w-full w-72 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-bold text-gray-400">Earning</p>
                                <p className="text-2xl">Tiền gì đó ở đây</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Button color="white" bgColor="blue" text="Download" borderRadius="10px" size="md"></Button>
                        </div>
                    </div>
                </div>
                <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                    {[].map((item) => (
                        <div
                            key={item.title}
                            className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
                        >
                            <button
                                type="button"
                                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                            >
                                {item.icon}
                            </button>
                            <p className="mt-3">
                                <span className="text-lg font-semibold">{item.amount}</span>
                                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
                            </p>
                            <p className="text-sm text-gray-400  mt-1">{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className="flex gap-10 flex-warp justify-center">
                    <div className="bg-white dark:text-gray-300 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
                        <div className="flex justify-between">
                            <p className="font-semibold text-4xl">Updates</p>
                            <div className="flex items-center gap-4">
                                <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                                    <FontAwesomeIcon icon={faCircle} />
                                    <span>Expanse</span>
                                </p>
                                <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                                    <FontAwesomeIcon icon={faCircle} />
                                    <span>Expanse</span>
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 flex gap-10 flex-wrap justify-center">
                            <div className="border-r-1 border-color m-4 pr-10">
                                <div>
                                    <p>
                                        <span className="text-3xl font-semibold">dsada</span>
                                        <span className="p-1.5 cursor-pointer rounded-full text-white text-xs bg-green-400 ml-3 ">
                                            dsad
                                        </span>
                                    </p>
                                    <p className="text-gray-500 mt-1">budget</p>
                                </div>
                                <div>
                                    <p>
                                        <span className="text-3xl font-semibold">dsada</span>
                                        <span className="p-1.5 cursor-pointer rounded-full text-white text-xs bg-green-400 ml-3 ">
                                            dsad
                                        </span>
                                    </p>
                                    <p className="text-gray-500 mt-1">expense</p>
                                </div>
                                <div className="mt-5">
                                    <SparkLine
                                        currentColor="blue"
                                        id="line-sparkline"
                                        type="Line"
                                        height="80px"
                                        width="250px"
                                        data={[]}
                                        color="blue"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center">
                    <JobItem
                        job={{ name: 'test', companyName: 'Công ty TNHH TEST', salary: -1, endDate: '24/10/2002' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
