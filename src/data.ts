/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, GalleryItem, Testimonial } from './types';

// Let's reference the exact generated assets
export const IMAGES = {
  heroBg: '/src/assets/images/melan_hero_bg_1782266813950.jpg',
  ceremony: '/src/assets/images/melan_ceremony_1782266826480.jpg',
  pastries: '/src/assets/images/melan_pastries_1782266840738.jpg',
  cake: '/src/assets/images/melan_cake_1782266853956.jpg',
  
  // High-quality fallback/supplementary images from Unsplash
  latteArt: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800',
  espresso: 'https://images.unsplash.com/photo-1510707577719-0d7e8b61b44d?auto=format&fit=crop&q=80&w=800',
  macchiato: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
  cappuccino: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800',
  coldBrew: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
  
  danish: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
  muffin: 'https://images.unsplash.com/photo-1558961309-db6f1a3eb81a?auto=format&fit=crop&q=80&w=800',
  cinnamonRoll: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
  
  cheesecake: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800',
  tiramisu: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
  redVelvet: 'https://images.unsplash.com/photo-1586985289688-ca9cf499368a?auto=format&fit=crop&q=80&w=800',
  
  breakfastOmelette: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
  pancakes: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800',
  breakfastSandwich: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
  
  clubSandwich: 'https://images.unsplash.com/photo-1567234669013-216f4949bdcd?auto=format&fit=crop&q=80&w=800',
  salad: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
  
  interior1: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800',
  interior2: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=800',
  interior3: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800',
};

