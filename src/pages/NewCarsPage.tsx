import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BRAND_CATALOG } from '../data/cars';

interface NewCarModel {
  id: string;
  name: string;
  brand: string;
  startingPrice: string;
  variantsCount: number;
  fuel: string;
  mileage: string;
  rating: number;
  launchBadge: 'Newly Launched' | 'Upcoming 2025' | 'Hot Booking' | 'EV Flagship';
  category: 'Popular' | 'Upcoming' | 'Electric' | 'Family' | 'SUV';
  image: string;
}

export const NewCarsPage: React.FC = () => {
  const { navigate, setTestDriveModalCar, cars } = useApp();

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedBrand, setSelectedBrand] = useState<string>('');

  const newCarListings: NewCarModel[] = [
    {
      id: 'porsche-macan-ev',
      name: 'Porsche Macan EV Turbo',
      brand: 'Porsche',
      startingPrice: '₹1.65 Cr',
      variantsCount: 3,
      fuel: 'Electric (100 kWh)',
      mileage: '591 km Range',
      rating: 4.95,
      launchBadge: 'EV Flagship',
      category: 'Electric',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtJPJEgxNqD8JAKCljE5xUFBiw5wl9VXxmV9Ung2sj4MZ9v_wqOHvTDfHqoW0CiHfVWTrsJKTfUcf9ioG_WwstEuZrVlOZJ2oOLx06beR7A8jbK_6Sep-Mj5Av8AsVbHMkd11ihQ7fFiDkylPl5L_wNvsvBpgNRhH2znW9-0BiqwdNj_TOBuSi0HR0kJmppgiLuUt1QLghRhzrldwx6isk0_guAn-OHyfPwgCcUQIQ2iuO4nduIMOs9g'
    },
    {
      id: 'bmw-m5-hybrid',
      name: 'BMW M5 V8 PHEV (G90)',
      brand: 'BMW',
      startingPrice: '₹1.99 Cr',
      variantsCount: 2,
      fuel: 'Plug-in Hybrid (727 PS)',
      mileage: '10.2 km/l ARAI',
      rating: 4.9,
      launchBadge: 'Newly Launched',
      category: 'Popular',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt4LJ8CoFg_9XC_WwUDSLLFjsGwLgAwL7O3ccoi_pZ2LwK1nLP8lV5e4dFvLziG-m8NhIOisZsMMAxzZZIL1i-mJOSvDktBjDeFyrdPSyDuJLIuSHwUiyZre24kiNiedAdjwZ0Rz582aadz97ScG-ct0z7ZtrKL2Mv2D3Is8Cl71QkTutMIJgafitgBsANTnAxkLm7HDiTwwRi9EWuU6Ut2BbmCTXniTyIcK5R8Hxnqpb5O31JckXHPQ'
    },
    {
      id: 'mahindra-thar-roxx-new',
      name: 'Mahindra Thar Roxx 4x4',
      brand: 'Mahindra',
      startingPrice: '₹12.99 Lakh',
      variantsCount: 18,
      fuel: 'Petrol / Diesel mHawk',
      mileage: '15.2 km/l ARAI',
      rating: 4.88,
      launchBadge: 'Hot Booking',
      category: 'SUV',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6Qe-1OYCQzgSDcIML4ZvF-SaXW9Uaw9rgBB2j40o6VBGaMn61gGBugcELQ5a1dIIUNGhXLmp8uTlIIfY5QBhHpeHsX__T-t9nWEvElWwHpUssLxNPVnJV5LU2t05b370VwdNjhkogGnjcPlan-V8Z0PZojvsgafLunasgt4gnfD9WtwwhXCru4lAnJK1na81VhbuvlXuxXJpGw6lXrnNYMZ-KY-PeYYMG152kGxg0qUwcpMmnlLx_iQ'
    },
    {
      id: 'tata-curvv-ev',
      name: 'Tata Curvv EV Coupe',
      brand: 'Tata',
      startingPrice: '₹17.49 Lakh',
      variantsCount: 7,
      fuel: 'Electric (55 kWh)',
      mileage: '502 km Range',
      rating: 4.82,
      launchBadge: 'Newly Launched',
      category: 'Electric',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtJPJEgxNqD8JAKCljE5xUFBiw5wl9VXxmV9Ung2sj4MZ9v_wqOHvTDfHqoW0CiHfVWTrsJKTfUcf9ioG_WwstEuZrVlOZJ2oOLx06beR7A8jbK_6Sep-Mj5Av8AsVbHMkd11ihQ7fFiDkylPl5L_wNvsvBpgNRhH2znW9-0BiqwdNj_TOBuSi0HR0kJmppgiLuUt1QLghRhzrldwx6isk0_guAn-OHyfPwgCcUQIQ2iuO4nduIMOs9g'
    },
    {
      id: 'toyota-land-cruiser-prado',
      name: 'Toyota Land Cruiser 250 Prado',
      brand: 'Toyota',
      startingPrice: '₹1.10 Cr',
      variantsCount: 3,
      fuel: '2.8L Turbo Diesel 4WD',
      mileage: '12.8 km/l',
      rating: 4.92,
      launchBadge: 'Upcoming 2025',
      category: 'SUV',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqbPkG-h6uzJqIf-h3so-ih0t3lLmjQMUQwVTb2tmdB7-ISprz1EIlwDtcvWUW5GG726ZDGUjR3yn0uLfRAncFlh5OuxH97jAfNz_VrPKMcM1Brie42rrFAAnv7SXCrBm6ScPo_-hNcHL3jm1DVbW0csTnLZTjhoXtwrHTKeCCvYqftciSMK5SpYucbk8iaV-JnWNEp-fCgF9xl9S7-Xozc7SaVp3QtN-r7ZQPow7Ws_4M5qOkwgMzOg'
    },
    {
      id: 'mercedes-e-class-lwb',
      name: 'Mercedes-Benz E-Class LWB (V214)',
      brand: 'Mercedes-Benz',
      startingPrice: '₹78.50 Lakh',
      variantsCount: 4,
      fuel: 'Petrol / Diesel Mild-Hybrid',
      mileage: '14.8 km/l',
      rating: 4.9,
      launchBadge: 'Newly Launched',
      category: 'Family',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1mnM4bvFHiuZ2tci1RTOOEixWO9YOqYFooC0aXvaMICEN4BEpAMmEilKfZMEmwoeKY7iW98TUaVhSj4JQRMd5Mq3puwpdrL_CYbFFf4JxuK2zYEiNTcHwNVr1v3LeNPMHuFSJxmUoyiONkhojfebCFp_0j7yB5mfiGBZtVzAWUDaEr5XLAHcUl7nAotB9mux4qJCDHDPifAk90ZoqqnYRdAlw9wUTMFSAaWkXkUWYQ9QcblKx-JQYCA'
    }
  ];

  const filtered = newCarListings.filter((car) => {
    if (activeCategory !== 'All' && car.category !== activeCategory) return false;
    if (selectedBrand && car.brand !== selectedBrand) return false;
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
              <span className="text-[#d1f032]">Brand New Showroom</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Brand New Car Launches &amp; Upcoming Drops
            </h1>
            <p className="text-xs text-[#c6c9ae] mt-1">
              Ex-showroom pricing, official dealer allocations, and VIP test drives across India.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-4 py-2 rounded-full bg-[#1e2024] border border-[#282a2e] text-xs text-white focus:outline-none"
            >
              <option value="">All Manufacturers</option>
              {BRAND_CATALOG.map((b) => (
                <option key={b.name} value={b.name}>{b.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {['All', 'Popular', 'Upcoming', 'Electric', 'Family', 'SUV'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#d1f032] text-[#181e00] shadow-sm'
                  : 'bg-[#1a1c20] hover:bg-[#282a2e] text-[#c6c9ae] hover:text-white border border-[#282a2e]'
              }`}
            >
              {cat === 'All' ? 'All Launches' : `${cat} Cars`}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-[#1a1c20] border border-[#282a2e] p-6 shadow-xl flex flex-col justify-between space-y-4 hover:border-[#d1f032]/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold text-[#d1f032] uppercase tracking-wider">
                    {item.brand}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#d1f032]/15 text-[#d1f032] text-[10px] font-bold border border-[#d1f032]/30">
                    {item.launchBadge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#d1f032] transition-colors">
                  {item.name}
                </h3>
                <div className="text-xs text-[#c6c9ae] mt-0.5">
                  {item.variantsCount} Available Trims • {item.mileage}
                </div>

                <div className="relative w-full h-44 flex items-center justify-center bg-[#0c0e12] rounded-2xl p-2 my-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs py-2 bg-[#111317] rounded-xl px-3 mb-2">
                  <div>
                    <span className="text-[10px] text-[#c6c9ae] block">Fuel Type</span>
                    <span className="font-bold text-white truncate block">{item.fuel}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#c6c9ae] block">Expert Rating</span>
                    <span className="font-bold text-[#d1f032] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">star</span>
                      {item.rating} / 5.0
                    </span>
                  </div>
                </div>

                <div className="flex items-baseline justify-between pt-2">
                  <div>
                    <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block">
                      Ex-Showroom Starting
                    </span>
                    <span className="text-2xl font-black text-white">{item.startingPrice}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#282a2e]">
                <button
                  onClick={() => setTestDriveModalCar(cars[0])}
                  className="py-2.5 rounded-xl bg-[#282a2e] hover:bg-[#333539] text-white text-xs font-bold transition-colors"
                >
                  Book Priority Drive
                </button>
                <button
                  onClick={() => navigate('/buy-cars')}
                  className="py-2.5 rounded-xl bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] text-xs font-bold transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
