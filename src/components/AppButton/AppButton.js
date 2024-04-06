import React from 'react';
import './AppButton.css';

const AppButton = ({
  type,
  onClick,
  title,
  backgroundColor,
  width,
  style,
  ...rest
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || '#007bff',
    width: width || 'auto',
    ...style,
  };

  return (
    <button
      type={type}
      className="custom-button"
      style={buttonStyle}
      onClick={onClick}
      {...rest}
    >
      {title}
    </button>
  );
};

export default AppButton;
