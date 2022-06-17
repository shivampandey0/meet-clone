import { Join } from './pages/Join';
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from '@100mslive/react-sdk';
import { useEffect, useState } from 'react';
import { Conference } from './pages/Conference';
import { Footer } from './components/Footer';
import { Header } from './components';

const App = () => {
  const hmsActions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const [sessionInfo, setSessionInfo] = useState();

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) hmsActions.leave();
    };
    if (isConnected) {
      fetch('/api/session')
        .then((res) => res.json())
        .then((data) =>
          fetch(
            'https://api.100ms.live/v2/sessions?room_id=629dc724b873787aa270296b&active=true',
            {
              headers: {
                Authorization: `Bearer ${data.token}`,
              },
            }
          )
            .then((res) => res.json())
            .then((data) => setSessionInfo(data))
        );
    }
  }, [hmsActions, isConnected]);

  return (
    <main className='w-screen h-screen flex flex-col p-4 items-center bg-gradient-to-b px-2 from-gray-900 to-sky-900'>
      <Header sessionInfo={sessionInfo} />
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
