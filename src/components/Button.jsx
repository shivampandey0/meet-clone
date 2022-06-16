import React from 'react';

export const Button = ({ title, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className='text-white py-2 rounded-md bg-slate-800 font-bold text-lg'
    >
      {title}
    </button>
  );
};
