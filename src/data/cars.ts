import { Car } from '../types';

export const INITIAL_CARS: Car[] = [
  {
    id: 'porsche-911-carrera-s-992',
    title: 'Porsche 911 Carrera S (992)',
    brand: 'Porsche',
    model: '911 Carrera S',
    variant: '992 Turbocharged Coupe',
    badge: 'Porsche Certified',
    year: 2023,
    km: 12400,
    fuel: 'Petrol',
    transmission: 'PDK Auto',
    bodyType: 'Coupe',
    ownership: '1st Owner',
    condition: 'Certified',
    city: 'Mumbai',
    priceLakhs: 182,
    priceFormatted: '₹1.82 Cr',
    originalPriceFormatted: '₹1.88 Cr',
    priceDropLakhs: 6,
    emiFormatted: '₹2,35,000/mo',
    color: 'Guards Red',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX4NtUnETrqYQLUL0bAZqoVtOSeXUsYfFb8XDW3tSE6FJiaWfogwsqO3TvFQNfrnXNnV_I0p-gEmi5gxcZ_T_jkX2nFVyMxsNUTVKYFCDqAMynRPA0JNeAhPd7nhCtYVTGAxu9kmpZIQx9dnw2QCl2GqxhlgqI0fWV-ui1y8vQGawiwXVzE46Trm5m_-_pMpempcqIi6dpqvv09fOdN5o2ZSRclFzalLWYhMT3RXn0kt4OPBlMMl02Vw',
      exterior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCX4NtUnETrqYQLUL0bAZqoVtOSeXUsYfFb8XDW3tSE6FJiaWfogwsqO3TvFQNfrnXNnV_I0p-gEmi5gxcZ_T_jkX2nFVyMxsNUTVKYFCDqAMynRPA0JNeAhPd7nhCtYVTGAxu9kmpZIQx9dnw2QCl2GqxhlgqI0fWV-ui1y8vQGawiwXVzE46Trm5m_-_pMpempcqIi6dpqvv09fOdN5o2ZSRclFzalLWYhMT3RXn0kt4OPBlMMl02Vw',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCt1PGttIDH7Qns5s6_9mSNx0EDCtrDfbUym1aDaNPiFUa6co__xfJ97tMQIWiu3Db3dbmtsgJ8VZwGmCAvf83OBMS6OiXfPkwyBOqAQ-9rPhIX4PBzy0yRGfSFZCLN0NWG8NoEQnZDYy_nfQ90GyL5m9SnSty4JS1M29_MhZXQVc3Sa02fm4-bD_yQDnuiFJMQ3bqx2AMElnDgQ1T1qLRfftjrH6ksVu4OoGAanqxws8bAS1FT7WDibg',
      ],
      interior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCt4LJ8CoFg_9XC_WwUDSLLFjsGwLgAwL7O3ccoi_pZ2LwK1nLP8lV5e4dFvLziG-m8NhIOisZsMMAxzZZIL1i-mJOSvDktBjDeFyrdPSyDuJLIuSHwUiyZre24kiNiedAdjwZ0Rz582aadz97ScG-ct0z7ZtrKL2Mv2D3Is8Cl71QkTutMIJgafitgBsANTnAxkLm7HDiTwwRi9EWuU6Ut2BbmCTXniTyIcK5R8Hxnqpb5O31JckXHPQ'
      ],
      engine: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCX4NtUnETrqYQLUL0bAZqoVtOSeXUsYfFb8XDW3tSE6FJiaWfogwsqO3TvFQNfrnXNnV_I0p-gEmi5gxcZ_T_jkX2nFVyMxsNUTVKYFCDqAMynRPA0JNeAhPd7nhCtYVTGAxu9kmpZIQx9dnw2QCl2GqxhlgqI0fWV-ui1y8vQGawiwXVzE46Trm5m_-_pMpempcqIi6dpqvv09fOdN5o2ZSRclFzalLWYhMT3RXn0kt4OPBlMMl02Vw'
      ],
      dashboard: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD1mnM4bvFHiuZ2tci1RTOOEixWO9YOqYFooC0aXvaMICEN4BEpAMmEilKfZMEmwoeKY7iW98TUaVhSj4JQRMd5Mq3puwpdrL_CYbFFf4JxuK2zYEiNTcHwNVr1v3LeNPMHuFSJxmUoyiONkhojfebCFp_0j7yB5mfiGBZtVzAWUDaEr5XLAHcUl7nAotB9mux4qJCDHDPifAk90ZoqqnYRdAlw9wUTMFSAaWkXkUWYQ9QcblKx-JQYCA'
      ]
    },
    tags: ['140-Point Passed', 'AutoHub Warranty'],
    specs: {
      engine: '3.0L Twin-Turbo Flat-6',
      power: '450 PS @ 6,500 RPM',
      torque: '530 Nm @ 2,300–5,000 RPM',
      mileage: '11.2 km/l ARAI',
      transmission: '8-Speed Dual-Clutch (PDK)',
      fuel: 'Petrol (98 RON)',
      seating: 4,
      bootSpace: '132 Litres (Front Luggage)',
      driveType: 'Rear-Wheel Drive (RWD)',
      acceleration: '3.5s (0-100 km/h)',
      topSpeed: '308 km/h'
    },
    features: [
      'Sport Chrono Package',
      'Porsche Dynamic Chassis Control (PDCC)',
      'PASM Sport Suspension (-10mm)',
      'Bose Surround Sound Audio (12 Speakers)',
      'Sport Exhaust System with Black Tailpipes',
      '18-Way Adaptive Sports Seats Plus',
      'Apple CarPlay & Android Auto',
      'ParkAssist including Surround View 360°'
    ],
    history: {
      registrationYear: 2023,
      regState: 'MH-01 (Mumbai South)',
      insuranceValidTill: 'December 2026 (Zero Dep Comprehensive)',
      rcStatus: 'Verified & Clean',
      roadTax: 'Lifetime Paid',
      accidentHistory: 'Zero Accidental Claims',
      serviceHistory: 'Full Authorized Dealer Records (Porsche Centre Mumbai)',
      inspectionScore: 99
    },
    seller: {
      id: 'seller-1',
      name: 'Infinity Motors Porsche Specialist',
      type: 'Certified Dealer',
      verified: true,
      rating: 4.9,
      reviewsCount: 148,
      location: 'Worli, Mumbai',
      responseTime: 'Under 15 mins',
      phone: '+91 98200 44120'
    },
    isFeatured: true,
    isPopular: true,
    status: 'Active',
    createdAt: '2025-01-14',
    viewsCount: 4230,
    leadsCount: 38
  },
  {
    id: 'bmw-m4-competition',
    title: 'BMW M4 Competition Coupe',
    brand: 'BMW',
    model: 'M4 Competition',
    variant: 'G82 TwinPower Turbo',
    badge: 'M Power Division',
    year: 2022,
    km: 8900,
    fuel: 'Petrol',
    transmission: 'M Steptronic',
    bodyType: 'Coupe',
    ownership: '1st Owner',
    condition: 'Certified',
    city: 'Bangalore',
    priceLakhs: 128,
    priceFormatted: '₹1.28 Cr',
    originalPriceFormatted: '₹1.35 Cr',
    priceDropLakhs: 7,
    emiFormatted: '₹1,65,000/mo',
    color: 'Sao Paulo Yellow / Acid Green',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt4LJ8CoFg_9XC_WwUDSLLFjsGwLgAwL7O3ccoi_pZ2LwK1nLP8lV5e4dFvLziG-m8NhIOisZsMMAxzZZIL1i-mJOSvDktBjDeFyrdPSyDuJLIuSHwUiyZre24kiNiedAdjwZ0Rz582aadz97ScG-ct0z7ZtrKL2Mv2D3Is8Cl71QkTutMIJgafitgBsANTnAxkLm7HDiTwwRi9EWuU6Ut2BbmCTXniTyIcK5R8Hxnqpb5O31JckXHPQ',
      exterior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCt4LJ8CoFg_9XC_WwUDSLLFjsGwLgAwL7O3ccoi_pZ2LwK1nLP8lV5e4dFvLziG-m8NhIOisZsMMAxzZZIL1i-mJOSvDktBjDeFyrdPSyDuJLIuSHwUiyZre24kiNiedAdjwZ0Rz582aadz97ScG-ct0z7ZtrKL2Mv2D3Is8Cl71QkTutMIJgafitgBsANTnAxkLm7HDiTwwRi9EWuU6Ut2BbmCTXniTyIcK5R8Hxnqpb5O31JckXHPQ',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCX4NtUnETrqYQLUL0bAZqoVtOSeXUsYfFb8XDW3tSE6FJiaWfogwsqO3TvFQNfrnXNnV_I0p-gEmi5gxcZ_T_jkX2nFVyMxsNUTVKYFCDqAMynRPA0JNeAhPd7nhCtYVTGAxu9kmpZIQx9dnw2QCl2GqxhlgqI0fWV-ui1y8vQGawiwXVzE46Trm5m_-_pMpempcqIi6dpqvv09fOdN5o2ZSRclFzalLWYhMT3RXn0kt4OPBlMMl02Vw'
      ],
      interior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD1mnM4bvFHiuZ2tci1RTOOEixWO9YOqYFooC0aXvaMICEN4BEpAMmEilKfZMEmwoeKY7iW98TUaVhSj4JQRMd5Mq3puwpdrL_CYbFFf4JxuK2zYEiNTcHwNVr1v3LeNPMHuFSJxmUoyiONkhojfebCFp_0j7yB5mfiGBZtVzAWUDaEr5XLAHcUl7nAotB9mux4qJCDHDPifAk90ZoqqnYRdAlw9wUTMFSAaWkXkUWYQ9QcblKx-JQYCA'
      ]
    },
    tags: ['1st Owner', 'Track Pack'],
    specs: {
      engine: '3.0L S58 BMW M TwinPower Turbo Inline-6',
      power: '510 PS @ 6,250 RPM',
      torque: '650 Nm @ 2,750–5,500 RPM',
      mileage: '10.75 km/l ARAI',
      transmission: '8-Speed M Steptronic with Drivelogic',
      fuel: 'Petrol',
      seating: 4,
      bootSpace: '440 Litres',
      driveType: 'M xDrive Active AWD with 2WD Drift Mode',
      acceleration: '3.8s (0-100 km/h)',
      topSpeed: '290 km/h'
    },
    features: [
      'M Carbon Bucket Seats',
      'M Carbon Ceramic Brakes with Gold Calipers',
      'M Driver Package (Speed Limiter Unlocked to 290 km/h)',
      'Harman Kardon 16-Speaker Audio System',
      'BMW Laserlight Headlamps',
      'Head-Up Display with M-Specific Graphics',
      'Carbon Fiber Roof & Interior Trims',
      'Wireless Apple CarPlay / Android Auto'
    ],
    history: {
      registrationYear: 2022,
      regState: 'KA-01 (Bangalore Central)',
      insuranceValidTill: 'October 2026',
      rcStatus: 'Verified & Clean',
      roadTax: 'Lifetime Paid',
      accidentHistory: 'Zero Accidental Claims',
      serviceHistory: 'Full Authorized Dealer Records (Navnit Motors BMW)',
      inspectionScore: 98
    },
    seller: {
      id: 'seller-2',
      name: 'Prestige Performance Vault',
      type: 'Certified Dealer',
      verified: true,
      rating: 4.85,
      reviewsCount: 92,
      location: 'Indiranagar, Bangalore',
      responseTime: 'Under 10 mins',
      phone: '+91 99001 88450'
    },
    isFeatured: true,
    isPopular: true,
    status: 'Active',
    createdAt: '2025-01-20',
    viewsCount: 6180,
    leadsCount: 52
  },
  {
    id: 'mercedes-amg-c43-4matic',
    title: 'Mercedes-AMG C43 4MATIC',
    brand: 'Mercedes-Benz',
    model: 'AMG C43',
    variant: 'W206 BiTurbo F1 Tech',
    badge: 'Affalterbach Born',
    year: 2023,
    km: 14200,
    fuel: 'Petrol',
    transmission: '9G-Tronic',
    bodyType: 'Sedan',
    ownership: '1st Owner',
    condition: 'Certified',
    city: 'Delhi NCR',
    priceLakhs: 88.5,
    priceFormatted: '₹88.50 Lakh',
    originalPriceFormatted: '₹92.00 Lakh',
    priceDropLakhs: 3.5,
    emiFormatted: '₹1,12,000/mo',
    color: 'Obsidian Black Metallic',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1mnM4bvFHiuZ2tci1RTOOEixWO9YOqYFooC0aXvaMICEN4BEpAMmEilKfZMEmwoeKY7iW98TUaVhSj4JQRMd5Mq3puwpdrL_CYbFFf4JxuK2zYEiNTcHwNVr1v3LeNPMHuFSJxmUoyiONkhojfebCFp_0j7yB5mfiGBZtVzAWUDaEr5XLAHcUl7nAotB9mux4qJCDHDPifAk90ZoqqnYRdAlw9wUTMFSAaWkXkUWYQ9QcblKx-JQYCA',
      exterior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD1mnM4bvFHiuZ2tci1RTOOEixWO9YOqYFooC0aXvaMICEN4BEpAMmEilKfZMEmwoeKY7iW98TUaVhSj4JQRMd5Mq3puwpdrL_CYbFFf4JxuK2zYEiNTcHwNVr1v3LeNPMHuFSJxmUoyiONkhojfebCFp_0j7yB5mfiGBZtVzAWUDaEr5XLAHcUl7nAotB9mux4qJCDHDPifAk90ZoqqnYRdAlw9wUTMFSAaWkXkUWYQ9QcblKx-JQYCA'
      ],
      interior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDtJPJEgxNqD8JAKCljE5xUFBiw5wl9VXxmV9Ung2sj4MZ9v_wqOHvTDfHqoW0CiHfVWTrsJKTfUcf9ioG_WwstEuZrVlOZJ2oOLx06beR7A8jbK_6Sep-Mj5Av8AsVbHMkd11ihQ7fFiDkylPl5L_wNvsvBpgNRhH2znW9-0BiqwdNj_TOBuSi0HR0kJmppgiLuUt1QLghRhzrldwx6isk0_guAn-OHyfPwgCcUQIQ2iuO4nduIMOs9g'
      ]
    },
    tags: ['Pan-Roof', 'Full Record'],
    specs: {
      engine: '2.0L M139l with Electric Exhaust Gas Turbocharger',
      power: '408 PS + 14 PS RSG',
      torque: '500 Nm @ 5,000 RPM',
      mileage: '12.4 km/l ARAI',
      transmission: 'AMG SPEEDSHIFT MCT 9G',
      fuel: 'Petrol',
      seating: 5,
      bootSpace: '455 Litres',
      driveType: 'AMG Performance 4MATIC (AWD)',
      acceleration: '4.6s (0-100 km/h)',
      topSpeed: '250 km/h'
    },
    features: [
      'Panoramic Sliding Sunroof',
      'Burmester 3D Surround Sound System',
      'Rear-Axle Steering (Up to 2.5°)',
      'AMG Ride Control Adaptive Damping',
      'Digital Light Headlamp Technology',
      'AMG Performance Nappa Leather Steering Wheel',
      'MBUX Navigation with Augmented Reality',
      'Wireless Smartphone Charger'
    ],
    history: {
      registrationYear: 2023,
      regState: 'DL-03 (Delhi Central)',
      insuranceValidTill: 'August 2026',
      rcStatus: 'Verified & Clean',
      roadTax: 'Lifetime Paid',
      accidentHistory: 'Zero Accidental Claims',
      serviceHistory: 'Full Authorized Dealer Records (T&T Motors Delhi)',
      inspectionScore: 97
    },
    seller: {
      id: 'seller-3',
      name: 'Vikas Oberoi (Private Collector)',
      type: 'Direct Owner',
      verified: true,
      rating: 5.0,
      reviewsCount: 16,
      location: 'Vasant Vihar, Delhi',
      responseTime: 'Under 30 mins',
      phone: '+91 98111 23490'
    },
    isFeatured: true,
    isPopular: false,
    status: 'Active',
    createdAt: '2025-01-25',
    viewsCount: 3820,
    leadsCount: 29
  },
  {
    id: 'audi-etron-gt-ev',
    title: 'Audi e-tron GT EV Quattro',
    brand: 'Audi',
    model: 'e-tron GT',
    variant: 'Dual Motor Quattro Grand Tourer',
    badge: 'Electric Telemetry',
    year: 2024,
    km: 5100,
    fuel: 'Electric',
    transmission: 'Automatic',
    bodyType: 'EV',
    ownership: '1st Owner',
    condition: 'Certified',
    city: 'Chennai',
    priceLakhs: 145,
    priceFormatted: '₹1.45 Cr',
    originalPriceFormatted: '₹1.55 Cr',
    priceDropLakhs: 10,
    emiFormatted: '₹1,85,000/mo',
    color: 'Suzuka Grey Metallic',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtJPJEgxNqD8JAKCljE5xUFBiw5wl9VXxmV9Ung2sj4MZ9v_wqOHvTDfHqoW0CiHfVWTrsJKTfUcf9ioG_WwstEuZrVlOZJ2oOLx06beR7A8jbK_6Sep-Mj5Av8AsVbHMkd11ihQ7fFiDkylPl5L_wNvsvBpgNRhH2znW9-0BiqwdNj_TOBuSi0HR0kJmppgiLuUt1QLghRhzrldwx6isk0_guAn-OHyfPwgCcUQIQ2iuO4nduIMOs9g',
      exterior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDtJPJEgxNqD8JAKCljE5xUFBiw5wl9VXxmV9Ung2sj4MZ9v_wqOHvTDfHqoW0CiHfVWTrsJKTfUcf9ioG_WwstEuZrVlOZJ2oOLx06beR7A8jbK_6Sep-Mj5Av8AsVbHMkd11ihQ7fFiDkylPl5L_wNvsvBpgNRhH2znW9-0BiqwdNj_TOBuSi0HR0kJmppgiLuUt1QLghRhzrldwx6isk0_guAn-OHyfPwgCcUQIQ2iuO4nduIMOs9g'
      ],
      interior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD1mnM4bvFHiuZ2tci1RTOOEixWO9YOqYFooC0aXvaMICEN4BEpAMmEilKfZMEmwoeKY7iW98TUaVhSj4JQRMd5Mq3puwpdrL_CYbFFf4JxuK2zYEiNTcHwNVr1v3LeNPMHuFSJxmUoyiONkhojfebCFp_0j7yB5mfiGBZtVzAWUDaEr5XLAHcUl7nAotB9mux4qJCDHDPifAk90ZoqqnYRdAlw9wUTMFSAaWkXkUWYQ9QcblKx-JQYCA'
      ]
    },
    tags: ['Battery 100% Health', 'Fast Charge 800V'],
    specs: {
      engine: 'Permanent Magnet Synchronous Dual Electric Motors',
      power: '530 PS (Boost Mode)',
      torque: '630 Nm Instant Torque',
      mileage: '488 km Range (WLTP Verified)',
      transmission: '2-Speed Transmission on Rear Axle',
      fuel: 'Electric',
      seating: 5,
      bootSpace: '405 Litres + 85L Frunk',
      driveType: 'Electric Quattro All-Wheel Drive',
      acceleration: '4.1s (0-100 km/h)',
      topSpeed: '245 km/h',
      batteryCapacity: '93.4 kWh Lithium-Ion',
      range: '488 km'
    },
    features: [
      '800V Architecture (5% to 80% in 22.5 mins)',
      'Adaptive Air Suspension with 3 Chambers',
      'Matrix LED Headlamps with Audi Laser Light',
      'Bang & Olufsen 3D Premium Sound System',
      'Audi Virtual Cockpit Plus with e-tron Displays',
      'Acoustic Glazing for Silent Highway Cabin',
      '360-Degree Camera with 3D View Assist',
      'Active Lane Assist with Emergency Stop'
    ],
    history: {
      registrationYear: 2024,
      regState: 'TN-09 (Chennai South)',
      insuranceValidTill: 'January 2027',
      rcStatus: 'Verified & Clean',
      roadTax: 'Exempted (Tamil Nadu EV Policy)',
      accidentHistory: 'Zero Accidental Claims',
      serviceHistory: 'Full Authorized Dealer Records (Audi Chennai)',
      inspectionScore: 100
    },
    seller: {
      id: 'seller-4',
      name: 'AutoHub Electric Studio Chennai',
      type: 'AutoHub Studio',
      verified: true,
      rating: 4.95,
      reviewsCount: 210,
      location: 'Anna Salai, Chennai',
      responseTime: 'Instant',
      phone: '+91 94440 99881'
    },
    isFeatured: true,
    isPopular: true,
    status: 'Active',
    createdAt: '2025-02-01',
    viewsCount: 5410,
    leadsCount: 44
  },
  {
    id: 'land-rover-defender-110-se',
    title: 'Land Rover Defender 110 SE',
    brand: 'Land Rover',
    model: 'Defender 110',
    variant: 'D300 AWD Expedition Ready',
    badge: 'Iconic Expedition',
    year: 2023,
    km: 16800,
    fuel: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'SUV',
    ownership: '1st Owner',
    condition: 'Certified',
    city: 'Hyderabad',
    priceLakhs: 115,
    priceFormatted: '₹1.15 Cr',
    originalPriceFormatted: '₹1.20 Cr',
    priceDropLakhs: 5,
    emiFormatted: '₹1,48,000/mo',
    color: 'Carpathian Grey Satin',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqbPkG-h6uzJqIf-h3so-ih0t3lLmjQMUQwVTb2tmdB7-ISprz1EIlwDtcvWUW5GG726ZDGUjR3yn0uLfRAncFlh5OuxH97jAfNz_VrPKMcM1Brie42rrFAAnv7SXCrBm6ScPo_-hNcHL3jm1DVbW0csTnLZTjhoXtwrHTKeCCvYqftciSMK5SpYucbk8iaV-JnWNEp-fCgF9xl9S7-Xozc7SaVp3QtN-r7ZQPow7Ws_4M5qOkwgMzOg',
      exterior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDqbPkG-h6uzJqIf-h3so-ih0t3lLmjQMUQwVTb2tmdB7-ISprz1EIlwDtcvWUW5GG726ZDGUjR3yn0uLfRAncFlh5OuxH97jAfNz_VrPKMcM1Brie42rrFAAnv7SXCrBm6ScPo_-hNcHL3jm1DVbW0csTnLZTjhoXtwrHTKeCCvYqftciSMK5SpYucbk8iaV-JnWNEp-fCgF9xl9S7-Xozc7SaVp3QtN-r7ZQPow7Ws_4M5qOkwgMzOg'
      ],
      interior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC6Qe-1OYCQzgSDcIML4ZvF-SaXW9Uaw9rgBB2j40o6VBGaMn61gGBugcELQ5a1dIIUNGhXLmp8uTlIIfY5QBhHpeHsX__T-t9nWEvElWwHpUssLxNPVnJV5LU2t05b370VwdNjhkogGnjcPlan-V8Z0PZojvsgafLunasgt4gnfD9WtwwhXCru4lAnJK1na81VhbuvlXuxXJpGw6lXrnNYMZ-KY-PeYYMG152kGxg0qUwcpMmnlLx_iQ'
      ]
    },
    tags: ['Air Suspension', 'Expedition Ready'],
    specs: {
      engine: '3.0L Ingenium 6-Cylinder Twin-Turbo Diesel',
      power: '300 PS @ 4,000 RPM',
      torque: '650 Nm @ 1,500–2,500 RPM',
      mileage: '11.4 km/l ARAI',
      transmission: '8-Speed Electronic Automatic',
      fuel: 'Diesel',
      seating: 7,
      bootSpace: '786 Litres',
      driveType: 'Configurable Terrain Response 2 (AWD)',
      acceleration: '7.0s (0-100 km/h)',
      topSpeed: '191 km/h'
    },
    features: [
      'Electronic Air Suspension with Adaptive Dynamics',
      'Meridian 400W 11-Speaker Audio System',
      '3D Surround Camera with Wade Sensing (900mm depth)',
      'Sliding Panoramic Roof',
      'ClearSight Ground View Transparent Bonnet',
      'Cold Climate Pack with Heated Windscreen & Seats',
      '11.4-inch Pivi Pro Curved Glass Infotainment',
      'Original Land Rover Expedition Roof Rack'
    ],
    history: {
      registrationYear: 2023,
      regState: 'TS-09 (Hyderabad Central)',
      insuranceValidTill: 'July 2026',
      rcStatus: 'Verified & Clean',
      roadTax: 'Lifetime Paid',
      accidentHistory: 'Zero Accidental Claims',
      serviceHistory: 'Full Authorized Dealer Records (JLR Hyderabad)',
      inspectionScore: 99
    },
    seller: {
      id: 'seller-5',
      name: 'Deccan Elite Automotives',
      type: 'Certified Dealer',
      verified: true,
      rating: 4.9,
      reviewsCount: 88,
      location: 'Jubilee Hills, Hyderabad',
      responseTime: 'Under 10 mins',
      phone: '+91 97000 12890'
    },
    isFeatured: true,
    isPopular: true,
    status: 'Active',
    createdAt: '2025-01-18',
    viewsCount: 4790,
    leadsCount: 39
  },
  {
    id: 'tata-safari-dark-edition',
    title: 'Tata Safari Dark Edition',
    brand: 'Tata',
    model: 'Safari Dark',
    variant: 'Accomplished+ 6S Dark AT',
    badge: 'Flagship SUV',
    year: 2023,
    km: 11000,
    fuel: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'SUV',
    ownership: '1st Owner',
    condition: 'Certified',
    city: 'Pune',
    priceLakhs: 24.8,
    priceFormatted: '₹24.80 Lakh',
    originalPriceFormatted: '₹26.20 Lakh',
    priceDropLakhs: 1.4,
    emiFormatted: '₹32,000/mo',
    color: 'Oberon Black',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6Qe-1OYCQzgSDcIML4ZvF-SaXW9Uaw9rgBB2j40o6VBGaMn61gGBugcELQ5a1dIIUNGhXLmp8uTlIIfY5QBhHpeHsX__T-t9nWEvElWwHpUssLxNPVnJV5LU2t05b370VwdNjhkogGnjcPlan-V8Z0PZojvsgafLunasgt4gnfD9WtwwhXCru4lAnJK1na81VhbuvlXuxXJpGw6lXrnNYMZ-KY-PeYYMG152kGxg0qUwcpMmnlLx_iQ',
      exterior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC6Qe-1OYCQzgSDcIML4ZvF-SaXW9Uaw9rgBB2j40o6VBGaMn61gGBugcELQ5a1dIIUNGhXLmp8uTlIIfY5QBhHpeHsX__T-t9nWEvElWwHpUssLxNPVnJV5LU2t05b370VwdNjhkogGnjcPlan-V8Z0PZojvsgafLunasgt4gnfD9WtwwhXCru4lAnJK1na81VhbuvlXuxXJpGw6lXrnNYMZ-KY-PeYYMG152kGxg0qUwcpMmnlLx_iQ'
      ],
      interior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDqbPkG-h6uzJqIf-h3so-ih0t3lLmjQMUQwVTb2tmdB7-ISprz1EIlwDtcvWUW5GG726ZDGUjR3yn0uLfRAncFlh5OuxH97jAfNz_VrPKMcM1Brie42rrFAAnv7SXCrBm6ScPo_-hNcHL3jm1DVbW0csTnLZTjhoXtwrHTKeCCvYqftciSMK5SpYucbk8iaV-JnWNEp-fCgF9xl9S7-Xozc7SaVp3QtN-r7ZQPow7Ws_4M5qOkwgMzOg'
      ]
    },
    tags: ['ADAS Level 2', 'Ventilated Seats'],
    specs: {
      engine: '2.0L Kryotec Turbocharged Diesel',
      power: '170 PS @ 3,750 RPM',
      torque: '350 Nm @ 1,750–2,500 RPM',
      mileage: '14.5 km/l ARAI',
      transmission: '6-Speed Torque Converter Automatic',
      fuel: 'Diesel',
      seating: 6,
      bootSpace: '447 Litres (3rd row folded)',
      driveType: 'Front-Wheel Drive with ESP Terrain Response',
      acceleration: '10.8s (0-100 km/h)',
      topSpeed: '185 km/h'
    },
    features: [
      'Level 2 ADAS (Autonomous Emergency Braking, Adaptive Cruise)',
      'Ventilated 1st & 2nd Row Captain Seats',
      'Panoramic Sunroof with Mood Lighting',
      'JBL 10-Speaker Audio System with Subwoofer',
      '360° Surround View Camera with Blind Spot Monitor',
      'Dual-Zone Automatic Climate Control',
      '12.3-inch Harman Touchscreen Infotainment',
      'Voice-Assisted Ambient Lighting'
    ],
    history: {
      registrationYear: 2023,
      regState: 'MH-12 (Pune)',
      insuranceValidTill: 'November 2026',
      rcStatus: 'Verified & Clean',
      roadTax: 'Lifetime Paid',
      accidentHistory: 'Zero Accidental Claims',
      serviceHistory: 'Full Authorized Dealer Records (Bavaria Tata Pune)',
      inspectionScore: 97
    },
    seller: {
      id: 'seller-6',
      name: 'Rahul Kulkarni (Direct Owner)',
      type: 'Direct Owner',
      verified: true,
      rating: 4.9,
      reviewsCount: 12,
      location: 'Baner, Pune',
      responseTime: 'Under 20 mins',
      phone: '+91 98900 77123'
    },
    isFeatured: true,
    isPopular: true,
    status: 'Active',
    createdAt: '2025-01-28',
    viewsCount: 7120,
    leadsCount: 65
  },
  {
    id: 'toyota-fortuner-legender-4x4',
    title: 'Toyota Fortuner Legender 4x4 AT',
    brand: 'Toyota',
    model: 'Fortuner Legender',
    variant: '2.8L Diesel 4x4 Automatic',
    badge: 'Legendary Reliability',
    year: 2023,
    km: 22000,
    fuel: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'SUV',
    ownership: '1st Owner',
    condition: 'Certified',
    city: 'Ahmedabad',
    priceLakhs: 46.5,
    priceFormatted: '₹46.50 Lakh',
    originalPriceFormatted: '₹48.00 Lakh',
    priceDropLakhs: 1.5,
    emiFormatted: '₹59,000/mo',
    color: 'Platinum White Pearl with Black Roof',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqbPkG-h6uzJqIf-h3so-ih0t3lLmjQMUQwVTb2tmdB7-ISprz1EIlwDtcvWUW5GG726ZDGUjR3yn0uLfRAncFlh5OuxH97jAfNz_VrPKMcM1Brie42rrFAAnv7SXCrBm6ScPo_-hNcHL3jm1DVbW0csTnLZTjhoXtwrHTKeCCvYqftciSMK5SpYucbk8iaV-JnWNEp-fCgF9xl9S7-Xozc7SaVp3QtN-r7ZQPow7Ws_4M5qOkwgMzOg',
      exterior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDqbPkG-h6uzJqIf-h3so-ih0t3lLmjQMUQwVTb2tmdB7-ISprz1EIlwDtcvWUW5GG726ZDGUjR3yn0uLfRAncFlh5OuxH97jAfNz_VrPKMcM1Brie42rrFAAnv7SXCrBm6ScPo_-hNcHL3jm1DVbW0csTnLZTjhoXtwrHTKeCCvYqftciSMK5SpYucbk8iaV-JnWNEp-fCgF9xl9S7-Xozc7SaVp3QtN-r7ZQPow7Ws_4M5qOkwgMzOg'
      ],
      interior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC6Qe-1OYCQzgSDcIML4ZvF-SaXW9Uaw9rgBB2j40o6VBGaMn61gGBugcELQ5a1dIIUNGhXLmp8uTlIIfY5QBhHpeHsX__T-t9nWEvElWwHpUssLxNPVnJV5LU2t05b370VwdNjhkogGnjcPlan-V8Z0PZojvsgafLunasgt4gnfD9WtwwhXCru4lAnJK1na81VhbuvlXuxXJpGw6lXrnNYMZ-KY-PeYYMG152kGxg0qUwcpMmnlLx_iQ'
      ]
    },
    tags: ['Toyota Certified', 'Full Toyota Record'],
    specs: {
      engine: '2.8L 4-Cylinder D-4D Turbo Diesel',
      power: '204 PS @ 3,000–3,400 RPM',
      torque: '500 Nm @ 1,600–2,800 RPM',
      mileage: '14.2 km/l ARAI',
      transmission: '6-Speed Automatic with Paddle Shift',
      fuel: 'Diesel',
      seating: 7,
      bootSpace: '296 Litres (Expandable)',
      driveType: '4WD with High & Low Range Transfer Case',
      acceleration: '9.8s (0-100 km/h)',
      topSpeed: '190 km/h'
    },
    features: [
      'Split Quad-LED Headlamps with Waterfall Sequential Indicators',
      'Dual Tone Black & Maroon Premium Leather Interior',
      'Wireless Phone Charger',
      '11-Speaker JBL Audio System',
      'Kick Sensor Powered Tailgate',
      'Electronic Differential Lock & DAC',
      'Ventilated Front Seats',
      '7 Airbags with Vehicle Stability Control'
    ],
    history: {
      registrationYear: 2023,
      regState: 'GJ-01 (Ahmedabad)',
      insuranceValidTill: 'May 2026',
      rcStatus: 'Verified & Clean',
      roadTax: 'Lifetime Paid',
      accidentHistory: 'Zero Accidental Claims',
      serviceHistory: 'Full Authorized Dealer Records (Grace Toyota Ahmedabad)',
      inspectionScore: 98
    },
    seller: {
      id: 'seller-7',
      name: 'Gujarat Apex Motors',
      type: 'Certified Dealer',
      verified: true,
      rating: 4.88,
      reviewsCount: 74,
      location: 'SG Highway, Ahmedabad',
      responseTime: 'Under 15 mins',
      phone: '+91 98250 88210'
    },
    isFeatured: false,
    isPopular: true,
    status: 'Active',
    createdAt: '2025-01-30',
    viewsCount: 3950,
    leadsCount: 33
  },
  {
    id: 'mahindra-thar-roxx-4x4',
    title: 'Mahindra Thar Roxx 4x4 AX7L',
    brand: 'Mahindra',
    model: 'Thar Roxx',
    variant: 'AX7L 4x4 mStallion Petrol AT',
    badge: 'Iconic Desi 4x4',
    year: 2024,
    km: 3200,
    fuel: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    ownership: '1st Owner',
    condition: 'Certified',
    city: 'Pune',
    priceLakhs: 23.5,
    priceFormatted: '₹23.50 Lakh',
    originalPriceFormatted: '₹24.00 Lakh',
    priceDropLakhs: 0.5,
    emiFormatted: '₹30,500/mo',
    color: 'Stealth Black',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6Qe-1OYCQzgSDcIML4ZvF-SaXW9Uaw9rgBB2j40o6VBGaMn61gGBugcELQ5a1dIIUNGhXLmp8uTlIIfY5QBhHpeHsX__T-t9nWEvElWwHpUssLxNPVnJV5LU2t05b370VwdNjhkogGnjcPlan-V8Z0PZojvsgafLunasgt4gnfD9WtwwhXCru4lAnJK1na81VhbuvlXuxXJpGw6lXrnNYMZ-KY-PeYYMG152kGxg0qUwcpMmnlLx_iQ',
      exterior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC6Qe-1OYCQzgSDcIML4ZvF-SaXW9Uaw9rgBB2j40o6VBGaMn61gGBugcELQ5a1dIIUNGhXLmp8uTlIIfY5QBhHpeHsX__T-t9nWEvElWwHpUssLxNPVnJV5LU2t05b370VwdNjhkogGnjcPlan-V8Z0PZojvsgafLunasgt4gnfD9WtwwhXCru4lAnJK1na81VhbuvlXuxXJpGw6lXrnNYMZ-KY-PeYYMG152kGxg0qUwcpMmnlLx_iQ'
      ],
      interior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDqbPkG-h6uzJqIf-h3so-ih0t3lLmjQMUQwVTb2tmdB7-ISprz1EIlwDtcvWUW5GG726ZDGUjR3yn0uLfRAncFlh5OuxH97jAfNz_VrPKMcM1Brie42rrFAAnv7SXCrBm6ScPo_-hNcHL3jm1DVbW0csTnLZTjhoXtwrHTKeCCvYqftciSMK5SpYucbk8iaV-JnWNEp-fCgF9xl9S7-Xozc7SaVp3QtN-r7ZQPow7Ws_4M5qOkwgMzOg'
      ]
    },
    tags: ['Panoramic Skyroof', 'Level 2 ADAS'],
    specs: {
      engine: '2.0L mStallion TGDi Turbo Petrol',
      power: '177 PS @ 5,000 RPM',
      torque: '380 Nm @ 1,750–3,000 RPM',
      mileage: '12.8 km/l ARAI',
      transmission: '6-Speed Aisin Torque Converter AT',
      fuel: 'Petrol',
      seating: 5,
      bootSpace: '447 Litres',
      driveType: '4x4 4XPLOR with Electronic Locking Differential',
      acceleration: '9.5s (0-100 km/h)',
      topSpeed: '175 km/h'
    },
    features: [
      'Segment First Panoramic Skyroof',
      'Level 2 ADAS Suite with Smart Pilot Assist',
      'Harman Kardon 9-Speaker Audio with Subwoofer',
      'Ventilated Front Seats with Leatherette Upholstery',
      '10.25-inch Dual HD Screens (Instrument + Center)',
      '360° Camera with Blind View Monitor',
      'CrawSmart & IntelliTurn Off-road Suite',
      'Wireless Apple CarPlay & Android Auto'
    ],
    history: {
      registrationYear: 2024,
      regState: 'MH-14 (Pimpri-Chinchwad)',
      insuranceValidTill: 'August 2027',
      rcStatus: 'Verified & Clean',
      roadTax: 'Lifetime Paid',
      accidentHistory: 'Zero Accidental Claims',
      serviceHistory: 'Full Authorized Dealer Records (Silver Jubilee Mahindra)',
      inspectionScore: 99
    },
    seller: {
      id: 'seller-8',
      name: 'Aditya Deshpande',
      type: 'Direct Owner',
      verified: true,
      rating: 4.95,
      reviewsCount: 8,
      location: 'Kothrud, Pune',
      responseTime: 'Under 10 mins',
      phone: '+91 99220 54100'
    },
    isFeatured: false,
    isPopular: true,
    isNew: true,
    status: 'Active',
    createdAt: '2025-02-10',
    viewsCount: 8430,
    leadsCount: 81
  },
  {
    id: 'hyundai-ioniq-5-ev',
    title: 'Hyundai Ioniq 5 EV Lounge',
    brand: 'Hyundai',
    model: 'Ioniq 5',
    variant: '72.6 kWh RWD Retro Futuristic',
    badge: 'World Car of the Year',
    year: 2023,
    km: 9800,
    fuel: 'Electric',
    transmission: 'Automatic',
    bodyType: 'EV',
    ownership: '1st Owner',
    condition: 'Certified',
    city: 'Bangalore',
    priceLakhs: 41.5,
    priceFormatted: '₹41.50 Lakh',
    originalPriceFormatted: '₹44.00 Lakh',
    priceDropLakhs: 2.5,
    emiFormatted: '₹53,000/mo',
    color: 'Gravity Gold Matte',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtJPJEgxNqD8JAKCljE5xUFBiw5wl9VXxmV9Ung2sj4MZ9v_wqOHvTDfHqoW0CiHfVWTrsJKTfUcf9ioG_WwstEuZrVlOZJ2oOLx06beR7A8jbK_6Sep-Mj5Av8AsVbHMkd11ihQ7fFiDkylPl5L_wNvsvBpgNRhH2znW9-0BiqwdNj_TOBuSi0HR0kJmppgiLuUt1QLghRhzrldwx6isk0_guAn-OHyfPwgCcUQIQ2iuO4nduIMOs9g',
      exterior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDtJPJEgxNqD8JAKCljE5xUFBiw5wl9VXxmV9Ung2sj4MZ9v_wqOHvTDfHqoW0CiHfVWTrsJKTfUcf9ioG_WwstEuZrVlOZJ2oOLx06beR7A8jbK_6Sep-Mj5Av8AsVbHMkd11ihQ7fFiDkylPl5L_wNvsvBpgNRhH2znW9-0BiqwdNj_TOBuSi0HR0kJmppgiLuUt1QLghRhzrldwx6isk0_guAn-OHyfPwgCcUQIQ2iuO4nduIMOs9g'
      ],
      interior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD1mnM4bvFHiuZ2tci1RTOOEixWO9YOqYFooC0aXvaMICEN4BEpAMmEilKfZMEmwoeKY7iW98TUaVhSj4JQRMd5Mq3puwpdrL_CYbFFf4JxuK2zYEiNTcHwNVr1v3LeNPMHuFSJxmUoyiONkhojfebCFp_0j7yB5mfiGBZtVzAWUDaEr5XLAHcUl7nAotB9mux4qJCDHDPifAk90ZoqqnYRdAlw9wUTMFSAaWkXkUWYQ9QcblKx-JQYCA'
      ]
    },
    tags: ['800V Ultra Fast Charge', 'V2L Powered'],
    specs: {
      engine: 'Permanent Magnet Synchronous Motor (RWD)',
      power: '217 PS',
      torque: '350 Nm Instant Torque',
      mileage: '631 km ARAI Range',
      transmission: 'Single-Speed Reduction Gear',
      fuel: 'Electric',
      seating: 5,
      bootSpace: '527 Litres + 57L Frunk',
      driveType: 'Rear-Wheel Drive (E-GMP Platform)',
      acceleration: '7.6s (0-100 km/h)',
      topSpeed: '185 km/h',
      batteryCapacity: '72.6 kWh',
      range: '631 km'
    },
    features: [
      'Universal Island Sliding Center Console',
      'Relaxation Front Seats with Calf Support',
      'Vehicle-to-Load (V2L) Inside & Outside Power Output',
      'Bose 8-Speaker Premium Sound System',
      'Parametric Pixel LED Headlamps & Tail Lamps',
      'Hyundai SmartSense Level 2 ADAS (21 Features)',
      'Vision Roof with Power Sunblind',
      'Smart Regenerative Braking with i-Pedal'
    ],
    history: {
      registrationYear: 2023,
      regState: 'KA-03 (Bangalore East)',
      insuranceValidTill: 'September 2026',
      rcStatus: 'Verified & Clean',
      roadTax: 'Exempted (Karnataka EV Policy)',
      accidentHistory: 'Zero Accidental Claims',
      serviceHistory: 'Full Authorized Dealer Records (Advaith Hyundai)',
      inspectionScore: 99
    },
    seller: {
      id: 'seller-9',
      name: 'South City EV Specialists',
      type: 'Certified Dealer',
      verified: true,
      rating: 4.92,
      reviewsCount: 114,
      location: 'Koramangala, Bangalore',
      responseTime: 'Under 15 mins',
      phone: '+91 98450 33201'
    },
    isFeatured: false,
    isPopular: true,
    status: 'Active',
    createdAt: '2025-02-05',
    viewsCount: 4610,
    leadsCount: 37
  },
  {
    id: 'volkswagen-virtus-gt-plus',
    title: 'Volkswagen Virtus GT Plus 1.5 TSI',
    brand: 'Volkswagen',
    model: 'Virtus GT',
    variant: '1.5L TSI EVO DSG Black Package',
    badge: 'German Turbo Precision',
    year: 2023,
    km: 14800,
    fuel: 'Petrol',
    transmission: 'DCT',
    bodyType: 'Sedan',
    ownership: '1st Owner',
    condition: 'Certified',
    city: 'Coimbatore',
    priceLakhs: 16.8,
    priceFormatted: '₹16.80 Lakh',
    originalPriceFormatted: '₹17.50 Lakh',
    priceDropLakhs: 0.7,
    emiFormatted: '₹21,500/mo',
    color: 'Wild Cherry Red with Carbon Roof',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1mnM4bvFHiuZ2tci1RTOOEixWO9YOqYFooC0aXvaMICEN4BEpAMmEilKfZMEmwoeKY7iW98TUaVhSj4JQRMd5Mq3puwpdrL_CYbFFf4JxuK2zYEiNTcHwNVr1v3LeNPMHuFSJxmUoyiONkhojfebCFp_0j7yB5mfiGBZtVzAWUDaEr5XLAHcUl7nAotB9mux4qJCDHDPifAk90ZoqqnYRdAlw9wUTMFSAaWkXkUWYQ9QcblKx-JQYCA',
      exterior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD1mnM4bvFHiuZ2tci1RTOOEixWO9YOqYFooC0aXvaMICEN4BEpAMmEilKfZMEmwoeKY7iW98TUaVhSj4JQRMd5Mq3puwpdrL_CYbFFf4JxuK2zYEiNTcHwNVr1v3LeNPMHuFSJxmUoyiONkhojfebCFp_0j7yB5mfiGBZtVzAWUDaEr5XLAHcUl7nAotB9mux4qJCDHDPifAk90ZoqqnYRdAlw9wUTMFSAaWkXkUWYQ9QcblKx-JQYCA'
      ],
      interior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCt4LJ8CoFg_9XC_WwUDSLLFjsGwLgAwL7O3ccoi_pZ2LwK1nLP8lV5e4dFvLziG-m8NhIOisZsMMAxzZZIL1i-mJOSvDktBjDeFyrdPSyDuJLIuSHwUiyZre24kiNiedAdjwZ0Rz582aadz97ScG-ct0z7ZtrKL2Mv2D3Is8Cl71QkTutMIJgafitgBsANTnAxkLm7HDiTwwRi9EWuU6Ut2BbmCTXniTyIcK5R8Hxnqpb5O31JckXHPQ'
      ]
    },
    tags: ['GNCAP 5-Star Safety', 'Cylinder Deactivation'],
    specs: {
      engine: '1.5L TSI EVO 4-Cylinder Turbo with ACT',
      power: '150 PS @ 5,000–6,000 RPM',
      torque: '250 Nm @ 1,600–3,500 RPM',
      mileage: '19.62 km/l ARAI',
      transmission: '7-Speed DSG Dual Clutch with Paddle Shifters',
      fuel: 'Petrol',
      seating: 5,
      bootSpace: '521 Litres',
      driveType: 'Front-Wheel Drive (FWD)',
      acceleration: '8.9s (0-100 km/h)',
      topSpeed: '205 km/h'
    },
    features: [
      'Active Cylinder Technology (ACT 2-cylinder shutoff)',
      '10-inch VW Play Touchscreen with Wireless Smartlink',
      'Ventilated Leatherette Front Seats',
      'Digital Cockpit with Customizable Layouts',
      'Electronic Differential Lock (XDS)',
      'Wireless Mobile Phone Charger',
      'Electric Sunroof with Anti-pinch',
      '6 Airbags standard with ESC & Multi-Collision Brakes'
    ],
    history: {
      registrationYear: 2023,
      regState: 'TN-38 (Coimbatore North)',
      insuranceValidTill: 'November 2026',
      rcStatus: 'Verified & Clean',
      roadTax: 'Lifetime Paid',
      accidentHistory: 'Zero Accidental Claims',
      serviceHistory: 'Full Authorized Dealer Records (Ramani Volkswagen)',
      inspectionScore: 98
    },
    seller: {
      id: 'seller-10',
      name: 'Karthik Senthil',
      type: 'Direct Owner',
      verified: true,
      rating: 4.88,
      reviewsCount: 19,
      location: 'RS Puram, Coimbatore',
      responseTime: 'Under 20 mins',
      phone: '+91 98422 66311'
    },
    isFeatured: false,
    isPopular: false,
    status: 'Active',
    createdAt: '2025-02-08',
    viewsCount: 2980,
    leadsCount: 26
  },
  {
    id: 'honda-city-hybrid-zx',
    title: 'Honda City e:HEV Hybrid ZX',
    brand: 'Honda',
    model: 'City e:HEV',
    variant: 'ZX e:HEV Self-Charging Dual Motor',
    badge: 'Ultra Fuel Efficient',
    year: 2023,
    km: 18200,
    fuel: 'Hybrid',
    transmission: 'CVT',
    bodyType: 'Sedan',
    ownership: '1st Owner',
    condition: 'Certified',
    city: 'Kochi',
    priceLakhs: 17.2,
    priceFormatted: '₹17.20 Lakh',
    originalPriceFormatted: '₹18.00 Lakh',
    priceDropLakhs: 0.8,
    emiFormatted: '₹22,000/mo',
    color: 'Radiant Red Metallic',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1mnM4bvFHiuZ2tci1RTOOEixWO9YOqYFooC0aXvaMICEN4BEpAMmEilKfZMEmwoeKY7iW98TUaVhSj4JQRMd5Mq3puwpdrL_CYbFFf4JxuK2zYEiNTcHwNVr1v3LeNPMHuFSJxmUoyiONkhojfebCFp_0j7yB5mfiGBZtVzAWUDaEr5XLAHcUl7nAotB9mux4qJCDHDPifAk90ZoqqnYRdAlw9wUTMFSAaWkXkUWYQ9QcblKx-JQYCA',
      exterior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD1mnM4bvFHiuZ2tci1RTOOEixWO9YOqYFooC0aXvaMICEN4BEpAMmEilKfZMEmwoeKY7iW98TUaVhSj4JQRMd5Mq3puwpdrL_CYbFFf4JxuK2zYEiNTcHwNVr1v3LeNPMHuFSJxmUoyiONkhojfebCFp_0j7yB5mfiGBZtVzAWUDaEr5XLAHcUl7nAotB9mux4qJCDHDPifAk90ZoqqnYRdAlw9wUTMFSAaWkXkUWYQ9QcblKx-JQYCA'
      ],
      interior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC6Qe-1OYCQzgSDcIML4ZvF-SaXW9Uaw9rgBB2j40o6VBGaMn61gGBugcELQ5a1dIIUNGhXLmp8uTlIIfY5QBhHpeHsX__T-t9nWEvElWwHpUssLxNPVnJV5LU2t05b370VwdNjhkogGnjcPlan-V8Z0PZojvsgafLunasgt4gnfD9WtwwhXCru4lAnJK1na81VhbuvlXuxXJpGw6lXrnNYMZ-KY-PeYYMG152kGxg0qUwcpMmnlLx_iQ'
      ]
    },
    tags: ['27.13 km/l Mileage', 'Honda Sensing ADAS'],
    specs: {
      engine: '1.5L Atkinson Cycle i-VTEC + 2 Electric Motors',
      power: '126 PS Combined System Output',
      torque: '253 Nm Instant Motor Torque',
      mileage: '27.13 km/l ARAI Certified',
      transmission: 'e-CVT (Electric Continuous Variable)',
      fuel: 'Hybrid',
      seating: 5,
      bootSpace: '410 Litres (with Hybrid Battery)',
      driveType: 'Front-Wheel Drive (FWD)',
      acceleration: '9.9s (0-100 km/h)',
      topSpeed: '180 km/h'
    },
    features: [
      'Honda Sensing ADAS with Collision Mitigation Braking',
      'Electric Parking Brake with Auto Brake Hold',
      'LaneWatch Blind Spot Camera in Left Mirror',
      'One-Touch Electric Sunroof',
      '8-inch Advanced Touchscreen with Wireless CarPlay',
      '8-Speaker Premium Sound System',
      'Rear AC Vents with Dual USB Fast Ports',
      'Remote Engine Start with Pre-Cooling'
    ],
    history: {
      registrationYear: 2023,
      regState: 'KL-07 (Ernakulam / Kochi)',
      insuranceValidTill: 'December 2026',
      rcStatus: 'Verified & Clean',
      roadTax: 'Lifetime Paid',
      accidentHistory: 'Zero Accidental Claims',
      serviceHistory: 'Full Authorized Dealer Records (Vision Honda Kochi)',
      inspectionScore: 98
    },
    seller: {
      id: 'seller-11',
      name: 'Mathews Thomas',
      type: 'Direct Owner',
      verified: true,
      rating: 4.9,
      reviewsCount: 14,
      location: 'Panampilly Nagar, Kochi',
      responseTime: 'Under 25 mins',
      phone: '+91 98460 21990'
    },
    isFeatured: false,
    isPopular: false,
    status: 'Active',
    createdAt: '2025-01-22',
    viewsCount: 3120,
    leadsCount: 22
  },
  {
    id: 'bmw-m340i-xdrive',
    title: 'BMW M340i xDrive 50 Jahre',
    brand: 'BMW',
    model: 'M340i',
    variant: '3.0L B58 50 Jahre M Edition',
    badge: 'M Performance Legend',
    year: 2023,
    km: 11500,
    fuel: 'Petrol',
    transmission: 'M Steptronic',
    bodyType: 'Sedan',
    ownership: '1st Owner',
    condition: 'Certified',
    city: 'Mumbai',
    priceLakhs: 64.5,
    priceFormatted: '₹64.50 Lakh',
    originalPriceFormatted: '₹67.00 Lakh',
    priceDropLakhs: 2.5,
    emiFormatted: '₹82,000/mo',
    color: 'Dravit Grey Metallic',
    images: {
      hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt4LJ8CoFg_9XC_WwUDSLLFjsGwLgAwL7O3ccoi_pZ2LwK1nLP8lV5e4dFvLziG-m8NhIOisZsMMAxzZZIL1i-mJOSvDktBjDeFyrdPSyDuJLIuSHwUiyZre24kiNiedAdjwZ0Rz582aadz97ScG-ct0z7ZtrKL2Mv2D3Is8Cl71QkTutMIJgafitgBsANTnAxkLm7HDiTwwRi9EWuU6Ut2BbmCTXniTyIcK5R8Hxnqpb5O31JckXHPQ',
      exterior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCt4LJ8CoFg_9XC_WwUDSLLFjsGwLgAwL7O3ccoi_pZ2LwK1nLP8lV5e4dFvLziG-m8NhIOisZsMMAxzZZIL1i-mJOSvDktBjDeFyrdPSyDuJLIuSHwUiyZre24kiNiedAdjwZ0Rz582aadz97ScG-ct0z7ZtrKL2Mv2D3Is8Cl71QkTutMIJgafitgBsANTnAxkLm7HDiTwwRi9EWuU6Ut2BbmCTXniTyIcK5R8Hxnqpb5O31JckXHPQ'
      ],
      interior: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD1mnM4bvFHiuZ2tci1RTOOEixWO9YOqYFooC0aXvaMICEN4BEpAMmEilKfZMEmwoeKY7iW98TUaVhSj4JQRMd5Mq3puwpdrL_CYbFFf4JxuK2zYEiNTcHwNVr1v3LeNPMHuFSJxmUoyiONkhojfebCFp_0j7yB5mfiGBZtVzAWUDaEr5XLAHcUl7nAotB9mux4qJCDHDPifAk90ZoqqnYRdAlw9wUTMFSAaWkXkUWYQ9QcblKx-JQYCA'
      ]
    },
    tags: ['4.4s 0-100 km/h', 'M Sport Exhaust'],
    specs: {
      engine: '3.0L B58 Inline-6 TwinPower Turbo',
      power: '387 PS @ 5,800 RPM',
      torque: '500 Nm @ 1,850–5,000 RPM',
      mileage: '13.02 km/l ARAI',
      transmission: '8-Speed Steptronic Sport with Launch Control',
      fuel: 'Petrol',
      seating: 5,
      bootSpace: '480 Litres',
      driveType: 'xDrive Rear-Biased Intelligent All-Wheel Drive',
      acceleration: '4.4s (0-100 km/h)',
      topSpeed: '250 km/h'
    },
    features: [
      'M Sport Differential & Adaptive M Suspension',
      'M Sport Brake Calipers in High-Gloss Red',
      'Harman Kardon 464W 16-Speaker Surround System',
      'BMW Curved Display (12.3-inch + 14.9-inch OS8)',
      'Alcantara & Sensatec M Sports Seats',
      'Variable Sport Steering with M Leather Wheel',
      'Wireless Apple CarPlay with M Telemetry App',
      'Carbon Fiber Mirror Caps and Rear Spoiler'
    ],
    history: {
      registrationYear: 2023,
      regState: 'MH-02 (Mumbai West)',
      insuranceValidTill: 'October 2026',
      rcStatus: 'Verified & Clean',
      roadTax: 'Lifetime Paid',
      accidentHistory: 'Zero Accidental Claims',
      serviceHistory: 'Full Authorized Dealer Records (Infinity Cars Mumbai)',
      inspectionScore: 99
    },
    seller: {
      id: 'seller-1',
      name: 'Infinity Motors Porsche Specialist',
      type: 'Certified Dealer',
      verified: true,
      rating: 4.9,
      reviewsCount: 148,
      location: 'Worli, Mumbai',
      responseTime: 'Under 15 mins',
      phone: '+91 98200 44120'
    },
    isFeatured: false,
    isPopular: true,
    status: 'Active',
    createdAt: '2025-01-26',
    viewsCount: 5240,
    leadsCount: 46
  }
];

