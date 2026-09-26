export type FuelType = 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid' | 'CNG';
export type TransmissionType = 'Manual' | 'Automatic' | 'PDK Auto' | 'M Steptronic' | '9G-Tronic' | 'AMT' | 'DCT' | 'CVT';
export type BodyType = 'SUV' | 'Sedan' | 'Coupe' | 'Hatchback' | 'Convertible' | 'MUV' | 'EV';
export type OwnershipType = '1st Owner' | '2nd Owner' | '3rd Owner+';
export type CarCondition = 'Certified' | 'Non-certified';

export interface CarSpecs {
  engine: string;
  power: string;
  torque: string;
  mileage: string;
  transmission: string;
  fuel: string;
  seating: number;
  bootSpace: string;
  driveType: string;
  acceleration: string; // 0-100 km/h
  topSpeed?: string;
  batteryCapacity?: string;
  range?: string;
}

export interface CarHistory {
  registrationYear: number;
  regState: string;
  insuranceValidTill: string;
  rcStatus: 'Verified & Clean' | 'Pending Verification' | 'Duplicate Issued' | string;
  roadTax: 'Lifetime Paid' | 'Annual' | string;
  accidentHistory: 'Zero Accidental Claims' | 'Minor Dent Repaired' | string;
  serviceHistory: 'Full Authorized Dealer Records' | 'Partial Service Records' | string;
  inspectionScore: number; // e.g. 98/100
}

export interface SellerInfo {
  id: string;
  name: string;
  type: 'Certified Dealer' | 'Direct Owner' | 'AutoHub Studio';
  verified: boolean;
  rating: number;
  reviewsCount: number;
  location: string;
  responseTime: string;
  phone: string;
}

export interface Car {
  id: string;
  title: string;
  brand: string;
  model: string;
  variant: string;
  badge?: string; // e.g. "Porsche Certified", "M Power Division"
  year: number;
  km: number;
  fuel: FuelType;
  transmission: TransmissionType;
  bodyType: BodyType;
  ownership: OwnershipType;
  condition: CarCondition;
  city: string;
  priceLakhs: number; // in Lakhs, e.g. 182 for 1.82 Cr, 24.8 for 24.80 L
  priceFormatted: string; // e.g. '₹1.82 Cr' or '₹24.80 Lakh'
  originalPriceFormatted?: string; // if price dropped
  priceDropLakhs?: number;
  emiFormatted: string; // e.g. '₹2,35,000/mo'
  color: string;
  images: {
    hero: string;
    exterior: string[];
    interior: string[];
    engine?: string[];
    dashboard?: string[];
  };
  tags: string[]; // e.g. ["140-Point Passed", "AutoHub Warranty"]
  specs: CarSpecs;
  features: string[];
  history: CarHistory;
  seller: SellerInfo;
  isFeatured?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
  status: 'Active' | 'Pending Verification' | 'Sold' | 'Draft';
  createdAt: string;
  viewsCount: number;
  leadsCount: number;
}

export interface FilterState {
  searchQuery: string;
  city: string;
  brand: string;
  model: string;
  minPrice: number;
  maxPrice: number;
  fuel: string;
  transmission: string;
  bodyType: string;
  ownership: string;
  condition: string;
  yearMin: number;
  kmMax: number;
  sortBy: 'recommended' | 'price-asc' | 'price-desc' | 'newest' | 'lowest-km';
}

export interface TestDriveBooking {
  id: string;
  carId: string;
  carTitle: string;
  carImage: string;
  city: string;
  hub: string;
  date: string;
  timeSlot: string;
  userName: string;
  userPhone: string;
  userEmail: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export interface SavedSearch {
  id: string;
  title: string;
  query: string;
  filters: Partial<FilterState>;
  notifications: boolean;
  createdAt: string;
}

export interface Message {
  id: string;
  conversationId: string;
  sender: 'user' | 'seller' | 'autohub';
  text: string;
  timestamp: string;
  carPreview?: {
    id: string;
    title: string;
    price: string;
    image: string;
  };
  offerAmount?: string;
}

export interface Conversation {
  id: string;
  participantName: string;
  participantRole: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  carTitle: string;
  carPrice: string;
  carImage: string;
  carId: string;
}

export interface NotificationItem {
  id: string;
  type: 'price_drop' | 'test_drive' | 'offer' | 'verification' | 'system';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
  carImage?: string;
}
