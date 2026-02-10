export interface Vendor {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  rating: number;
  reviews: number;
  location: string;
  price: string;
  image: string;
  isVerified: boolean;
  description?: string;
  packages?: Package[];
  tags?: string[];
}

export interface Package {
  id: string;
  name: string;
  price: string;
  pax?: number;
  features: string[];
  image?: string;
}

export interface Order {
  id: string;
  vendorName: string;
  category: string;
  status: 'active' | 'pending' | 'completed' | 'refunded' | 'disputed';
  amount: string;
  paidAmount: string;
  date: string;
  weddingDate: string;
  image: string;
  milestones: Milestone[];
}

export interface Milestone {
  id: string;
  name: string;
  status: 'completed' | 'active' | 'pending';
  date: string;
  amount: string;
}

export const VENDORS: Vendor[] = [
  {
    id: 'v1',
    name: 'Lumina Grand Ballroom',
    category: 'venue',
    subCategory: 'Luxury Hotel',
    rating: 4.9,
    reviews: 210,
    location: 'Senayan, Jakarta Pusat',
    price: 'Rp 125.000.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3hgz1jU6FzQHZctbKWUnlaVy_7fN70HTieab4RxOhJ7nSkiXUDUNjFv4-FY-Vl-jKi9vcV_IRwCJX1MIG4YaSkTxMqWv0ZfdwVyLU84chxlFIvNvB2k3DTkNzs2APwSx9nEl94Kf22I5Mcat5gx862wP_KHMer3GWCYKWv8tTE2nquI_udnYtJA46cVuTrA7ye1PcNk6JC8UnXMlqMAqyeqcx0smxZdUEwvxgfe3VUDX2OW3P_eJR_slKMs4WdkWJKU3nScDmQ_tO',
    isVerified: true,
    tags: ['Luxury', 'Indoor', 'Central Jakarta'],
    description: 'Grand ballroom luxury wedding venue with chandeliers. Capacity up to 2000 guests.'
  },
  {
    id: 'v2',
    name: 'Rustic Dream Decoration',
    category: 'decoration',
    subCategory: 'Full Package',
    rating: 4.8,
    reviews: 94,
    location: 'Jakarta Selatan',
    price: 'Rp 45.000.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdoXW2QehmrvUx_4l3b5DqXmEX-FoZ7UAVReTGpzFc3kJSnLOBwkS02yBa4BD7gTHOrse06JVvWdfj_E5Tb186W-vtKftceDAhiNWZFoXGWDZfhsAJ0uKLYsp52LUlk1_wZl7DHe0F2pFOplHUtQj0IxTPArHLj_2P5nBYOSRO9pSBp5bGPXurTqqlE0afk3i9Z4plz7krykjIdlRuGTOLSl1UmsOaUyCEvMOKCrh0kjFAcwUyMTi4gkXdAHrRujugeBFslHoNm2rx',
    isVerified: true,
    tags: ['Rustic', 'Floral', 'Modern'],
  },
  {
    id: 'v3',
    name: 'Royal Taste Catering',
    category: 'catering',
    subCategory: 'Premium Buffet',
    rating: 4.8,
    reviews: 120,
    location: 'Jakarta Timur',
    price: 'Rp 125.000/pax',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfj9xFNYGP-sb6FIPXyYx0hj6M9qSbXDDGkEvaShyYTBMrrd34mOmjftn96_LRalQ1mh8D_slTB3LhlisEMA1JRGXRK2MmL1oab_2PEbYQGd5F1Uw2L1g8Wx1-n15ZYdW6WdtS8qIPxQfNuwX2qIRKsK7PPIpNln5w5T5ry_kqmKzRzoBRC7gaZmhpTqpWSeRmZnuAHc55VxGiorzp3mREOIp19GDqF9BtBcQJTKn6quKCXm2H1VB7GpDaccWxWasYpsAXj3dJFCk7',
    isVerified: true,
  },
  {
    id: 'v4',
    name: 'Lumina Story Wedding',
    category: 'photography',
    subCategory: 'Cinematic & Photo',
    rating: 4.9,
    reviews: 154,
    location: 'Bandung',
    price: 'Rp 15.000.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1S6EFyBNw4lhA__w7LkF8HvAOm_xMsYlKzbRC-oyKDLUNkcrrlIv3jmhFExQyzvpG-cUY-WxdDuuSZvjtMQ_d6ZAyLwzYOCqV0v7aiqkWgHsW7aWjLXTY5GexZULCnqetPOJPw_4XS-zfOoErKLBUktkXBWFa5s522iR-7By9UHuoYlbwNYql0kcBfENCOKh0HGV-1_OxSjk6NoBGLQbAqsnsF5zA5HkGlBHsJpRBqErgGOI0lDzp1D0FZyecGJNIqipUp4YR0g40',
    isVerified: true,
  },
  {
    id: 'v5',
    name: 'Glow by Sarah',
    category: 'mua',
    subCategory: 'Professional MUA',
    rating: 5.0,
    reviews: 42,
    location: 'Jakarta Selatan',
    price: 'Rp 8.500.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmPHbEMcbJsBK5mefACR-_7IwqcIYqvZLQrw9tTHd_-aODu93aIgGPnh3dZEu1SBww1nw-ZQhJrb7ZFeJqFm7UUV4ckvYuuUYBvw7xYXjU43si-IMSeSwiK_ZpAfF59SzpwY6_bjOYNn5aqvW8ThNAtD_1HxsDRScd3qCGRddsAX8_NQZ7O3lrpjXwh9EWTSTA8wZnC3ArENthHWJ72t70ls9C5nsaxSCOKINRUdchrOK7MV0TfGmGMTEZTuuhKaMOuWn5snAAizHi',
    isVerified: true,
  }
];