export const BRAND_CATALOG = [
  { name: 'Porsche', count: 84, minPrice: '₹89 Lakh', icon: 'sports_motorsports', models: ['911 Carrera', '718 Cayman', 'Macan GTS', 'Cayenne Turbo', 'Panamera', 'Taycan EV'] },
  { name: 'BMW', count: 142, minPrice: '₹34 Lakh', icon: 'speed', models: ['M4 Competition', 'M340i xDrive', '3 Series Gran Limousine', 'M5 Competition', 'X5 xDrive', 'iX EV'] },
  { name: 'Mercedes-Benz', count: 168, minPrice: '₹38 Lakh', icon: 'stars', models: ['AMG C43 4MATIC', 'C-Class', 'E-Class LWB', 'S-Class S450', 'G-Wagon G63', 'EQS 580 EV'] },
  { name: 'Audi', count: 96, minPrice: '₹32 Lakh', icon: 'adjust', models: ['e-tron GT EV', 'RS5 Sportback', 'A6 45 TFSI', 'Q7 55 TFSI', 'Q8 Celebration', 'RS Q8'] },
  { name: 'Land Rover', count: 52, minPrice: '₹62 Lakh', icon: 'explore', models: ['Defender 110 SE', 'Range Rover Sport', 'Range Rover Velar', 'Discovery', 'Defender 90'] },
  { name: 'Toyota', count: 210, minPrice: '₹14 Lakh', icon: 'security', models: ['Fortuner Legender', 'Camry Hybrid', 'Innova Hycross', 'Land Cruiser LC300', 'Hilux 4x4'] },
  { name: 'Tata', count: 245, minPrice: '₹8 Lakh', icon: 'shield', models: ['Safari Dark Edition', 'Harrier Fearless+', 'Nexon EV Empowered', 'Curvv EV', 'Punch EV', 'Sierra'] },
  { name: 'Mahindra', count: 178, minPrice: '₹11 Lakh', icon: 'terrain', models: ['Thar Roxx 4x4', 'XUV700 AX7L', 'Scorpio-N Z8L', 'Thar 3-Door', 'XUV 3XO'] },
  { name: 'Hyundai', count: 188, minPrice: '₹9 Lakh', icon: 'commute', models: ['Ioniq 5 Lounge EV', 'Creta N Line', 'Alcazar Signature', 'Tucson Signature 4WD', 'Verna 1.5 Turbo'] },
  { name: 'Kia', count: 114, minPrice: '₹12 Lakh', icon: 'offline_bolt', models: ['EV6 GT-Line', 'Seltos X-Line', 'Carnival Limousine', 'Sonet GT', 'EV9 Flagship'] },
  { name: 'Honda', count: 92, minPrice: '₹10 Lakh', icon: 'directions_car', models: ['City e:HEV Hybrid', 'Elevate ZX', 'City 5th Gen', 'Amaze VX'] },
  { name: 'Volkswagen', count: 86, minPrice: '₹11 Lakh', icon: 'tune', models: ['Virtus GT Plus', 'Taigun GT Plus', 'Tiguan 2.0 TSI Exclusive', 'Golf GTI (Import)'] }
];

export const BODY_TYPES = [
  { name: 'SUVs', type: 'SUV', count: '4,820 Cars', icon: 'airport_shuttle' },
  { name: 'Sedans', type: 'Sedan', count: '2,910 Cars', icon: 'directions_car' },
  { name: 'Coupes', type: 'Coupe', count: '640 Cars', icon: 'minor_crash' },
  { name: 'Hatchbacks', type: 'Hatchback', count: '1,890 Cars', icon: 'electric_car' },
  { name: 'Convertible', type: 'Convertible', count: '320 Cars', icon: 'wb_sunny' },
  { name: 'MUV / 7-Seater', type: 'MUV', count: '980 Cars', icon: 'rv_hookup' },
  { name: 'Electric EV', type: 'EV', count: '890 Cars', icon: 'bolt' }
];

export const INDIAN_CITIES = [
  'Mumbai',
  'Delhi NCR',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Pune',
  'Ahmedabad',
  'Coimbatore',
  'Kochi'
];
