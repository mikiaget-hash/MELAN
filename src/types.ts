/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'coffee' | 'pastry' | 'cake' | 'breakfast' | 'meals';
  image: string;
  isFeatured?: boolean;
  tags?: string[];
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'coffee' | 'pastries' | 'interior' | 'atmosphere';
  aspectClass?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface Reservation {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
}
