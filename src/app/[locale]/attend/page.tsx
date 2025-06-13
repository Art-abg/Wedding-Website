"use client";

import { useState, FormEvent } from 'react';
import { useScopedI18n, useCurrentLocale } from '@/locales/client';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import styles from './page.module.css';

interface FormData {
  name: string;
  email: string;
  attending: "yes" | "no" | "";
  guests: string; // Store as string for input, parse to number for submission
  dietary: string;
  message: string;
}

interface FormErrors {
  name?: string;
  attending?: string;
  guests?: string;
}

export default function RsvpPage() {
  const t = useScopedI18n('rsvpPage');
  const tHome = useScopedI18n('home');
  const currentLocale = useCurrentLocale();
  // Removed unused rsvpDeadline variable

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    attending: "",
    guests: "1",
    dietary: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = t("form.fieldRequired");
    }
    if (!formData.attending) {
      newErrors.attending = t("form.fieldRequired");
    }
    if (formData.attending === "yes") {
      const numGuests = parseInt(formData.guests, 10);
      if (isNaN(numGuests) || numGuests < 1) {
        newErrors.guests = t("form.invalidGuests");
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    console.log("Submitting RSVP data to Supabase:", formData);
    try {
      const submissionData = {
        name: formData.name,
        email: formData.email || null, // Ensure null if empty
        is_attending: formData.attending === "yes",
        guest_count: formData.attending === "yes" ? parseInt(formData.guests, 10) : 0,
        dietary_restrictions: formData.dietary || null,
        message: formData.message || null,
        locale: currentLocale,
      };

      const { error } = await supabase
        .from("rsvps") // Make sure 'rsvps' table exists in your Supabase
        .insert([submissionData]);

      if (error) {
        throw error;
      }

      setSubmissionStatus("success");
      setFormData({
        name: "",
        email: "",
        attending: "",
        guests: "1",
        dietary: "",
        message: "",
      });
      setErrors({});
    } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
      console.error('RSVP Submission Error:', error);
      // Log specific Supabase error properties if available
      if (error && typeof error === 'object') {
        if ('message' in error) console.error('Supabase Error Message:', error.message);
        if ('details' in error) console.error('Supabase Error Details:', error.details);
        if ('hint' in error) console.error('Supabase Error Hint:', error.hint);
        if ('code' in error) console.error('Supabase Error Code:', error.code);
      }
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };
  // Removed unused handleAttendingChange function

  if (submissionStatus === "success") {
    return (
      <AnimatedSection
        tag="div"
        delay={0.2}
        className="min-h-screen bg-gradient-to-br from-cream-100 to-blush-300/30 flex flex-col items-center justify-center p-6 text-center"
      >
        <h1 className="font-parisienne text-5xl md:text-7xl text-gold-600 mb-6">{t('form.submissionSuccessTitle')}</h1>
        <p className="text-lg text-green-800 mb-8 max-w-md">{t('form.submissionSuccessMessage')}</p>
        <Link href={`/${currentLocale}`} className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-300">
          {tHome('backToHome')}
        </Link>
      </AnimatedSection>
    );
  }

  if (submissionStatus === "error") {
    return (
      <AnimatedSection
        tag="div"
        delay={0.2}
        className="min-h-screen bg-gradient-to-br from-cream-100 to-blush-300/30 flex flex-col items-center justify-center p-6 text-center"
      >
        <h1 className="font-parisienne text-5xl md:text-7xl text-red-600 mb-6">
          {t("form.submissionErrorTitle")}
        </h1>
        <p className="text-lg text-green-800 mb-8 max-w-md">{t('form.submissionErrorMessage')}</p>
        <button 
          onClick={() => setSubmissionStatus(null)} 
          className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300 mb-4">
          {t('form.tryAgainButton')}
        </button>
        <Link href={`/${currentLocale}`} className="text-sm text-gold-600 hover:text-gold-700">
          {tHome('backToHome')}
        </Link>
      </AnimatedSection>
    );
  }

  return (
    <div className={styles.rsvpBackground}>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gold-100/30 to-transparent" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gold-100/30 to-transparent" aria-hidden="true"></div>
      
      {/* Page Title and Description Section */}
      <AnimatedSection delay={0.1} className="text-center mb-16 max-w-3xl w-full px-4 relative">
        {/* Gold ornamental divider above title */}
        <div className="flex justify-center mb-6" aria-hidden="true">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
        </div>
        
        <h1 className="font-parisienne text-6xl md:text-8xl text-gold-600 mb-4 tracking-wide">
          {t("title")}
        </h1>
        
        <p className="text-xl text-green-800 mb-2 font-light tracking-wider">
          {t("description")}
        </p>
        
        {/* Gold ornamental divider below description */}
        <div className="flex justify-center mt-8" aria-hidden="true">
          <div className="relative">
            <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-gold-400 rounded-full transform rotate-45"></div>
          </div>
        </div>
      </AnimatedSection>

      {/* RSVP Form Card Section */}
      <AnimatedSection
        delay={0.3}
        tag="main"
        className="max-w-2xl w-full bg-white/90 backdrop-blur-xl p-10 sm:p-12 md:p-14 rounded-2xl shadow-2xl border border-gold-200 relative overflow-hidden"
      >
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold-300/60 rounded-tl-xl" aria-hidden="true"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold-300/60 rounded-tr-xl" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold-300/60 rounded-bl-xl" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold-300/60 rounded-br-xl" aria-hidden="true"></div>
        
        {/* Subtle gold accent line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" aria-hidden="true"></div>
        {/* The h2 title and the erroneous subtitle paragraph for the form card itself are removed as the main page title and description serve this purpose now */}
        
        <form
          onSubmit={handleSubmit}
          className="space-y-8" /* Form elements will have their own margins bottom */
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-green-800"
            >
              {t("form.nameLabel")}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={t("form.namePlaceholder")}
              className={`mt-1 block w-full px-4 py-2.5 border ${errors.name ? 'border-red-500' : 'border-gold-300'} rounded-lg shadow-sm focus:ring-gold-500 focus:border-gold-500 sm:text-sm bg-white/70 placeholder-green-500/70 text-green-800`}
              {...(errors.name && { "aria-invalid": "true" })}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-green-800"
            >
              {t("form.emailLabel")}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t("form.emailPlaceholder")}
              className="mt-1 block w-full px-4 py-2.5 border border-gold-300 rounded-lg shadow-sm focus:ring-gold-500 focus:border-gold-500 sm:text-sm bg-white/70 placeholder-green-500/70 text-green-800"
            />
          </div>

          {/* Attending Status */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-green-700 mb-3">{t('form.attendingLabel')}</label>
            <div className="mt-2 grid grid-cols-2 gap-4">
              {[ 'yes', 'no' ].map((option) => (
                <label
                  key={option}
                  htmlFor={`attending${option.charAt(0).toUpperCase() + option.slice(1)}`}
                  className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ease-in-out shadow-sm 
                    ${formData.attending === option 
                      ? 'bg-gold-500 border-gold-600 text-white ring-2 ring-offset-2 ring-gold-500 shadow-lg scale-105' 
                      : 'bg-white/50 border-gold-300 hover:border-gold-500 hover:bg-gold-500/10 text-green-800'}`}
                >
                  <input
                    type="radio"
                    id={`attending${option.charAt(0).toUpperCase() + option.slice(1)}`}
                    name="attending"
                    value={option}
                    checked={formData.attending === option}
                    onChange={handleInputChange}
                    className="sr-only" // Hide original radio, style the label
                  />
                  <span className="text-base font-medium">{t(option === 'yes' ? 'form.attendingYes' : 'form.attendingNo')}</span>
                </label>
              ))}
            </div>
            {errors.attending && <p className="mt-2 text-sm text-red-600" id="attending-error">{errors.attending}</p>}
          </div>

          {/* Number of Guests Field (conditional) */}
          {formData.attending === "yes" && (
            <AnimatedSection tag="div" delay={0.1}>
              <label
                htmlFor="guests"
                className="block text-sm font-medium text-green-800"
              >
                {t("form.guestsLabel")}
              </label>
              <input
                type="number"
                name="guests"
                id="guests"
                value={formData.guests}
                onChange={handleInputChange}
                placeholder={t("form.guestsPlaceholder")}
                min="1"
                className={`mt-1 block w-full px-4 py-2.5 border ${errors.guests ? 'border-red-500' : 'border-gold-300'} rounded-lg shadow-sm focus:ring-gold-500 focus:border-gold-500 sm:text-sm bg-white/70 placeholder-green-500/70 text-green-800`}
                {...(errors.guests && { "aria-invalid": "true" })}
                aria-describedby={errors.guests ? "guests-error" : undefined}
              />
              {errors.guests && (
                <p id="guests-error" className="mt-1 text-xs text-red-600">
                  {errors.guests}
                </p>
              )}
            </AnimatedSection>
          )}

          {/* Dietary Restrictions Field */}
          <div>
            <label
              htmlFor="dietary"
              className="block text-sm font-medium text-green-800"
            >
              {t("form.dietaryLabel")}
            </label>
            <textarea
              name="dietary"
              id="dietary"
              rows={3}
              value={formData.dietary}
              onChange={handleInputChange}
              placeholder={t("form.dietaryPlaceholder")}
              className="mt-1 block w-full px-4 py-2.5 border border-gold-300 rounded-lg shadow-sm focus:ring-gold-500 focus:border-gold-500 sm:text-sm bg-white/70 placeholder-green-500/70 text-green-800"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-green-800"
            >
              {t("form.messageLabel")}
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t("form.messagePlaceholder")}
              className="mt-1 block w-full px-4 py-2.5 border border-gold-300 rounded-lg shadow-sm focus:ring-gold-500 focus:border-gold-500 sm:text-sm bg-white/70 placeholder-green-500/70 text-green-800"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting
                ? t("form.submittingButton")
                : t("form.submitButton")}
            </button>
          </div>
          <div className="text-center mt-6">
            <Link href={`/${currentLocale}`} className="text-sm font-medium text-gold-600 hover:text-gold-700 hover:underline transition-colors">
             ‹ {tHome('backToHome')}
            </Link>
          </div>
        </form>
      </AnimatedSection>
    </div>
  );
}
