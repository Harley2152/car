import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const ContactPage: React.FC = () => {
  const { showToast, navigate } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Buying Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your message has been assigned to a Senior Automotive Concierge', 'success');
  };

  const hubs = [
    {
      city: 'Mumbai (Flagship Vault)',
      address: 'Worli Sea Face, Tower 4, Dr. Annie Besant Road, Worli, Mumbai 400018',
      phone: '+91 22 6900 4400',
      hours: 'Mon - Sun: 09:30 AM - 08:30 PM'
    },
    {
      city: 'Bangalore (Tech Hub)',
      address: '100ft Road, Defence Colony, Indiranagar, Bangalore 560038',
      phone: '+91 80 4410 8800',
      hours: 'Mon - Sun: 09:30 AM - 08:30 PM'
    },
    {
      city: 'Delhi NCR (Expedition Hub)',
      address: 'Golf Course Road, Sector 54, Gurugram, Haryana 122002',
      phone: '+91 124 4920 110',
      hours: 'Mon - Sun: 10:00 AM - 08:00 PM'
    },
    {
      city: 'Hyderabad',
      address: 'Road No. 36, Jubilee Hills, Hyderabad 500033',
      phone: '+91 40 6810 9900',
      hours: 'Mon - Sun: 09:30 AM - 08:00 PM'
    },
    {
      city: 'Chennai',
      address: 'Mount Road, Anna Salai, Thousand Lights, Chennai 600006',
      phone: '+91 44 2850 3300',
      hours: 'Mon - Sun: 09:30 AM - 08:00 PM'
    },
    {
      city: 'Pune',
      address: 'Senapati Bapat Road, Shivaji Nagar, Pune 411016',
      phone: '+91 20 6700 8820',
      hours: 'Mon - Sun: 09:30 AM - 08:00 PM'
    }
  ];

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1200px] mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d1f032]/15 text-[#d1f032] text-xs font-bold uppercase tracking-wider border border-[#d1f032]/30">
            Pan-India Network
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect with AutoHub
          </h1>
          <p className="text-sm text-[#c6c9ae]">
            Reach our concierge team, schedule showroom visits, or request priority highway recovery.
          </p>
        </div>

        {/* 2-Column Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] space-y-3">
              <span className="material-symbols-outlined text-[28px] text-[#d1f032]">call</span>
              <h3 className="text-base font-bold text-white">Direct Phone Support</h3>
              <p className="text-xs text-[#c6c9ae]">
                Toll-Free Pan-India: <strong className="text-white">1800-2886-482 (1800-AUTOHUB)</strong>
              </p>
              <p className="text-xs text-[#c6c9ae]">
                WhatsApp Support: <strong className="text-emerald-400">+91 98200 44120</strong>
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] space-y-3">
              <span className="material-symbols-outlined text-[28px] text-[#d1f032]">mail</span>
              <h3 className="text-base font-bold text-white">Electronic Dispatch</h3>
              <p className="text-xs text-[#c6c9ae]">
                General &amp; Buying: <strong className="text-white">concierge@autohub.in</strong>
              </p>
              <p className="text-xs text-[#c6c9ae]">
                Press &amp; Allocations: <strong className="text-white">press@autohub.in</strong>
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] space-y-3">
              <span className="material-symbols-outlined text-[28px] text-[#d1f032]">help</span>
              <h3 className="text-base font-bold text-white">Need Answers Fast?</h3>
              <p className="text-xs text-[#c6c9ae]">
                Explore our searchable Help Center covering Escrow, Test Drives, Inspection, and Transfer.
              </p>
              <button
                onClick={() => navigate('/help')}
                className="text-xs text-[#d1f032] font-bold hover:underline flex items-center gap-1"
              >
                <span>Visit Knowledge Base</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Send an Official Message</h3>
            <p className="text-xs text-[#c6c9ae] mb-6">
              Our Senior Automotive Concierge responds within 20 minutes during operational hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#111317] border border-emerald-500/40 text-center space-y-3">
                <span className="material-symbols-outlined text-emerald-400 text-[40px]">
                  check_circle
                </span>
                <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
                <p className="text-xs text-[#c6c9ae]">
                  Thank you, {name}. A ticket has been generated and dispatched to your email {email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#282a2e] text-white text-xs font-bold mt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#c6c9ae] block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vikram Kapoor"
                      className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#c6c9ae] block mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98200 XXXXX"
                      className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#c6c9ae] block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#c6c9ae] block mb-1">Inquiry Topic</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white"
                    >
                      <option value="Buying Inquiry">Buying &amp; Showroom Allocations</option>
                      <option value="Selling Car">Direct Car Liquidation &amp; Escrow</option>
                      <option value="140-Point Inspection">Doorstep Diagnostics Booking</option>
                      <option value="Finance & Insurance">Finance &amp; Zero-Dep Insurance</option>
                      <option value="Corporate / Partnership">Corporate &amp; Dealership Network</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#c6c9ae] block mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the vehicle you wish to buy, sell, or inspect..."
                    className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white placeholder-[#90937a]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  Dispatch to AutoHub Concierge
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 6 Flagship Hub Locations Grid */}
        <div className="space-y-6 pt-6">
          <div>
            <span className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider">
              Physical Showroom Network
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">Our Flagship Hubs</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubs.map((hub) => (
              <div
                key={hub.city}
                className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] space-y-2"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <span className="material-symbols-outlined text-[18px] text-[#d1f032]">
                    location_on
                  </span>
                  <span>{hub.city}</span>
                </div>
                <p className="text-xs text-[#c6c9ae] leading-relaxed">{hub.address}</p>
                <div className="text-[11px] text-[#90937a] pt-1">
                  Phone: <span className="text-white font-semibold">{hub.phone}</span>
                </div>
                <div className="text-[11px] text-[#90937a]">
                  Hours: <span className="text-white">{hub.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
