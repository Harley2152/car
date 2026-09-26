import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CarCard } from '../components/CarCard';
import { BRAND_CATALOG, BODY_TYPES } from '../data/cars';

export const HomePage: React.FC = () => {
  const { cars, navigate, showToast } = useApp();

  // Hero Search Console State
  const [selectedCity, setSelectedCity] = useState('Mumbai, Maharashtra');
  const [selectedMake, setSelectedMake] = useState('All Makes');
  const [selectedBudget, setSelectedBudget] = useState('₹15 Lakh - ₹1.8 Cr');
  const [activeMode, setActiveMode] = useState<'buy' | 'sell' | 'rent'>('buy');

  // Featured Cars Filter
  const [featuredFilter, setFeaturedFilter] = useState<string>('All Featured');

  // Valuation AI Widget State
  const [valModel, setValModel] = useState('Mercedes-Benz C-Class (2020–2023)');
  const [valYear, setValYear] = useState('2023');
  const [valKm, setValKm] = useState('18,400 km');
  const [valEstimate, setValEstimate] = useState('₹44,50,000 – ₹48,20,000');

  const handleHeroSearch = () => {
    navigate(`/buy-cars?city=${encodeURIComponent(selectedCity)}&brand=${encodeURIComponent(selectedMake)}`);
  };

  const handleRecalculateValuation = (model: string, year: string) => {
    setValModel(model);
    setValYear(year);
    if (model.includes('Porsche')) {
      setValEstimate('₹1,12,00,000 – ₹1,24,00,000');
    } else if (model.includes('BMW')) {
      setValEstimate('₹58,00,000 – ₹64,50,000');
    } else if (model.includes('Tata')) {
      setValEstimate('₹18,20,000 – ₹21,00,000');
    } else {
      setValEstimate('₹44,50,000 – ₹48,20,000');
    }
    showToast('AI Valuation refreshed based on live Indian RTO telemetry', 'info');
  };

  // Filtered cars for showcase
  const filteredCars = cars.filter((car) => {
    if (featuredFilter === 'Luxury Performance') {
      return car.brand === 'Porsche' || car.brand === 'BMW' || car.brand === 'Mercedes-Benz' || car.brand === 'Audi';
    }
    if (featuredFilter === 'Electric (EV)') {
      return car.fuel === 'Electric';
    }
    if (featuredFilter === 'Popular SUVs') {
      return car.bodyType === 'SUV';
    }
    if (featuredFilter === 'Certified Pre-Owned') {
      return car.condition === 'Certified';
    }
    return true; // All Featured
  });

  return (
    <div className="flex flex-col w-full relative overflow-x-hidden">
      {/* ========================================== */}
      {/* 1. HERO SECTION (Veloce Nocturne Staging) */}
      {/* ========================================== */}
      <section className="relative w-full min-h-[920px] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0c0e12] via-[#111317] to-[#0c0e12]">
        {/* Stage Lighting & Radial Glow Backdrop */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="absolute top-0 w-3/4 max-w-4xl h-[700px] bg-gradient-to-b from-white/10 via-white/5 to-transparent blur-3xl opacity-40"></div>
          <div className="absolute top-1/2 -translate-y-12 w-[600px] h-[340px] rounded-full bg-[#d1f032]/15 blur-[120px]"></div>
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0c0e12] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0c0e12] to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-20 max-w-[1320px] mx-auto w-full px-6 pt-8 pb-12 flex-1 flex flex-col justify-between">
          {/* Split Upper Area */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 items-start pt-4">
            {/* Left Flank: Stats */}
            <div className="md:col-span-3 flex flex-col space-y-6">
              <div className="flex flex-col">
                <span className="text-[42px] leading-none text-white font-extrabold tracking-tight">
                  100<span className="text-[#d1f032]">+</span>
                </span>
                <span className="text-[11px] font-bold uppercase text-[#c6c9ae] tracking-widest mt-1">
                  Types of Machines
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[42px] leading-none text-white font-extrabold tracking-tight">
                  20k<span className="text-[#d1f032]">+</span>
                </span>
                <span className="text-[11px] font-bold uppercase text-[#c6c9ae] tracking-widest mt-1">
                  Verified Cars Delivered
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <div className="flex text-[#d1f032]">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <span className="text-xs text-white font-bold">4.9 / 5.0</span>
                <span className="text-xs text-[#c6c9ae]">(14,800+ Reviews)</span>
              </div>
            </div>

            {/* Center Column: Bold Title */}
            <div className="md:col-span-6 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#282a2e] mb-3 border border-[#333539]">
                <span className="w-2 h-2 rounded-full bg-[#d1f032] animate-pulse"></span>
                <span className="text-[11px] font-bold text-white uppercase tracking-widest">
                  Pan-India Verified Inventory
                </span>
              </div>
              <h1 className="text-[44px] sm:text-[54px] lg:text-[62px] leading-[1.08] tracking-tight text-white font-extrabold max-w-xl">
                Find the Car That <span className="text-[#d1f032]">Fits Your Life</span>
              </h1>
              <p className="text-sm sm:text-base text-[#c6c9ae] max-w-md mt-3">
                Buy, sell, and discover certified luxury &amp; everyday cars across India with verified inspections and guaranteed buyback.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <button
                  onClick={() => navigate('/buy-cars')}
                  className="px-6 py-2.5 rounded-full bg-[#d1f032] text-[#181e00] font-bold text-sm hover:brightness-110 shadow-[0_8px_24px_rgba(209,240,50,0.35)] transition-all"
                >
                  Open Catalog
                </button>
                <button
                  onClick={() => navigate('/sell-car')}
                  className="px-6 py-2.5 rounded-full bg-[#282a2e] hover:bg-[#333539] text-white font-bold text-sm border border-[#333539] transition-all"
                >
                  Instant Valuation
                </button>
              </div>
            </div>

            {/* Right Flank: Narrative text & App Store badges */}
            <div className="md:col-span-3 flex flex-col md:items-end text-left md:text-right space-y-4">
              <p className="text-xs text-[#c6c9ae] leading-relaxed max-w-xs">
                We provide a transparent, exhilarating experience. Simple digital search tools, 140-point technical certification, and free doorstep delivery in 24 major Indian cities.
              </p>
              <div className="flex flex-col sm:flex-row md:flex-col gap-2 pt-2">
                <button
                  onClick={() => showToast('Opening iOS App Portal...', 'info')}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#282a2e] hover:bg-[#333539] transition-colors group border border-[#333539]"
                >
                  <span className="material-symbols-outlined text-[24px] text-white">phone_iphone</span>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] uppercase tracking-wider text-[#c6c9ae] font-bold">
                      Available on the
                    </span>
                    <span className="text-xs text-white font-bold leading-tight">App Store</span>
                  </div>
                </button>
                <button
                  onClick={() => showToast('AutoHub Android App ready on Google Play', 'info')}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#282a2e] hover:bg-[#333539] transition-colors group border border-[#333539]"
                >
                  <span className="material-symbols-outlined text-[24px] text-[#d1f032]">smart_display</span>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] uppercase tracking-wider text-[#c6c9ae] font-bold">
                      Get it on
                    </span>
                    <span className="text-xs text-white font-bold leading-tight">Google Play</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Vehicle Showcase Render (Lime Supercar Stance) */}
          <div className="relative w-full flex items-center justify-center my-6">
            <div className="absolute bottom-2 w-4/5 max-w-3xl h-10 bg-black/90 blur-xl rounded-full"></div>
            <img
              className="relative z-10 w-full max-w-4xl max-h-[380px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt1PGttIDH7Qns5s6_9mSNx0EDCtrDfbUym1aDaNPiFUa6co__xfJ97tMQIWiu3Db3dbmtsgJ8VZwGmCAvf83OBMS6OiXfPkwyBOqAQ-9rPhIX4PBzy0yRGfSFZCLN0NWG8NoEQnZDYy_nfQ90GyL5m9SnSty4JS1M29_MhZXQVc3Sa02fm4-bD_yQDnuiFJMQ3bqx2AMElnDgQ1T1qLRfftjrH6ksVu4OoGAanqxws8bAS1FT7WDibg"
              alt="AutoHub Flagship Showroom Supercar"
            />
            <div className="absolute -bottom-4 z-20 hidden md:block">
              <button
                onClick={() => navigate('/buy-cars')}
                className="px-8 py-2.5 rounded-full bg-[#d1f032] text-[#181e00] font-bold text-xs shadow-[0_12px_36px_rgba(209,240,50,0.45)] hover:bg-[#b5d401] transition-all"
              >
                Explore All 12,450+ Machines
              </button>
            </div>
          </div>

          {/* Persistent Floating Search Console Dock */}
          <div className="w-full max-w-5xl mx-auto mt-8">
            <div className="p-3 sm:p-4 rounded-3xl bg-[#282a2e]/90 backdrop-blur-2xl border border-[#333539] shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col gap-3">
              {/* Mode Toggle Pill Bar */}
              <div className="flex items-center justify-between pb-2 border-b border-[#333539]/60">
                <div className="flex items-center p-1 rounded-full bg-[#1e2024]">
                  <button
                    onClick={() => setActiveMode('buy')}
                    className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${
                      activeMode === 'buy'
                        ? 'bg-[#d1f032] text-[#181e00] shadow-sm'
                        : 'text-[#c6c9ae] hover:text-white'
                    }`}
                  >
                    Buy Cars
                  </button>
                  <button
                    onClick={() => {
                      setActiveMode('sell');
                      navigate('/sell-car');
                    }}
                    className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${
                      activeMode === 'sell'
                        ? 'bg-[#d1f032] text-[#181e00] shadow-sm'
                        : 'text-[#c6c9ae] hover:text-white'
                    }`}
                  >
                    Sell Your Car
                  </button>
                  <button
                    onClick={() => {
                      setActiveMode('rent');
                      navigate('/services');
                    }}
                    className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${
                      activeMode === 'rent'
                        ? 'bg-[#d1f032] text-[#181e00] shadow-sm'
                        : 'text-[#c6c9ae] hover:text-white'
                    }`}
                  >
                    Rent Luxury
                  </button>
                </div>
                <div className="hidden md:flex items-center gap-2 text-[#c6c9ae] text-[11px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#d1f032]"></span>
                  <span>100% RC VERIFIED &amp; CERTIFIED</span>
                </div>
              </div>

              {/* Master Dock Input Modules */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2 items-center">
                {/* Location Module */}
                <div className="lg:col-span-3 p-3 rounded-2xl bg-[#1e2024] hover:bg-[#333539] border border-[#282a2e] transition-colors flex items-center gap-3">
                  <span className="material-symbols-outlined text-[22px] text-[#d1f032]">
                    location_on
                  </span>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[10px] uppercase text-[#c6c9ae] font-bold tracking-wider">
                      Location
                    </span>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="bg-transparent text-white text-xs font-bold focus:outline-none cursor-pointer"
                    >
                      <option value="Mumbai, Maharashtra">Mumbai, Maharashtra</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Bangalore, Karnataka">Bangalore, Karnataka</option>
                      <option value="Hyderabad, Telangana">Hyderabad, Telangana</option>
                      <option value="Chennai, Tamil Nadu">Chennai, Tamil Nadu</option>
                      <option value="Pune, Maharashtra">Pune, Maharashtra</option>
                      <option value="Ahmedabad, Gujarat">Ahmedabad, Gujarat</option>
                    </select>
                  </div>
                </div>

                {/* Make & Model Module */}
                <div className="lg:col-span-3 p-3 rounded-2xl bg-[#1e2024] hover:bg-[#333539] border border-[#282a2e] transition-colors flex items-center gap-3">
                  <span className="material-symbols-outlined text-[22px] text-[#d1f032]">
                    directions_car
                  </span>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[10px] uppercase text-[#c6c9ae] font-bold tracking-wider">
                      Make &amp; Model
                    </span>
                    <select
                      value={selectedMake}
                      onChange={(e) => setSelectedMake(e.target.value)}
                      className="bg-transparent text-white text-xs font-bold focus:outline-none cursor-pointer"
                    >
                      <option value="All Makes">All Manufacturers</option>
                      <option value="Porsche">Porsche</option>
                      <option value="BMW">BMW</option>
                      <option value="Mercedes-Benz">Mercedes-Benz</option>
                      <option value="Audi">Audi</option>
                      <option value="Land Rover">Land Rover</option>
                      <option value="Toyota">Toyota</option>
                      <option value="Tata">Tata Motors</option>
                      <option value="Mahindra">Mahindra</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range Module */}
                <div className="lg:col-span-3 p-3 rounded-2xl bg-[#1e2024] hover:bg-[#333539] border border-[#282a2e] transition-colors flex items-center gap-3">
                  <span className="material-symbols-outlined text-[22px] text-[#d1f032]">
                    payments
                  </span>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[10px] uppercase text-[#c6c9ae] font-bold tracking-wider">
                      Budget Range
                    </span>
                    <select
                      value={selectedBudget}
                      onChange={(e) => setSelectedBudget(e.target.value)}
                      className="bg-transparent text-white text-xs font-bold focus:outline-none cursor-pointer"
                    >
                      <option value="₹15 Lakh - ₹1.8 Cr">₹15 Lakh – ₹1.8 Cr</option>
                      <option value="Under ₹15 Lakh">Under ₹15 Lakh</option>
                      <option value="₹15 Lakh - ₹35 Lakh">₹15 Lakh – ₹35 Lakh</option>
                      <option value="₹35 Lakh - ₹75 Lakh">₹35 Lakh – ₹75 Lakh</option>
                      <option value="₹75 Lakh - ₹1.5 Cr">₹75 Lakh – ₹1.5 Cr</option>
                      <option value="Above ₹1.5 Cr">Above ₹1.5 Cr (Hypercars)</option>
                    </select>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="lg:col-span-3 w-full">
                  <button
                    onClick={handleHeroSearch}
                    className="w-full h-[52px] rounded-2xl bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(209,240,50,0.35)] transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">search</span>
                    <span>Search 12,450+ Cars</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. FEATURED CARS (Luxury Showcase) */}
      {/* ========================================== */}
      <section className="w-full py-16 bg-[#111317]" id="featured-cars">
        <div className="max-w-[1320px] mx-auto px-6">
          {/* Section Header with Category Pills */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#d1f032] uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-[#d1f032]"></span>
                Showroom Vault
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Curated Showcase Vehicles
              </h2>
              <p className="text-sm text-[#c6c9ae] mt-1 max-w-xl">
                Every car is physically inspected, certified with no structural damage, and ready for immediate highway telemetry.
              </p>
            </div>

            {/* Filter Pill Switcher */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                'All Featured',
                'Luxury Performance',
                'Electric (EV)',
                'Popular SUVs',
                'Certified Pre-Owned'
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => setFeaturedFilter(category)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    featuredFilter === category
                      ? 'bg-[#d1f032] text-[#181e00] shadow-sm'
                      : 'bg-[#282a2e] hover:bg-[#333539] text-[#e2e2e8]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.slice(0, 6).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {/* View Catalog Bottom Link */}
          <div className="mt-10 text-center">
            <button
              onClick={() => navigate('/buy-cars')}
              className="px-8 py-3 rounded-full bg-[#282a2e] hover:bg-[#d1f032] hover:text-[#181e00] text-white text-xs font-bold border border-[#333539] transition-all inline-flex items-center gap-2"
            >
              <span>Explore All Verified Vehicles</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. BROWSE BY BRAND (Illuminated Badges) */}
      {/* ========================================== */}
      <section className="w-full py-16 bg-[#0c0e12] border-y border-[#282a2e]/50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider">
                Automotive Houses
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Explore by Marque</h2>
            </div>
            <button
              onClick={() => navigate('/brands')}
              className="text-xs font-bold text-[#d1f032] hover:underline flex items-center gap-1"
            >
              View All 42 Manufacturers <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {BRAND_CATALOG.slice(0, 10).map((brand) => (
              <div
                key={brand.name}
                onClick={() => navigate(`/brands/${encodeURIComponent(brand.name)}`)}
                className="p-5 rounded-2xl bg-[#1e2024] hover:bg-[#282a2e] border border-[#282a2e] hover:border-[#d1f032]/40 cursor-pointer transition-all flex flex-col items-center text-center group shadow-md"
              >
                <div className="w-12 h-12 rounded-full bg-[#282a2e] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#d1f032]/20 transition-all">
                  <span className="material-symbols-outlined text-[26px] text-[#d1f032]">
                    {brand.icon}
                  </span>
                </div>
                <span className="text-base text-white font-bold group-hover:text-[#d1f032] transition-colors">
                  {brand.name}
                </span>
                <span className="text-[11px] text-[#c6c9ae] mt-0.5">{brand.count} Models</span>
                <span className="text-[10px] text-[#90937a] mt-0.5">From {brand.minPrice}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. BROWSE BY BODY TYPE */}
      {/* ========================================== */}
      <section className="w-full py-16 bg-[#111317]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="mb-8">
            <span className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider">
              Silhouettes &amp; Form Factors
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Select Your Vehicle Archetype
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {BODY_TYPES.map((bt) => (
              <div
                key={bt.type}
                onClick={() => navigate(`/buy-cars?bodyType=${encodeURIComponent(bt.type)}`)}
                className="p-4 rounded-2xl bg-[#1a1c20] hover:bg-[#1e2024] border border-[#282a2e] hover:border-[#d1f032]/40 cursor-pointer transition-all flex flex-col items-center text-center group shadow-md"
              >
                <div className="w-10 h-10 rounded-full bg-[#282a2e] flex items-center justify-center mb-2 group-hover:bg-[#d1f032] group-hover:text-[#181e00] text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">{bt.icon}</span>
                </div>
                <span className="text-xs text-white font-bold group-hover:text-[#d1f032] transition-colors">
                  {bt.name}
                </span>
                <span className="text-[10px] text-[#c6c9ae]">{bt.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. SELL YOUR CAR 3 SIMPLE STEPS + WIDGET */}
      {/* ========================================== */}
      <section className="w-full py-16 bg-[#0c0e12] relative overflow-hidden">
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#d1f032]/10 blur-[140px] pointer-events-none"></div>
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left: Value Proposition & 3 Steps */}
              <div className="lg:col-span-7 flex flex-col space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d1f032]/15 w-fit border border-[#d1f032]/30">
                  <span className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider">
                    Instant Liquidity
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Sell Your Machine in 3 Frictionless Steps
                </h2>
                <p className="text-sm text-[#c6c9ae]">
                  No negotiating with tire-kickers. Get an algorithmic market-backed quote, doorstep inspection, and direct wire transfer in 60 minutes.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#d1f032] text-[#181e00] text-sm font-black flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Provide Registration Details</h4>
                      <p className="text-xs text-[#c6c9ae] mt-0.5">
                        Enter your car make, model year, and mileage to unlock an AI-driven valuation reflecting real-time transaction comps.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#282a2e] text-white text-sm font-black flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Complimentary Doorstep Diagnostics</h4>
                      <p className="text-xs text-[#c6c9ae] mt-0.5">
                        An AutoHub certified master engineer visits your residence or corporate garage for a 140-point technical validation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#282a2e] text-white text-sm font-black flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Instant Wire Transfer &amp; Hassle-Free RC Transfer</h4>
                      <p className="text-xs text-[#c6c9ae] mt-0.5">
                        Funds credited via RTGS before keys leave your hands. Complete RTO transfer managed entirely with zero legal liability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Interactive Valuation AI Widget */}
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-8 rounded-3xl bg-[#1e2024] border border-[#282a2e] shadow-2xl flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">Instant Valuation AI</h3>
                    <span className="text-[10px] font-bold text-[#d1f032] px-2 py-0.5 rounded bg-[#d1f032]/10 border border-[#d1f032]/20">
                      LIVE TELEMETRY
                    </span>
                  </div>
                  <p className="text-xs text-[#c6c9ae]">
                    Estimate current fair market liquidation price across India's premier pre-owned network.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="text-[10px] text-[#c6c9ae] uppercase tracking-wider font-bold block mb-1">
                        Vehicle Brand &amp; Model
                      </label>
                      <select
                        value={valModel}
                        onChange={(e) => handleRecalculateValuation(e.target.value, valYear)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#282a2e] text-white text-xs font-semibold focus:outline-none border border-[#333539]"
                      >
                        <option value="Mercedes-Benz C-Class (2020–2023)">Mercedes-Benz C-Class (2020–2023)</option>
                        <option value="BMW 3 Series Gran Limousine">BMW 3 Series Gran Limousine</option>
                        <option value="Porsche Macan / 911 Carrera">Porsche Macan / 911 Carrera</option>
                        <option value="Audi A6 45 TFSI">Audi A6 45 TFSI</option>
                        <option value="Tata Harrier / Safari Dark">Tata Harrier / Safari Dark</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] text-[#c6c9ae] uppercase tracking-wider font-bold block mb-1">
                          Registration Year
                        </label>
                        <select
                          value={valYear}
                          onChange={(e) => handleRecalculateValuation(valModel, e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#282a2e] text-white text-xs font-semibold focus:outline-none border border-[#333539]"
                        >
                          <option value="2024">2024</option>
                          <option value="2023">2023</option>
                          <option value="2022">2022</option>
                          <option value="2021">2021</option>
                          <option value="2020">2020</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] text-[#c6c9ae] uppercase tracking-wider font-bold block mb-1">
                          Odometer (KM)
                        </label>
                        <input
                          className="w-full px-4 py-2.5 rounded-xl bg-[#282a2e] text-white text-xs font-semibold focus:outline-none border border-[#333539]"
                          type="text"
                          value={valKm}
                          onChange={(e) => setValKm(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0c0e12] border border-[#282a2e] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-[#c6c9ae] uppercase font-bold">
                          Estimated Liquidation Value
                        </span>
                        <div className="text-xl sm:text-2xl font-black text-[#d1f032] mt-0.5">
                          {valEstimate}
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[28px] text-[#d1f032]">
                        monetization_on
                      </span>
                    </div>

                    <button
                      onClick={() => navigate('/sell-car')}
                      className="w-full py-3.5 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] text-xs font-bold shadow-[0_8px_24px_rgba(209,240,50,0.3)] transition-all cursor-pointer"
                    >
                      Get Free Instant Valuation &amp; Book Inspection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 6. WHY CHOOSE AUTOHUB (Trust & Assurance) */}
      {/* ========================================== */}
      <section className="w-full py-16 bg-[#111317]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider">
              The Standard of Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Engineered for Absolute Peace of Mind
            </h2>
            <p className="text-sm text-[#c6c9ae] mt-2">
              Every vehicle is screened against national crime registries, structural laser alignments, and real-world dyno verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] hover:border-[#d1f032]/40 transition-all flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#282a2e] flex items-center justify-center text-[#d1f032]">
                <span className="material-symbols-outlined text-[28px]">verified</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">140-Point Inspection</h3>
                <p className="text-xs text-[#c6c9ae] mt-2">
                  Comprehensive mechanical, electrical, chassis thickness, and diagnostics report accessible with full telemetry logs.
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#d1f032] uppercase tracking-wider">
                ZERO ACCIDENTAL RECORD
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] hover:border-[#d1f032]/40 transition-all flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#282a2e] flex items-center justify-center text-[#d1f032]">
                <span className="material-symbols-outlined text-[28px]">history</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">7-Day Money Back</h3>
                <p className="text-xs text-[#c6c9ae] mt-2">
                  Test drive your machine in your real life. If it doesn't fit your driveway, lifestyle, or driving dynamics, return it with 100% refund.
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#d1f032] uppercase tracking-wider">
                NO QUESTIONS ASKED
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] hover:border-[#d1f032]/40 transition-all flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#282a2e] flex items-center justify-center text-[#d1f032]">
                <span className="material-symbols-outlined text-[28px]">description</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Free RC &amp; Escrow</h3>
                <p className="text-xs text-[#c6c9ae] mt-2">
                  Dedicated legal liaison manages regional transport office documentation, NOC endorsements, and ownership transfer seamless.
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#d1f032] uppercase tracking-wider">
                100% COMPLIANT ESCROW
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] hover:border-[#d1f032]/40 transition-all flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#282a2e] flex items-center justify-center text-[#d1f032]">
                <span className="material-symbols-outlined text-[28px]">shield</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">12-Month Warranty</h3>
                <p className="text-xs text-[#c6c9ae] mt-2">
                  Extensive bumper-to-bumper engine, electrical, and drivetrain coverage backed by pan-India roadside assist 24x7.
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#d1f032] uppercase tracking-wider">
                PAN-INDIA ROADSIDE CARE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 7. POPULAR SEARCHES & TESTIMONIALS */}
      {/* ========================================== */}
      <section className="w-full py-16 bg-[#0c0e12] border-t border-[#282a2e]/50">
        <div className="max-w-[1320px] mx-auto px-6">
          {/* Popular Searches Pills */}
          <div className="mb-12 pb-8 border-b border-[#282a2e]/50">
            <h4 className="text-base font-bold text-white mb-4">Trending Searches in India</h4>
            <div className="flex flex-wrap gap-2.5">
              {[
                { label: 'Used Luxury Cars Mumbai', query: 'Mumbai Luxury' },
                { label: 'Used Electric Cars Bangalore', query: 'Bangalore Electric' },
                { label: 'SUVs under ₹25 Lakh', query: 'SUV under 25 Lakh' },
                { label: 'First Luxury Cars under ₹40 Lakh', query: 'Luxury under 40 Lakh' },
                { label: 'Certified Mercedes Delhi NCR', query: 'Mercedes Delhi' },
                { label: 'Porsche 911 Hyderabad', query: 'Porsche' },
                { label: 'Used Thar 4x4 Pune', query: 'Thar Pune' }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigate(`/search?q=${encodeURIComponent(item.query)}`)}
                  className="px-4 py-2 rounded-full bg-[#1e2024] hover:bg-[#282a2e] text-[#c6c9ae] hover:text-white text-xs transition-colors border border-[#282a2e]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Testimonials Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider">
                Owner Chronicles
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Verified AutoHub Owners</h2>
            </div>
            <div className="flex items-center gap-2 text-[#d1f032] text-xs font-bold">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <span>ALL REVIEWS BACKED BY BLOCKCHAIN RC ESCROW</span>
            </div>
          </div>

          {/* 3 Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#1e2024] border border-[#282a2e] flex flex-col justify-between space-y-4 shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#d1f032]">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#e2e2e8] leading-relaxed">
                  "Purchased my Porsche 911 Carrera through AutoHub Mumbai. The 140-point diagnostic scan and paint depth verification were impeccably detailed. Car arrived at my Worli apartment spotless."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-[#282a2e]/60">
                <div className="w-11 h-11 rounded-full bg-[#282a2e] text-[#d1f032] font-bold flex items-center justify-center text-sm">
                  AK
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Armaan Kapoor</span>
                  <span className="text-[11px] text-[#c6c9ae]">Bought 2022 Porsche 911 • Mumbai</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#1e2024] border border-[#282a2e] flex flex-col justify-between space-y-4 shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#d1f032]">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#e2e2e8] leading-relaxed">
                  "Sold my BMW M340i in 2 hours flat. The inspector showed up on time in Indiranagar, validated the ECU logs, and the money was in my HDFC account before 4:00 PM. No haggling."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-[#282a2e]/60">
                <div className="w-11 h-11 rounded-full bg-[#282a2e] text-[#d1f032] font-bold flex items-center justify-center text-sm">
                  VR
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Vikram Ramachandran</span>
                  <span className="text-[11px] text-[#c6c9ae]">Sold BMW M340i • Bangalore</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#1e2024] border border-[#282a2e] flex flex-col justify-between space-y-4 shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#d1f032]">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#e2e2e8] leading-relaxed">
                  "I was hesitant about buying an EV second-hand, but AutoHub provided an Audi battery degradation telemetry report confirming 98.4% health. The 7-day money back guarantee sealed the deal."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-[#282a2e]/60">
                <div className="w-11 h-11 rounded-full bg-[#282a2e] text-[#d1f032] font-bold flex items-center justify-center text-sm">
                  SD
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Shreya Deshmukh</span>
                  <span className="text-[11px] text-[#c6c9ae]">Bought Audi e-tron GT • Delhi NCR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
