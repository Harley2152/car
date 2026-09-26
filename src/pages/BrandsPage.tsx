import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BRAND_CATALOG } from '../data/cars';
import { CarCard } from '../components/CarCard';

export const BrandsPage: React.FC<{ initialBrand?: string }> = ({ initialBrand }) => {
  const { cars, navigate } = useApp();
  const [selectedBrandName, setSelectedBrandName] = useState<string | null>(initialBrand || null);
  const [carType, setCarType] = useState<'all' | 'new' | 'used'>('all');

  const selectedBrand = BRAND_CATALOG.find(
    (b) => b.name.toLowerCase() === (selectedBrandName || '').toLowerCase()
  );

  const brandCars = cars.filter(
    (c) => selectedBrand && c.brand.toLowerCase() === selectedBrand.name.toLowerCase()
  );

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* If a brand is selected, show Brand Details view */}
        {selectedBrand ? (
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#c6c9ae] mb-6">
              <button onClick={() => navigate('/')} className="hover:text-white">Home</button>
              <span>/</span>
              <button onClick={() => setSelectedBrandName(null)} className="hover:text-white">Brands</button>
              <span>/</span>
              <span className="text-[#d1f032] font-semibold">{selectedBrand.name}</span>
            </div>

            {/* Brand Hero Banner */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#1a1c20] border border-[#282a2e] mb-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-xl">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-[#282a2e] flex items-center justify-center text-[#d1f032] border border-[#333539]">
                    <span className="material-symbols-outlined text-[36px]">{selectedBrand.icon}</span>
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                      {selectedBrand.name}
                    </h1>
                    <span className="text-xs text-[#c6c9ae]">
                      {selectedBrand.count} Active Machines in India
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#c6c9ae]">
                  Discover factory-certified {selectedBrand.name} performance vehicles, luxury grand tourers, and everyday machines with AutoHub 140-point verification.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#111317] border border-[#282a2e] text-[#d1f032] font-bold">
                    Starting from {selectedBrand.minPrice}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#111317] border border-[#282a2e] text-white">
                    24x7 Roadside Support
                  </span>
                </div>
              </div>

              {/* Popular Models Pills */}
              <div className="p-6 rounded-2xl bg-[#111317] border border-[#282a2e] w-full md:w-auto min-w-[280px]">
                <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-3">
                  Popular {selectedBrand.name} Silhouettes
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedBrand.models.map((m) => (
                    <span
                      key={m}
                      className="px-3 py-1 rounded-xl bg-[#1e2024] text-xs font-semibold text-white border border-[#282a2e]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Filter Toggle: All vs New vs Used */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#282a2e]">
              <div className="flex items-center gap-2">
                {(['all', 'used', 'new'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setCarType(t)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      carType === t
                        ? 'bg-[#d1f032] text-[#181e00]'
                        : 'bg-[#1e2024] text-[#c6c9ae] hover:text-white'
                    }`}
                  >
                    {t === 'all' ? `All ${selectedBrand.name} (${brandCars.length})` : t === 'used' ? 'Certified Used' : 'New Models'}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setSelectedBrandName(null)}
                className="text-xs text-[#d1f032] hover:underline font-bold flex items-center gap-1"
              >
                <span>← All Brands</span>
              </button>
            </div>

            {/* Brand Cars Grid */}
            {brandCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {brandCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-xs text-[#c6c9ae]">
                More {selectedBrand.name} allocations arriving at our Mumbai and Bangalore vaults this week.
              </div>
            )}
          </div>
        ) : (
          /* All Brands Hub View */
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#282a2e]/60">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#c6c9ae] mb-1">
                  <span>Home</span>
                  <span>/</span>
                  <span className="text-[#d1f032]">Automotive Manufacturers</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Browse by Car Brand
                </h1>
                <p className="text-xs text-[#c6c9ae] mt-1">
                  Discover verified inventory from top Indian and international automotive houses.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {BRAND_CATALOG.map((brand) => (
                <div
                  key={brand.name}
                  onClick={() => setSelectedBrandName(brand.name)}
                  className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] hover:border-[#d1f032] cursor-pointer transition-all flex flex-col items-center text-center group shadow-xl"
                >
                  <div className="w-16 h-16 rounded-full bg-[#282a2e] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#d1f032]/20 transition-all border border-[#333539]">
                    <span className="material-symbols-outlined text-[32px] text-[#d1f032]">
                      {brand.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#d1f032] transition-colors">
                    {brand.name}
                  </h3>
                  <span className="text-xs text-[#c6c9ae] mt-1">{brand.count} Cars Listed</span>
                  <span className="text-xs font-bold text-[#d1f032] mt-2">
                    Starts at {brand.minPrice}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
