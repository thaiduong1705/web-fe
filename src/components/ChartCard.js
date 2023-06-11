import React from 'react';
const ChartCard = ({ children, fromColor = 'from-blue-700', toColor = 'to-blue-400', context }) => {
    return (
        <div className="relative flex flex-col rounded-[12px] bg-white text-gray-700 shadow-md">
            <div className="p-[24px]">
                <div className="mx-4 rounded-xl h-[200px]">
                    <div
                        className={
                            'absolute top-[-32px] left-1/2 transform -translate-x-1/2 w-[460px] h-[230px] bg-gradient-to-tr  text-white shadow-blue-500/40 shadow-lg rounded-xl ' +
                            fromColor +
                            ' ' +
                            toColor
                        }
                    >
                        {children}
                    </div>
                </div>
                <h6 className="block antialiased tracking-normal text-[16px] font-semibold leading-relaxed text-[#263238]">
                    {context}
                </h6>
            </div>
        </div>
    );
};

export default ChartCard;
