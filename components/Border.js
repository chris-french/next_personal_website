import React from 'react';

const Border = ({
  borderColor = 'border-alt-light',
  borderWidth = 'border',
  borderStyle = 'border-solid',
  borderRadius = 'rounded',
  shadow = 'shadow',
  className,
  children,
  ...otherProps
}) => {
  return (
    <div
      className={`${borderColor} ${borderWidth} ${borderStyle} ${borderRadius} ${shadow} ${className}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Border;
