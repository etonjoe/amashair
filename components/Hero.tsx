
import React from 'react';
import { SALON_INFO } from '../constants';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative h-[85vh] overflow-hidden bg-[#161b33]">
      <img 
        src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=2000" 
        alt="AMAS HAIR Stylist" 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#161b33] via-transparent to-transparent" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-9xl text-white mb-2 leading-tight max-w-4xl uppercase tracking-tighter">
          {SALON_INFO.name}
        </h1>
        <p className="script-font text-[#c5a059] text-3xl md:text-5xl mb-12 tracking-wide">
          {SALON_INFO.slogan}
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button 
            onClick={onStart}
            className="bg-[#c5a059] text-[#161b33] px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl"
          >
            BOOK APPOINTMENT
          </button>
          <div className="hidden md:flex items-center gap-6 text-stone-300 text-sm font-light tracking-widest border-l border-stone-500 pl-6">
            <span>BRAIDS</span>
            <span>WIGS</span>
            <span>EXTENSIONS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
