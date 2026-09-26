import React from 'react';
import { useApp } from '../context/AppContext';

export const AboutPage: React.FC = () => {
  const { navigate } = useApp();

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1100px] mx-auto px-6 space-y-16">
        {/* Hero Narrative */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d1f032]/15 text-[#d1f032] text-xs font-bold uppercase tracking-wider border border-[#d1f032]/30">
            The AutoHub Standard
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Re-engineering Indian Automotive Commerce
          </h1>
          <p className="text-sm sm:text-base text-[#c6c9ae] leading-relaxed">
            AutoHub was built by automotive connoisseurs, software engineers, and telemetry veterans who believed luxury and performance car ownership should be fearless, transparent, and exhilarating.
          </p>
        </div>

        {/* 4 Statistics Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] text-center">
            <div className="text-3xl sm:text-4xl font-black text-[#d1f032]">100+</div>
            <div className="text-xs text-[#c6c9ae] uppercase font-bold tracking-wider mt-1">
              Distinct Models
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] text-center">
            <div className="text-3xl sm:text-4xl font-black text-white">20k+</div>
            <div className="text-xs text-[#c6c9ae] uppercase font-bold tracking-wider mt-1">
              Cars Delivered
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] text-center">
            <div className="text-3xl sm:text-4xl font-black text-white">24</div>
            <div className="text-xs text-[#c6c9ae] uppercase font-bold tracking-wider mt-1">
              Indian Hub Cities
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] text-center">
            <div className="text-3xl sm:text-4xl font-black text-white">100%</div>
            <div className="text-xs text-[#c6c9ae] uppercase font-bold tracking-wider mt-1">
              RC Escrow Cleared
            </div>
          </div>
        </div>

        {/* How AutoHub Works */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-2xl space-y-8">
          <div>
            <span className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider">
              Operational Rigor
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              How AutoHub Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#d1f032] text-[#181e00] font-black flex items-center justify-center text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-white">140-Point Laser Diagnostics</h3>
              <p className="text-xs text-[#c6c9ae] leading-relaxed">
                Before any machine enters our catalog, certified master engineers test chassis laser alignment, engine dyno logs, and scan all body panels with digital paint depth gauges.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#282a2e] text-[#d1f032] font-black flex items-center justify-center text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-white">Blockchain &amp; Legal Escrow</h3>
              <p className="text-xs text-[#c6c9ae] leading-relaxed">
                Buyer deposits and seller payouts remain safeguarded in an institutional RTO escrow account. Funds are released only upon successful Parivahan ownership endorsement.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#282a2e] text-[#d1f032] font-black flex items-center justify-center text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-white">7-Day Real World Guarantee</h3>
              <p className="text-xs text-[#c6c9ae] leading-relaxed">
                If the car doesn't fit your lifestyle, driveway, or driving expectations, return it within 7 days or 500 km for a 100% full refund. No questions asked.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="space-y-6">
          <div>
            <span className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider">
              Leadership &amp; Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Executive Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: 'Devraj Oberoi',
                role: 'Founder & Chief Executive Officer',
                bio: 'Former GT3 racing driver & Indian automotive dealership veteran with 18 years in luxury vehicle distribution.',
                avatar: 'DO'
              },
              {
                name: 'Pooja Venkatesh',
                role: 'Chief Technology Officer',
                bio: 'Ex-telemetry architect specializing in automotive IoT, real-time OBD diagnostics, and secure escrow architectures.',
                avatar: 'PV'
              },
              {
                name: 'Samir Merchant',
                role: 'Head of Technical Inspection & Diagnostics',
                bio: 'Lead Master Technician certified across Stuttgart, Affalterbach, and Maranello factory training programs.',
                avatar: 'SM'
              }
            ].map((leader) => (
              <div
                key={leader.name}
                className="p-6 rounded-3xl bg-[#1a1c20] border border-[#282a2e] space-y-3"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#282a2e] text-[#d1f032] font-black flex items-center justify-center text-base border border-[#333539]">
                  {leader.avatar}
                </div>
                <h3 className="text-base font-bold text-white">{leader.name}</h3>
                <div className="text-[11px] text-[#d1f032] font-bold">{leader.role}</div>
                <p className="text-xs text-[#c6c9ae] leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#1a1c20] to-[#1e2024] border border-[#282a2e] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Experience AutoHub Today</h3>
            <p className="text-xs text-[#c6c9ae] mt-1">Explore our verified pan-India catalog or book a valuation inspection.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/buy-cars')}
              className="px-6 py-3 rounded-full bg-[#d1f032] text-[#181e00] font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              Browse Cars
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 rounded-full bg-[#282a2e] text-white font-bold text-xs border border-[#333539] transition-all cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
