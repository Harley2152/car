import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileNav } from './components/MobileNav';
import { Modals } from './components/Modals';
import { Toast } from './components/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { BuyCarsPage } from './pages/BuyCarsPage';
import { CarDetailsPage } from './pages/CarDetailsPage';
import { SellCarPage } from './pages/SellCarPage';
import { SellerDashboardPage } from './pages/SellerDashboardPage';
import { BuyerDashboardPage } from './pages/BuyerDashboardPage';
import { WishlistPage } from './pages/WishlistPage';
import { ComparePage } from './pages/ComparePage';
import { NewCarsPage } from './pages/NewCarsPage';
import { UsedCarsPage } from './pages/UsedCarsPage';
import { BrandsPage } from './pages/BrandsPage';
import { ServicesPage } from './pages/ServicesPage';
import { TestDrivePage } from './pages/TestDrivePage';
import { FinancePage } from './pages/FinancePage';
import { SearchPage } from './pages/SearchPage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { ProfilePage } from './pages/ProfilePage';
import { MessagesPage } from './pages/MessagesPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { AdminVerificationPage } from './pages/AdminVerificationPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HelpPage } from './pages/HelpPage';

const AppContent: React.FC = () => {
  const { currentPath } = useApp();

  // Helper route matcher
  const renderCurrentRoute = () => {
    // Car Details: /car/:id
    if (currentPath.startsWith('/car/')) {
      const id = currentPath.replace('/car/', '').split('?')[0];
      return <CarDetailsPage carId={id} />;
    }

    // Brands detail: /brands/:brand
    if (currentPath.startsWith('/brands/')) {
      const brand = decodeURIComponent(currentPath.replace('/brands/', '').split('?')[0]);
      return <BrandsPage initialBrand={brand} />;
    }

    switch (currentPath.split('?')[0]) {
      case '/':
        return <HomePage />;
      case '/buy-cars':
        return <BuyCarsPage />;
      case '/sell-car':
      case '/sell-your-car':
        return <SellCarPage />;
      case '/seller/dashboard':
        return <SellerDashboardPage />;
      case '/dashboard':
        return <BuyerDashboardPage />;
      case '/wishlist':
        return <WishlistPage />;
      case '/compare':
      case '/compare-cars':
        return <ComparePage />;
      case '/new-cars':
        return <NewCarsPage />;
      case '/used-cars':
        return <UsedCarsPage />;
      case '/brands':
        return <BrandsPage />;
      case '/services':
      case '/car-services':
        return <ServicesPage />;
      case '/test-drive':
        return <TestDrivePage />;
      case '/finance':
        return <FinancePage />;
      case '/search':
        return <SearchPage />;
      case '/login':
        return <LoginPage />;
      case '/signup':
        return <SignUpPage />;
      case '/profile':
        return <ProfilePage />;
      case '/messages':
        return <MessagesPage />;
      case '/notifications':
        return <NotificationsPage />;
      case '/admin':
        return <AdminDashboardPage />;
      case '/admin/verification':
        return <AdminVerificationPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/help':
        return <HelpPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#111317] text-[#e2e2e8] flex flex-col font-sans antialiased selection:bg-[#d1f032] selection:text-[#181e00]">
      <Navbar />
      <main className="flex-1 pt-20 pb-16 md:pb-0">{renderCurrentRoute()}</main>
      <Footer />
      <MobileNav />
      <Modals />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
