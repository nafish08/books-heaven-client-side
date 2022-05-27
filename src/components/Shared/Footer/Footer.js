import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='row row-cols-1 row-cols-lg-4 row-cols-md-4 py-3 ps-4'>
                <div className="col">
                    <p className='text-left mb-0'>Copyright &copy; || Books Heaven<br />
                        <small className='text-secondary'>All informations are subject to copyright and may not be used without written
                            consent from Books Heaven.</small>
                    </p>
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                    <p className='text-center pt-3 text-uppercase'>Privacy Policy</p>
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                    <p className='text-center pt-3 text-uppercase'>Terms and Conditions</p>
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                    <p className='text-center pt-3 text-uppercase'>Cancellation Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;