"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const AUDIO_SRC = "/Nat King Cole - L-O-V-E.mp3";

interface CustomWindow extends Window {
  __wedding_audio?: HTMLAudioElement;
}

function getGlobalAudio(): HTMLAudioElement | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as CustomWindow).__wedding_audio;
}

function setGlobalAudio(audio: HTMLAudioElement) {
  if (typeof window !== "undefined") {
    (window as CustomWindow).__wedding_audio = audio;
  }
}

export default function GlobalAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    let audio = getGlobalAudio();
    if (!audio) {
      audio = new Audio(AUDIO_SRC);
      audio.loop = true;
      setGlobalAudio(audio);
    }
    audioRef.current = audio;

    // Set initial playing state based on existing audio element
    if (!audio.paused) {
      setIsPlaying(true);
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false); // Should not happen with loop, but good practice

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    // Attempt to play on mount if no prior interaction needed or if already playing
    if (audio.paused && (hasInteracted || !audio.autoplay)) { // Check autoplay, browsers might block
      audio.play().catch(error => {
        console.warn("Audio autoplay prevented on mount:", error);
        setIsPlaying(false); 
      });
    }

    return () => {
      // Don't remove listeners from the global instance on unmount of one player instance
      // The audio element itself persists.
      // If we wanted to stop audio when *all* players unmount, that's more complex.
    };
  }, [hasInteracted]); // Rerun if interaction state changes

  // Effect for first user interaction to enable autoplay if blocked
  useEffect(() => {
    if (!isPlaying && !hasInteracted && audioRef.current && audioRef.current.paused) {
      const playOnInteraction = () => {
        if (audioRef.current && audioRef.current.paused) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          }).catch(error => {
            console.warn("Audio play on interaction prevented:", error);
          });
        }
        // Clean up interaction listeners
        document.removeEventListener('click', playOnInteraction, { capture: true });
        document.removeEventListener('keydown', playOnInteraction, { capture: true });
        document.removeEventListener('touchstart', playOnInteraction, { capture: true });
      };

      document.addEventListener('click', playOnInteraction, { capture: true, once: true });
      document.addEventListener('keydown', playOnInteraction, { capture: true, once: true });
      document.addEventListener('touchstart', playOnInteraction, { capture: true, once: true });

      return () => {
        document.removeEventListener('click', playOnInteraction, { capture: true });
        document.removeEventListener('keydown', playOnInteraction, { capture: true });
        document.removeEventListener('touchstart', playOnInteraction, { capture: true });
      };
    }
  }, [isPlaying, hasInteracted, audioRef]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (!hasInteracted) {
      setHasInteracted(true); // Mark interaction on first manual toggle
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => console.error("Error playing audio:", error));
    }
    setIsPlaying(!isPlaying); // State will update via event listeners if successful
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Audio element is not rendered here, it's managed globally */}
      <button
        onClick={togglePlayPause}
        className="p-3 bg-gold-500 text-white rounded-full shadow-lg hover:bg-gold-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
    </div>
  );
}
