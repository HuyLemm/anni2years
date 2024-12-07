import React, { createContext, useRef } from "react";

const AudioManagerContext = createContext();

export const AudioManagerProvider = ({ children }) => {
  const audioRef = useRef(null);

  const playAudio = (audioFile) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset the audio
    }

    const newAudio = new Audio(audioFile);
    audioRef.current = newAudio;
    newAudio.volume = 0.4;
    newAudio.loop = true;
    newAudio.play();
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <AudioManagerContext.Provider value={{ playAudio, stopAudio }}>
      {children}
    </AudioManagerContext.Provider>
  );
};

export const useAudioManager = () => React.useContext(AudioManagerContext);