export const CATEGORIES = [
  { id: 'venue', name: 'Venue', icon: 'location_on', sub: 'Lokasi Acara', color: 'blue' },
  { id: 'catering', name: 'Catering', icon: 'restaurant', sub: 'Layanan Boga', color: 'primary' },
  { id: 'mua', name: 'Makeup (MUA)', icon: 'face_5', sub: 'Rias Pengantin', color: 'rose' },
  { id: 'photography', name: 'Photography', icon: 'photo_camera', sub: 'Dokumentasi', color: 'orange' },
  { id: 'decoration', name: 'Decoration', icon: 'home_and_garden', sub: 'Dekorasi Pelaminan', color: 'green' },
  { id: 'organizer', name: 'Wedding Organizer', icon: 'assignment_ind', sub: 'Perencana Ahli', color: 'purple' },
  { id: 'music', name: 'Music', icon: 'music_note', sub: 'Hiburan Musik', color: 'pink' },
  { id: 'mc', name: 'MC', icon: 'mic', sub: 'Master of Ceremony', color: 'teal' },
];

export const ORDERS: Order[] = [
  {
    id: 'WP-99210',
    vendorName: 'Royal Taste Catering',
    category: 'Catering',
    status: 'active',
    amount: 'Rp 45.000.000',
    paidAmount: 'Rp 15.000.000',
    date: '12 Okt 2023',
    weddingDate: '15 Sep 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfj9xFNYGP-sb6FIPXyYx0hj6M9qSbXDDGkEvaShyYTBMrrd34mOmjftn96_LRalQ1mh8D_slTB3LhlisEMA1JRGXRK2MmL1oab_2PEbYQGd5F1Uw2L1g8Wx1-n15ZYdW6WdtS8qIPxQfNuwX2qIRKsK7PPIpNln5w5T5ry_kqmKzRzoBRC7gaZmhpTqpWSeRmZnuAHc55VxGiorzp3mREOIp19GDqF9BtBcQJTKn6quKCXm2H1VB7GpDaccWxWasYpsAXj3dJFCk7',
    milestones: [
      { id: 'm1', name: 'DP & Booking', status: 'completed', date: '12 Okt 2023', amount: 'Rp 9.000.000' },
      { id: 'm2', name: 'Technical Meeting', status: 'active', date: '15 Des 2023', amount: 'Rp 18.000.000' },
      { id: 'm3', name: 'Pelunasan H-7', status: 'pending', date: '08 Sep 2024', amount: 'Rp 18.000.000' },
    ]
  }
];

export const BUDGET_STATS = {
  total: 200000000,
  used: 57500000,
  remaining: 142500000,
  percentage: 28.75,
};

export const CHECKLIST_ITEMS = [
  { id: 'c1', title: 'Tentukan Anggaran Pernikahan', date: '12 Jan 2024', status: 'completed', group: '12 Bulan Sebelum' },
  { id: 'c2', title: 'Booking Gedung Utama', date: '15 Feb 2024', status: 'active', group: '12 Bulan Sebelum', vendor: 'Mulia Hotel' },
  { id: 'c3', title: 'Fitting Baju Pengantin', date: 'Besok', status: 'pending', group: '6 Bulan Sebelum', vendor: 'Anna V. Designer' },
  { id: 'c4', title: 'Finalisasi Menu Katering', date: '20 Okt 2024', status: 'pending', group: '6 Bulan Sebelum' },
];

export const ADMIN_STATS = {
  gmv: 'Rp 1.2B',
  escrow: 'Rp 450M',
  revenue: 'Rp 180M',
  pendingKYC: 24,
  activeDisputes: 12,
};

export const VENDOR_STATS = {
  totalRevenue: 'Rp 45.000.000',
  escrowBalance: 'Rp 12.500.000',
  readyToWithdraw: 'Rp 8.000.000',
  completedProjects: 24,
  rating: 4.9,
};
