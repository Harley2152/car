import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const HelpPage: React.FC = () => {
  const { navigate } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openFaq, setOpenFaq] = useState<string | null>('q-1');

  const faqs = [
    {
      id: 'q-1',
      category: 'Buying',
      question: 'How does AutoHub verify the mechanical condition of vehicles?',
      answer: 'Every car listed on AutoHub undergoes a rigorous 140-point technical inspection conducted by certified master technicians. This includes digital paint depth scanning (to verify zero structural repainting), OBD-II computer diagnostic readouts, chassis laser alignment checks, dyno acceleration logging, and verification against police/RTO accident databases.'
    },
    {
      id: 'q-2',
      category: 'Buying',
      question: 'What is the 7-Day Money Back Guarantee policy?',
      answer: 'If your purchased car does not meet your expectations, fits awkwardly in your driveway, or fails to deliver the expected driving feel, you can return it within 7 calendar days or 500 kilometers (whichever comes first) for a 100% full refund with zero deductions.'
    },
    {
      id: 'q-3',
      category: 'Selling',
      question: 'How fast will I receive payment when selling my car?',
      answer: 'Once our master technician completes the complimentary doorstep 140-point inspection and you accept our algorithmic valuation offer, funds are directly wired to your bank account via RTGS within 60 minutes before the car keys leave your hands.'
    },
    {
      id: 'q-4',
      category: 'Selling',
      question: 'Who handles the RTO documentation and ownership transfer?',
      answer: 'AutoHub takes 100% legal responsibility for the Regional Transport Office (RTO) transfer, issuing a formal AutoHub Legal Indemnity Certificate immediately upon handover so you hold zero liability from that second forward.'
    },
    {
      id: 'q-5',
      category: 'Payments',
      question: 'How does the AutoHub Escrow Security mechanism protect my funds?',
      answer: 'When a buyer shortlists or purchases a car, the booking deposit is held in a tri-party Escrow account managed with a Tier-1 scheduled Indian bank (HDFC Bank). The seller only receives the balance upon successful physical inspection and digital Parivahan endorsement.'
    },
    {
      id: 'q-6',
      category: 'Verification',
      question: 'Can I view the actual inspection diagnostic report before buying?',
      answer: 'Yes! Every certified car card features an interactive 140-Point Passed score. Clicking it opens the full breakdown spanning engine compression, brake pad millimeter life, battery health (for EVs), and high-resolution underbody photos.'
    },
    {
      id: 'q-7',
      category: 'Test Drives',
      question: 'Is doorstep test drive really 100% free?',
      answer: 'Yes, for all vehicles in your local hub city, an AutoHub Driving Specialist brings the vehicle directly to your corporate or residential driveway with no booking fee. All vehicles carry comprehensive commercial test drive insurance.'
    },
    {
      id: 'q-8',
      category: 'Finance',
      question: 'What interest rates and tenures are available on luxury cars?',
      answer: 'Through our partner lenders (HDFC Bank, ICICI Prime, Kotak Prime), interest rates start from 8.5% p.a. with tenures up to 7 years (84 months). We also offer customized balloon schemes and step-up financing for self-employed professionals.'
    }
  ];

  const filteredFaqs = faqs.filter((faq) => {
    if (activeCategory !== 'All' && faq.category !== activeCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.category.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1000px] mx-auto px-6 space-y-12">
        {/* Header with Search */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d1f032]/15 text-[#d1f032] text-xs font-bold uppercase tracking-wider border border-[#d1f032]/30">
            Knowledge Base &amp; FAQ
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Can We Assist You Today?
          </h1>
          <p className="text-xs sm:text-sm text-[#c6c9ae]">
            Everything you need to know about buying, selling, inspection, financing, and escrow protection.
          </p>

          <div className="pt-2">
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#1a1c20] border border-[#282a2e] shadow-xl">
              <span className="material-symbols-outlined text-[22px] text-[#d1f032]">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search queries: '7-day guarantee', 'RTO transfer', 'test drive'..."
                className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-[#90937a] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {['All', 'Buying', 'Selling', 'Payments', 'Verification', 'Test Drives', 'Finance'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#d1f032] text-[#181e00] shadow-sm'
                  : 'bg-[#1a1c20] hover:bg-[#282a2e] text-[#c6c9ae] hover:text-white border border-[#282a2e]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-3xl bg-[#1a1c20] border border-[#282a2e] overflow-hidden transition-all shadow-md"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-[#d1f032] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#111317] text-[#d1f032] border border-[#282a2e]">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <span
                    className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#d1f032]' : 'text-[#c6c9ae]'
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#c6c9ae] leading-relaxed border-t border-[#282a2e]/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Need Help Box */}
        <div className="p-8 rounded-3xl bg-[#1a1c20] border border-[#282a2e] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-lg font-bold text-white">Still have questions?</h3>
            <p className="text-xs text-[#c6c9ae] mt-1">Our concierges are available 7 days a week from 09:30 AM to 08:30 PM.</p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-3 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            Talk to an Automotive Advisor
          </button>
        </div>
      </div>
    </div>
  );
};
