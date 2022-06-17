import { selectRoom, useHMSStore } from '@100mslive/react-sdk';
import { Clock } from './Clock';

export const Header = ({ sessionInfo }) => {
  const roomInfo = useHMSStore(selectRoom);

  const currentSession = sessionInfo?.data.find(
    (session) => session.id === roomInfo.sessionId
  );

  return (
    <header className='py-4 text-white space-y-4'>
      <h1 className='text-center text-2xl font-bold grow'>Meet Clone</h1>
      <Clock currentSession={currentSession} />
    </header>
  );
};
