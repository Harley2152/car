import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BRAND_CATALOG, INDIAN_CITIES } from '../data/cars';
import { Car, FuelType, TransmissionType } from '../types';

export const SellCarPage: React.FC = () => {
  const { setCars, navigate, showToast } = useApp();

  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [formData, setFormData] = useState<{
    brand: string;
    model: string;
    variant: string;
    year: number;
    fuel: FuelType;
    transmission: TransmissionType;
    km: number;
    ownership: '1st Owner' | '2nd Owner' | '3rd Owner+';
    accidentHistory: string;
    serviceHistory: string;
    insuranceValidTill: string;
    city: string;
    color: string;
    listingPriceLakhs: number;
    sellerPhone: string;
    sellerName: string;
  }>({
    brand: 'Mercedes-Benz',
    model: 'C-Class',
    variant: 'C200 Progressive',
    year: 2022,
    fuel: 'Petrol',
    transmission: 'Automatic',
    km: 24000,
    ownership: '1st Owner',
    accidentHistory: 'Zero Accidental Claims',
    serviceHistory: 'Full Authorized Dealer Records',
    insuranceValidTill: 'November 2026',
    city: 'Mumbai',
    color: 'Obsidian Black',
    listingPriceLakhs: 48.5,
    sellerPhone: '+91 98201 55678',
    sellerName: 'Kabir Singhania'
  });

  const [uploadedPhotos, setUploadedPhotos] = useState<{ [key: string]: string }>({
    front: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1mnM4bvFHiuZ2tci1RTOOEixWO9YOqYFooC0aXvaMICEN4BEpAMmEilKfZMEmwoeKY7iW98TUaVhSj4JQRMd5Mq3puwpdrL_CYbFFf4JxuK2zYEiNTcHwNVr1v3LeNPMHuFSJxmUoyiONkhojfebCFp_0j7yB5mfiGBZtVzAWUDaEr5XLAHcUl7nAotB9mux4qJCDHDPifAk90ZoqqnYRdAlw9wUTMFSAaWkXkUWYQ9QcblKx-JQYCA',
    rear: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1mnM4bvFHiuZ2tci1RTOOEixWO9YOqYFooC0aXvaMICEN4BEpAMmEilKfZMEmwoeKY7iW98TUaVhSj4JQRMd5Mq3puwpdrL_CYbFFf4JxuK2zYEiNTcHwNVr1v3LeNPMHuFSJxmUoyiONkhojfebCFp_0j7yB5mfiGBZtVzAWUDaEr5XLAHcUl7nAotB9mux4qJCDHDPifAk90ZoqqnYRdAlw9wUTMFSAaWkXkUWYQ9QcblKx-JQYCA',
    left: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1mnM4bvFHiuZ2tci1RTOOEixWO9YOqYFooC0aXvaMICEN4BEpAMmEilKfZMEmwoeKY7iW98TUaVhSj4JQRMd5Mq3puwpdrL_CYbFFf4JxuK2zYEiNTcHwNVr1v3LeNPMHuFSJxmUoyiONkhojfebCFp_0j7yB5mfiGBZtVzAWUDaEr5XLAHcUl7nAotB9mux4qJCDHDPifAk90ZoqqnYRdAlw9wUTMFSAaWkXkUWYQ9QcblKx-JQYCA',
    interior: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtJPJEgxNqD8JAKCljE5xUFBiw5wl9VXxmV9Ung2sj4MZ9v_wqOHvTDfHqoW0CiHfVWTrsJKTfUcf9ioG_WwstEuZrVlOZJ2oOLx06beR7A8jbK_6Sep-Mj5Av8AsVbHMkd11ihQ7fFiDkylPl5L_wNvsvBpgNRhH2znW9-0BiqwdNj_TOBuSi0HR0kJmppgiLuUt1QLghRhzrldwx6isk0_guAn-OHyfPwgCcUQIQ2iuO4nduIMOs9g'
  });

  const steps = [
    { number: 1, label: 'Car Details' },
    { number: 2, label: 'Condition' },
    { number: 3, label: 'Photos' },
    { number: 4, label: 'Pricing' },
    { number: 5, label: 'Review' },
    { number: 6, label: 'Publish' }
  ];

  const handlePublish = () => {
    const newCarId = `user-car-${Date.now()}`;
    const newCar: Car = {
      id: newCarId,
      title: `${formData.brand} ${formData.model}`,
      brand: formData.brand,
      model: formData.model,
      variant: formData.variant,
      badge: 'Individual Verified Listing',
      year: formData.year,
      km: formData.km,
      fuel: formData.fuel,
      transmission: formData.transmission,
      bodyType: 'Sedan',
      ownership: formData.ownership,
      condition: 'Certified',
      city: formData.city,
      priceLakhs: formData.listingPriceLakhs,
      priceFormatted: `₹${formData.listingPriceLakhs.toFixed(2)} Lakh`,
      emiFormatted: `₹${Math.round(formData.listingPriceLakhs * 1350).toLocaleString('en-IN')}/mo`,
      color: formData.color,
      images: {
        hero: uploadedPhotos.front,
        exterior: [uploadedPhotos.front, uploadedPhotos.rear, uploadedPhotos.left],
        interior: [uploadedPhotos.interior]
      },
      tags: ['Verified Seller', 'Inspection Pending'],
      specs: {
        engine: '2.0L Turbocharged Engine',
        power: '204 PS',
        torque: '300 Nm',
        mileage: '14.2 km/l ARAI',
        transmission: `${formData.transmission}`,
        fuel: formData.fuel,
        seating: 5,
        bootSpace: '455 Litres',
        driveType: 'Rear-Wheel Drive (RWD)',
        acceleration: '7.3s (0-100 km/h)'
      },
      features: [
        'Panoramic Sunroof',
        '360° Camera',
        'Apple CarPlay',
        'Wireless Charging',
        'Ambient Mood Lighting'
      ],
      history: {
        registrationYear: formData.year,
        regState: `${formData.city} RTO`,
        insuranceValidTill: formData.insuranceValidTill,
        rcStatus: 'Verified & Clean',
        roadTax: 'Lifetime Paid',
        accidentHistory: formData.accidentHistory,
        serviceHistory: formData.serviceHistory,
        inspectionScore: 96
      },
      seller: {
        id: 'seller-user',
        name: formData.sellerName,
        type: 'Direct Owner',
        verified: true,
        rating: 5.0,
        reviewsCount: 1,
        location: formData.city,
        responseTime: 'Instant',
        phone: formData.sellerPhone
      },
      status: 'Active',
      createdAt: new Date().toISOString().split('T')[0],
      viewsCount: 1,
      leadsCount: 0
    };

    setCars((prev) => [newCar, ...prev]);
    setCurrentStep(6);
    showToast('Your vehicle is successfully listed on AutoHub!', 'success');
  };

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Header Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d1f032]/15 text-[#d1f032] text-[11px] font-bold uppercase tracking-wider mb-2 border border-[#d1f032]/30">
            Frictionless Liquidity Engine
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sell Your Car. Get Its Real Value.
          </h1>
          <p className="text-sm text-[#c6c9ae] mt-1">
            Doorstep diagnostics, instantaneous AI valuation, and escrow wire settlement.
          </p>
        </div>

        {/* Step Indicator Bar */}
        <div className="mb-10 p-3 sm:p-4 rounded-3xl bg-[#1a1c20] border border-[#282a2e] flex items-center justify-between overflow-x-auto shadow-md">
          {steps.map((s, idx) => (
            <React.Fragment key={s.number}>
              <div
                onClick={() => {
                  if (s.number < currentStep) setCurrentStep(s.number);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-2xl cursor-pointer transition-all ${
                  currentStep === s.number
                    ? 'bg-[#d1f032] text-[#181e00] font-bold'
                    : currentStep > s.number
                    ? 'text-white'
                    : 'text-[#90937a]'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                    currentStep === s.number
                      ? 'bg-[#181e00] text-[#d1f032]'
                      : currentStep > s.number
                      ? 'bg-[#d1f032] text-[#181e00]'
                      : 'bg-[#282a2e] text-[#90937a]'
                  }`}
                >
                  {currentStep > s.number ? '✓' : `0${s.number}`}
                </span>
                <span className="text-xs whitespace-nowrap">{s.label}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className="w-4 h-[1px] bg-[#282a2e] hidden sm:block"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ========================================= */}
        {/* STEP 1: CAR DETAILS */}
        {/* ========================================= */}
        {currentStep === 1 && (
          <div className="p-8 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-2xl space-y-6">
            <h3 className="text-xl font-bold text-white">01. Vehicle Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-[#c6c9ae] block mb-1.5">Brand</label>
                <select
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-white text-xs"
                >
                  {BRAND_CATALOG.map((b) => (
                    <option key={b.name} value={b.name}>{b.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#c6c9ae] block mb-1.5">Model</label>
                <input
                  type="text"
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  placeholder="e.g. C-Class, 3 Series, Thar..."
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-white text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#c6c9ae] block mb-1.5">Variant</label>
                <input
                  type="text"
                  value={formData.variant}
                  onChange={(e) => setFormData({ ...formData, variant: e.target.value })}
                  placeholder="e.g. C200 Progressive, M Sport..."
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-white text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#c6c9ae] block mb-1.5">Registration Year</label>
                <select
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: Number(e.target.value) })}
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-white text-xs"
                >
                  {[2024, 2023, 2022, 2021, 2020, 2019, 2018].map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#c6c9ae] block mb-1.5">Fuel Type</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Petrol', 'Diesel', 'Electric'] as const).map((fuel) => (
                    <button
                      key={fuel}
                      type="button"
                      onClick={() => setFormData({ ...formData, fuel })}
                      className={`p-2 rounded-xl text-xs font-bold border transition-all ${
                        formData.fuel === fuel
                          ? 'bg-[#d1f032] text-[#181e00] border-[#d1f032]'
                          : 'bg-[#111317] text-[#c6c9ae] border-[#282a2e]'
                      }`}
                    >
                      {fuel}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#c6c9ae] block mb-1.5">Transmission</label>
                <div className="grid grid-cols-2 gap-2">
                  {(['Automatic', 'Manual'] as const).map((trans) => (
                    <button
                      key={trans}
                      type="button"
                      onClick={() => setFormData({ ...formData, transmission: trans })}
                      className={`p-2 rounded-xl text-xs font-bold border transition-all ${
                        formData.transmission === trans
                          ? 'bg-[#d1f032] text-[#181e00] border-[#d1f032]'
                          : 'bg-[#111317] text-[#c6c9ae] border-[#282a2e]'
                      }`}
                    >
                      {trans}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-8 py-3 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs shadow-lg transition-all"
              >
                Proceed to Condition Check →
              </button>
            </div>
          </div>
        )}

        {/* ========================================= */}
        {/* STEP 2: VEHICLE CONDITION */}
        {/* ========================================= */}
        {currentStep === 2 && (
          <div className="p-8 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-2xl space-y-6">
            <h3 className="text-xl font-bold text-white">02. Vehicle Usage &amp; History</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-[#c6c9ae] block mb-1.5">
                  Kilometers Driven
                </label>
                <input
                  type="number"
                  value={formData.km}
                  onChange={(e) => setFormData({ ...formData, km: Number(e.target.value) })}
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-white text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#c6c9ae] block mb-1.5">Ownership</label>
                <select
                  value={formData.ownership}
                  onChange={(e) => setFormData({ ...formData, ownership: e.target.value as any })}
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-white text-xs"
                >
                  <option value="1st Owner">1st Owner</option>
                  <option value="2nd Owner">2nd Owner</option>
                  <option value="3rd Owner+">3rd Owner+</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#c6c9ae] block mb-1.5">
                  Accident History
                </label>
                <select
                  value={formData.accidentHistory}
                  onChange={(e) => setFormData({ ...formData, accidentHistory: e.target.value as any })}
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-white text-xs"
                >
                  <option value="Zero Accidental Claims">Zero Accidental Claims (100% Clean)</option>
                  <option value="Minor Dent Repaired">Minor Bumper Scratch / Dent Touchup</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#c6c9ae] block mb-1.5">
                  Authorized Service History
                </label>
                <select
                  value={formData.serviceHistory}
                  onChange={(e) => setFormData({ ...formData, serviceHistory: e.target.value as any })}
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-white text-xs"
                >
                  <option value="Full Authorized Dealer Records">Full Authorized OEM Records</option>
                  <option value="Partial Service Records">Partial Service Records Available</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#c6c9ae] block mb-1.5">
                  Registered City Hub
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-white text-xs"
                >
                  {INDIAN_CITIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#c6c9ae] block mb-1.5">
                  Paintwork Color
                </label>
                <input
                  type="text"
                  value={formData.color}
                  onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-white text-xs"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-6 py-2.5 rounded-full bg-[#111317] text-white text-xs border border-[#282a2e]"
              >
                ← Back
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="px-8 py-3 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs shadow-lg transition-all"
              >
                Proceed to Photos →
              </button>
            </div>
          </div>
        )}

        {/* ========================================= */}
        {/* STEP 3: PHOTOS */}
        {/* ========================================= */}
        {currentStep === 3 && (
          <div className="p-8 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-2xl space-y-6">
            <h3 className="text-xl font-bold text-white">03. High-Fidelity Vehicle Photos</h3>
            <p className="text-xs text-[#c6c9ae]">
              Upload crisp photos from 4 angles plus interior and dashboard to pass the AutoHub AI verification scanner.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { slot: 'front', label: 'Front 3/4' },
                { slot: 'rear', label: 'Rear 3/4' },
                { slot: 'left', label: 'Profile' },
                { slot: 'interior', label: 'Interior Cabin' }
              ].map(({ slot, label }) => (
                <div
                  key={slot}
                  className="p-3 rounded-2xl bg-[#111317] border border-[#282a2e] flex flex-col items-center text-center"
                >
                  <img
                    src={uploadedPhotos[slot]}
                    alt={label}
                    className="w-full h-24 object-contain rounded-xl mb-2"
                  />
                  <span className="text-[11px] font-bold text-white">{label}</span>
                  <span className="text-[10px] text-emerald-400 mt-0.5">✓ Uploaded</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-[#111317] border border-dashed border-[#282a2e] text-center">
              <span className="material-symbols-outlined text-[32px] text-[#d1f032] mb-2">
                add_photo_alternate
              </span>
              <div className="text-xs font-bold text-white">Click or Drag additional photos</div>
              <p className="text-[10px] text-[#c6c9ae] mt-1">
                Engine bay, speedometer cluster, tyre tread photos supported (JPG, PNG, WEBP)
              </p>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-6 py-2.5 rounded-full bg-[#111317] text-white text-xs border border-[#282a2e]"
              >
                ← Back
              </button>
              <button
                onClick={() => setCurrentStep(4)}
                className="px-8 py-3 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs shadow-lg transition-all"
              >
                Calculate Fair Market Pricing →
              </button>
            </div>
          </div>
        )}

        {/* ========================================= */}
        {/* STEP 4: PRICING */}
        {/* ========================================= */}
        {currentStep === 4 && (
          <div className="p-8 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-2xl space-y-6">
            <h3 className="text-xl font-bold text-white">04. Algorithmic Market Pricing</h3>
            <p className="text-xs text-[#c6c9ae]">
              Based on recent 42,000 pan-India pre-owned transactions and condition telemetry.
            </p>

            {/* Estimated Value Card */}
            <div className="p-6 rounded-2xl bg-[#111317] border border-[#d1f032]/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-[#d1f032] uppercase tracking-wider block">
                  Estimated Fair Market Window
                </span>
                <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                  ₹46.50 Lakh – ₹50.20 Lakh
                </div>
                <span className="text-xs text-[#c6c9ae]">
                  Suggested listing price: <strong className="text-white">₹48.50 Lakh</strong>
                </span>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                  High Buyer Demand
                </span>
              </div>
            </div>

            {/* Price Setter */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-white block">
                Set Your Listing Price (in ₹ Lakhs)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-lg font-bold text-[#d1f032]">₹</span>
                <input
                  type="number"
                  step="0.5"
                  value={formData.listingPriceLakhs}
                  onChange={(e) =>
                    setFormData({ ...formData, listingPriceLakhs: Number(e.target.value) })
                  }
                  className="w-full pl-9 pr-4 py-3 rounded-xl bg-[#111317] border border-[#282a2e] text-lg font-bold text-white focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setCurrentStep(3)}
                className="px-6 py-2.5 rounded-full bg-[#111317] text-white text-xs border border-[#282a2e]"
              >
                ← Back
              </button>
              <button
                onClick={() => setCurrentStep(5)}
                className="px-8 py-3 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs shadow-lg transition-all"
              >
                Review Listing Preview →
              </button>
            </div>
          </div>
        )}

        {/* ========================================= */}
        {/* STEP 5: REVIEW */}
        {/* ========================================= */}
        {currentStep === 5 && (
          <div className="p-8 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-2xl space-y-6">
            <h3 className="text-xl font-bold text-white">05. Review Your Official Listing</h3>
            <p className="text-xs text-[#c6c9ae]">
              Verify vehicle specifications before publishing to AutoHub's pan-India showroom.
            </p>

            {/* Complete Listing Preview */}
            <div className="p-6 rounded-3xl bg-[#111317] border border-[#282a2e] flex flex-col md:flex-row gap-6 items-center">
              <img
                src={uploadedPhotos.front}
                alt={formData.model}
                className="w-full md:w-64 h-40 object-contain rounded-2xl bg-[#0c0e12] p-2"
              />
              <div className="flex-1 space-y-2">
                <span className="text-[10px] font-bold text-[#d1f032] uppercase tracking-wider">
                  AutoHub Pre-Approved Listing
                </span>
                <h4 className="text-xl font-extrabold text-white">
                  {formData.year} {formData.brand} {formData.model}
                </h4>
                <div className="text-xs text-[#c6c9ae]">
                  {formData.variant} • {formData.km.toLocaleString('en-IN')} KM • {formData.fuel} • {formData.city}
                </div>
                <div className="text-2xl font-black text-[#d1f032] pt-1">
                  ₹{formData.listingPriceLakhs.toFixed(2)} Lakh
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#111317] border border-[#282a2e]">
                <span className="text-[#c6c9ae] block">Ownership:</span>
                <span className="font-bold text-white">{formData.ownership}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#111317] border border-[#282a2e]">
                <span className="text-[#c6c9ae] block">Accident Check:</span>
                <span className="font-bold text-white">{formData.accidentHistory}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#111317] border border-[#282a2e]">
                <span className="text-[#c6c9ae] block">Service History:</span>
                <span className="font-bold text-white">OEM Records</span>
              </div>
              <div className="p-3 rounded-xl bg-[#111317] border border-[#282a2e]">
                <span className="text-[#c6c9ae] block">Location:</span>
                <span className="font-bold text-white">{formData.city} Hub</span>
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setCurrentStep(4)}
                className="px-6 py-2.5 rounded-full bg-[#111317] text-white text-xs border border-[#282a2e]"
              >
                ← Back
              </button>
              <button
                onClick={handlePublish}
                className="px-8 py-3.5 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs sm:text-sm shadow-[0_8px_24px_rgba(209,240,50,0.35)] transition-all cursor-pointer"
              >
                Publish &amp; List My Car Now
              </button>
            </div>
          </div>
        )}

        {/* ========================================= */}
        {/* STEP 6: PUBLISH / SUCCESS */}
        {/* ========================================= */}
        {currentStep === 6 && (
          <div className="p-10 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#d1f032]/20 text-[#d1f032] border border-[#d1f032]/40 flex items-center justify-center mx-auto text-3xl font-black">
              ✓
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider">
                Telemetry Active
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                Your Machine is Officially Listed!
              </h2>
              <p className="text-sm text-[#c6c9ae] max-w-md mx-auto mt-2">
                Your {formData.year} {formData.brand} {formData.model} is now visible across 24 Indian hubs. We will notify you when buyers book test drives or make offers.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => navigate('/seller/dashboard')}
                className="px-8 py-3.5 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                Go to Seller Dashboard
              </button>
              <button
                onClick={() => navigate('/buy-cars')}
                className="px-8 py-3.5 rounded-full bg-[#282a2e] hover:bg-[#333539] text-white font-bold text-xs sm:text-sm border border-[#333539] transition-all cursor-pointer"
              >
                View Marketplace
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
