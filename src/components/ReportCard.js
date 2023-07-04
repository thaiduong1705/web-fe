import React from 'react';

const ReportCard = ({ number, percent = 10, color = '3482F6', content, className, icon }) => {
    return (
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-[370px] h-[145px]">
            <div
                className={
                    `absolute w-[64px] h-[64px] top-[-16px] left-[16px] overflow-hidden rounded-[12px] flex items-center justify-center text-white ` +
                    `bg-[#${color}]`
                }
            >
                icon
            </div>
            <div className="bg-clip-border mx-6 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-[64px] w-[64px] place-items-center">
                {icon}
            </div>
            <div className="p-[16px] text-right">
                <p className="block antialiased leading-normal text-[14px] text-[#546e7a]">{content}</p>
                <h4 className="tracking-normal block antialiased text-[24px] font-semibold leading-snug text-black">
                    {number}
                </h4>
            </div>
            <div className="border-t border-[#ECEFF1] p-[16px]">
                <strong className="text-green-400">+{percent}%</strong>
                &nbsp; hơn tháng trước
            </div>
        </div>
    );
};

export default ReportCard;
