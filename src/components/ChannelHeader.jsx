import { useState } from 'react';
import banner from '../assets/banner.jpeg';
import pfp from '../assets/pfp.PNG';

const EMAIL = 'emilyyang0999@gmail.com';

function ChannelHeader() {
  const [contacted, setContacted] = useState(false);

  function handleSubscribe() {
    navigator.clipboard.writeText(EMAIL);
    setContacted(true);
    setTimeout(() => setContacted(false), 2000);
  }
  return (
    <div className="bg-[#0f0f0f]">
      {/* Banner Image */}
      <div className="w-full h-32 md:h-44 lg:h-60 relative overflow-hidden">
        <img src={banner} alt="Banner" className="w-full h-full object-cover" />
      </div>

      {/* Channel Info */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-4 border-b border-gray-800">
          {/* Pfp + Name/Handle row */}
          <div className="flex items-center gap-4">
            <div className="shrink-0 w-20 h-20 md:w-44 md:h-44 rounded-full bg-gray-800 border-4 border-[#0f0f0f] overflow-hidden">
              <img src={pfp} alt="Profile" className="w-full h-full object-cover object-bottom scale-115 origin-bottom" />
            </div>

            <div className="flex-1 min-w-0 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-white" >
                  Emily Yang
                </h1>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <span>@chujiyang</span>
                <span>•</span>
                <span>9 videos</span>
              </div>

              {/* Desktop: description, links, contact inside the column */}
              <div className="hidden md:block">
                <div className="text-sm text-gray-400 mt-1 mb-3">
                  <p>Hi! CS student @ Cornell who loves spring weather and bringing ethical technology to the table.</p>
                </div>
                <div className="flex items-center gap-4 text-sm mb-3">
                  <a href="https://www.linkedin.com/in/emily-yang-55b082330/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center gap-1.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="12" fill="currentColor"/>
                      <circle cx="7" cy="7.5" r="1.5" fill="#0f0f0f"/>
                      <rect x="5.8" y="10" width="2.4" height="7" fill="#0f0f0f"/>
                      <path fill="#0f0f0f" d="M10.5 10h2.3v1.05c.55-.72 1.45-1.25 2.5-1.25 2.1 0 3.4 1.4 3.4 3.55V17h-2.3v-3.45c0-1.1-.9-2-2-2s-2 .9-2 2V17h-2.3V10z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://github.com/chujiyang" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center gap-1.5">
                    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSubscribe}
                    className={`self-start px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
                      contacted
                        ? 'bg-gray-700 text-gray-300 cursor-default'
                        : 'bg-white text-black hover:bg-gray-200'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {contacted && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="16" x="2" y="4" rx="2"/>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                      )}
                      {contacted ? 'Copied!' : 'Contact'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: description + links + subscribe spanning full width */}
          <div className="md:hidden mt-1">
            <div className="text-sm text-gray-400 mb-2">
              <p>Hi! CS student @ Cornell who loves spring weather and bringing ethical technology to the table.</p>
            </div>
            <div className="flex items-center gap-4 text-sm mb-3">
              <a href="https://www.linkedin.com/in/emily-yang-55b082330/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="currentColor"/>
                  <circle cx="7" cy="7.5" r="1.5" fill="#0f0f0f"/>
                  <rect x="5.8" y="10" width="2.4" height="7" fill="#0f0f0f"/>
                  <path fill="#0f0f0f" d="M10.5 10h2.3v1.05c.55-.72 1.45-1.25 2.5-1.25 2.1 0 3.4 1.4 3.4 3.55V17h-2.3v-3.45c0-1.1-.9-2-2-2s-2 .9-2 2V17h-2.3V10z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/chujiyang" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                GitHub
              </a>
            </div>
            <div className="-mx-4 px-4">
              <button
                onClick={handleSubscribe}
                className={`w-full py-2 rounded-full font-semibold text-sm transition-colors ${
                  contacted
                    ? 'bg-gray-700 text-gray-300 cursor-default'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                {contacted ? '✓ Contacted' : 'Contact'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollbar hide for nav */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default ChannelHeader;