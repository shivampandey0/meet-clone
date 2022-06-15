import { useAVToggle, useHMSActions } from '@100mslive/react-sdk';
import {
  EyeOffIcon,
  MicrophoneIcon,
  PhoneMissedCallIcon,
  VideoCameraIcon,
  VolumeOffIcon,
} from '@heroicons/react/solid';

export const Footer = () => {
  const { isLocalAudioEnabled, isLocalVideoEnabled, toggleAudio, toggleVideo } =
    useAVToggle();

  const hmsActions = useHMSActions();

  const handleLeave = () => {
    hmsActions.leave();
  };

  return (
    <div className='space-x-4 py-4'>
      <button className='border p-2 rounded-full' onClick={toggleAudio}>
        {isLocalAudioEnabled ? (
          <MicrophoneIcon className='w-7 h-7 text-white' />
        ) : (
          <VolumeOffIcon className='w-7 h-7 text-white' />
        )}
      </button>
      <button className='border p-2 rounded-full' onClick={toggleVideo}>
        {isLocalVideoEnabled ? (
          <VideoCameraIcon className='w-7 h-7 text-white' />
        ) : (
          <EyeOffIcon className='w-7 h-7 text-white' />
        )}
      </button>
      <button
        className='border p-2 bg-red-600  rounded-full'
        onClick={handleLeave}
      >
        <PhoneMissedCallIcon className='w-7 h-7 text-white' />
      </button>
    </div>
  );
};
