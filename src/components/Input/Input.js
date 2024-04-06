import React from 'react';
import './Input.css';

const Input = ({ type, placeholder, value, onChange, ...rest }) => {
  return (
    <div>
      <input
        type={type}
        className="custom-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default Input;
