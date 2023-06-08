/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useRef, forwardRef } from 'react';

// eslint-disable-next-line react/prop-types, react/display-name
export const Player = forwardRef((props, ref) => {
  const playerRef = useRef();
  console.log(playerRef);
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();

  useEffect(() => {
    console.log(playerRef);
  }, []);

  return (
    <div ref={ref}>
      <video ref={playerRef} src={props.source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  );
});
