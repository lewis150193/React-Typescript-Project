
import React from 'react';
import {TextInputProps} from "./types";

export const TextBox = ({ onChange, name, value, className, placeHolder}: TextInputProps) => (
        <input className={className} type='input' onChange={onChange} name={name}  value={value} placeholder={placeHolder}/>
    );

