import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const FinancePage: React.FC = () => {
  const { showToast } = useApp();

  // Inputs
  const [carPriceLakhs, setCarPriceLakhs] = useState<number>(65); // 65 Lakhs
  const [downPaymentLakhs, setDownPaymentLakhs] = useState<number>(15); // 15 Lakhs
  const [interestRate, setInterestRate] = useState<number>(8.9); // 8.9%
  const [tenureYears, setTenureYears] = useState<number>(5); // 5 Years

  // Pre-approval Form State
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantPan, setApplicantPan] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Calculations
  const loanPrincipalLakhs = Math.max(carPriceLakhs - downPaymentLakhs, 0);
  const principalRupees = loanPrincipalLakhs * 100000;
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = tenureYears * 12;

  const monthlyEmi =
    principalRupees > 0
      ? Math.round(
          (principalRupees * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        )
      : 0;

  const totalAmountPayable = monthlyEmi * totalMonths;
  const totalInterestPayable = Math.max(totalAmountPayable - principalRupees, 0);

  // Percentage for visual breakdown bar
  const principalPercent = totalAmountPayable > 0 ? (principalRupees / totalAmountPayable) * 100 : 70;
  const interestPercent = 100 - principalPercent;

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
    showToast('Finance application submitted to HDFC & ICICI Prime Desk', 'success');
  };

  return (
    <div className="w-full bg-[#111317] min-h-screen py-8">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d1f032]/15 text-[#d1f032] text-xs font-bold uppercase tracking-wider mb-2 border border-[#d1f032]/30">
            AutoHub Financial Desk
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Supercar &amp; Luxury Vehicle EMI Calculator
          </h1>
          <p className="text-sm text-[#c6c9ae] mt-2">
            Compute transparent repayment structures with preferred lending partners, zero foreclosure charges, and 2-hour pre-approval.
          </p>
        </div>

        {/* Interactive Calculator Shell */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Sliders Left (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Car Price Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-white mb-2">
                  <span>Vehicle Valuation</span>
                  <span className="text-[#d1f032] text-sm">₹{carPriceLakhs} Lakh</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="250"
                  step="1"
                  value={carPriceLakhs}
                  onChange={(e) => {
                    const price = Number(e.target.value);
                    setCarPriceLakhs(price);
                    if (downPaymentLakhs > price) setDownPaymentLakhs(Math.round(price * 0.2));
                  }}
                  className="w-full accent-[#d1f032] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#90937a] mt-1">
                  <span>₹5 Lakh</span>
                  <span>₹1.25 Cr</span>
                  <span>₹2.5 Cr+</span>
                </div>
              </div>

              {/* Down Payment Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-white mb-2">
                  <span>Down Payment</span>
                  <span className="text-[#d1f032] text-sm">
                    ₹{downPaymentLakhs} Lakh ({Math.round((downPaymentLakhs / carPriceLakhs) * 100)}%)
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={Math.round(carPriceLakhs * 0.8)}
                  step="1"
                  value={downPaymentLakhs}
                  onChange={(e) => setDownPaymentLakhs(Number(e.target.value))}
                  className="w-full accent-[#d1f032] cursor-pointer"
                />
              </div>

              {/* Interest Rate Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-white mb-2">
                  <span>Annual Interest Rate</span>
                  <span className="text-[#d1f032] text-sm">{interestRate}% p.a.</span>
                </div>
                <input
                  type="range"
                  min="7.5"
                  max="15.0"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-[#d1f032] cursor-pointer"
                />
              </div>

              {/* Loan Tenure */}
              <div>
                <div className="flex justify-between text-xs font-bold text-white mb-2">
                  <span>Loan Tenure</span>
                  <span className="text-[#d1f032] text-sm">
                    {tenureYears} Years ({totalMonths} Months)
                  </span>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {[1, 2, 3, 4, 5, 6, 7].map((yr) => (
                    <button
                      key={yr}
                      type="button"
                      onClick={() => setTenureYears(yr)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                        tenureYears === yr
                          ? 'bg-[#d1f032] text-[#181e00] border-[#d1f032]'
                          : 'bg-[#111317] text-[#c6c9ae] border-[#282a2e] hover:text-white'
                      }`}
                    >
                      {yr}Y
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Right Card (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-[#111317] border border-[#282a2e] space-y-6 shadow-xl">
              <div>
                <span className="text-[10px] text-[#c6c9ae] uppercase font-bold tracking-wider block">
                  Monthly Repayment (EMI)
                </span>
                <div className="text-3xl sm:text-4xl font-black text-[#d1f032] mt-1">
                  ₹{monthlyEmi.toLocaleString('en-IN')}
                  <span className="text-xs font-bold text-white ml-1">/ month</span>
                </div>
              </div>

              {/* Visual Breakdown Bar */}
              <div className="space-y-2">
                <span className="text-[10px] text-[#c6c9ae] uppercase font-bold tracking-wider block">
                  Payment Distribution
                </span>
                <div className="w-full h-3 rounded-full bg-[#282a2e] flex overflow-hidden">
                  <div
                    style={{ width: `${principalPercent}%` }}
                    className="h-full bg-white transition-all duration-500"
                    title="Principal"
                  ></div>
                  <div
                    style={{ width: `${interestPercent}%` }}
                    className="h-full bg-[#d1f032] transition-all duration-500"
                    title="Interest"
                  ></div>
                </div>
                <div className="flex justify-between text-xs pt-1">
                  <span className="flex items-center gap-1.5 text-white">
                    <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
                    Principal: ₹{loanPrincipalLakhs} Lakh
                  </span>
                  <span className="flex items-center gap-1.5 text-[#d1f032]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d1f032] inline-block"></span>
                    Interest: ₹{(totalInterestPayable / 100000).toFixed(2)} Lakh
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs pt-2 border-t border-[#282a2e]">
                <div className="flex justify-between">
                  <span className="text-[#c6c9ae]">Loan Principal:</span>
                  <span className="text-white font-bold">₹{principalRupees.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#c6c9ae]">Total Interest:</span>
                  <span className="text-[#d1f032] font-bold">₹{totalInterestPayable.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#c6c9ae]">Total Amount Payable:</span>
                  <span className="text-white font-extrabold">₹{totalAmountPayable.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Form: Get Finance Assistance */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#1a1c20] border border-[#282a2e] shadow-2xl">
          <div className="max-w-xl mx-auto text-center space-y-4">
            <span className="text-[11px] font-bold text-[#d1f032] uppercase tracking-wider">
              Concierge Pre-Approval
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Get Instant Finance Assistance
            </h2>
            <p className="text-xs text-[#c6c9ae]">
              Submit your profile for instant algorithmic pre-approval with zero credit score impact.
            </p>

            {leadSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#111317] border border-emerald-500/40 text-center space-y-2">
                <span className="material-symbols-outlined text-emerald-400 text-[36px]">
                  check_circle
                </span>
                <h4 className="text-sm font-bold text-white">Application Received!</h4>
                <p className="text-xs text-[#c6c9ae]">
                  Our AutoHub Private Wealth Finance Manager will contact you on {applicantPhone} with sanctioned terms within 45 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4 text-left pt-2">
                <div>
                  <label className="text-xs font-bold text-[#c6c9ae] block mb-1">Full Legal Name</label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Enter full name matching PAN"
                    className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#c6c9ae] block mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="+91 98200 XXXXX"
                      className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#c6c9ae] block mb-1">PAN Card Number</label>
                    <input
                      type="text"
                      required
                      value={applicantPan}
                      onChange={(e) => setApplicantPan(e.target.value.toUpperCase())}
                      placeholder="ABCDE1234F"
                      className="w-full p-3 rounded-xl bg-[#111317] border border-[#282a2e] text-xs text-white uppercase font-mono"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  Submit for 2-Hour Sanction Letter
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
