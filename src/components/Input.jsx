import React from 'react';

export const Input = ({ id, value, onChange, name, placeholder }) => {
  return (
    <input
      className='w-full py-3 px-6 ring-1 bg-white transition border rounded-md'
      required
      value={value ?? ''}
      onChange={onChange}
      id={id}
      type='text'
      name={name || id}
      placeholder={placeholder}
    />
  );
};
