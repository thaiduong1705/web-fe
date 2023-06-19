import React from 'react';

const ReportCard = ({ number = 10, percent = 10, color = '3482F6', content, className, icon }) => {
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
            <div className="p-[16px] text-right">
                <p className="block antialiased leading-normal text-[14px] text-[#546e7a]">
                    Số lượng tuyển dụng hôm nay
                </p>
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