export const MENU_ITEMS: MenuItem[] = [
  // SPECIALTY COFFEE
  {
    id: 'c1',
    name: 'Ethiopian Coffee Ceremony',
    description: 'Traditional slow-roasted, freshly ground, and brewed in a clay Jebena, served with popcorn and aromatic frankincense.',
    price: '320 ETB',
    category: 'coffee',
    image: IMAGES.ceremony,
    isFeatured: true,
    tags: ['Traditional', 'Signature']
  },
  {
    id: 'c2',
    name: 'Single-Origin Espresso',
    description: 'A concentrated shot extracted from our premium Sidamo light-medium roast, yielding floral and citrus notes.',
    price: '140 ETB',
    category: 'coffee',
    image: IMAGES.espresso,
    tags: ['Classic', 'Single-Origin']
  },
  {
    id: 'c3',
    name: 'Artisan Macchiato',
    description: 'Double shot of rich espresso stained with a small dollop of perfectly textured warm microfoam.',
    price: '160 ETB',
    category: 'coffee',
    image: IMAGES.macchiato,
    tags: ['Favorite']
  },
  {
    id: 'c4',
    name: 'Melan Cappuccino',
    description: 'Equal parts espresso, steamed milk, and lush velvet foam, dusted with freshly grated organic cinnamon.',
    price: '180 ETB',
    category: 'coffee',
    image: IMAGES.cappuccino,
    tags: ['Classic']
  },
  {
    id: 'c5',
    name: 'Velvety Caffè Latte',
    description: 'A smooth double shot of espresso combined with creamy, sweet steamed milk and finished with premium latte art.',
    price: '190 ETB',
    category: 'coffee',
    image: IMAGES.latteArt,
    isFeatured: true,
    tags: ['Latte Art']
  },
  {
    id: 'c6',
    name: 'Signature Café Mocha',
    description: 'A luxurious fusion of rich espresso, steamed milk, and dark Belgian cocoa, topped with fresh whipped cream.',
    price: '210 ETB',
    category: 'coffee',
    image: IMAGES.heroBg,
    tags: ['Sweet']
  },
  {
    id: 'c7',
    name: 'Caffè Americano',
    description: 'Bold espresso shots tempered with purified hot water, highlighting our single-origin bean profile.',
    price: '150 ETB',
    category: 'coffee',
    image: IMAGES.espresso,
    tags: ['Classic']
  },
  {
    id: 'c8',
    name: 'Slow-Drip Cold Brew',
    description: 'Steeped for 18 hours in cold filtered water, showcasing a smooth body with absolutely no bitterness.',
    price: '200 ETB',
    category: 'coffee',
    image: IMAGES.coldBrew,
    tags: ['Refreshing']
  },

  // FRESH PASTRIES
  {
    id: 'p1',
    name: 'Classic Butter Croissant',
    description: 'Flaky, buttery European-style croissant, baked fresh daily with high-ratio French butter layers.',
    price: '180 ETB',
    category: 'pastry',
    image: IMAGES.pastries,
    isFeatured: true,
    tags: ['Fresh Baked', 'Best Seller']
  },
  {
    id: 'p2',
    name: 'Pain au Chocolat',
    description: 'Leavened puff pastry folded with rich, premium dark chocolate batons and baked to a perfect golden brown.',
    price: '210 ETB',
    category: 'pastry',
    image: IMAGES.pastries,
    tags: ['Chocolate']
  },
  {
    id: 'p3',
    name: 'Artisan Danish Pastry',
    description: 'Crispy laminated pastry topped with imported raspberry compote and cream cheese, lightly glazed.',
    price: '220 ETB',
    category: 'pastry',
    image: IMAGES.danish,
    tags: ['Fruity']
  },
  {
    id: 'p4',
    name: 'Signature Cinnamon Roll',
    description: 'Soft yeast dough swirled with premium cinnamon and brown sugar, topped with a rich vanilla bean cream cheese glaze.',
    price: '190 ETB',
    category: 'pastry',
    image: IMAGES.pastries,
    tags: ['Sweet']
  },
  {
    id: 'p5',
    name: 'Blueberry Crumble Muffin',
    description: 'Moist, light muffin loaded with fresh wild blueberries and finished with an organic cinnamon brown sugar crumble.',
    price: '160 ETB',
    category: 'pastry',
    image: IMAGES.muffin,
    tags: ['Fruit']
  },

  // SIGNATURE CAKES
  {
    id: 'k1',
    name: 'Melan Golden Chocolate Cake',
    description: 'Layers of decadent dark chocolate ganache and moist cocoa sponge, detailed with pure edible gold leaf.',
    price: '420 ETB',
    category: 'cake',
    image: IMAGES.cake,
    isFeatured: true,
    tags: ['Signature', 'Luxury']
  },
  {
    id: 'k2',
    name: 'New York Style Cheesecake',
    description: 'Velvety cream cheese filling on a buttery graham cracker crust, finished with a fresh strawberry glaze.',
    price: '380 ETB',
    category: 'cake',
    image: IMAGES.cheesecake,
    tags: ['Classic']
  },
  {
    id: 'k3',
    name: 'Classic Tiramisu',
    description: 'Ladyfingers soaked in our signature Sidamo espresso, layered with whipped mascarpone cheese and cocoa powder.',
    price: '390 ETB',
    category: 'cake',
    image: IMAGES.tiramisu,
    tags: ['Coffee Infused']
  },
  {
    id: 'k4',
    name: 'Velvet Ribbon Cake',
    description: 'Vibrant red velvet layers with a delicate hint of premium cocoa, frosted with silky cream cheese icing.',
    price: '360 ETB',
    category: 'cake',
    image: IMAGES.redVelvet,
    tags: ['Classic']
  },

  // BREAKFAST SELECTION
  {
    id: 'b1',
    name: 'Melan Signature Omelette',
    description: 'Three local organic eggs folded with aged cheddar, caramelized mushrooms, baby spinach, and fresh herbs, served with sourdough.',
    price: '450 ETB',
    category: 'breakfast',
    image: IMAGES.breakfastOmelette,
    isFeatured: true,
    tags: ['Organic', 'Satisfying']
  },
  {
    id: 'b2',
    name: 'Croissant Breakfast Sandwich',
    description: 'Our house butter croissant filled with fluffy scrambled eggs, premium beef bacon, and melted Swiss cheese.',
    price: '490 ETB',
    category: 'breakfast',
    image: IMAGES.breakfastSandwich,
    tags: ['Best Seller']
  },
  {
    id: 'b3',
    name: 'Buttermilk Pancake Stack',
    description: 'Fluffy buttermilk pancakes topped with Madagascar vanilla butter, fresh berries, and raw Ethiopian wildflower honey.',
    price: '390 ETB',
    category: 'breakfast',
    image: IMAGES.pancakes,
    tags: ['Sweet']
  },
  {
    id: 'b4',
    name: 'Sourdough Avocado Toast',
    description: 'Toasted artisanal sourdough spread with hand-mashed local avocado, cherry tomatoes, and microgreens, drizzled with olive oil.',
    price: '420 ETB',
    category: 'breakfast',
    image: IMAGES.breakfastOmelette,
    tags: ['Healthy', 'Vegan Option']
  },

  // LIGHT MEALS
  {
    id: 'm1',
    name: 'Gourmet Club Sandwich',
    description: 'Triple-decker sandwich with roasted herb chicken, crisp beef bacon, organic fried egg, tomato, butter lettuce, and garlic aioli.',
    price: '680 ETB',
    category: 'meals',
    image: IMAGES.clubSandwich,
    isFeatured: true,
    tags: ['Classic', 'Filling']
  },
  {
    id: 'm2',
    name: 'Mediterranean Quinoa Salad',
    description: 'Fluffy quinoa tossed with fresh cucumbers, local vine tomatoes, Kalamata olives, Ethiopian feta, and a zesty lemon herb dressing.',
    price: '540 ETB',
    category: 'meals',
    image: IMAGES.salad,
    tags: ['Healthy', 'Vegetarian']
  },
  {
    id: 'm3',
    name: 'Crispy Chicken Wrap',
    description: 'Warm flour tortilla stuffed with crispy golden chicken tenders, fresh avocado, shredded cabbage, and our signature spicy ranch sauce.',
    price: '590 ETB',
    category: 'meals',
    image: IMAGES.clubSandwich,
    tags: ['Savory']
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    url: IMAGES.heroBg,
    title: 'The Art of Espresso Extraction',
    category: 'coffee',
    aspectClass: 'md:col-span-2 md:row-span-1'
  },
  {
    id: 'g2',
    url: IMAGES.pastries,
    title: 'Freshly Baked Flaky Pastries',
    category: 'pastries'
  },
  {
    id: 'g3',
    url: IMAGES.ceremony,
    title: 'Modern Ethiopian Coffee Ceremony',
    category: 'coffee'
  },
  {
    id: 'g4',
    url: IMAGES.cake,
    title: 'Melan Golden Chocolate Masterpiece',
    category: 'pastries',
    aspectClass: 'md:col-span-2 md:row-span-1'
  },
  {
    id: 'g5',
    url: IMAGES.interior1,
    title: 'Comfortable Modern Lounge Area',
    category: 'interior'
  },
  {
    id: 'g6',
    url: IMAGES.interior2,
    title: 'Sleek Scandinavian Barista Counter',
    category: 'interior'
  },
  {
    id: 'g7',
    url: IMAGES.interior3,
    title: 'A Warm, Inviting Social Ambiance',
    category: 'atmosphere'
  },
  {
    id: 'g8',
    url: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800',
    title: 'Intricate Latte Art Masterclass',
    category: 'atmosphere'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Saron Kifle',
    role: 'Tech Entrepreneur & Frequent Guest',
    rating: 5,
    comment: 'One of the finest coffee experiences in Addis Ababa. The perfect blend of Ethiopian coffee tradition and sleek modern design makes it my absolute favorite place to take business meetings or focus on deep work. The latte is exceptional!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't2',
    name: 'Marcus Vance',
    role: 'International Travel Journalist',
    rating: 5,
    comment: 'Melan offers an exquisite gourmet experience. Their traditional coffee ceremony feels genuinely respectful of heritage while being housed in a beautiful, minimalist, high-end environment. Don’t leave without trying their chocolate cake – it is a true work of art.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't3',
    name: 'Betty Hailu',
    role: 'Pastry Chef & Food Blogger',
    rating: 5,
    comment: 'As someone passionate about baking, I am thoroughly impressed by their patisserie. The croissants are authentically laminated with proper butter layer structure – crispy, flaky on the outside, soft inside. It is a world-class venue right here in Addis.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't4',
    name: 'Yared Shimelis',
    role: 'Creative Director',
    rating: 5,
    comment: 'The lighting, the Scandinavian design elements, and the soft scent of freshly brewed coffee and frankincense create an incomparable atmosphere. The staff are amazingly professional and hospitable. A remarkable brand.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];
