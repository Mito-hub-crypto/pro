import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

export function AudioControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Simple audio URL - sini tempat ubah url musik nya 🗿
  const audioSrc = "https://files.catbox.moe/5x6yqg.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.muted = isMuted;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (audio) {
      try {
        if (isPlaying) {
          audio.pause();
          setIsPlaying(false);
        } else {
          await audio.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Audio playback failed:", error);
      }
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-white dark:bg-neutral-800 rounded-full shadow-xl p-3 sm:p-4 border border-neutral-200 dark:border-neutral-700"
      >
        <audio
          ref={audioRef}
          src={audioSrc}
          onEnded={() => setIsPlaying(false)}
          onError={() => console.log("Audio loading error")}
        />
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 hover:scale-110"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-3 h-3 sm:w-4 sm:h-4" />
            ) : (
              <Play className="w-3 h-3 sm:w-4 sm:h-4" />
            )}
          </button>

          {/* Volume Controls */}
          <div className="hidden sm:flex items-center space-x-2">
            <button
              onClick={toggleMute}
              className="p-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            {/* Volume Slider */}
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-lg appearance-none cursor-pointer audio-slider"
              title="Volume"
            />
          </div>

          {/* Mobile Volume Toggle */}
          <button
            onClick={toggleMute}
            className="sm:hidden p-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-3 h-3" />
            ) : (
              <Volume2 className="w-3 h-3" />
            )}
          </button>
        </div>
      </motion.div>
    </>
  );
}
