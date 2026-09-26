import React, { createContext, useContext, useState, useEffect } from 'react';
import { Car, TestDriveBooking, SavedSearch, Conversation, Message, NotificationItem } from '../types';
import { INITIAL_CARS } from '../data/cars';

interface AppContextType {
  currentPath: string;
  navigate: (path: string) => void;
  cars: Car[];
  setCars: React.Dispatch<React.SetStateAction<Car[]>>;
  wishlist: string[];
  toggleWishlist: (carId: string) => void;
  isInWishlist: (carId: string) => boolean;
  compareList: string[];
  addToCompare: (carId: string) => void;
  removeFromCompare: (carId: string) => void;
  isInCompare: (carId: string) => boolean;
  clearCompare: () => void;
  activeCity: string;
  setActiveCity: (city: string) => void;
  testDriveBookings: TestDriveBooking[];
  addTestDriveBooking: (booking: Omit<TestDriveBooking, 'id' | 'status' | 'createdAt'>) => void;
  savedSearches: SavedSearch[];
  addSavedSearch: (title: string, query: string, filters: any) => void;
  removeSavedSearch: (id: string) => void;
  conversations: Conversation[];
  messages: Message[];
  activeConversationId: string;
  setActiveConversationId: (id: string) => void;
  sendMessage: (conversationId: string, text: string, offerAmount?: string) => void;
  notifications: NotificationItem[];
  markAllNotificationsRead: () => void;
  markNotificationRead: (id: string) => void;
  user: {
    name: string;
    email: string;
    phone: string;
    role: 'buyer' | 'seller' | 'admin';
    city: string;
    verified: boolean;
  } | null;
  login: (email: string, role?: 'buyer' | 'seller' | 'admin') => void;
  logout: () => void;
  toast: { message: string; type: 'success' | 'info' | 'warning' } | null;
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  
  // Quick modals
  contactModalCar: Car | null;
  setContactModalCar: (car: Car | null) => void;
  testDriveModalCar: Car | null;
  setTestDriveModalCar: (car: Car | null) => void;
  offerModalCar: Car | null;
  setOfferModalCar: (car: Car | null) => void;
  shareModalCar: Car | null;
  setShareModalCar: (car: Car | null) => void;
  inspectionModalCar: Car | null;
  setInspectionModalCar: (car: Car | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Read path from URL or fallback to /
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname && window.location.pathname !== '/'
      ? window.location.pathname
      : '/';
  });

  const [cars, setCars] = useState<Car[]>(INITIAL_CARS);
  const [wishlist, setWishlist] = useState<string[]>(['porsche-911-carrera-s-992', 'bmw-m4-competition', 'audi-etron-gt-ev']);
  const [compareList, setCompareList] = useState<string[]>(['porsche-911-carrera-s-992', 'bmw-m4-competition']);
  const [activeCity, setActiveCity] = useState<string>('Mumbai, IN');

  const [user, setUser] = useState<{
    name: string;
    email: string;
    phone: string;
    role: 'buyer' | 'seller' | 'admin';
    city: string;
    verified: boolean;
  } | null>({
    name: 'Kabir Singhania',
    email: 'kabir.singhania@apexcapital.in',
    phone: '+91 98201 55678',
    role: 'buyer',
    city: 'Mumbai',
    verified: true
  });

  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'warning' } | null>(null);

  // Modals state
  const [contactModalCar, setContactModalCar] = useState<Car | null>(null);
  const [testDriveModalCar, setTestDriveModalCar] = useState<Car | null>(null);
  const [offerModalCar, setOfferModalCar] = useState<Car | null>(null);
  const [shareModalCar, setShareModalCar] = useState<Car | null>(null);
  const [inspectionModalCar, setInspectionModalCar] = useState<Car | null>(null);

  const [testDriveBookings, setTestDriveBookings] = useState<TestDriveBooking[]>([
    {
      id: 'td-101',
      carId: 'bmw-m4-competition',
      carTitle: 'BMW M4 Competition Coupe',
      carImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt4LJ8CoFg_9XC_WwUDSLLFjsGwLgAwL7O3ccoi_pZ2LwK1nLP8lV5e4dFvLziG-m8NhIOisZsMMAxzZZIL1i-mJOSvDktBjDeFyrdPSyDuJLIuSHwUiyZre24kiNiedAdjwZ0Rz582aadz97ScG-ct0z7ZtrKL2Mv2D3Is8Cl71QkTutMIJgafitgBsANTnAxkLm7HDiTwwRi9EWuU6Ut2BbmCTXniTyIcK5R8Hxnqpb5O31JckXHPQ',
      city: 'Bangalore',
      hub: 'Indiranagar AutoHub Vault',
      date: 'Tomorrow, 11:00 AM',
      timeSlot: '11:00 AM - 12:30 PM',
      userName: 'Kabir Singhania',
      userPhone: '+91 98201 55678',
      userEmail: 'kabir.singhania@apexcapital.in',
      status: 'Confirmed',
      createdAt: '2025-02-12'
    }
  ]);

  const [savedSearches, setSavedSearches] = useState<SavedSearch[]>([
    {
      id: 'search-1',
      title: 'BMW M Series in Mumbai / Bangalore',
      query: 'BMW M',
      filters: { brand: 'BMW', minPrice: 50, maxPrice: 150 },
      notifications: true,
      createdAt: '3 days ago'
    },
    {
      id: 'search-2',
      title: 'Electric SUVs with >400km Range',
      query: 'Electric SUV',
      filters: { fuel: 'Electric', bodyType: 'SUV' },
      notifications: true,
      createdAt: '1 week ago'
    }
  ]);

  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 'conv-1',
      participantName: 'Infinity Motors (Worli)',
      participantRole: 'Verified Dealer',
      lastMessage: 'The Porsche 911 Carrera S is parked in our private staging bay. Would 4:00 PM suit you?',
      lastMessageTime: '10:45 AM',
      unreadCount: 1,
      carTitle: 'Porsche 911 Carrera S (992)',
      carPrice: '₹1.82 Cr',
      carImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX4NtUnETrqYQLUL0bAZqoVtOSeXUsYfFb8XDW3tSE6FJiaWfogwsqO3TvFQNfrnXNnV_I0p-gEmi5gxcZ_T_jkX2nFVyMxsNUTVKYFCDqAMynRPA0JNeAhPd7nhCtYVTGAxu9kmpZIQx9dnw2QCl2GqxhlgqI0fWV-ui1y8vQGawiwXVzE46Trm5m_-_pMpempcqIi6dpqvv09fOdN5o2ZSRclFzalLWYhMT3RXn0kt4OPBlMMl02Vw',
      carId: 'porsche-911-carrera-s-992'
    },
    {
      id: 'conv-2',
      participantName: 'Prestige Performance (Vikram)',
      participantRole: 'Senior Concierge',
      lastMessage: 'Offer acknowledged. The seller is willing to close at ₹1.25 Cr with 1-year extended warranty.',
      lastMessageTime: 'Yesterday',
      unreadCount: 0,
      carTitle: 'BMW M4 Competition',
      carPrice: '₹1.28 Cr',
      carImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt4LJ8CoFg_9XC_WwUDSLLFjsGwLgAwL7O3ccoi_pZ2LwK1nLP8lV5e4dFvLziG-m8NhIOisZsMMAxzZZIL1i-mJOSvDktBjDeFyrdPSyDuJLIuSHwUiyZre24kiNiedAdjwZ0Rz582aadz97ScG-ct0z7ZtrKL2Mv2D3Is8Cl71QkTutMIJgafitgBsANTnAxkLm7HDiTwwRi9EWuU6Ut2BbmCTXniTyIcK5R8Hxnqpb5O31JckXHPQ',
      carId: 'bmw-m4-competition'
    }
  ]);

  const [activeConversationId, setActiveConversationId] = useState<string>('conv-1');

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-1',
      conversationId: 'conv-1',
      sender: 'user',
      text: 'Hi Infinity Motors, I am interested in inspecting the 2023 Porsche 911 Carrera S (Guards Red). Is the vehicle available for inspection today?',
      timestamp: '10:30 AM',
      carPreview: {
        id: 'porsche-911-carrera-s-992',
        title: 'Porsche 911 Carrera S (992)',
        price: '₹1.82 Cr',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX4NtUnETrqYQLUL0bAZqoVtOSeXUsYfFb8XDW3tSE6FJiaWfogwsqO3TvFQNfrnXNnV_I0p-gEmi5gxcZ_T_jkX2nFVyMxsNUTVKYFCDqAMynRPA0JNeAhPd7nhCtYVTGAxu9kmpZIQx9dnw2QCl2GqxhlgqI0fWV-ui1y8vQGawiwXVzE46Trm5m_-_pMpempcqIi6dpqvv09fOdN5o2ZSRclFzalLWYhMT3RXn0kt4OPBlMMl02Vw'
      }
    },
    {
      id: 'msg-2',
      conversationId: 'conv-1',
      sender: 'seller',
      text: 'Good morning Kabir! Yes, absolutely. The 140-point diagnostics were refreshed yesterday with 100% health score. The vehicle is parked in our private staging bay at Worli.',
      timestamp: '10:38 AM'
    },
    {
      id: 'msg-3',
      conversationId: 'conv-1',
      sender: 'seller',
      text: 'The Porsche 911 Carrera S is parked in our private staging bay. Would 4:00 PM suit you?',
      timestamp: '10:45 AM'
    }
  ]);

  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: 'notif-1',
      type: 'price_drop',
      title: 'Price Drop Alert',
      message: 'BMW M4 Competition price dropped by ₹7 Lakh to ₹1.28 Cr in Bangalore.',
      timestamp: '15 mins ago',
      read: false,
      actionUrl: '/car/bmw-m4-competition',
      carImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt4LJ8CoFg_9XC_WwUDSLLFjsGwLgAwL7O3ccoi_pZ2LwK1nLP8lV5e4dFvLziG-m8NhIOisZsMMAxzZZIL1i-mJOSvDktBjDeFyrdPSyDuJLIuSHwUiyZre24kiNiedAdjwZ0Rz582aadz97ScG-ct0z7ZtrKL2Mv2D3Is8Cl71QkTutMIJgafitgBsANTnAxkLm7HDiTwwRi9EWuU6Ut2BbmCTXniTyIcK5R8Hxnqpb5O31JckXHPQ'
    },
    {
      id: 'notif-2',
      type: 'test_drive',
      title: 'Test Drive Scheduled',
      message: 'Your test drive for BMW M4 Competition is confirmed for tomorrow at 11:00 AM.',
      timestamp: '2 hours ago',
      read: false,
      actionUrl: '/dashboard'
    },
    {
      id: 'notif-3',
      type: 'offer',
      title: 'Counter Offer Received',
      message: 'Prestige Performance submitted a counter offer of ₹1.25 Cr on BMW M4.',
      timestamp: 'Yesterday',
      read: true,
      actionUrl: '/messages'
    },
    {
      id: 'notif-4',
      type: 'verification',
      title: 'Inspection Report Published',
      message: 'AutoHub Master Engineers completed 140-point diagnostics on Porsche 911.',
      timestamp: '2 days ago',
      read: true,
      actionUrl: '/car/porsche-911-carrera-s-992'
    }
  ]);

  // Handle popstate for browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast((prev) => (prev?.message === message ? null : prev));
    }, 3500);
  };

  const toggleWishlist = (carId: string) => {
    const exists = wishlist.includes(carId);
    if (exists) {
      setWishlist((prev) => prev.filter((id) => id !== carId));
      showToast('Removed from your Wishlist', 'info');
    } else {
      setWishlist((prev) => [...prev, carId]);
      showToast('Added to your Wishlist', 'success');
    }
  };

  const isInWishlist = (carId: string) => wishlist.includes(carId);

  const addToCompare = (carId: string) => {
    if (compareList.includes(carId)) {
      setCompareList((prev) => prev.filter((id) => id !== carId));
      showToast('Removed from car comparison', 'info');
      return;
    }
    if (compareList.length >= 4) {
      showToast('Maximum 4 vehicles can be compared simultaneously', 'warning');
      return;
    }
    setCompareList((prev) => [...prev, carId]);
    showToast('Added to car comparison (Total: ' + (compareList.length + 1) + ')', 'success');
  };

  const removeFromCompare = (carId: string) => {
    setCompareList((prev) => prev.filter((id) => id !== carId));
    showToast('Removed from comparison', 'info');
  };

  const isInCompare = (carId: string) => compareList.includes(carId);

  const clearCompare = () => {
    setCompareList([]);
    showToast('Cleared comparison list', 'info');
  };

  const addTestDriveBooking = (bookingData: Omit<TestDriveBooking, 'id' | 'status' | 'createdAt'>) => {
    const newBooking: TestDriveBooking = {
      ...bookingData,
      id: `td-${Date.now()}`,
      status: 'Confirmed',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setTestDriveBookings((prev) => [newBooking, ...prev]);
    showToast('Test Drive Confirmed! VIP Pass issued.', 'success');
  };

  const addSavedSearch = (title: string, query: string, filters: any) => {
    const newSearch: SavedSearch = {
      id: `search-${Date.now()}`,
      title,
      query,
      filters,
      notifications: true,
      createdAt: 'Just now'
    };
    setSavedSearches((prev) => [newSearch, ...prev]);
    showToast('Search saved to your dashboard', 'success');
  };

  const removeSavedSearch = (id: string) => {
    setSavedSearches((prev) => prev.filter((s) => s.id !== id));
    showToast('Saved search deleted', 'info');
  };

  const sendMessage = (conversationId: string, text: string, offerAmount?: string) => {
    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      conversationId,
      sender: 'user',
      text,
      timestamp: 'Just now',
      offerAmount
    };
    setMessages((prev) => [...prev, newMsg]);

    // Update conversation last message
    setConversations((prev) =>
      prev.map((c) =>
        c.id === conversationId
          ? { ...c, lastMessage: text, lastMessageTime: 'Just now' }
          : c
      )
    );

    showToast('Message sent to seller', 'success');

    // Simulate seller automated prompt response after 2 seconds
    setTimeout(() => {
      const sellerReplies = [
        'Thank you for your message! Our AutoHub certified advisor will coordinate the keys and registration transfer paperwork shortly.',
        'Noted! We have reserved your preferred slot at our showroom vault. Looking forward to meeting you.',
        'Offer received. Let us run this by the registered owner and get back to you within 30 minutes.'
      ];
      const randomReply = sellerReplies[Math.floor(Math.random() * sellerReplies.length)];
      const sellerMsg: Message = {
        id: `msg-rep-${Date.now()}`,
        conversationId,
        sender: 'seller',
        text: randomReply,
        timestamp: 'Just now'
      };
      setMessages((prev) => [...prev, sellerMsg]);
      setConversations((prev) =>
        prev.map((c) =>
          c.id === conversationId
            ? { ...c, lastMessage: randomReply, lastMessageTime: 'Just now' }
            : c
        )
      );
    }, 1800);
  };

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    showToast('All notifications marked as read', 'info');
  };

  const markNotificationRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const login = (email: string, role: 'buyer' | 'seller' | 'admin' = 'buyer') => {
    setUser({
      name: email.split('@')[0].toUpperCase(),
      email,
      phone: '+91 98201 55678',
      role,
      city: 'Mumbai',
      verified: true
    });
    showToast(`Logged in as ${email}`, 'success');
  };

  const logout = () => {
    setUser(null);
    showToast('Logged out of AutoHub', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        currentPath,
        navigate,
        cars,
        setCars,
        wishlist,
        toggleWishlist,
        isInWishlist,
        compareList,
        addToCompare,
        removeFromCompare,
        isInCompare,
        clearCompare,
        activeCity,
        setActiveCity,
        testDriveBookings,
        addTestDriveBooking,
        savedSearches,
        addSavedSearch,
        removeSavedSearch,
        conversations,
        messages,
        activeConversationId,
        setActiveConversationId,
        sendMessage,
        notifications,
        markAllNotificationsRead,
        markNotificationRead,
        user,
        login,
        logout,
        toast,
        showToast,
        contactModalCar,
        setContactModalCar,
        testDriveModalCar,
        setTestDriveModalCar,
        offerModalCar,
        setOfferModalCar,
        shareModalCar,
        setShareModalCar,
        inspectionModalCar,
        setInspectionModalCar
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
