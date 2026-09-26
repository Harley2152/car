import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { CarCard } from '../components/CarCard';
import { INDIAN_CITIES, BRAND_CATALOG, BODY_TYPES } from '../data/cars';
import { FilterState } from '../types';

export const BuyCarsPage: React.FC = () => {
  const { cars, showToast, addSavedSearch } = useApp();

  // Parse URL search params if present
  const params = new URLSearchParams(window.location.search);
  const initialBrand = params.get('brand') && params.get('brand') !== 'All Makes' ? params.get('brand')! : '';
  const initialCity = params.get('city') ? params.get('city')!.split(',')[0].trim() : '';
  const initialBodyType = params.get('bodyType') || '';

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filters State
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    city: initialCity,
    brand: initialBrand,
    model: '',
    minPrice: 0,
    maxPrice: 250, // in Lakhs
    fuel: '',
    transmission: '',
    bodyType: initialBodyType,
    ownership: '',
    condition: '',
    yearMin: 2018,
    kmMax: 50000,
    sortBy: 'recommended'
  });

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      searchQuery: '',
      city: '',
      brand: '',
      model: '',
      minPrice: 0,
      maxPrice: 250,
      fuel: '',
      transmission: '',
      bodyType: '',
      ownership: '',
      condition: '',
      yearMin: 2018,
      kmMax: 50000,
      sortBy: 'recommended'
    });
    showToast('Filters reset to show all inventory', 'info');
  };

  // Filtered and Sorted Cars
  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      if (filters.searchQuery) {
        const q = filters.searchQuery.toLowerCase();
        const matches =
          car.title.toLowerCase().includes(q) ||
          car.brand.toLowerCase().includes(q) ||
          car.model.toLowerCase().includes(q) ||
          car.city.toLowerCase().includes(q);
        if (!matches) return false;
      }

      if (filters.city && !car.city.toLowerCase().includes(filters.city.toLowerCase())) {
        return false;
      }

      if (filters.brand && car.brand.toLowerCase() !== filters.brand.toLowerCase()) {
        return false;
      }

      if (filters.bodyType && car.bodyType.toLowerCase() !== filters.bodyType.toLowerCase()) {
        return false;
      }

      if (filters.fuel && car.fuel.toLowerCase() !== filters.fuel.toLowerCase()) {
        return false;
      }

      if (filters.transmission && !car.transmission.toLowerCase().includes(filters.transmission.toLowerCase())) {
        return false;
      }

      if (filters.ownership && car.ownership !== filters.ownership) {
        return false;
      }

      if (filters.condition && car.condition !== filters.condition) {
        return false;
      }

      if (car.priceLakhs < filters.minPrice || car.priceLakhs > filters.maxPrice) {
        return false;
      }

      if (car.year < filters.yearMin) {
        return false;
      }

      if (car.km > filters.kmMax) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.priceLakhs - b.priceLakhs;
      if (filters.sortBy === 'price-desc') return b.priceLakhs - a.priceLakhs;
      if (filters.sortBy === 'newest') return b.year - a.year;
      if (filters.sortBy === 'lowest-km') return a.km - b.km;
      return (b.viewsCount || 0) - (a.viewsCount || 0);
    });
  }, [cars, filters]);

  const handleSaveCurrentSearch = () => {
    const title = `${filters.brand || 'All Makes'} ${filters.bodyType || 'Cars'} in ${filters.city || 'India'}`;
    addSavedSearch(title, filters.searchQuery || 'Showroom Filter', filters);
  };

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Breadcrumb & Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#c6c9ae] mb-1">
              <span>Home</span>
              <span>/</span>
              <span className="text-[#d1f032]">Buy Cars Marketplace</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Discover Verified Machines in India
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSaveCurrentSearch}
              className="px-4 py-2 rounded-full bg-[#1e2024] hover:bg-[#282a2e] text-xs font-bold text-white border border-[#282a2e] flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-[#d1f032]">bookmark</span>
              <span>Save Search</span>
            </button>
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-full bg-[#1e2024] hover:bg-[#282a2e] text-xs font-bold text-[#c6c9ae] hover:text-white border border-[#282a2e] transition-colors"
            >
              Reset All
            </button>
          </div>
        </div>

        {/* Search & Sort Mobile Bar */}
        <div className="lg:hidden flex items-center gap-2 mb-6">
          <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#1e2024] border border-[#282a2e]">
            <span className="material-symbols-outlined text-[18px] text-[#d1f032]">search</span>
            <input
              type="text"
              placeholder="Search make or model..."
              value={filters.searchQuery}
              onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
              className="w-full bg-transparent text-xs text-white placeholder-[#90937a] focus:outline-none"
            />
          </div>
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="px-4 py-2 rounded-xl bg-[#d1f032] text-[#181e00] font-bold text-xs flex items-center gap-1.5 shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">tune</span>
            <span>Filters</span>
          </button>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ======================================= */}
          {/* LEFT DESKTOP FILTER SIDEBAR */}
          {/* ======================================= */}
          <aside className="hidden lg:block lg:col-span-3 rounded-3xl bg-[#1a1c20] border border-[#282a2e] p-6 shadow-xl sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#282a2e] mb-5">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-[#d1f032]">tune</span>
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  Filter Garage
                </span>
              </div>
              <button
                onClick={resetFilters}
                className="text-[11px] text-[#d1f032] hover:underline font-semibold"
              >
                Clear
              </button>
            </div>

            {/* Keyword Search */}
            <div className="mb-5">
              <label className="text-[10px] text-[#c6c9ae] uppercase font-bold tracking-wider block mb-1.5">
                Keyword Search
              </label>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#111317] border border-[#282a2e]">
                <span className="material-symbols-outlined text-[18px] text-[#d1f032]">search</span>
                <input
                  type="text"
                  placeholder="e.g. Turbo, PDK, M Sport..."
                  value={filters.searchQuery}
                  onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
                  className="w-full bg-transparent text-xs text-white placeholder-[#90937a] focus:outline-none"
                />
              </div>
            </div>

            {/* City Filter */}
            <div className="mb-5">
              <label className="text-[10px] text-[#c6c9ae] uppercase font-bold tracking-wider block mb-1.5">
                Location / City
              </label>
              <select
                value={filters.city}
                onChange={(e) => handleFilterChange('city', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white focus:outline-none cursor-pointer"
              >
                <option value="">All Indian Hubs</option>
                {INDIAN_CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Brand Filter */}
            <div className="mb-5">
              <label className="text-[10px] text-[#c6c9ae] uppercase font-bold tracking-wider block mb-1.5">
                Brand / Manufacturer
              </label>
              <select
                value={filters.brand}
                onChange={(e) => handleFilterChange('brand', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white focus:outline-none cursor-pointer"
              >
                <option value="">All Brands</option>
                {BRAND_CATALOG.map((b) => (
                  <option key={b.name} value={b.name}>
                    {b.name} ({b.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Range Slider */}
            <div className="mb-5">
              <div className="flex items-center justify-between text-[10px] uppercase font-bold text-[#c6c9ae] mb-1.5">
                <span>Budget Max</span>
                <span className="text-[#d1f032]">
                  {filters.maxPrice >= 200 ? '₹2.5+ Crore' : `₹${filters.maxPrice} Lakh`}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
                className="w-full accent-[#d1f032] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#90937a] mt-1">
                <span>₹10 Lakh</span>
                <span>₹1 Crore</span>
                <span>₹2.5 Cr+</span>
              </div>
            </div>

            {/* Fuel Type */}
            <div className="mb-5">
              <label className="text-[10px] text-[#c6c9ae] uppercase font-bold tracking-wider block mb-1.5">
                Fuel Architecture
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {['Petrol', 'Diesel', 'Electric', 'Hybrid'].map((fuel) => (
                  <button
                    key={fuel}
                    onClick={() => handleFilterChange('fuel', filters.fuel === fuel ? '' : fuel)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                      filters.fuel === fuel
                        ? 'bg-[#d1f032] text-[#181e00] border-[#d1f032]'
                        : 'bg-[#111317] text-[#c6c9ae] border-[#282a2e] hover:text-white'
                    }`}
                  >
                    {fuel}
                  </button>
                ))}
              </div>
            </div>

            {/* Transmission */}
            <div className="mb-5">
              <label className="text-[10px] text-[#c6c9ae] uppercase font-bold tracking-wider block mb-1.5">
                Transmission
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {['Automatic', 'Manual', 'DCT', 'CVT'].map((trans) => (
                  <button
                    key={trans}
                    onClick={() =>
                      handleFilterChange('transmission', filters.transmission === trans ? '' : trans)
                    }
                    className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                      filters.transmission === trans
                        ? 'bg-[#d1f032] text-[#181e00] border-[#d1f032]'
                        : 'bg-[#111317] text-[#c6c9ae] border-[#282a2e] hover:text-white'
                    }`}
                  >
                    {trans}
                  </button>
                ))}
              </div>
            </div>

            {/* Body Type */}
            <div className="mb-5">
              <label className="text-[10px] text-[#c6c9ae] uppercase font-bold tracking-wider block mb-1.5">
                Body Silhouette
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {['SUV', 'Sedan', 'Coupe', 'Hatchback', 'MUV', 'EV'].map((bt) => (
                  <button
                    key={bt}
                    onClick={() =>
                      handleFilterChange('bodyType', filters.bodyType === bt ? '' : bt)
                    }
                    className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                      filters.bodyType === bt
                        ? 'bg-[#d1f032] text-[#181e00] border-[#d1f032]'
                        : 'bg-[#111317] text-[#c6c9ae] border-[#282a2e] hover:text-white'
                    }`}
                  >
                    {bt}
                  </button>
                ))}
              </div>
            </div>

            {/* Ownership */}
            <div className="mb-5">
              <label className="text-[10px] text-[#c6c9ae] uppercase font-bold tracking-wider block mb-1.5">
                Ownership Count
              </label>
              <div className="grid grid-cols-3 gap-1">
                {['1st Owner', '2nd Owner', '3rd Owner+'].map((owner) => (
                  <button
                    key={owner}
                    onClick={() =>
                      handleFilterChange('ownership', filters.ownership === owner ? '' : owner)
                    }
                    className={`py-1 px-1 rounded-lg text-[11px] font-semibold border truncate transition-all ${
                      filters.ownership === owner
                        ? 'bg-[#d1f032] text-[#181e00] border-[#d1f032]'
                        : 'bg-[#111317] text-[#c6c9ae] border-[#282a2e] hover:text-white'
                    }`}
                  >
                    {owner}
                  </button>
                ))}
              </div>
            </div>

            {/* Condition Certification */}
            <div>
              <label className="text-[10px] text-[#c6c9ae] uppercase font-bold tracking-wider block mb-1.5">
                Verification Tier
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  onClick={() =>
                    handleFilterChange(
                      'condition',
                      filters.condition === 'Certified' ? '' : 'Certified'
                    )
                  }
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                    filters.condition === 'Certified'
                      ? 'bg-[#d1f032] text-[#181e00] border-[#d1f032]'
                      : 'bg-[#111317] text-[#c6c9ae] border-[#282a2e] hover:text-white'
                  }`}
                >
                  140-Pt Certified
                </button>
                <button
                  onClick={() =>
                    handleFilterChange(
                      'condition',
                      filters.condition === 'Non-certified' ? '' : 'Non-certified'
                    )
                  }
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                    filters.condition === 'Non-certified'
                      ? 'bg-[#d1f032] text-[#181e00] border-[#d1f032]'
                      : 'bg-[#111317] text-[#c6c9ae] border-[#282a2e] hover:text-white'
                  }`}
                >
                  All Vehicles
                </button>
              </div>
            </div>
          </aside>

          {/* ======================================= */}
          {/* RIGHT VEHICLE RESULTS SECTION */}
          {/* ======================================= */}
          <main className="lg:col-span-9 flex flex-col gap-6">
            {/* Top Results Bar with Counter & Sort Controls */}
            <div className="p-4 rounded-2xl bg-[#1a1c20] border border-[#282a2e] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-2">
                <span className="text-sm font-extrabold text-white">
                  {filteredCars.length.toLocaleString('en-IN')}{' '}
                  <span className="text-[#c6c9ae] font-normal">
                    {filteredCars.length === 1 ? 'Car Available' : 'Cars Found'}
                  </span>
                </span>
                <span className="text-xs text-[#d1f032] px-2 py-0.5 rounded-full bg-[#d1f032]/10 border border-[#d1f032]/20 font-bold">
                  12,450+ PAN-INDIA REPO
                </span>
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#c6c9ae] whitespace-nowrap font-semibold">
                  Sort By:
                </span>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">Newest Model Year</option>
                  <option value="lowest-km">Lowest Kilometers</option>
                </select>
              </div>
            </div>

            {/* Active Filter Chips */}
            {(filters.city || filters.brand || filters.bodyType || filters.fuel || filters.searchQuery) && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-[#c6c9ae] font-semibold">Active:</span>
                {filters.city && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#282a2e] text-xs text-white">
                    <span>{filters.city}</span>
                    <button onClick={() => handleFilterChange('city', '')} className="hover:text-[#d1f032]">
                      ×
                    </button>
                  </span>
                )}
                {filters.brand && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#282a2e] text-xs text-white">
                    <span>{filters.brand}</span>
                    <button onClick={() => handleFilterChange('brand', '')} className="hover:text-[#d1f032]">
                      ×
                    </button>
                  </span>
                )}
                {filters.bodyType && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#282a2e] text-xs text-white">
                    <span>{filters.bodyType}</span>
                    <button onClick={() => handleFilterChange('bodyType', '')} className="hover:text-[#d1f032]">
                      ×
                    </button>
                  </span>
                )}
                {filters.fuel && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#282a2e] text-xs text-white">
                    <span>{filters.fuel}</span>
                    <button onClick={() => handleFilterChange('fuel', '')} className="hover:text-[#d1f032]">
                      ×
                    </button>
                  </span>
                )}
                {filters.searchQuery && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#282a2e] text-xs text-white">
                    <span>"{filters.searchQuery}"</span>
                    <button onClick={() => handleFilterChange('searchQuery', '')} className="hover:text-[#d1f032]">
                      ×
                    </button>
                  </span>
                )}
                <button
                  onClick={resetFilters}
                  className="text-xs text-[#d1f032] hover:underline font-bold ml-1"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Vehicle Results Grid */}
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="py-20 px-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#282a2e] flex items-center justify-center text-[#d1f032] mb-4">
                  <span className="material-symbols-outlined text-[32px]">no_crash</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No Matching Machines Found</h3>
                <p className="text-xs text-[#c6c9ae] max-w-md mb-6">
                  We could not find any vehicles matching your exact filter combinations. Try loosening the budget or selecting another Indian city hub.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 rounded-full bg-[#d1f032] text-[#181e00] font-bold text-xs shadow-lg hover:brightness-110 transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#111317] p-6 overflow-y-auto">
          <div className="flex items-center justify-between pb-4 border-b border-[#282a2e] mb-6">
            <h3 className="text-lg font-bold text-white">Filters</h3>
            <button onClick={() => setMobileFilterOpen(false)} className="text-white">
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-xs font-bold text-[#c6c9ae] block mb-2">Location / City</label>
              <select
                value={filters.city}
                onChange={(e) => handleFilterChange('city', e.target.value)}
                className="w-full p-3 rounded-xl bg-[#1e2024] border border-[#282a2e] text-white text-xs"
              >
                <option value="">All Indian Hubs</option>
                {INDIAN_CITIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-[#c6c9ae] block mb-2">Brand</label>
              <select
                value={filters.brand}
                onChange={(e) => handleFilterChange('brand', e.target.value)}
                className="w-full p-3 rounded-xl bg-[#1e2024] border border-[#282a2e] text-white text-xs"
              >
                <option value="">All Brands</option>
                {BRAND_CATALOG.map((b) => (
                  <option key={b.name} value={b.name}>{b.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-[#c6c9ae] block mb-2">Max Budget (₹ Lakhs)</label>
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
                className="w-full accent-[#d1f032]"
              />
              <div className="text-right text-[#d1f032] font-bold text-xs mt-1">
                Up to ₹{filters.maxPrice} Lakh
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#c6c9ae] block mb-2">Fuel</label>
              <div className="grid grid-cols-2 gap-2">
                {['Petrol', 'Diesel', 'Electric', 'Hybrid'].map((f) => (
                  <button
                    key={f}
                    onClick={() => handleFilterChange('fuel', filters.fuel === f ? '' : f)}
                    className={`p-2 rounded-xl text-xs font-bold border ${
                      filters.fuel === f ? 'bg-[#d1f032] text-[#181e00] border-[#d1f032]' : 'bg-[#1e2024] text-white border-[#282a2e]'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 flex gap-3">
            <button
              onClick={() => {
                resetFilters();
                setMobileFilterOpen(false);
              }}
              className="flex-1 py-3 rounded-full bg-[#1e2024] text-white font-bold text-xs border border-[#282a2e]"
            >
              Reset
            </button>
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="flex-1 py-3 rounded-full bg-[#d1f032] text-[#181e00] font-bold text-xs"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
