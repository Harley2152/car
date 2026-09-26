import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { CarCard } from '../components/CarCard';

export const SearchPage: React.FC = () => {
  const { cars, addSavedSearch } = useApp();

  const urlParams = new URLSearchParams(window.location.search);
  const initialQuery = urlParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'newest'>('recommended');

  const filteredCars = useMemo(() => {
    if (!query.trim()) return cars;
    const tokens = query.toLowerCase().split(' ').filter(Boolean);

    return cars.filter((car) => {
      const haystack = `${car.title} ${car.brand} ${car.model} ${car.variant} ${car.city} ${car.fuel} ${car.bodyType} ${car.color} ${car.badge}`.toLowerCase();
      // Check if matches tokens or numbers
      return tokens.some((token) => {
        if (!isNaN(Number(token))) {
          // If token is number (e.g. 50, 60), compare with price or year
          const num = Number(token);
          return car.year === num || car.priceLakhs <= num * 1.2;
        }
        return haystack.includes(token);
      });
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceLakhs - b.priceLakhs;
      if (sortBy === 'price-desc') return b.priceLakhs - a.priceLakhs;
      if (sortBy === 'newest') return b.year - a.year;
      return (b.viewsCount || 0) - (a.viewsCount || 0);
    });
  }, [cars, query, sortBy]);

  const handleSaveSearch = () => {
    addSavedSearch(`Search: ${query || 'All Cars'}`, query, { sortBy });
  };

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Search Bar Input Container */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#1a1c20] border border-[#282a2e] mb-10 shadow-2xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#d1f032] uppercase tracking-wider">
            <span className="material-symbols-outlined text-[18px]">search</span>
            <span>Intelligent Vehicle Query</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full flex-1 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#111317] border border-[#282a2e]">
              <span className="material-symbols-outlined text-[22px] text-[#d1f032]">directions_car</span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by model, city, body type, fuel (e.g. 'BMW SUV Mumbai', 'Electric', 'Porsche')..."
                className="w-full bg-transparent text-sm text-white placeholder-[#90937a] focus:outline-none"
              />
            </div>

            <button
              onClick={handleSaveSearch}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#282a2e] hover:bg-[#333539] text-white text-xs font-bold border border-[#333539] transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#d1f032]">bookmark</span>
              <span>Save Search</span>
            </button>
          </div>

          {/* Quick Suggestions */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs text-[#c6c9ae]">Suggestions:</span>
            {['Porsche 911', 'BMW M4', 'Audi e-tron GT', 'Thar 4x4', 'Mercedes AMG', 'Electric SUVs'].map((s) => (
              <button
                key={s}
                onClick={() => setQuery(s)}
                className="px-3 py-1 rounded-full bg-[#111317] hover:bg-[#282a2e] text-xs text-[#c6c9ae] hover:text-white border border-[#282a2e] transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Results Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#282a2e]">
          <div>
            <h2 className="text-xl font-bold text-white">
              Showing Results for <span className="text-[#d1f032]">"{query || 'All Showroom Vehicles'}"</span>
            </h2>
            <span className="text-xs text-[#c6c9ae]">
              {filteredCars.length} Verified Machines Found
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#c6c9ae]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 rounded-xl bg-[#1a1c20] border border-[#282a2e] text-xs text-white"
            >
              <option value="recommended">Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl bg-[#1a1c20] border border-[#282a2e]">
            <h3 className="text-xl font-bold text-white mb-2">No matching vehicles found</h3>
            <p className="text-xs text-[#c6c9ae]">Try changing your keywords or explore all cars.</p>
          </div>
        )}
      </div>
    </div>
  );
};
