import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import { apiChangeStatusApplied } from '~/services/post';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '~/store/action/post';
import Swal from 'sweetalert2';
import { Combobox } from '.';
import { exportExcel } from '~/utils/exportData';

const ToggleButton = ({ postId, candidateId, applied, onClick }) => {
    const handleChangeStatus = () => {
        Swal.fire({
            icon: 'question',
            title: 'Lưu ý',
            text: 'Bạn có muốn thay đổi trạng thái ứng tuyển của ứng viên này không?',
            showDenyButton: true,
            confirmButtonText: 'Đồng ý',
            denyButtonText: 'Không đồng ý',
        }).then((result) => {
            if (result.isConfirmed) {
                apiChangeStatusApplied(postId, candidateId, !applied).then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thành công!',
                        text: 'Trạng thái ứng tuyển được thay đổi thành công!',
                    });
                    onClick();
                });
            }
        });
    };
    return (
        <button
            className={'p-[4px] rounded-lg font-medium w-[250px] ' + (applied ? 'bg-green-500' : 'bg-gray-400')}
            onClick={handleChangeStatus}
        >
            {applied ? 'Ứng tuyển thành công' : 'Đang ứng tuyển'}
        </button>
    );
};

const CandidatePostModal = ({ id, closeModal, open }) => {
    const { detailPost } = useSelector((state) => state.post);
    const [appliedChange, setAppliedChange] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [open]);

    const exportCandidateExcel = () => {
        alert('fdafdasfdsa');
        exportExcel(detailPost.Candidate, `${detailPost.jobTitle}`, 'Danh sách ứng tuyển');
    };

    useEffect(() => {
        dispatch(getPostById(id));
    }, [appliedChange]);

    if (!open) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 right-0 bottom-0 z-500 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full flex justify-center items-center bg-overlay-70">
            <div className="bg-white rounded-lg shadow dark:bg-gray-700 w-[1400px]">
                <div className=" relative flex items-start justify-between p-[16px] border-b rounded-t-[4px] dark:border-gray-600">
                    <div className="flex w-[700px] items-center">
                        <h3 className="text-[20px] font-semibold text-gray-900 dark:text-white line-clamp-1 w-[58%] border-l-4 border-blue-500">
                            <p className="pl-3"> Chi tiết danh sách ứng tuyển của bài đăng </p>
                        </h3>
                        <button
                            className="bg-green-600 text-white rounded-[8px] border-transparent border-1 flex items-center p-[8px] hover:opacity-80 px-3 w-[35%] justify-center"
                            onClick={() => {
                                exportCandidateExcel();
                            }}
                        >
                            Xuất excel danh sách hiện tại
                        </button>
                    </div>

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
                                <th scope="col" className="px-6 py-4 font-medium w-[10%]">
                                    Kinh nghiệm
                                </th>
                                <th scope="col" className="px-6 py-4 font-medium w-[20%]">
                                    Trình độ chuyên môn
                                </th>
                                <th scope="col" className="px-6 py-4 font-medium w-[15%]">
                                    Các thao tác
                                </th>
                                <th scope="col" className="px-6 py-4 font-medium w-[20%]">
                                    Tình trạng ứng tuyển
                                </th>
                            </tr>
                        </thead>
                        <tbody className="overflow-scroll">
                            {detailPost?.Candidate.map((data, index) => {
                                return (
                                    <tr className="border-b dark:border-neutral-500" key={data?.id}>
                                        <td className="px-6 py-4">{index + 1}</td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <div>
                                                <div to={``} className="uppercase text-[16px] font-medium">
                                                    {data.candidateName}
                                                </div>

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
                                        <td className="px-6 py-4">
                                            <ToggleButton
                                                postId={detailPost?.id}
                                                candidateId={data?.id}
                                                applied={data?.CandidatePost.isApplied}
                                                onClick={() => setAppliedChange(!appliedChange)}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>,
        document.getElementById('portal'),
    );
};

export default CandidatePostModal;
