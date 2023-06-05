import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '~/store/action/post';
import Swal from 'sweetalert2';

const CandidatePostModal = ({ id, closeModal, open }) => {
    const { detailPost } = useSelector((state) => state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostById(id));

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [id]);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [open]);

    if (!open) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 right-0 bottom-0 z-500 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full flex justify-center items-center bg-overlay-70">
            <div className="bg-white rounded-lg shadow dark:bg-gray-700 w-[1200px]">
                <div className=" relative flex items-start justify-between p-[16px] border-b rounded-t-[4px] dark:border-gray-600">
                    <h3 className="text-[20px] font-semibold text-gray-900 dark:text-white line-clamp-1 w-[calc(100%-10rem)] border-l-4 border-blue-500">
                        <p className="pl-3"> Chi tiết danh sách ứng tuyển của bài đăng </p>
                    </h3>
                    <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-[20px] p-[6px] ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white absolute top-[16px] right-[16px]"
                        onClick={closeModal}
                    >
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                <div className="p-[24px] space-y-[24px]">
                    <table className="table-auto min-w-full text-left text-[14px] font-light">
                        <thead className="border-b dark:border-neutral-500">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-medium w-[10%]">
                                    STT
                                </th>
                                <th scope="col" className="px-6 py-4 font-medium w-[30%]">
                                    Họ tên
                                </th>
                                <th scope="col" className="px-6 py-4 font-medium w-[20%]">
                                    Kinh nghiệm
                                </th>
                                <th scope="col" className="px-6 py-4 font-medium w-[20%]">
                                    Trình độ chuyên môn
                                </th>
                                <th scope="col" className="px-6 py-4 font-medium w-[30%]">
                                    Các thao tác
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {detailPost?.Candidate.map((data, index) => {
                                return (
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="px-6 py-4">1</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <div>
                                                <Link to={``} className="uppercase text-[16px] font-medium">
                                                    {data.candidateName}
                                                </Link>

                                                <div className="flex line-clamp-1">
                                                    <div className="mr-[4px] max-w-[180px] line-clamp-1">
                                                        <span className="font-medium">Học vấn: </span>
                                                        <span className="">{data.AcademicLevel.academicLevelName}</span>
                                                    </div>
                                                    <span>|</span>
                                                    <div className="ml-[4px] max-w-[180px] line-clamp-1">
                                                        <span className="font-medium">Cấp bậc: </span>
                                                        <span className="">Bind cấp bậc</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">{data.experienceYear} năm</td>
                                        <td className="px-6 py-4">{data.Position.positionName}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-4">
                                                <FontAwesomeIcon
                                                    icon={faPenToSquare}
                                                    className="text-blue-500 text-[16px] underline hover:cursor-pointer hover:text-red-500"
                                                />
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                    className="text-blue-500 text-[16px] underline hover:cursor-pointer hover:text-red-500"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-end p-[24px] space-x-[8px] border-t border-gray-200 rounded-b-[4px] dark:border-gray-600">
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-[14px] px-[20px] py-[10px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={(e) => {}}
                    >
                        Đồng ý
                    </button>
                    <button
                        type="button"
                        className="text-gray-500 bg-white hover:bg-gray-100 outline-none rounded-lg border border-gray-200 text-[14px] px-[20px] py-[10px] font-medium hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        onClick={closeModal}
                    >
                        Huỷ bỏ
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('portal'),
    );
};

export default CandidatePostModal;
