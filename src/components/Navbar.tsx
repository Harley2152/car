import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { INDIAN_CITIES } from '../data/cars';

export const Navbar: React.FC = () => {
  const {
    currentPath,
    navigate,
    wishlist,
    compareList,
    activeCity,
    setActiveCity,
    user,
    logout,
    notifications
  } = useApp();

  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const unreadNotifs = notifications.filter((n) => !n.read).length;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchModalOpen(false);
      setSearchQuery('');
    }
  };

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-[#111317]/85 backdrop-blur-2xl border-b border-[#282a2e]/60 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.5)]">
        <div className="h-20 max-w-[1320px] mx-auto px-6 flex items-center justify-between gap-4">
          {/* Logo & Main Nav */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 group focus:outline-none text-left"
            >
              <div className="w-3 h-3 rounded-full bg-[#d1f032] shadow-[0_0_12px_#d1f032] group-hover:scale-125 transition-transform"></div>
              <div className="flex flex-col">
                <div className="flex items-center tracking-tight text-xl font-extrabold text-white">
                  <span>Auto</span>
                  <span className="text-[#d1f032]">Hub</span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.24em] font-bold text-[#c6c9ae] -mt-1">
                  Buy. Sell. Drive.
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 text-sm font-semibold">
              <button
                onClick={() => navigate('/buy-cars')}
                className={`transition-colors py-1 px-1 flex items-center gap-1.5 ${
                  isActive('/buy-cars') ? 'text-white font-bold' : 'text-[#c6c9ae] hover:text-white'
                }`}
              >
                <span>Buy Cars</span>
                <span className="inline-block px-1.5 py-0.5 rounded-full bg-[#282a2e] text-[10px] font-bold text-[#d1f032]">
                  PRO
                </span>
              </button>

              <button
                onClick={() => navigate('/sell-car')}
                className={`transition-colors py-1 px-1 flex items-center gap-1.5 ${
                  isActive('/sell-car') ? 'text-[#d1f032] font-bold' : 'text-[#c6c9ae] hover:text-white'
                }`}
              >
                <span>Sell Your Car</span>
                <span className="inline-block px-1.5 py-0.5 rounded-full bg-[#d1f032] text-[10px] font-bold text-[#181e00]">
                  INSTANT
                </span>
              </button>

              <button
                onClick={() => navigate('/new-cars')}
                className={`transition-colors py-1 px-1 ${
                  isActive('/new-cars') ? 'text-[#d1f032] font-bold' : 'text-[#c6c9ae] hover:text-white'
                }`}
              >
                New Cars
              </button>

              <button
                onClick={() => navigate('/used-cars')}
                className={`transition-colors py-1 px-1 ${
                  isActive('/used-cars') ? 'text-[#d1f032] font-bold' : 'text-[#c6c9ae] hover:text-white'
                }`}
              >
                Used Cars
              </button>

              <button
                onClick={() => navigate('/compare')}
                className={`transition-colors py-1 px-1 flex items-center gap-1 ${
                  isActive('/compare') ? 'text-[#d1f032] font-bold' : 'text-[#c6c9ae] hover:text-white'
                }`}
              >
                <span>Compare</span>
                {compareList.length > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-[#282a2e] text-[10px] text-[#d1f032] font-bold">
                    {compareList.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => navigate('/services')}
                className={`transition-colors py-1 px-1 ${
                  isActive('/services') ? 'text-[#d1f032] font-bold' : 'text-[#c6c9ae] hover:text-white'
                }`}
              >
                Car Services
              </button>

              <button
                onClick={() => navigate('/brands')}
                className={`transition-colors py-1 px-1 ${
                  isActive('/brands') ? 'text-[#d1f032] font-bold' : 'text-[#c6c9ae] hover:text-white'
                }`}
              >
                Brands
              </button>
            </nav>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2.5">
            {/* City Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#282a2e] hover:bg-[#333539] text-[#e2e2e8] transition-all text-xs font-semibold"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px] text-[#d1f032]">
                  location_on
                </span>
                <span>{activeCity}</span>
                <span className="material-symbols-outlined text-[16px] text-[#c6c9ae]">
                  expand_more
                </span>
              </button>

              {cityDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-[#1e2024] border border-[#282a2e] shadow-2xl p-2 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-[#c6c9ae] uppercase tracking-wider">
                    Select Your Hub
                  </div>
                  <div className="max-h-60 overflow-y-auto space-y-1">
                    {INDIAN_CITIES.map((city) => (
                      <button
                        key={city}
                        onClick={() => {
                          setActiveCity(`${city}, IN`);
                          setCityDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                          activeCity.includes(city)
                            ? 'bg-[#d1f032]/15 text-[#d1f032] font-bold'
                            : 'text-[#e2e2e8] hover:bg-[#282a2e]'
                        }`}
                      >
                        <span>{city}</span>
                        {activeCity.includes(city) && (
                          <span className="material-symbols-outlined text-[16px]">check</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Search Trigger */}
            <button
              onClick={() => setSearchModalOpen(true)}
              aria-label="Search"
              className="w-10 h-10 rounded-full bg-[#282a2e] hover:bg-[#333539] flex items-center justify-center text-white transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>

            {/* Notifications Trigger */}
            <button
              onClick={() => navigate('/notifications')}
              aria-label="Notifications"
              className="relative w-10 h-10 rounded-full bg-[#282a2e] hover:bg-[#333539] flex items-center justify-center text-white transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              {unreadNotifs > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#d1f032] text-[#181e00] text-[10px] font-bold flex items-center justify-center shadow-[0_0_8px_#d1f032]">
                  {unreadNotifs}
                </span>
              )}
            </button>

            {/* Wishlist Button with Counter */}
            <button
              onClick={() => navigate('/wishlist')}
              aria-label="Wishlist"
              className="relative w-10 h-10 rounded-full bg-[#282a2e] hover:bg-[#333539] flex items-center justify-center text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">favorite</span>
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#d1f032] text-[#181e00] text-[10px] font-bold flex items-center justify-center shadow-[0_0_8px_#d1f032]">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* User Account / Login Button */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-full bg-[#282a2e] hover:bg-[#333539] transition-all text-xs font-semibold"
                >
                  <div className="w-7 h-7 rounded-full bg-[#d1f032] text-[#181e00] font-bold flex items-center justify-center text-xs">
                    {user.name.charAt(0)}
                  </div>
                  <span className="hidden md:inline text-white max-w-[100px] truncate">{user.name}</span>
                  <span className="material-symbols-outlined text-[16px] text-[#c6c9ae]">expand_more</span>
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#1e2024] border border-[#282a2e] shadow-2xl p-2 z-50">
                    <div className="px-3 py-2 border-b border-[#282a2e] mb-1">
                      <div className="text-sm font-bold text-white truncate">{user.name}</div>
                      <div className="text-[11px] text-[#c6c9ae] truncate">{user.email}</div>
                    </div>

                    <button
                      onClick={() => {
                        navigate('/dashboard');
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs text-[#e2e2e8] hover:bg-[#282a2e] flex items-center gap-2.5 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px] text-[#d1f032]">dashboard</span>
                      <span>Buyer Dashboard</span>
                    </button>

                    <button
                      onClick={() => {
                        navigate('/seller/dashboard');
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs text-[#e2e2e8] hover:bg-[#282a2e] flex items-center gap-2.5 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px] text-[#d1f032]">storefront</span>
                      <span>Seller Studio</span>
                    </button>

                    <button
                      onClick={() => {
                        navigate('/messages');
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs text-[#e2e2e8] hover:bg-[#282a2e] flex items-center gap-2.5 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px] text-[#d1f032]">chat</span>
                      <span>Messages & Offers</span>
                    </button>

                    <button
                      onClick={() => {
                        navigate('/profile');
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs text-[#e2e2e8] hover:bg-[#282a2e] flex items-center gap-2.5 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px] text-[#d1f032]">person</span>
                      <span>Profile & Settings</span>
                    </button>

                    <button
                      onClick={() => {
                        navigate('/admin');
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs text-[#e2e2e8] hover:bg-[#282a2e] flex items-center gap-2.5 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px] text-[#d1f032]">admin_panel_settings</span>
                      <span>Admin Control Hub</span>
                    </button>

                    <div className="border-t border-[#282a2e] my-1"></div>

                    <button
                      onClick={() => {
                        logout();
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs text-rose-400 hover:bg-rose-500/10 flex items-center gap-2.5 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">logout</span>
                      <span>Log Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#282a2e] hover:bg-[#d1f032] text-white hover:text-[#181e00] font-semibold text-xs transition-all shadow-[0_0_16px_rgba(209,240,50,0.15)]"
              >
                Login / Sign Up
              </button>
            )}

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded-full bg-[#282a2e] hover:bg-[#333539] flex items-center justify-center text-white"
            >
              <span className="material-symbols-outlined text-[22px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Flyout Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#16181f] border-b border-[#282a2e] px-6 py-5 flex flex-col gap-3">
            <button
              onClick={() => {
                navigate('/buy-cars');
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between text-left py-2 font-semibold text-white border-b border-[#282a2e]/50"
            >
              <span>Buy Cars</span>
              <span className="text-[10px] text-[#d1f032] bg-[#282a2e] px-2 py-0.5 rounded-full font-bold">PRO</span>
            </button>
            <button
              onClick={() => {
                navigate('/sell-car');
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between text-left py-2 font-semibold text-[#d1f032] border-b border-[#282a2e]/50"
            >
              <span>Sell Your Car</span>
              <span className="text-[10px] text-[#181e00] bg-[#d1f032] px-2 py-0.5 rounded-full font-bold">INSTANT</span>
            </button>
            <button
              onClick={() => {
                navigate('/new-cars');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 font-semibold text-[#e2e2e8] border-b border-[#282a2e]/50"
            >
              New Cars
            </button>
            <button
              onClick={() => {
                navigate('/used-cars');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 font-semibold text-[#e2e2e8] border-b border-[#282a2e]/50"
            >
              Used Cars
            </button>
            <button
              onClick={() => {
                navigate('/compare');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 font-semibold text-[#e2e2e8] border-b border-[#282a2e]/50"
            >
              Compare Cars ({compareList.length})
            </button>
            <button
              onClick={() => {
                navigate('/services');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 font-semibold text-[#e2e2e8] border-b border-[#282a2e]/50"
            >
              Car Services &amp; Inspection
            </button>
            <button
              onClick={() => {
                navigate('/finance');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 font-semibold text-[#e2e2e8] border-b border-[#282a2e]/50"
            >
              Finance / EMI Calculator
            </button>
            <button
              onClick={() => {
                navigate('/brands');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 font-semibold text-[#e2e2e8] border-b border-[#282a2e]/50"
            >
              Browse Brands
            </button>
            <button
              onClick={() => {
                navigate('/admin');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 font-semibold text-[#c6c9ae] flex items-center justify-between"
            >
              <span>Admin Dashboard</span>
              <span className="material-symbols-outlined text-[16px]">security</span>
            </button>
          </div>
        )}
      </header>

      {/* Global Quick Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-2xl rounded-3xl bg-[#1e2024] border border-[#282a2e] shadow-2xl p-6 relative">
            <button
              onClick={() => setSearchModalOpen(false)}
              className="absolute top-5 right-5 text-[#c6c9ae] hover:text-white"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
            <div className="text-xs font-bold text-[#d1f032] uppercase tracking-wider mb-2">
              Instant Vehicle Search
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Search AutoHub Showroom</h3>
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#111317] border border-[#282a2e]">
                <span className="material-symbols-outlined text-[22px] text-[#d1f032]">search</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. BMW M4, Porsche 911, SUV under 50 Lakh, Electric in Mumbai..."
                  className="w-full bg-transparent text-white placeholder-[#90937a] text-sm focus:outline-none"
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-2xl bg-[#d1f032] hover:bg-[#b5d401] text-[#181e00] font-bold text-sm shadow-[0_4px_16px_rgba(209,240,50,0.3)] transition-all"
              >
                Search
              </button>
            </form>

            {/* Quick Popular Searches */}
            <div className="mt-6 pt-4 border-t border-[#282a2e]">
              <div className="text-xs text-[#c6c9ae] font-semibold mb-3">Popular Searches:</div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Porsche 911',
                  'BMW M340i',
                  'Mercedes AMG',
                  'Electric SUVs',
                  'Cars under ₹25 Lakh',
                  'Thar 4x4',
                  'Defender 110'
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      navigate(`/search?q=${encodeURIComponent(term)}`);
                      setSearchModalOpen(false);
                    }}
                    className="px-3 py-1.5 rounded-full bg-[#282a2e] hover:bg-[#333539] text-xs text-[#e2e2e8] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
