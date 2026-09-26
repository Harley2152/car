import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CarCard } from '../components/CarCard';

export const CarDetailsPage: React.FC<{ carId: string }> = ({ carId }) => {
  const {
    cars,
    navigate,
    toggleWishlist,
    isInWishlist,
    setContactModalCar,
    setTestDriveModalCar,
    setOfferModalCar,
    setShareModalCar,
    setInspectionModalCar,
    showToast
  } = useApp();

  const car = cars.find((c) => c.id === carId) || cars[0];
  const wishlisted = isInWishlist(car.id);

  // Gallery Active View Tab
  const [galleryTab, setGalleryTab] = useState<'all' | 'exterior' | 'interior' | 'cockpit'>('all');
  const [selectedImage, setSelectedImage] = useState<string>(car.images.hero);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Interactive on-page EMI calculator state
  const [downPayment, setDownPayment] = useState<number>(Math.round(car.priceLakhs * 0.2));
  const [loanTenureYears, setLoanTenureYears] = useState<number>(5);
  const interestRate = 8.9; // 8.9% p.a.

  const loanAmountLakhs = Math.max(car.priceLakhs - downPayment, 0);
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = loanTenureYears * 12;
  const calculatedMonthlyEmi =
    loanAmountLakhs > 0
      ? Math.round(
          (loanAmountLakhs * 100000 * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        )
      : 0;

  // Similar cars (same brand or same bodyType)
  const similarCars = cars
    .filter((c) => c.id !== car.id && (c.brand === car.brand || c.bodyType === car.bodyType))
    .slice(0, 3);

  // All available images
  const allImages = [
    car.images.hero,
    ...(car.images.exterior || []),
    ...(car.images.interior || []),
    ...(car.images.dashboard || [])
  ];

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#c6c9ae] mb-6">
          <button onClick={() => navigate('/')} className="hover:text-white transition-colors">
            Home
          </button>
          <span>/</span>
          <button onClick={() => navigate('/buy-cars')} className="hover:text-white transition-colors">
            {car.condition === 'Certified' ? 'Certified Used Cars' : 'Vehicles'}
          </button>
          <span>/</span>
          <button
            onClick={() => navigate(`/brands/${encodeURIComponent(car.brand)}`)}
            className="hover:text-white transition-colors"
          >
            {car.brand}
          </button>
          <span>/</span>
          <span className="text-[#d1f032] font-semibold truncate">{car.title}</span>
        </nav>

        {/* Top Header: Title, Telemetry Badges, and Fast Actions */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#282a2e]/60">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#d1f032]/15 text-[#d1f032] text-xs font-bold border border-[#d1f032]/30">
                {car.badge || `${car.brand} Certified`}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#282a2e] text-white text-xs font-semibold">
                {car.year} Model
              </span>
              <span className="px-3 py-1 rounded-full bg-[#282a2e] text-white text-xs font-semibold">
                {car.km.toLocaleString('en-IN')} KM
              </span>
              <span className="px-3 py-1 rounded-full bg-[#282a2e] text-white text-xs font-semibold">
                {car.city}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {car.title}
            </h1>
            <p className="text-sm text-[#c6c9ae] mt-1">
              {car.variant} • Finished in {car.color} • {car.ownership}
            </p>
          </div>

          {/* Price & Action Row */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-col lg:items-end">
              <span className="text-[10px] text-[#c6c9ae] uppercase font-bold tracking-wider">
                Certified Price
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white">
                {car.priceFormatted}
              </div>
              <span className="text-xs font-bold text-[#d1f032]">{car.emiFormatted}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleWishlist(car.id)}
                aria-label="Wishlist"
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors border ${
                  wishlisted
                    ? 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                    : 'bg-[#1e2024] hover:bg-[#282a2e] text-[#c6c9ae] hover:text-white border-[#282a2e]'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={wishlisted ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  favorite
                </span>
              </button>

              <button
                onClick={() => setShareModalCar(car)}
                aria-label="Share"
                className="w-12 h-12 rounded-full bg-[#1e2024] hover:bg-[#282a2e] text-[#c6c9ae] hover:text-white border border-[#282a2e] flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-[22px]">share</span>
              </button>

              <button
                onClick={() => setTestDriveModalCar(car)}
                className="px-6 py-3 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs sm:text-sm shadow-[0_8px_24px_rgba(209,240,50,0.35)] transition-all cursor-pointer"
              >
                Book Test Drive
              </button>
            </div>
          </div>
        </div>

        {/* Staged Image Gallery & Purchase Flank */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Main Gallery Visualizer (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="relative w-full h-[380px] sm:h-[480px] rounded-3xl bg-[#0c0e12] border border-[#282a2e] flex items-center justify-center p-6 overflow-hidden shadow-2xl group">
              {/* Radial underglow */}
              <div className="absolute inset-0 bg-radial-gradient from-[#d1f032]/10 via-transparent to-transparent pointer-events-none"></div>

              <img
                src={selectedImage}
                alt={car.title}
                className="w-full h-full object-contain cursor-pointer transition-transform duration-500 group-hover:scale-105"
                onClick={() => setFullscreenImage(selectedImage)}
              />

              {/* Fullscreen Expansion Hint */}
              <button
                onClick={() => setFullscreenImage(selectedImage)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#1e2024]/80 backdrop-blur-md text-white hover:bg-[#d1f032] hover:text-[#181e00] flex items-center justify-center transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-[20px]">fullscreen</span>
              </button>

              {/* Verified Inspection Score Badge Overlay */}
              <button
                onClick={() => setInspectionModalCar(car)}
                className="absolute bottom-4 left-4 px-4 py-2 rounded-2xl bg-[#1e2024]/90 backdrop-blur-md border border-[#282a2e] hover:border-[#d1f032] text-left flex items-center gap-3 transition-colors cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-[#d1f032] text-[#181e00] font-black text-xs flex items-center justify-center">
                  {car.history.inspectionScore}
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <span>140-Point Passed</span>
                    <span className="material-symbols-outlined text-[14px] text-[#d1f032]">
                      arrow_forward
                    </span>
                  </div>
                  <div className="text-[10px] text-[#c6c9ae]">Click to view diagnostics</div>
                </div>
              </button>
            </div>

            {/* Thumbnail Ribbon */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-24 h-16 rounded-2xl bg-[#0c0e12] border p-1 shrink-0 overflow-hidden transition-all ${
                    selectedImage === img
                      ? 'border-[#d1f032] scale-105 shadow-md'
                      : 'border-[#282a2e] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Contiguous Purchase & Seller Dock (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Quick Status Overview Card */}
            <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-xl space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-[#d1f032]">
                  verified
                </span>
                <span>AutoHub Assurance Passport</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-[#282a2e]/60">
                  <span className="text-[#c6c9ae]">RC Status</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    {car.history.rcStatus}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#282a2e]/60">
                  <span className="text-[#c6c9ae]">RTO Jurisdiction</span>
                  <span className="text-white font-bold">{car.history.regState}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#282a2e]/60">
                  <span className="text-[#c6c9ae]">Insurance Validity</span>
                  <span className="text-white font-bold">{car.history.insuranceValidTill}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#282a2e]/60">
                  <span className="text-[#c6c9ae]">Accident Claims</span>
                  <span className="text-[#d1f032] font-bold">{car.history.accidentHistory}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-[#c6c9ae]">Money-Back Guarantee</span>
                  <span className="text-white font-bold">7 Days / 500 KM Full Refund</span>
                </div>
              </div>

              {/* Conversion Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => setContactModalCar(car)}
                  className="w-full py-3 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Contact Verified Seller</span>
                </button>

                <button
                  onClick={() => setOfferModalCar(car)}
                  className="w-full py-3 rounded-full bg-[#282a2e] hover:bg-[#333539] text-white font-bold text-xs border border-[#333539] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#d1f032]">
                    payments
                  </span>
                  <span>Make an Offer</span>
                </button>
              </div>
            </div>

            {/* Seller Information Module */}
            <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#282a2e] text-[#d1f032] font-black flex items-center justify-center text-sm shrink-0 border border-[#333539]">
                  {car.seller.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white truncate">
                      {car.seller.name}
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-[#d1f032]">
                      verified
                    </span>
                  </div>
                  <div className="text-[11px] text-[#c6c9ae] mt-0.5">
                    {car.seller.type} • {car.seller.location}
                  </div>
                  <div className="flex items-center gap-1 text-[#d1f032] text-xs font-bold mt-1">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span>{car.seller.rating}</span>
                    <span className="text-[#c6c9ae] font-normal">({car.seller.reviewsCount} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#282a2e]/60 flex items-center justify-between text-xs text-[#c6c9ae]">
                <span>Response Time:</span>
                <span className="text-white font-semibold">{car.seller.responseTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Matrix */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider">
              Telemetry &amp; Mechanical Architecture
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">Technical Specifications</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
              <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                Engine
              </span>
              <span className="text-xs sm:text-sm font-bold text-white">{car.specs.engine}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
              <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                Power Output
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#d1f032]">{car.specs.power}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
              <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                Peak Torque
              </span>
              <span className="text-xs sm:text-sm font-bold text-white">{car.specs.torque}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
              <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                0–100 km/h
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#d1f032]">
                {car.specs.acceleration}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
              <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                Transmission
              </span>
              <span className="text-xs sm:text-sm font-bold text-white">
                {car.specs.transmission}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
              <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                Drive Layout
              </span>
              <span className="text-xs sm:text-sm font-bold text-white">{car.specs.driveType}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
              <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                Fuel Efficiency / Range
              </span>
              <span className="text-xs sm:text-sm font-bold text-white">{car.specs.mileage}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
              <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                Seating Capacity
              </span>
              <span className="text-xs sm:text-sm font-bold text-white">{car.specs.seating} Seats</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
              <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                Cargo / Boot Space
              </span>
              <span className="text-xs sm:text-sm font-bold text-white">{car.specs.bootSpace}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1a1c20] border border-[#282a2e]">
              <span className="text-[10px] text-[#c6c9ae] uppercase font-bold block mb-1">
                Top Speed
              </span>
              <span className="text-xs sm:text-sm font-bold text-white">
                {car.specs.topSpeed || '250 km/h'}
              </span>
            </div>
          </div>
        </section>

        {/* Features Checklist Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Equipped Luxury &amp; Tech Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {car.features.map((feat) => (
              <div
                key={feat}
                className="p-3.5 rounded-2xl bg-[#1a1c20] border border-[#282a2e] flex items-center gap-3"
              >
                <div className="w-7 h-7 rounded-full bg-[#d1f032]/20 text-[#d1f032] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <span className="text-xs font-semibold text-[#e2e2e8]">{feat}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Financing / EMI Calculator Widget */}
        <section className="mb-12 p-8 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider">
                Financial Engineering
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">Interactive EMI Calculator</h2>
              <p className="text-xs text-[#c6c9ae] mt-1">
                Calculate estimated monthly repayments with partner banks (HDFC, ICICI, Kotak Prime).
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#111317] border border-[#282a2e] text-right">
              <span className="text-[10px] text-[#c6c9ae] uppercase font-bold">Estimated Monthly EMI</span>
              <div className="text-2xl font-extrabold text-[#d1f032]">
                ₹{calculatedMonthlyEmi.toLocaleString('en-IN')}/mo
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold text-white mb-2">
                  <span>Down Payment</span>
                  <span className="text-[#d1f032]">₹{downPayment} Lakh</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={Math.round(car.priceLakhs * 0.8)}
                  step="1"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full accent-[#d1f032] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-white mb-2">
                  <span>Loan Tenure</span>
                  <span className="text-[#d1f032]">{loanTenureYears} Years ({loanTenureYears * 12} Months)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  step="1"
                  value={loanTenureYears}
                  onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                  className="w-full accent-[#d1f032] cursor-pointer"
                />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#111317] border border-[#282a2e] space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-[#c6c9ae]">Loan Principal Amount</span>
                <span className="text-white font-bold">₹{loanAmountLakhs} Lakh</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#c6c9ae]">Annual Interest Rate</span>
                <span className="text-white font-bold">{interestRate}% Fixed</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#c6c9ae]">Processing Fee</span>
                <span className="text-emerald-400 font-bold">ZERO (AutoHub Escrow Waiver)</span>
              </div>
              <div className="pt-2 border-t border-[#282a2e]">
                <button
                  onClick={() => navigate('/finance')}
                  className="w-full py-2.5 rounded-full bg-[#d1f032] text-[#181e00] font-bold text-xs hover:bg-[#b5d401] transition-all"
                >
                  Apply for Instant Pre-Approved Loan
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Cars Section */}
        {similarCars.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider">
                  Related Allocations
                </span>
                <h2 className="text-2xl font-bold text-white mt-1">Similar Verified Machines</h2>
              </div>
              <button
                onClick={() => navigate('/buy-cars')}
                className="text-xs font-bold text-[#d1f032] hover:underline"
              >
                View Full Showroom
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarCars.map((c) => (
                <CarCard key={c.id} car={c} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Fullscreen Image Viewer Modal */}
      {fullscreenImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[#d1f032] transition-colors"
          >
            <span className="material-symbols-outlined text-[32px]">close</span>
          </button>
          <img
            src={fullscreenImage}
            alt={car.title}
            className="max-w-full max-h-[85vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          />
        </div>
      )}
    </div>
  );
};
