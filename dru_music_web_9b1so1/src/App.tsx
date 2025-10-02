import React from 'react';
import { useState } from 'react';
import { Music, Calendar, MapPin, Mail, Instagram, Play, Volume2, Users } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  const mixes = [
    { title: 'DRU - STATE OF ART (PHASE SHIFT)', duration: '62:45' },
  ];

  const pressKitPhotos = [
    'https://images.pexels.com/photos/1674594/pexels-photo-1674594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/4229844/pexels-photo-4229844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  if (showLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-700 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold tracking-wider">
              DRU
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-gray-300 transition-colors tracking-wide">HOME</a>
              <a href="#about" className="hover:text-gray-300 transition-colors tracking-wide">MUSIC</a>
              <a href="#music" className="hover:text-gray-300 transition-colors tracking-wide">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
        <div className="relative text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider">
            DRU
          </h1>
          <div className="w-32 h-px bg-gray-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 tracking-wide">
            HYPNOTIC • GROOVY
          </p>
          <p className="text-lg text-gray-500 mb-8 tracking-wider">
            PORTO, PORTUGAL
          </p>
          <div className="flex justify-center items-center space-x-4 text-gray-500">
            <Volume2 size={20} />
            <span className="text-sm tracking-widest">LIVE FROM THE UNDERGROUND</span>
            <Volume2 size={20} />
          </div>
        </div>
        
        {/* Animated Lines */}
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="h-full bg-gradient-to-r from-transparent via-gray-500 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 tracking-wider text-center">
            ABOUT
            <span className="block w-16 h-px bg-gray-500 mx-auto mt-4"></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                DRU is a DJ and producer from Porto, Portugal, who brings a singular energy to the dance floor. His approach to techno blends hypnotic grooves, dense textures, and meticulously crafted layers of sound, creating an atmosphere that is both intense and immersive. Each set unfolds as a constantly evolving journey, where subtle melodies intertwine with driving rhythms, inviting the audience to explore new sonic landscapes.
              </p>
              <p>
                With a sharp attention to detail and an ongoing pursuit of originality, DRU transforms the dance floor into a space of discovery and raw connection—where music is not only heard but lived in the shadows of the underground. Guided by the mantra “don’t let the groove die”, his sound embraces the darker edges of techno, keeping the pulse alive where intensity and obscurity collide.
              </p>
            </div>
            <div className="bg-gray-700 p-8 border border-gray-600">
              <h3 className="text-2xl font-bold mb-6 tracking-wide">STYLE</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-600">
                  <span>Warmup (128-135bpm)</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-600">
                  <span>Hypnotic Groove (138-142bpm)</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-600">
                  <span>Groove (142+bpm)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 tracking-wider text-center">
            LATEST MIXES
            <span className="block w-16 h-px bg-gray-500 mx-auto mt-4"></span>
          </h2>
          <div className="grid md:grid-cols-1 gap-6">
            {mixes.map((mix, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 p-6 hover:bg-gray-750 transition-colors group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold tracking-wide">{mix.title}</h3>
                  <button className="p-2 bg-gray-700 hover:bg-gray-600 transition-colors group-hover:bg-gray-600">
                    <Play size={16} />
                  </button>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span className="flex items-center space-x-2">
                    <Music size={14} />
                    <span>{mix.duration}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gray-700 hover:bg-gray-600 border border-gray-600 tracking-widest transition-colors">
              VIEW ALL MIXES
            </button>
          </div>
        </div>
      </section>

      {/* Press Kit Section */}
      <section id="press-kit" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 tracking-wider text-center">
            PRESS KIT
            <span className="block w-16 h-px bg-gray-500 mx-auto mt-4"></span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pressKitPhotos.map((photo, index) => (
              <div key={index} className="group overflow-hidden border border-gray-700">
                <img 
                  src={photo}
                  alt={`Press photo ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="px-8 py-3 bg-gray-700 hover:bg-gray-600 border border-gray-600 tracking-widest transition-colors">
              DOWNLOAD HIGH-RES
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 tracking-wider text-center">
            CONTACT
            <span className="block w-16 h-px bg-gray-500 mx-auto mt-4"></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 tracking-wide">BOOKINGS</h3>
                <p className="text-gray-400 mb-4">
                  Available for warehouse parties, club nights, and underground events worldwide.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-gray-500" />
                    <span>druproduce@gmail.com</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 tracking-wide">FOLLOW</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/drumusic_" className="p-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://soundcloud.com/druproduce" className="p-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors">
                    <Music size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 tracking-wide">
              © 2025 DRU. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <Volume2 size={16} />
              <span className="text-xs tracking-widest">UNDERGROUND NEVER DIES</span>
              <Volume2 size={16} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
