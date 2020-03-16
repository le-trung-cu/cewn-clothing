import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, lablel, ...otherProps}) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps}/>
            {
                lablel?
                (<label className={`${otherProps.value.length? 'shrink':''} form-input-label`}>{lablel}</label>):null
            }
        </div>
    );
};

export default FormInput;