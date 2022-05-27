import React from 'react';
import notfound from '../../../images/404/notfound.gif';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='my-5 not_found container'>
            <img className='w-50 mx-auto d-block vibrate-1' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;