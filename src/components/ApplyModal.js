import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Combobox } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { getCandidates, setAllCandidatesNull } from '~/store/action/candidate';
import { apiApplyPost } from '~/services/post';
import Swal from 'sweetalert2';

const ApplyModal = ({ post, closeModal, open }) => {
    const { allCandidates } = useSelector((state) => state.candidate);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCandidates());

        return () => {
            dispatch(setAllCandidatesNull());
            document.body.style.overflow = 'unset';
        };
    }, []);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [open]);

    const [selectedCandidate, setSelectedCandidate] = useState();
    const handleChangeSelected = (value) => {
        setSelectedCandidate(value);
    };

    const handleSubmit = async () => {
        const response = await apiApplyPost({
            postId: post.id,
            candidateId: selectedCandidate.id,
        });
        if (!response) {
            Swal.fire({
                icon: 'error',
                title: 'Opps...',
                text: 'Đã có lỗi xảy ra!',
            });
        }

        if (response && response.data.err === 1) {
            Swal.fire({
                icon: 'info',
                title: 'Thông báo',
                text: response.data.msg,
            });
        }
        if (response && response.data.err === 0) {
            Swal.fire({
                icon: 'success',
                title: 'Thông báo',
                text: response.data.msg,
            }).then(() => {
                closeModal();
            });
        }
    };

    if (!open) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 right-0 bottom-0 z-500 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full flex justify-center items-center bg-overlay-70">
            <div className="bg-white rounded-lg shadow dark:bg-gray-700 w-[700px]">
                <div className=" relative flex items-start justify-between p-[16px] border-b rounded-t-[4px] dark:border-gray-600">
                    <h3 className="text-[20px] font-semibold text-gray-900 dark:text-white line-clamp-1 w-[calc(100%-10rem)] border-l-4 border-blue-500">
                        <p className="pl-3"> Ứng tuyển: {post?.jobTitle}</p>
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
                    <div className="flex justify-between items-center gap-[32px]">
                        <p className="font-medium">Ứng viên: </p>
                        <Combobox
                            className="h-[30px] w-[480px] border"
                            title="Tên ứng viên"
                            isSearchable
                            needTilte
                            items={allCandidates?.map((c) => {
                                return { id: c.id, value: c.candidateName, ...c };
                            })}
                            onChange={handleChangeSelected}
                        />
                    </div>
                    <div className="border-2 rounded-[8px] border-blue-500 bg-blue-50 grid grid-rows-3 grid-flow-col gap-[16px] p-[12px]">
                        <div className="flex">
                            <p className="font-semibold text-blue-500">Tên ứng viên: </p>
                            <p className="pl-2">{selectedCandidate?.candidateName}</p>
                        </div>
                        <div className="flex">
                            <p className="font-semibold text-blue-500">Email: </p>
                            <p className="pl-2">{selectedCandidate?.email}</p>
                        </div>
                        <div className="flex">
                            <p className="font-semibold text-blue-500">Địa chỉ: </p>
                            <p className="pl-2">{selectedCandidate?.homeAddress}</p>
                        </div>
                        <div className="flex">
                            <p className="font-semibold text-blue-500">Điện thoại: </p>
                            <p className="pl-2">{selectedCandidate?.phoneNumber}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end p-[24px] space-x-[8px] border-t border-gray-200 rounded-b-[4px] dark:border-gray-600">
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-[14px] px-[20px] py-[10px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={(e) => {
                            handleSubmit();
                        }}
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

export default ApplyModal;
