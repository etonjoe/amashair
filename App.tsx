
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Negotiator from './components/Negotiator';
import { SALON_INFO } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState('home');

  const renderView = () => {
    switch(view) {
      case 'gallery':
        return <Gallery />;
      case 'booking':
        return <BookingForm />;
      case 'negotiator':
        return <Negotiator />;
      default:
        return (
          <>
            <Hero onStart={() => setView('booking')} />
            <section className="py-24 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-4xl mb-4">🪮</div>
                <h3 className="text-2xl mb-3 serif uppercase tracking-wider">Expert Braiding</h3>
                <p className="text-stone-500">From classic cornrows to the latest knotless trends, we provide painless and beautiful braiding.</p>
              </div>
              <div>
                <div className="text-4xl mb-4">👸</div>
                <h3 className="text-2xl mb-3 serif uppercase tracking-wider">Wig Mastery</h3>
                <p className="text-stone-500">Professional lace installs and wig customizations to give you a flawless, natural look.</p>
              </div>
              <div>
                <div className="text-4xl mb-4">🧸</div>
                <h3 className="text-2xl mb-3 serif uppercase tracking-wider">Kids' Choice</h3>
                <p className="text-stone-500">We specialize in gentle, creative styles for children in a friendly, comfortable environment.</p>
              </div>
            </section>
            <Gallery />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar activeView={view} onNavigate={setView} />
      
      <main className="animate-in fade-in duration-500">
        {renderView()}
      </main>

      <footer className="bg-[#161b33] text-stone-400 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-[#c5a059] text-3xl serif mb-2 tracking-tighter uppercase font-bold">{SALON_INFO.name}</h2>
            <p className="script-font text-[#c5a059] text-xl mb-6">{SALON_INFO.slogan}</p>
            <p className="max-w-sm mb-8 leading-relaxed text-stone-300">
              Your premier destination in Sunderland for hair braiding, wig installations, and premium hair extensions. Quality styling that meets your confidence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#c5a059] flex items-center justify-center hover:bg-[#c5a059] hover:text-[#161b33] cursor-pointer transition-colors" title="Facebook">FB</a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#c5a059] flex items-center justify-center hover:bg-[#c5a059] hover:text-[#161b33] cursor-pointer transition-colors" title="Instagram">IG</a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#c5a059] flex items-center justify-center hover:bg-[#c5a059] hover:text-[#161b33] cursor-pointer transition-colors" title="TikTok">TT</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#c5a059] font-semibold mb-6 uppercase text-xs tracking-widest">Connect</h4>
            <ul className="space-y-4 text-sm text-stone-300">
              <li>{SALON_INFO.address}</li>
              <li>{SALON_INFO.phone}</li>
              <li>Facebook: {SALON_INFO.socials.facebook}</li>
              <li>Insta: @{SALON_INFO.socials.instagram}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#c5a059] font-semibold mb-6 uppercase text-xs tracking-widest">Hours</h4>
            <ul className="space-y-4 text-sm text-stone-300">
              <li className="flex justify-between"><span>Mon - Sat</span> <span>9:00 - 19:00</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span className="text-red-400">Closed</span></li>
              <li className="pt-4 text-xs italic opacity-70">Appointments highly recommended</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 text-xs text-center text-stone-500 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} {SALON_INFO.name}. Professional Styling Excellence.
        </div>
      </footer>
    </div>
  );
};

export default App;
