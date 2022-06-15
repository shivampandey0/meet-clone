import { Join } from './pages/Join';
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from '@100mslive/react-sdk';
import { useEffect } from 'react';

const App = () => {
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      hmsActions.leave();
    };
  }, [hmsActions]);

  return (
    <main className='w-screen h-screen grid place-items-center bg-gradient-to-b from-gray-900 to-sky-900'>
      <Join />
    </main>
  );
};

export default App;
