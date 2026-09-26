import React from 'react';
import { Car } from '../types';
import { useApp } from '../context/AppContext';

interface CarCardProps {
  car: Car;
  showCompareToggle?: boolean;
}

export const CarCard: React.FC<CarCardProps> = ({ car, showCompareToggle = true }) => {
  const { navigate, toggleWishlist, isInWishlist, addToCompare, isInCompare } = useApp();
  const wishlisted = isInWishlist(car.id);
  const compared = isInCompare(car.id);

  return (
    <div className="group rounded-3xl bg-[#1a1c20] hover:bg-[#1e2024] border border-[#282a2e]/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:border-[#d1f032]/30">
      {/* Header Info */}
      <div className="p-6 pb-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-[11px] font-bold text-[#d1f032] uppercase tracking-widest block">
              {car.badge || `${car.brand} Certified`}
            </span>
            <h3
              onClick={() => navigate(`/car/${car.id}`)}
              className="text-lg font-bold text-white group-hover:text-[#d1f032] transition-colors cursor-pointer truncate"
            >
              {car.title}
            </h3>
            <span className="text-xs text-[#c6c9ae]">
              {car.year} Model • {car.color}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {showCompareToggle && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCompare(car.id);
                }}
                title={compared ? 'Remove from compare' : 'Add to compare'}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  compared
                    ? 'bg-[#d1f032] text-[#181e00]'
                    : 'bg-[#282a2e] hover:bg-[#333539] text-[#c6c9ae] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {compared ? 'check' : 'compare_arrows'}
                </span>
              </button>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(car.id);
              }}
              aria-label="Favorite"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                wishlisted
                  ? 'bg-rose-500/20 text-rose-400'
                  : 'bg-[#282a2e] hover:bg-[#333539] text-[#c6c9ae] hover:text-white'
              }`}
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={wishlisted ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                favorite
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Staged Vehicle Visual */}
      <div
        onClick={() => navigate(`/car/${car.id}`)}
        className="relative w-full h-52 sm:h-56 px-4 flex items-center justify-center cursor-pointer overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12]/80 via-transparent to-transparent z-10 pointer-events-none"></div>
        <img
          className="relative z-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]"
          src={car.images.hero}
          alt={car.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Elegant fallback SVG
            (e.target as HTMLImageElement).src =
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCX4NtUnETrqYQLUL0bAZqoVtOSeXUsYfFb8XDW3tSE6FJiaWfogwsqO3TvFQNfrnXNnV_I0p-gEmi5gxcZ_T_jkX2nFVyMxsNUTVKYFCDqAMynRPA0JNeAhPd7nhCtYVTGAxu9kmpZIQx9dnw2QCl2GqxhlgqI0fWV-ui1y8vQGawiwXVzE46Trm5m_-_pMpempcqIi6dpqvv09fOdN5o2ZSRclFzalLWYhMT3RXn0kt4OPBlMMl02Vw';
          }}
        />

        {/* Feature Badges */}
        <div className="absolute bottom-3 left-6 z-20 flex flex-wrap gap-2">
          {car.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full bg-[#111317]/90 text-white text-[10px] font-bold backdrop-blur-md border border-[#282a2e]"
            >
              {tag}
            </span>
          ))}
          {car.priceDropLakhs && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#d1f032]/20 text-[#d1f032] text-[10px] font-bold backdrop-blur-md">
              -₹{car.priceDropLakhs}L Drop
            </span>
          )}
        </div>
      </div>

      {/* Telemetry Metrics & Price Actions */}
      <div className="p-6 pt-2 bg-[#16181f]/70 flex flex-col gap-4 border-t border-[#282a2e]/40">
        <div className="grid grid-cols-4 gap-2 text-center py-2 bg-[#0c0e12]/60 rounded-xl border border-[#282a2e]/40">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#c6c9ae] uppercase font-bold">KM</span>
            <span className="text-xs text-white font-bold">{car.km.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-[#c6c9ae] uppercase font-bold">Fuel</span>
            <span className="text-xs text-white font-bold truncate px-1">{car.fuel}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-[#c6c9ae] uppercase font-bold">Gear</span>
            <span className="text-xs text-white font-bold truncate px-1">{car.transmission}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-[#c6c9ae] uppercase font-bold">City</span>
            <span className="text-xs text-white font-bold truncate px-1">{car.city}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#c6c9ae] uppercase tracking-wider font-semibold">
              Price
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-white tracking-tight">
                {car.priceFormatted}
              </span>
            </div>
            <span className="text-[11px] text-[#d1f032] font-semibold">
              {car.emiFormatted}
            </span>
          </div>

          <button
            onClick={() => navigate(`/car/${car.id}`)}
            className="px-5 py-2.5 rounded-full bg-[#282a2e] hover:bg-[#d1f032] hover:text-[#181e00] text-white font-bold text-xs transition-all shadow-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
