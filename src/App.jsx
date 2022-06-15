import { Join } from './pages/Join';
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from '@100mslive/react-sdk';
import { useEffect } from 'react';
import { Conference } from './pages/Conference';
import { Footer } from './components/Footer';
import { Header } from './components';

const App = () => {
  const hmsActions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) hmsActions.leave();
    };
  }, [hmsActions, isConnected]);

  return (
    <main className='w-screen h-screen flex flex-col p-4 items-center bg-gradient-to-b px-2 from-gray-900 to-sky-900'>
      <Header />
      {isConnected ? (
        <>
          <Conference />
          <Footer />
        </>
      ) : (
        <Join />
      )}
    </main>
  );
};

export default App;
