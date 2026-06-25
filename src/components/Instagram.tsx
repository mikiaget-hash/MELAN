/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Instagram as InstagramIcon, Heart, MessageCircle, Sparkles, Plus } from 'lucide-react';
import { IMAGES } from '../data';

export default function Instagram() {
  const feed = [
    {
      id: 'i1',
      image: IMAGES.latteArt,
      likes: '342',
      comments: '24',
      caption: 'The fine science of microfoam. Today we are pouring Sidamo light roast. #latteart #melan'
    },
    {
      id: 'i2',
      image: IMAGES.pastries,
      likes: '512',
      comments: '41',
      caption: 'Flaky, buttery perfection out of the oven. What is your morning pick? #pastry #croissant'
    },
    {
      id: 'i3',
      image: IMAGES.ceremony,
      likes: '723',
      comments: '68',
      caption: 'Honoring legendary traditions. Traditional clay Jebena coffee ceremony. #heritage #ethiopian'
    },
    {
      id: 'i4',
      image: IMAGES.cake,
      likes: '489',
      comments: '35',
      caption: 'Chocolate, ganache, and edible gold leaf. Sweeten your Tuesday. #gourmet #patisserie'
    },
    {
      id: 'i5',
      image: IMAGES.interior3,
      likes: '298',
      comments: '12',
      caption: 'Designed for meetings, focused study, or catchups. Grab a cozy corner. #space #lounge'
    },
    {
      id: 'i6',
      image: IMAGES.coldBrew,
      likes: '375',
      comments: '19',
      caption: '18 hours of slow cold-dripping. Refreshing organic Sidamo cold brew. #coldbrew'
    }
  ];

  return (
    <section className="py-20 bg-cream" id="instagram">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="h-3.5 w-3.5" /> Social Ambiance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
              Follow Us on Instagram
            </h2>
            <p className="text-muted-text font-light text-sm">
              Discover daily bakes, brewing masterclasses, and cozy visitor moments at <span className="font-bold text-primary hover:text-accent cursor-pointer">@MelanCoffeePatisserie</span>
            </p>
          </div>

          {/* Follow CTA */}
          <a
            href="https://www.instagram.com/popular/melan-coffee-and-patisserie-addis-ababa/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary hover:bg-secondary text-white font-bold text-[11px] uppercase tracking-[0.2em] rounded-tl-xl rounded-br-xl transition duration-300 flex items-center gap-2 border border-accent/20 cursor-pointer"
            id="follow-instagram-btn"
          >
            <InstagramIcon className="h-4 w-4 text-accent" />
            Join Our Community
          </a>
        </div>

        {/* Instagrid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" id="instagram-feed-grid">
          {feed.map((post) => (
            <div
              key={post.id}
              className="relative aspect-square overflow-hidden rounded-tl-[24px] rounded-br-[24px] shadow-sm bg-primary/5 group border border-gray-100"
              id={`insta-post-${post.id}`}
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Hover Dark Overlay with Stats */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center z-10 space-y-3">
                <InstagramIcon className="h-5 w-5 text-accent animate-float" />
                
                {/* Metrics */}
                <div className="flex items-center gap-4 text-white text-xs font-mono font-bold">
                  <span className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4 text-blue-400 fill-blue-400" />
                    {post.comments}
                  </span>
                </div>

                <p className="text-[10px] text-gray-300 leading-normal font-light line-clamp-2 max-w-[120px]">
                  {post.caption}
                </p>
              </div>

              {/* Small Overlay Instagram Icon (Default visible bottom-right) */}
              <div className="absolute bottom-3 right-3 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-primary border border-gray-100 shadow-sm z-0 group-hover:opacity-0 transition-opacity">
                <InstagramIcon className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
