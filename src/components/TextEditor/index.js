import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';
import clsx from 'clsx';

import './TextEditor.css';
const TOOLBAR_OPTIONS = [
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ align: [] }],
    ['clean'],
];
const TextEditor = ({ className, onChange, initialValue }) => {
    const [quill, setQuill] = useState(initialValue || '');
    const handleChange = (value) => {
        setQuill((prev) => value);
    };
    useEffect(() => {
        if (quill) onChange(quill);
    }, [quill]);
    return (
        <div className={clsx(className)}>
            <ReactQuill
                theme="snow"
                value={quill}
                onChange={handleChange}
                modules={{ toolbar: TOOLBAR_OPTIONS }}
                className="ql-container overflow-auto"
            />
        </div>
    );
};

export default TextEditor;
