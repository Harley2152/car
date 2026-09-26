import React from 'react';
import { useApp } from '../context/AppContext';

export const MobileNav: React.FC = () => {
  const { currentPath, navigate, wishlist, user } = useApp();

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#111317]/95 backdrop-blur-2xl border-t border-[#282a2e] px-4 py-2 flex items-center justify-around shadow-[0_-8px_24px_rgba(0,0,0,0.8)]">
      <button
        onClick={() => navigate('/')}
        className={`flex flex-col items-center gap-1 py-1 transition-colors ${
          currentPath === '/' ? 'text-[#d1f032]' : 'text-[#c6c9ae] hover:text-white'
        }`}
      >
        <span className="material-symbols-outlined text-[20px]">home</span>
        <span className="text-[10px] font-semibold">Home</span>
      </button>

      <button
        onClick={() => navigate('/buy-cars')}
        className={`flex flex-col items-center gap-1 py-1 transition-colors ${
          currentPath.startsWith('/buy-cars') ? 'text-[#d1f032]' : 'text-[#c6c9ae] hover:text-white'
        }`}
      >
        <span className="material-symbols-outlined text-[20px]">search</span>
        <span className="text-[10px] font-semibold">Search</span>
      </button>

      <button
        onClick={() => navigate('/sell-car')}
        className="flex flex-col items-center -mt-5"
      >
        <div className="w-12 h-12 rounded-full bg-[#d1f032] text-[#181e00] flex items-center justify-center shadow-[0_4px_16px_rgba(209,240,50,0.4)]">
          <span className="material-symbols-outlined text-[24px]">add</span>
        </div>
        <span className="text-[10px] font-bold text-[#d1f032] mt-1">Sell</span>
      </button>

      <button
        onClick={() => navigate('/wishlist')}
        className={`relative flex flex-col items-center gap-1 py-1 transition-colors ${
          currentPath === '/wishlist' ? 'text-[#d1f032]' : 'text-[#c6c9ae] hover:text-white'
        }`}
      >
        <span className="material-symbols-outlined text-[20px]">favorite</span>
        {wishlist.length > 0 && (
          <span className="absolute top-0 right-3 w-3.5 h-3.5 rounded-full bg-[#d1f032] text-[#181e00] text-[9px] font-bold flex items-center justify-center">
            {wishlist.length}
          </span>
        )}
        <span className="text-[10px] font-semibold">Wishlist</span>
      </button>

      <button
        onClick={() => navigate(user ? '/dashboard' : '/login')}
        className={`flex flex-col items-center gap-1 py-1 transition-colors ${
          currentPath.startsWith('/dashboard') || currentPath === '/login'
            ? 'text-[#d1f032]'
            : 'text-[#c6c9ae] hover:text-white'
        }`}
      >
        <span className="material-symbols-outlined text-[20px]">person</span>
        <span className="text-[10px] font-semibold">{user ? 'Account' : 'Login'}</span>
      </button>
    </div>
  );
};
