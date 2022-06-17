import React from 'react';

export const Button = ({
  title,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className='text-white py-2 rounded-md bg-slate-800 font-bold text-lg'
    >
      {title}
    </button>
  );
};
