import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { INDIAN_CITIES } from '../data/cars';

export const TestDrivePage: React.FC = () => {
  const { cars, addTestDriveBooking, navigate, user } = useApp();

  const [selectedCarId, setSelectedCarId] = useState<string>(cars[0]?.id || '');
  const [city, setCity] = useState<string>('Mumbai');
  const [deliveryMode, setDeliveryMode] = useState<'doorstep' | 'vault'>('doorstep');
  const [date, setDate] = useState<string>('Tomorrow');
  const [timeSlot, setTimeSlot] = useState<string>('11:00 AM - 12:30 PM');
  const [name, setName] = useState<string>(user?.name || '');
  const [phone, setPhone] = useState<string>(user?.phone || '');
  const [email, setEmail] = useState<string>(user?.email || '');
  const [licenseConfirmed, setLicenseConfirmed] = useState<boolean>(true);

  const [confirmedBooking, setConfirmedBooking] = useState<any | null>(null);

  const selectedCar = cars.find((c) => c.id === selectedCarId) || cars[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hubName =
      deliveryMode === 'doorstep'
        ? `Doorstep Delivery (${city})`
        : `${city} AutoHub Vault`;

    const booking = {
      carId: selectedCar.id,
      carTitle: selectedCar.title,
      carImage: selectedCar.images.hero,
      city,
      hub: hubName,
      date: `${date}, ${timeSlot.split(' - ')[0]}`,
      timeSlot,
      userName: name || 'Valued Collector',
      userPhone: phone || '+91 98201 55678',
      userEmail: email || 'collector@autohub.in'
    };

    addTestDriveBooking(booking);
    setConfirmedBooking(booking);
  };

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d1f032]/15 text-[#d1f032] text-xs font-bold uppercase tracking-wider mb-2 border border-[#d1f032]/30">
            Complimentary Experience
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Schedule a High-Octane Test Drive
          </h1>
          <p className="text-sm text-[#c6c9ae] mt-1">
            Complimentary doorstep delivery or showroom vault staging with a certified driving specialist.
          </p>
        </div>

        {confirmedBooking ? (
          /* Confirmation Ticket Card */
          <div className="p-8 sm:p-12 rounded-3xl bg-[#1a1c20] border border-[#d1f032] shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#d1f032]/20 text-[#d1f032] border border-[#d1f032]/40 flex items-center justify-center mx-auto text-3xl font-black">
              ✓
            </div>

            <div>
              <span className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider">
                Booking Confirmed
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Your Test Drive Pass is Ready!
              </h2>
              <p className="text-xs text-[#c6c9ae] mt-2">
                Booking Pass Reference: <span className="text-white font-mono font-bold">#AUTODRIVE-{Date.now().toString().slice(-6)}</span>
              </p>
            </div>

            {/* Ticket Staging Box */}
            <div className="p-6 rounded-2xl bg-[#111317] border border-[#282a2e] text-left flex flex-col md:flex-row items-center gap-6 max-w-xl mx-auto">
              <img
                src={confirmedBooking.carImage}
                alt={confirmedBooking.carTitle}
                className="w-full md:w-44 h-28 object-contain bg-[#0c0e12] rounded-xl p-2"
              />
              <div className="space-y-1.5 flex-1 text-xs">
                <div className="text-sm font-bold text-white">{confirmedBooking.carTitle}</div>
                <div className="text-[#c6c9ae]">
                  Scheduled For: <strong className="text-white">{confirmedBooking.date}</strong>
                </div>
                <div className="text-[#c6c9ae]">
                  Location: <strong className="text-[#d1f032]">{confirmedBooking.hub}</strong>
                </div>
                <div className="text-[#c6c9ae]">
                  Driver: <strong className="text-white">{confirmedBooking.userName}</strong>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => navigate('/dashboard')}
                className="px-8 py-3 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                Go to Buyer Dashboard
              </button>
              <button
                onClick={() => setConfirmedBooking(null)}
                className="px-8 py-3 rounded-full bg-[#282a2e] hover:bg-[#333539] text-white font-bold text-xs border border-[#333539] transition-all cursor-pointer"
              >
                Book Another Car
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-12 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-2xl space-y-6"
          >
            {/* Step 1: Select Car */}
            <div>
              <label className="text-xs font-bold text-[#c6c9ae] uppercase tracking-wider block mb-2">
                1. Select Vehicle to Drive
              </label>
              <select
                value={selectedCarId}
                onChange={(e) => setSelectedCarId(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-[#111317] border border-[#282a2e] text-white text-xs font-bold focus:outline-none"
              >
                {cars.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.year} {c.title} • {c.priceFormatted} ({c.city})
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Car Preview */}
            <div className="p-4 rounded-2xl bg-[#111317] border border-[#282a2e] flex items-center gap-4">
              <img
                src={selectedCar.images.hero}
                alt={selectedCar.title}
                className="w-24 h-16 object-contain"
              />
              <div>
                <div className="text-sm font-bold text-white">{selectedCar.title}</div>
                <div className="text-xs text-[#c6c9ae]">
                  0-100 km/h: <span className="text-[#d1f032] font-bold">{selectedCar.specs.acceleration}</span> • Power: {selectedCar.specs.power}
                </div>
              </div>
            </div>

            {/* Step 2: Location & Delivery Mode */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-[#c6c9ae] uppercase tracking-wider block mb-2">
                  2. Select City Hub
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-white text-xs"
                >
                  {INDIAN_CITIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#c6c9ae] uppercase tracking-wider block mb-2">
                  Staging Mode
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryMode('doorstep')}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all ${
                      deliveryMode === 'doorstep'
                        ? 'bg-[#d1f032] text-[#181e00] border-[#d1f032]'
                        : 'bg-[#111317] text-[#c6c9ae] border-[#282a2e]'
                    }`}
                  >
                    Doorstep VIP
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryMode('vault')}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all ${
                      deliveryMode === 'vault'
                        ? 'bg-[#d1f032] text-[#181e00] border-[#d1f032]'
                        : 'bg-[#111317] text-[#c6c9ae] border-[#282a2e]'
                    }`}
                  >
                    Showroom Vault
                  </button>
                </div>
              </div>
            </div>

            {/* Step 3: Schedule Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-[#c6c9ae] uppercase tracking-wider block mb-2">
                  Preferred Date
                </label>
                <select
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-white text-xs"
                >
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="Day After Tomorrow">Day After Tomorrow</option>
                  <option value="This Saturday">This Saturday</option>
                  <option value="This Sunday">This Sunday</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#c6c9ae] uppercase tracking-wider block mb-2">
                  Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-white text-xs"
                >
                  <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM (Morning Highway)</option>
                  <option value="11:30 AM - 01:00 PM">11:30 AM - 01:00 PM</option>
                  <option value="03:00 PM - 04:30 PM">03:00 PM - 04:30 PM</option>
                  <option value="05:00 PM - 06:30 PM">05:00 PM - 06:30 PM (Sunset Cruise)</option>
                </select>
              </div>
            </div>

            {/* Step 4: Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-bold text-[#c6c9ae] uppercase tracking-wider block mb-2">
                  Driver Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full legal name"
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-white text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#c6c9ae] uppercase tracking-wider block mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98200 XXXXX"
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-white text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#c6c9ae] uppercase tracking-wider block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-white text-xs"
                />
              </div>
            </div>

            {/* Driving License Checkbox */}
            <label className="flex items-center gap-3 cursor-pointer text-xs text-[#c6c9ae]">
              <input
                type="checkbox"
                checked={licenseConfirmed}
                onChange={(e) => setLicenseConfirmed(e.target.checked)}
                className="w-4 h-4 accent-[#d1f032]"
              />
              <span>
                I hold a valid permanent Indian Driving License and agree to AutoHub's zero-liability escrow insurance terms.
              </span>
            </label>

            <button
              type="submit"
              disabled={!licenseConfirmed}
              className="w-full py-4 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs sm:text-sm shadow-[0_8px_24px_rgba(209,240,50,0.35)] transition-all cursor-pointer disabled:opacity-50"
            >
              Confirm 100% Free Doorstep Test Drive
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
