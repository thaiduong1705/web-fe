import React from 'react';
import { CreatePost } from '~/pages/index';
const UpdatePost = ({ setIsEdit }) => {
    return (
        <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-overlay-70 h-screen overflow-y-auto flex justify-center"
            onClick={(e) => {
                e.stopPropagation();
                setIsEdit(false);
            }}
        >
            <div className="w-[1660px] overflow-y-auto bg-white" onClick={(e) => e.stopPropagation()}>
                <CreatePost isEdit={true} setIsEdit={setIsEdit} />
            </div>
        </div>
    );
};

export default UpdatePost;
