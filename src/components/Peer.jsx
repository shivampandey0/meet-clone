import {
  selectCameraStreamByPeerID,
  useHMSActions,
  useHMSStore,
  useVideo,
} from '@100mslive/react-sdk';
import { useEffect } from 'react';

export const Peer = ({ peer }) => {
  const { videoRef } = useVideo({ trackId: peer.videoTrack });
  const hmsActions = useHMSActions();

  const videoTrack = useHMSStore(selectCameraStreamByPeerID(peer.id));

  useEffect(() => {
    if (videoRef.current && videoTrack) {
      if (videoTrack.enabled) {
        hmsActions.attachVideo(videoTrack.id, videoRef.current);
      } else {
        hmsActions.detachVideo(videoTrack.id, videoRef.current);
      }
    }
  }, [videoTrack, hmsActions, videoRef]);

  return (
    <div className='w-4/5 md:w-2/5 h-auto '>
      <div className='w-full h-auto'>
        {videoTrack?.enabled ? (
          <video
            className='rounded-md w-full h-full border'
            style={{ transform: 'rotateY(180deg)' }}
            ref={videoRef}
            autoPlay
            muted
            playsInline
          />
        ) : (
          <img
            className='rounded-md h-full object-cover border'
            src='/assets/user.png'
            alt={peer.name}
          />
        )}
      </div>

      <div className='text-white'>
        {peer.name} {peer.isLocal ? '(You)' : ''}
      </div>
    </div>
  );
};
