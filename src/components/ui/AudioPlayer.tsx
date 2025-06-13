"use client";

import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false); // New state to track interaction
  const audioRef = useRef<HTMLAudioElement>(null);

  // Attempt to play on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.warn("Audio autoplay prevented on mount:", error);
        setIsPlaying(false);
        // If autoplay is prevented, we'll wait for user interaction
      });
    }
  }, []);

  // Effect to play on first user interaction if not already playing
  useEffect(() => {
    if (!isPlaying && !hasInteracted && audioRef.current) {
      const playOnInteraction = () => {
        if (audioRef.current && !audioRef.current.ended && audioRef.current.paused) { // Check if it's truly paused
          audioRef.current.play().then(() => {
            setIsPlaying(true);
            setHasInteracted(true); // Mark that interaction has occurred
          }).catch(error => {
            console.warn("Audio play on interaction prevented:", error);
            // Still couldn't play, perhaps due to other restrictions
          });
        }
        // Clean up event listeners once interaction happens or audio plays
        document.removeEventListener('click', playOnInteraction);
        document.removeEventListener('scroll', playOnInteraction, { capture: true }); // Removed once: true here to ensure it's removed if already fired
        document.removeEventListener('keydown', playOnInteraction);
        document.removeEventListener('touchstart', playOnInteraction);
      };

      // Add event listeners for various interactions
      document.addEventListener('click', playOnInteraction, { once: true }); // `once: true` removes listener after first fire
      document.addEventListener('scroll', playOnInteraction, { capture: true, once: true });
      document.addEventListener('keydown', playOnInteraction, { once: true });
      document.addEventListener('touchstart', playOnInteraction, { once: true });

      // Cleanup function for when the component unmounts or dependencies change
      return () => {
        document.removeEventListener('click', playOnInteraction);
        document.removeEventListener('scroll', playOnInteraction, { capture: true });
        document.removeEventListener('keydown', playOnInteraction);
        document.removeEventListener('touchstart', playOnInteraction);
      };
    }
  }, [isPlaying, hasInteracted]); // Re-run if isPlaying or hasInteracted changes

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // When user manually clicks play, mark as interacted
        setHasInteracted(true);
        audioRef.current.play().catch(error => console.error("Error playing audio:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src="/Nat King Cole - L-O-V-E.mp3" loop autoPlay />
      <button
        onClick={togglePlayPause}
        className="p-3 bg-gold-500 text-white rounded-full shadow-lg hover:bg-gold-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
    </div>
  );
};

export default AudioPlayer;
