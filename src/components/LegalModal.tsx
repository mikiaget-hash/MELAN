/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileText, Coffee, FileLock2, AlertCircle } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  docType: 'privacy' | 'terms' | 'catering' | null;
  onClose: () => void;
}

export default function LegalModal({ isOpen, docType, onClose }: LegalModalProps) {
  if (!isOpen || !docType) return null;

  const getContent = () => {
    switch (docType) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: <ShieldCheck className="h-6 w-6 text-accent" />,
          subtitle: 'Last Updated: June 2026',
          sections: [
            {
              heading: '1. Introduction',
              body: 'At Melan Coffee & Patisserie ("Melan", "we", "us", or "our"), based in Addis Ababa, Ethiopia, we are committed to protecting your privacy. This Privacy Policy describes how we collect, use, and safeguard your personal information when you visit our parlor, use our website, or interact with our digital reservation systems.',
            },
            {
              heading: '2. Information We Collect',
              body: 'We collect personal information that you voluntarily provide to us when reserving a table, registering for events, or subscribing to our newsletters. This may include your name, email address, phone number, reservation date and time, party size, and any special dining or dietary requests.',
            },
            {
              heading: '3. How We Use Your Information',
              body: 'We utilize your information strictly to secure and manage your dining reservations, improve our artisan menu offerings, personalize your boutique coffee experience, communicate updates, and comply with safety and legal obligations within the Federal Democratic Republic of Ethiopia.',
            },
            {
              heading: '4. Cookies & Tracking Technologies',
              body: 'Our website uses cookies and similar local storage technologies to enhance user navigation, analyze site traffic, and remember your reservation preferences. You have the right to accept, decline, or manage cookies at any time through your browser settings or our dynamic consent banner.',
            },
            {
              heading: '5. Security & Retention',
              body: 'We implement industry-standard administrative, physical, and digital security measures to protect your data against unauthorized access, loss, or alteration. We retain your personal data only as long as necessary to fulfill the purposes outlined or to satisfy legal and accounting requirements.',
            },
            {
              heading: '6. Your Rights & Contacts',
              body: 'You have the right to request access to, correction of, or deletion of your personal details stored in our databases. For any queries, please reach out to our concierge team at concierge@melanaddis.com or visit our flagship boutique at Bole Road, Addis Ababa.',
            }
          ]
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          icon: <FileText className="h-6 w-6 text-accent" />,
          subtitle: 'Last Updated: June 2026',
          sections: [
            {
              heading: '1. Acceptance of Terms',
              body: 'By accessing this website, making table reservations, or participating in our physical culinary experiences, you agree to be bound by these Terms of Service and all applicable local regulations of Addis Ababa, Ethiopia.',
            },
            {
              heading: '2. Table Reservation Policy',
              body: 'Reservations made online are subject to confirmation. Due to the high demand for our boutique parlor seats, reserved tables are held for a maximum grace period of 15 minutes past the scheduled time. If your party is delayed, please notify our front desk. Failure to do so may result in the automated cancellation or reassignment of your table.',
            },
            {
              heading: '3. Intellectual Property Rights',
              body: 'All content, logo designs, custom illustrations, branding, copy, recipes, photographs, and digital assets featured on this website are the exclusive property of Melan Coffee & Patisserie and are protected under international copyright and intellectual property laws. Any unauthorized replication or distribution is strictly prohibited.',
            },
            {
              heading: '4. Guest Conduct & Dress Code',
              body: 'To maintain the refined, respectful, and sensory-focused atmosphere of the Melan Experience, we ask our guests to dress in smart-casual attire. Melan reserves the right to deny service or request departure of any guest whose conduct is deemed disruptive, offensive, or hazardous to other guests or team members.',
            },
            {
              heading: '5. Limitations of Liability',
              body: 'Under no circumstances shall Melan Coffee & Patisserie, its owners, or partners be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website, or from participation in our public dining events.',
            }
          ]
        };
      case 'catering':
        return {
          title: 'Catering & Ceremony Guidelines',
          icon: <Coffee className="h-6 w-6 text-accent" />,
          subtitle: 'Service Guide & Requirements',
          sections: [
            {
              heading: '1. Bespoke Private Events',
              body: 'Melan offers curated off-site catering and on-site private parlor buyouts for elite gatherings, corporate functions, and intimate bridal, birthday, or cultural celebrations in Addis Ababa. Each event is individually tailored to pair our signature European patisseries with specialty single-origin coffees.',
            },
            {
              heading: '2. Traditional Coffee Ceremonies',
              body: 'For bookings seeking to incorporate the ancestral Ethiopian coffee ceremony, we provide a full-service setup led by our experienced ceremonial hosts. This includes premium raw bean selection, traditional roasting over charcoal, customized frankincense/myrrh incense, and service in classic "Sini" cups paired with traditional accompaniments (such as roasted barley and popcorn).',
            },
            {
              heading: '3. Custom Menu Collaborations',
              body: 'Catering menus are fully customizable in collaboration with our head pastry chef and master barista. We require menu selections to be finalized and confirmed at least 5 business days prior to the event date to secure raw specialty ingredients and hand-baked batches.',
            },
            {
              heading: '4. Booking, Deposits & Cancellation',
              body: 'To reserve a catering or private parlor date, a non-refundable security deposit of 50% of the total estimated invoice is required. The remaining 50% balance must be settled 48 hours prior to the event. Cancellations made less than 72 hours before the event will forfeit the deposit in full.',
            },
            {
              heading: '5. Equipment & Venue Requirements',
              body: 'For off-site events, the client must ensure adequate, safe electrical access, clean water source, and standard workspace setup for our espresso machinery and refrigeration setups. Our catering team will perform a preliminary site inspection to guarantee smooth ceremonial execution.',
            }
          ]
        };
    }
  };

  const content = getContent();

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" id="legal-modal-container">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark/70 backdrop-blur-md cursor-pointer"
          id="legal-modal-backdrop"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative bg-cream max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden border border-accent/20 z-10 flex flex-col max-h-[85vh]"
          id="legal-modal-content"
        >
          {/* Header */}
          <div className="p-6 bg-primary text-white border-b border-accent/20 flex justify-between items-center relative">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-accent/10 border border-accent/20 rounded-xl">
                {content.icon}
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">{content.title}</h3>
                <p className="text-xs text-accent font-sans tracking-wide uppercase mt-0.5">{content.subtitle}</p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
              aria-label="Close modal"
              id="legal-modal-close-btn"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow custom-scrollbar" id="legal-modal-body">
            {content.sections.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="font-serif text-base font-bold text-primary flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {section.heading}
                </h4>
                <p className="font-sans text-sm text-muted-text font-light leading-relaxed pl-3.5">
                  {section.body}
                </p>
              </div>
            ))}

            {/* Ethically Sourced Highlight footer inside legal documents */}
            <div className="mt-8 p-4 bg-accent/5 border border-accent/10 rounded-xl flex items-start gap-3">
              <FileLock2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <h5 className="font-sans text-xs font-bold text-primary uppercase tracking-wider">Data & Quality Protection</h5>
                <p className="font-sans text-xs text-muted-text font-light leading-relaxed">
                  Melan upholds the highest levels of service integrity. All transactions, inquiries, and private client data are processed securely in compliance with commercial and privacy protections.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-4 bg-primary/5 border-t border-accent/10 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-primary hover:bg-secondary text-white font-sans text-xs font-bold uppercase tracking-[0.15em] rounded-tl-xl rounded-br-xl transition duration-200 cursor-pointer"
              id="legal-modal-confirm-btn"
            >
              Close Document
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
