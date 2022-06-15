import { useHMSActions } from '@100mslive/react-sdk';
import { useState } from 'react';
import { Button, Input } from '../components';

export const Join = () => {
  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      hmsActions.join({
        userName: inputValues.name,
        authToken: inputValues.token,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-slate-500 shadow-xl w-96 xl:w-3/12'>
      <form
        className='flex flex-col justify-between gap-4 w-full p-4'
        onSubmit={handleSubmit}
      >
        <h2 className='text-white text-2xl font-bold'>Join Meeting</h2>

        <Input
          value={inputValues?.name}
          onChange={handleInputChange}
          id='name'
          type='text'
          placeholder='Your name'
        />

        <Input
          value={inputValues?.token}
          onChange={handleInputChange}
          id='token'
          type='text'
          placeholder='Auth token'
        />

        <Button type='submit' title='Join' />
      </form>
    </div>
  );
};
