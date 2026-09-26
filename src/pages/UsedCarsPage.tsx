import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CarCard } from '../components/CarCard';

export const UsedCarsPage: React.FC = () => {
  const { cars, navigate } = useApp();

  const [activeSection, setActiveSection] = useState<string>('Certified Used Cars');

  const filtered = cars.filter((c) => {
    if (activeSection === 'Certified Used Cars') return c.condition === 'Certified';
    if (activeSection === 'First Owner Cars') return c.ownership === '1st Owner';
    if (activeSection === 'Low KM Cars') return c.km < 12000;
    if (activeSection === 'Best Value Cars') return c.priceLakhs < 30;
    if (activeSection === 'Cars Under ₹25 Lakh') return c.priceLakhs <= 25;
    return true;
  });

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#282a2e]/60">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#c6c9ae] mb-1">
              <span>Home</span>
              <span>/</span>
              <span className="text-[#d1f032]">Certified Pre-Owned</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Certified Used Cars in India
            </h1>
            <p className="text-xs text-[#c6c9ae] mt-1">
              100% verified RC, zero accidental history, and guaranteed 7-day money back.
            </p>
          </div>

          <button
            onClick={() => navigate('/buy-cars')}
            className="px-6 py-2.5 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs shadow-md transition-all"
          >
            Open All Filters
          </button>
        </div>

        {/* Section Pill Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            'Certified Used Cars',
            'First Owner Cars',
            'Low KM Cars',
            'Best Value Cars',
            'Cars Under ₹25 Lakh'
          ].map((sec) => (
            <button
              key={sec}
              onClick={() => setActiveSection(sec)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeSection === sec
                  ? 'bg-[#d1f032] text-[#181e00] shadow-sm'
                  : 'bg-[#1a1c20] hover:bg-[#282a2e] text-[#c6c9ae] hover:text-white border border-[#282a2e]'
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};
