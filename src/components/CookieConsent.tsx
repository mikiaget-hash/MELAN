/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Cookie, Info } from 'lucide-react';

interface CookieConsentProps {
  onOpenPrivacy: () => void;
}

export default function CookieConsent({ onOpenPrivacy }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a selection
    const consent = localStorage.getItem('melan_cookie_consent');
    if (!consent) {
      // Small timeout to give an elegant delayed appearance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('melan_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('melan_cookie_consent', 'declined');
    setIsVisible(false);
  };

  const handleClose = () => {
    localStorage.setItem('melan_cookie_consent', 'dismissed');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 max-w-md w-full p-5 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(20,15,5,0.15)] border border-accent/20 flex flex-col gap-4 font-sans text-dark"
          id="cookie-consent-banner"
        >
          {/* Close Icon Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-xl text-accent">
                <Cookie className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-primary">
                Cookie Consent
              </h4>
            </div>
            
            <button
              onClick={handleClose}
              className="p-1 rounded-lg text-gray-400 hover:text-dark hover:bg-gray-100 transition cursor-pointer"
              aria-label="Dismiss cookie notice"
              id="cookie-close-btn"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <p className="text-xs text-muted-text font-light leading-relaxed">
              We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, remember your table reservation preferences, and personalize our boutique cafe services.
            </p>
            <p className="text-xs text-muted-text font-light">
              By clicking "Accept All", you consent to our use of cookies as described in our{' '}
              <button
                onClick={onOpenPrivacy}
                className="text-accent hover:text-accent-hover font-semibold underline transition cursor-pointer"
                id="cookie-privacy-link-btn"
              >
                Privacy Policy
              </button>
              .
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-1 border-t border-gray-100">
            <button
              onClick={handleDecline}
              className="px-4 py-2 border border-gray-200 hover:border-accent text-muted-text hover:text-primary font-bold text-[10px] uppercase tracking-widest rounded-lg transition duration-200 cursor-pointer"
              id="cookie-decline-btn"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-5 py-2.5 bg-primary hover:bg-secondary text-white font-bold text-[10px] uppercase tracking-widest rounded-lg transition duration-200 shadow-md hover:shadow-primary/10 cursor-pointer"
              id="cookie-accept-btn"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
