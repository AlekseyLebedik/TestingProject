import React from "react";
import './Preloader.scss';

const Preloader = (props)=>{

    return(
        <div className='preloader'>
            <div className='preloader__content'>
                <div className='preloader__first'>
                </div>
                <div className='preloader__second'>
                </div>
                <div className='preloader__third'>
                </div>
            </div>
            <h1> Пожалуйста подождите.... </h1>
        </div>
    )   
}

export default Preloader;