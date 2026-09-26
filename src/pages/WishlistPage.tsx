import React from 'react';
import { useApp } from '../context/AppContext';

export const WishlistPage: React.FC = () => {
  const { cars, wishlist, toggleWishlist, navigate, setContactModalCar, setTestDriveModalCar } = useApp();

  const savedCars = cars.filter((c) => wishlist.includes(c.id));

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Breadcrumb & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#282a2e]/60">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#c6c9ae] mb-1">
              <span>Home</span>
              <span>/</span>
              <span className="text-[#d1f032]">Saved Cars</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              My Saved Garage ({savedCars.length})
            </h1>
            <p className="text-xs text-[#c6c9ae] mt-1">
              Real-time price drop telemetry and active status for your shortlisted allocations.
            </p>
          </div>

          {savedCars.length > 0 && (
            <button
              onClick={() => navigate('/buy-cars')}
              className="px-6 py-2.5 rounded-full bg-[#1e2024] hover:bg-[#282a2e] text-xs font-bold text-white border border-[#282a2e] transition-colors"
            >
              Add More Cars
            </button>
          )}
        </div>

        {savedCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedCars.map((car) => (
              <div
                key={car.id}
                className="rounded-3xl bg-[#1a1c20] border border-[#282a2e] p-6 shadow-xl flex flex-col justify-between space-y-4 hover:border-[#d1f032]/40 transition-all group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <span className="text-[10px] font-bold text-[#d1f032] uppercase tracking-wider block">
                        {car.brand} Certified
                      </span>
                      <h3
                        onClick={() => navigate(`/car/${car.id}`)}
                        className="text-base font-bold text-white group-hover:text-[#d1f032] transition-colors cursor-pointer truncate"
                      >
                        {car.title}
                      </h3>
                      <span className="text-xs text-[#c6c9ae]">
                        {car.year} • {car.city} • {car.km.toLocaleString('en-IN')} KM
                      </span>
                    </div>

                    <button
                      onClick={() => toggleWishlist(car.id)}
                      aria-label="Remove from Wishlist"
                      className="w-8 h-8 rounded-full bg-[#282a2e] hover:bg-rose-500/20 text-[#c6c9ae] hover:text-rose-400 flex items-center justify-center transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                  </div>

                  {/* Car Image with Drop Badge */}
                  <div
                    onClick={() => navigate(`/car/${car.id}`)}
                    className="relative w-full h-44 flex items-center justify-center bg-[#0c0e12] rounded-2xl p-2 cursor-pointer mb-3"
                  >
                    <img
                      src={car.images.hero}
                      alt={car.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    {car.priceDropLakhs && (
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#d1f032] text-[#181e00] text-[10px] font-black">
                        -₹{car.priceDropLakhs} Lakh Drop
                      </span>
                    )}
                  </div>

                  {/* Specs & Pricing */}
                  <div className="grid grid-cols-3 gap-2 text-center py-2 bg-[#111317] rounded-xl text-xs mb-3">
                    <div>
                      <span className="text-[10px] text-[#c6c9ae] block">Fuel</span>
                      <span className="font-bold text-white">{car.fuel}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#c6c9ae] block">Transmission</span>
                      <span className="font-bold text-white truncate px-1">{car.transmission}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#c6c9ae] block">Owners</span>
                      <span className="font-bold text-white">{car.ownership}</span>
                    </div>
                  </div>

                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xl font-black text-white">{car.priceFormatted}</span>
                    <span className="text-xs font-semibold text-[#d1f032]">{car.emiFormatted}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#282a2e]">
                  <button
                    onClick={() => setContactModalCar(car)}
                    className="py-2.5 rounded-xl bg-[#282a2e] hover:bg-[#333539] text-white text-xs font-bold transition-colors"
                  >
                    Contact Seller
                  </button>
                  <button
                    onClick={() => navigate(`/car/${car.id}`)}
                    className="py-2.5 rounded-xl bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] text-xs font-bold transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-24 px-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] text-center flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#282a2e] flex items-center justify-center text-[#d1f032] mb-4">
              <span className="material-symbols-outlined text-[36px]">favorite_border</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No cars saved yet</h3>
            <p className="text-xs text-[#c6c9ae] max-w-md mb-6">
              Browse AutoHub's certified inventory of luxury and everyday machines and click the heart icon to save vehicles to your garage.
            </p>
            <button
              onClick={() => navigate('/buy-cars')}
              className="px-8 py-3 rounded-full bg-[#d1f032] text-[#181e00] font-bold text-xs shadow-lg hover:brightness-110 transition-all"
            >
              Explore Cars
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
