import React from 'react';

const ReportCard = ({ number = 10, percent = 10, color = '3482F6', content, className, icon }) => {
    return (
        <div
            className={
                'flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md h-[145px] ' + className
            }
        >
            <div className="flex items-center">
                <div
                    className={
                        ` w-[64px] h-[64px] overflow-hidden rounded-[12px] flex items-center justify-center text-black text-[32px] ` +
                        `bg-[#${color}]`
                    }
                >
                    {icon}
                </div>
                <div className="p-[16px] flex flex-col">
                    <p className="block antialiased leading-normal text-[14px] text-[#546e7a]">{content}</p>
                    <h4 className="tracking-normal block antialiased text-[24px] font-semibold leading-snug text-black">
                        {number}
                    </h4>
                </div>
            </div>

            <div className="border-t border-[#ECEFF1] p-[16px]">
                <strong className="text-green-400">+{percent}%</strong>
                &nbsp; hơn tuần trước
            </div>
        </div>
    );
};

export default ReportCard;
