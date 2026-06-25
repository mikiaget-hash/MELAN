/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Calendar, Clock, Users, Sparkles, CheckCircle, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Reservation } from '../types';
import MelanLogo from './MelanLogo';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState<Reservation>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
  });

  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  // Reset modal state on open/close
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const timeSlots = [
    '07:30 AM', '08:30 AM', '09:30 AM', '11:00 AM', 
    '12:30 PM', '2:00 PM', '3:30 PM', '5:00 PM', 
    '6:30 PM', '8:00 PM'
  ];

  const isStepValid = (currentStep: number) => {
    if (currentStep === 1) {
      return !!formData.date && !!formData.time && formData.guests > 0;
    }
    if (currentStep === 2) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return (
        formData.name.trim().length >= 2 &&
        emailRegex.test(formData.email) &&
        formData.phone.trim().length >= 6
      );
    }
    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      return;
    }
    // Generate a unique booking ID
    const randomId = 'MLN-' + Math.floor(1000 + Math.random() * 9000);
    setBookingId(randomId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: 2,
      specialRequests: ''
    });
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-tl-[50px] rounded-br-[50px] bg-cream p-1 shadow-2xl z-10 border border-accent/20"
            id="reservation-modal-content"
          >
            {/* Elegant Inner Frame */}
            <div className="rounded-tl-[45px] rounded-br-[45px] bg-white p-6 md:p-8 border border-primary/5">
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-1.5 rounded-full text-muted-text hover:text-primary hover:bg-cream transition-all duration-200 z-10"
                id="close-modal-btn"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6" id="reservation-form">
                  <div className="text-center space-y-2">
                    <div className="flex justify-center">
                      <MelanLogo className="h-14 w-14 text-accent animate-float" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-primary tracking-tight">
                      Experience Melan's Hospitality
                    </h3>
                    <p className="text-sm text-muted-text max-w-sm mx-auto">
                      Reserve your table to enjoy authentic Ethiopian coffee, artisan desserts, and bespoke service.
                    </p>
                  </div>

                  {/* Elegant Step Indicator */}
                  <div className="flex items-center justify-between max-w-sm mx-auto mb-6 px-2" id="step-indicator">
                    {[
                      { num: 1, label: 'Party & Date', icon: Calendar },
                      { num: 2, label: 'Contact', icon: Users },
                      { num: 3, label: 'Confirm', icon: Sparkles }
                    ].map((s, index, arr) => {
                      const Icon = s.icon;
                      const isActive = step === s.num;
                      const isCompleted = step > s.num;
                      return (
                        <div key={s.num} className="flex items-center flex-1 last:flex-none">
                          <div className="flex flex-col items-center relative">
                            <div
                              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                                isCompleted
                                  ? 'bg-green-600 text-white shadow-md'
                                  : isActive
                                  ? 'bg-accent text-white font-bold ring-4 ring-accent/20'
                                  : 'bg-gray-100 text-gray-400'
                              }`}
                            >
                              {isCompleted ? <Check className="h-4.5 w-4.5" /> : <Icon className="h-4.5 w-4.5" />}
                            </div>
                            <span className={`text-[9px] min-[360px]:text-[10px] font-semibold uppercase tracking-wider mt-1.5 hidden min-[360px]:block ${isActive ? 'text-accent' : 'text-muted-text'}`}>
                              {s.label}
                            </span>
                          </div>
                          {index < arr.length - 1 && (
                            <div className="flex-1 h-[2px] mx-2 -mt-4 min-[360px]:-mt-8 relative bg-gray-100 min-w-[20px] sm:min-w-[40px]">
                              <div
                                className="absolute top-0 left-0 h-full bg-accent transition-all duration-500"
                                style={{ width: step > s.num ? '100%' : '0%' }}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        {/* Guest Selection & Date */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1.5 flex items-center gap-1.5">
                              <Users className="h-3.5 w-3.5 text-accent" />
                              Number of Guests
                            </label>
                            <select
                              value={formData.guests}
                              onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent bg-white transition cursor-pointer"
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <option key={num} value={num}>
                                  {num} {num === 1 ? 'Guest' : 'Guests'}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1.5 flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5 text-accent" />
                              Preferred Date
                            </label>
                            <input
                              type="date"
                              required
                              min={new Date().toISOString().split('T')[0]}
                              value={formData.date}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition cursor-pointer"
                            />
                          </div>
                        </div>

                        {/* Time Slots */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-accent" />
                            Available Times
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {timeSlots.map((slot) => {
                              const isSelected = formData.time === slot;
                              return (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, time: slot })}
                                  className={`py-2.5 px-1.5 text-xs rounded-lg border text-center transition-all cursor-pointer ${
                                    isSelected
                                      ? 'bg-accent border-accent text-white font-semibold shadow-md'
                                      : 'border-gray-200 hover:border-secondary hover:bg-cream text-primary'
                                  }`}
                                >
                                  {slot}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Step 1 Actions */}
                        <div className="pt-2">
                          <button
                            type="button"
                            disabled={!isStepValid(1)}
                            onClick={() => setStep(2)}
                            className="w-full py-4 bg-primary hover:bg-secondary text-white font-bold uppercase tracking-[0.2em] text-[11px] rounded-tl-xl rounded-br-xl transition shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            Next: Contact Details
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">
                            Full Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                            placeholder="Betty Hailu"
                          />
                        </div>

                        {/* Contact Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">
                              Email Address
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                              placeholder="betty@example.com"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                              placeholder="+251 911 234 567"
                            />
                          </div>
                        </div>

                        {/* Step 2 Actions */}
                        <div className="flex gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="flex-1 py-4 border border-primary/20 text-primary hover:bg-cream font-bold uppercase tracking-[0.2em] text-[11px] rounded-tl-xl rounded-br-xl transition flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            Back
                          </button>
                          <button
                            type="button"
                            disabled={!isStepValid(2)}
                            onClick={() => setStep(3)}
                            className="flex-1 py-4 bg-primary hover:bg-secondary text-white font-bold uppercase tracking-[0.2em] text-[11px] rounded-tl-xl rounded-br-xl transition shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            Next: Review
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step-3"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        {/* Elegant Booking Review Card */}
                        <div className="bg-cream/40 border border-accent/20 rounded-2xl p-4 space-y-3 text-sm">
                          <h4 className="font-serif text-sm text-primary font-bold border-b border-accent/10 pb-1.5 flex items-center gap-1.5">
                            <Sparkles className="h-4 w-4 text-accent" />
                            Reservation Summary
                          </h4>
                          <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs">
                            <div>
                              <span className="text-muted-text block mb-0.5">Date & Time</span>
                              <span className="font-semibold text-primary">
                                {formData.date ? new Date(formData.date).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric'
                                }) : ''} at {formData.time}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-text block mb-0.5">Party Size</span>
                              <span className="font-semibold text-primary">{formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}</span>
                            </div>
                            <div>
                              <span className="text-muted-text block mb-0.5">Guest Name</span>
                              <span className="font-semibold text-primary truncate max-w-[150px] block">{formData.name}</span>
                            </div>
                            <div>
                              <span className="text-muted-text block mb-0.5">Phone</span>
                              <span className="font-semibold text-primary truncate max-w-[150px] block">{formData.phone}</span>
                            </div>
                          </div>
                        </div>

                        {/* Special Requests */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                            Special Requests (Optional)
                          </label>
                          <textarea
                            value={formData.specialRequests}
                            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                            rows={2}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition text-sm"
                            placeholder="Dietary preferences, celebrating an occasion, quiet corner request..."
                          />
                        </div>

                        {/* Step 3 Actions */}
                        <div className="flex gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="flex-1 py-4 border border-primary/20 text-primary hover:bg-cream font-bold uppercase tracking-[0.2em] text-[11px] rounded-tl-xl rounded-br-xl transition flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            Back
                          </button>
                          <button
                            type="submit"
                            className="flex-1 py-4 bg-accent hover:bg-secondary text-white font-bold uppercase tracking-[0.2em] text-[11px] rounded-tl-xl rounded-br-xl transition shadow-lg hover:shadow-accent/20 flex items-center justify-center gap-2 cursor-pointer"
                            id="submit-reservation-btn"
                          >
                            Confirm Book
                            <Check className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              ) : (
                /* Success screen - styled like an elegant boutique hotel voucher */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 py-4 text-center"
                  id="reservation-success-view"
                >
                  <div className="flex justify-center">
                    <div className="p-3 bg-green-50 rounded-full border border-green-200 text-green-600">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl text-primary font-semibold">
                      Reservation Confirmed
                    </h3>
                    <p className="text-sm text-muted-text">
                      We look forward to welcoming you, {formData.name}.
                    </p>
                  </div>

                  {/* Elegant Golden Receipt */}
                  <div className="bg-cream/40 border border-accent/30 rounded-tl-[30px] rounded-br-[30px] p-5 space-y-4 max-w-sm mx-auto text-left relative">
                    {/* Decorative Sidelines */}
                    <div className="absolute top-0 bottom-0 left-3 w-[1px] border-l border-dashed border-accent/20" />
                    <div className="pl-6 space-y-3">
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-xs text-muted-text uppercase tracking-wider">Booking Code</span>
                        <span className="text-sm font-semibold text-accent font-mono">{bookingId}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-text">Guests</span>
                        <span className="font-semibold text-primary">{formData.guests} Persons</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-text">Date</span>
                        <span className="font-semibold text-primary">
                          {new Date(formData.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-text">Time</span>
                        <span className="font-semibold text-primary">{formData.time}</span>
                      </div>
                      {formData.specialRequests && (
                        <div className="border-t border-gray-100 pt-2 text-xs">
                          <span className="text-muted-text block mb-1">Notes:</span>
                          <p className="italic text-primary">{formData.specialRequests}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-muted-text max-w-xs mx-auto">
                    A confirmation voucher has been sent to <span className="font-medium text-primary">{formData.email}</span>. If you need to modify or cancel, please call +251 911 234 567.
                  </p>

                  <button
                    onClick={handleReset}
                    className="px-6 py-3.5 bg-primary hover:bg-secondary text-white font-bold uppercase tracking-[0.2em] text-[11px] rounded-tl-xl rounded-br-xl transition shadow-md cursor-pointer"
                    id="reservation-done-btn"
                  >
                    Return to Café Home
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
