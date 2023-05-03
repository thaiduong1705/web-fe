import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

const CreatePost = () => {
    return (
        <div className="w-full bg-gray-200 px-[8px] rounded-[4px] h-full">
            <form>
                <p className="font-medium text-[24px]">
                    <FontAwesomeIcon icon={faFileLines} className="mr-[4px]" />
                    Tạo bài tuyển dụng
                </p>
                <span className="w-full h-[5px] block bg-blue-300 my-[8px]"></span>
                Bí quá
                <label htmlFor=""></label>
            </form>
        </div>
    );
};

export default CreatePost;
