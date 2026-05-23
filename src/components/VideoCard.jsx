import { useState, useRef } from 'react';

function LinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function VideoCard({ entry }) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimer = useRef(null);
  const thumbnailSrc = entry.thumbnail;

  function handleMouseEnter() {
    hoverTimer.current = setTimeout(() => setIsHovered(true), 190);
  }

  function handleMouseLeave() {
    clearTimeout(hoverTimer.current);
    setIsHovered(false);
  }

  return (
    <div className="group cursor-pointer">
      {/* Desktop */}
      <div className="hidden md:block">
        {/* Thumbnail Container */}
        <div
          className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden mb-3"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={thumbnailSrc}
            alt={entry.title}
            className="w-full h-full object-cover"
          />

          {isHovered && (
            <>
              {/* Full-thumbnail overlay */}
              <div className="absolute inset-0 bg-black/35">
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayIcon />
                </div>
                {/* Link at bottom */}
                {entry.link && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <div className="flex items-center gap-1.5">
                      <span className="shrink-0 text-white"><LinkIcon /></span>
                      <a
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm text-white truncate underline max-w-[90%]"
                      >
                        {entry.linkLabel || entry.link}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600" />
            </>
          )}
        </div>

        {/* Metadata Below Thumbnail */}
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <h3 className="text-white font-semibold text-[16px] leading-tight mb-1">
              {entry.title}
              {entry.company && ` • ${entry.company}`}
            </h3>
            <p className="text-gray-400 text-sm mb-1">{entry.dateRange}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {entry.techStack.map((tech, index) => (
                <span key={index} className="px-2 py-0.5 bg-gray-800 text-gray-300 text-[12.5px] rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex gap-3 p-3 hover:bg-gray-800 rounded-lg transition-colors">
        <div className="relative w-30 h-17 bg-gray-800 rounded-lg overflow-hidden shrink-0">
          <img
            src={thumbnailSrc}
            alt={entry.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-sm leading-tight mb-0.5">
            {entry.title}
            {entry.company && ` • ${entry.company}`}
          </h3>
          <p className="text-gray-400 text-[13px] mb-1">{entry.dateRange}</p>
          <div className="flex flex-wrap gap-1 mt-1.5">
            {entry.techStack.map((tech, index) => (
              <span key={index} className="px-1.5 py-px bg-gray-800 text-gray-300 text-[10px] rounded-full">
                {tech}
              </span>
            ))}
          </div>
          {entry.link && (
            <a
              href={entry.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 mt-1.5 text-blue-400 text-sm underline truncate"
            >
              <LinkIcon />
              <span className="truncate">{entry.linkLabel || entry.link}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
