import React from 'react';
import { useLocation } from 'react-router-dom';
import { CreatePost } from '~/pages/index';
const UpdatePost = () => {
    const location = useLocation();
    console.log(location.state);
    return (
        <div>
            <CreatePost isEdit={true} />
        </div>
    );
};

export default UpdatePost;
