
import React from 'react';
import { SALON_INFO } from '../constants';

interface NavbarProps {
  onNavigate: (view: string) => void;
  activeView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <span className="text-2xl font-bold tracking-tighter serif text-[#161b33] uppercase">{SALON_INFO.name}</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Gallery', 'Booking', 'Negotiator'].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  activeView === item.toLowerCase() 
                    ? 'text-[#c5a059] underline underline-offset-8' 
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          <button 
            onClick={() => onNavigate('booking')}
            className="bg-[#161b33] text-[#c5a059] px-6 py-2 rounded-full text-sm font-semibold hover:bg-stone-800 transition-all border border-[#c5a059]"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
