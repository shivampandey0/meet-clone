import { useHMSActions } from '@100mslive/react-sdk';
import { useEffect, useState } from 'react';
import { Button, Input } from '../components';

export const Join = () => {
  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({});
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    setLoading(true);
    fetch('/api/app_token')
      .then((res) => res.json())
      .then((data) => {
        setInputValues((prev) => ({ ...prev, ...data }));
      })
      .finally(setLoading(false));
  }, []);

  const handleGuestLogin = () => {
    try {
      hmsActions.join({
        userName: inputValues.name || 'Guest',
        authToken: inputValues.token || process.env.REACT_APP_GUEST_AUTH,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-80 xl:w-3/12 h-full flex flex-col justify-center'>
      <div className='rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-slate-500 shadow-xl h-fit '>
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
          <div className='flex justify-center items-center'>
            <div className='flex-grow border-t border-white-400'></div>
            <h3 className='text-center text-white px-1'>Or</h3>
            <div className='flex-grow border-t border-white-400'></div>
          </div>
          <Button
            disabled={loading}
            onClick={handleGuestLogin}
            title='Join as Guest'
          />
        </form>
      </div>
    </div>
  );
};
