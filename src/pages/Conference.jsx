import { selectPeers, useHMSStore } from '@100mslive/react-sdk';
import { Peer } from '../components';

export const Conference = () => {
  const peers = useHMSStore(selectPeers);

  return (
    <div className='flex flex-col md:flex-row h-full justify-center gap-2 items-center w-screen'>
      {peers.map((peer) => (
        <Peer key={peer.id} peer={peer} />
      ))}
    </div>
  );
};
