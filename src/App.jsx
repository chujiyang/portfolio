import { portfolioData } from './data/portfolio';
import VideoCard from './components/VideoCard';
import ChannelHeader from './components/ChannelHeader';

function App() {
  const sections = [
    { key: 'work', title: 'Work Experience' },
    { key: 'projects', title: 'Projects' },
    { key: 'research', title: 'Research' },
    { key: 'hobbies', title: 'Fun!' }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Top Nav Bar */}
      <header className="sticky top-0 z-50 bg-[#0f0f0f] border-b border-gray-800">
        <div className="max-w-480 mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
<h1 className="flex items-center gap-1.5">
              <svg className="h-5 w-auto" viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="20" rx="5" fill="#B8587E"/>
                <path d="M14 15 C14 15 7 10.5 7 7a3.5 3.5 0 0 1 7-0.5 3.5 3.5 0 0 1 7 0.5c0 3.5-7 8-7 8z" fill="white" transform="translate(14,10) scale(0.6) translate(-14,-10)"/>
              </svg>
              <span className="text-white font-bold text-lg leading-none">Portfolio</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://linkedin.com/in/chujiyang" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-800">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/chujiyang" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-800">
              <svg className="w-6.5 h-6.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Channel Header */}
      <ChannelHeader />

      {/* Video Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {sections.map(section => (
          <section key={section.key} className="mb-12">
            {/* Section Heading */}
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              {section.title}
            </h2>
            
            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {portfolioData[section.key].map(entry => (
                <VideoCard key={entry.id} entry={entry} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;