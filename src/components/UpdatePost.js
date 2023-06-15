import React from 'react';
import { useLocation } from 'react-router-dom';
import { CreatePost, CreateCompany, CreateCandidate } from '~/pages/index';

const UpdatePost = () => {
    const location = useLocation();
    return (
        <div>
            {location.state === 'EDIT_CANDIDATE' && <CreateCandidate isEdit={true} />}
            {location.state === 'EDIT_POST' && <CreatePost isEdit={true} />}
            {location.state === 'EDIT_COMPANY' && <CreateCompany isEdit={true} />}
        </div>
    );
};

export default UpdatePost;
