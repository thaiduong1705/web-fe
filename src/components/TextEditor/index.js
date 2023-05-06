import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
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
const TextEditor = ({ className }) => {
    const [quill, setQuill] = useState('');
    return (
        <div className={clsx(className)}>
            <ReactQuill
                theme="snow"
                value={quill}
                onChange={setQuill}
                modules={{ toolbar: TOOLBAR_OPTIONS }}
                className={clsx(className)}
            />
            <div>{quill}</div>
        </div>
    );
};

export default TextEditor;
