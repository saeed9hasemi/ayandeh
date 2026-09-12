import { useState } from "react";
import { FaPlay } from "react-icons/fa";

interface IVideoPlayer {
  cover: any;
  video: any;
}

function VideoPlayer({ cover, video }: IVideoPlayer) {
  const [play, setPlay] = useState(false);

  return (
    <div className="w-full h-full overflow-hidden">
      {play ? (
        <div className="w-full h-full flex justify-center bg-black">
          <video controls src={video ?? null} className="h-full object-cover" />
        </div>
      ) : (
        <div className="w-full h-full cursor-pointer relative">
          <img
            src={cover ?? null}
            alt="cover"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute size-18 rounded-full bg-white/50 hover:bg-white/70 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-300"
            onClick={() => setPlay(true)}
          >
            <FaPlay color="#427AE0" size={30} className="pl-1" />
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
