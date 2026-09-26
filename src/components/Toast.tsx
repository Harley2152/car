import React from 'react';
import { useApp } from '../context/AppContext';

export const Toast: React.FC = () => {
  const { toast } = useApp();

  if (!toast) return null;

  const bgStyles =
    toast.type === 'warning'
      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
      : toast.type === 'info'
      ? 'bg-[#282a2e] text-white border-[#333539]'
      : 'bg-[#d1f032] text-[#181e00] border-[#b5d401]';

  return (
    <div className="fixed bottom-20 md:bottom-8 right-6 z-50 animate-bounce-short">
      <div
        className={`px-5 py-3 rounded-2xl border shadow-2xl font-bold text-xs sm:text-sm flex items-center gap-3 backdrop-blur-md ${bgStyles}`}
      >
        <span className="material-symbols-outlined text-[18px]">
          {toast.type === 'warning'
            ? 'warning'
            : toast.type === 'info'
            ? 'info'
            : 'check_circle'}
        </span>
        <span>{toast.message}</span>
      </div>
    </div>
  );
};
