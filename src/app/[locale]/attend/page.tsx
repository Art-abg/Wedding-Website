"use client";

export const dynamic = 'force-dynamic';

import { useState, FormEvent } from "react";
import { useScopedI18n, useCurrentLocale } from "@/locales/client";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";
import {
  FloralElement,
  GoldenAccent,
  OrnamentalDivider,
  AnimatedBackgroundPattern
} from "@/components/ui/EnhancedDecorativeElements";
import PageTransition from "@/components/ui/PageTransition";
import {
  AnimatedHeading,
  default as AnimatedText
} from "@/components/ui/AnimatedText";

interface FormData {
  name: string;
  email: string;
  phone: string;
  attending: "yes" | "no" | "";
  guests: string;
  message: string;
}

interface FormErrors {
  name?: string;
  attending?: string;
  guests?: string;
}

// RSVP Confirmation Display component
interface RsvpConfirmationDisplayProps {
  t: ReturnType<typeof useScopedI18n>;
  tHome: ReturnType<typeof useScopedI18n>;
  currentLocale: string;
}

function RsvpConfirmationDisplay({ t, tHome, currentLocale }: RsvpConfirmationDisplayProps) {
  return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-green-50 border-2 border-gold-200 rounded-lg p-6 mb-8 text-center"
  >
    <h3 className="text-2xl font-dancing-script text-gold-600 mb-3">
      {t("form.submissionSuccessTitle")}
    </h3>
    <GoldenAccent animation="shimmer" width="w-24" className="mx-auto my-2" />
    <p className="text-forest-light mb-4">{t("form.submissionSuccessMessage")}</p>
    <Link
      href={`/${currentLocale}`}
      className="inline-block px-6 py-2 bg-gold-500 hover:bg-gold-600 text-white font-medium rounded-lg transition-colors"
    >
      {tHome("backToHome")}
    </Link>
  </motion.div>
  );
}

export default function RsvpPage() {
  const t = useScopedI18n("rsvpPage");
  const tHome = useScopedI18n("home");
  const currentLocale = useCurrentLocale();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    attending: "",
    guests: "1",
    message: ""
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
      if (!supabase) {
        throw new Error("Supabase client is not initialized.");
      }
      const submissionData = {
        name: formData.name,
        email: formData.email || null,
        phone: formData.phone || null,
        is_attending: formData.attending === "yes",
        guest_count:
          formData.attending === "yes" ? parseInt(formData.guests, 10) : 0,
        message: formData.message || null,
        locale: currentLocale
      };

      const { error } = await supabase.from("rsvps").insert([submissionData]);

      if (error) {
        throw error;
      }
      
      // Set success status and reset form
      setSubmissionStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        attending: "",
        guests: "1",
        message: ""
      });
      setErrors({});
    } catch (error: unknown) {
      console.error("RSVP Submission Error:", error);
      if (error && typeof error === "object") {
        if ("message" in error)
          console.error("Supabase Error Message:", error.message);
        if ("details" in error)
          console.error("Supabase Error Details:", error.details);
        if ("hint" in error) console.error("Supabase Error Hint:", error.hint);
        if ("code" in error) console.error("Supabase Error Code:", error.code);
      }
      setSubmissionStatus("error");
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

  if (submissionStatus === "success") {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-br from-cream-100 to-blush-300/20 text-green-900 flex flex-col items-center py-16 px-4">
          <AnimatedBackgroundPattern
            pattern="dots"
            opacity={0.03}
            color="text-gold-500"
            density="medium"
          />

          <AnimatedSection
            tag="div"
            delay={0.2}
            className="max-w-3xl w-full bg-white/90 backdrop-blur-xl p-10 sm:p-12 rounded-2xl shadow-2xl border border-gold-200 text-center"
          >
            <FloralElement
              position="top-right"
              size="md"
              opacity={0.08}
              rotate={15}
              delay={0.8}
              className="text-champagne-gold hidden md:block"
              animation="float"
            />

            <AnimatedHeading
              text={t("form.submissionSuccessTitle")}
              level={1}
              className="text-4xl md:text-5xl lg:text-6xl font-dancing-script text-gold-600 mb-6"
              textType="letters"
              decorative={true}
            />

            <GoldenAccent
              animation="shimmer"
              delay={0.6}
              width="w-32 md:w-48"
              className="mx-auto my-4"
            />

            <AnimatedText
              text={t("form.submissionSuccessMessage")}
              tag="p"
              className="text-lg md:text-xl text-forest-light font-cormorant italic mb-8 max-w-md mx-auto"
              delay={0.7}
              type="block"
            />

            <Link
              href={`/${currentLocale}`}
              className="inline-block px-8 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {tHome("backToHome")}
            </Link>

            <FloralElement
              position="bottom-left"
              size="md"
              opacity={0.08}
              rotate={-10}
              delay={1.0}
              className="text-champagne-gold hidden md:block"
              animation="float"
            />
          </AnimatedSection>
        </div>
      </PageTransition>
    );
  }

  if (submissionStatus === "error") {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-br from-cream-100 to-blush-300/20 text-green-900 flex flex-col items-center py-16 px-4">
          <AnimatedBackgroundPattern
            pattern="dots"
            opacity={0.03}
            color="text-gold-500"
            density="medium"
          />

          <AnimatedSection
            tag="div"
            delay={0.2}
            className="max-w-3xl w-full bg-white/90 backdrop-blur-xl p-10 sm:p-12 rounded-2xl shadow-2xl border border-gold-200 text-center"
          >
            <AnimatedHeading
              text={t("form.submissionErrorTitle")}
              level={1}
              className="text-4xl md:text-5xl lg:text-6xl font-dancing-script text-red-600 mb-6"
              textType="letters"
              decorative={true}
            />

            <GoldenAccent
              animation="shimmer"
              delay={0.6}
              width="w-32 md:w-48"
              className="mx-auto my-4"
            />

            <AnimatedText
              text={t("form.submissionErrorMessage")}
              tag="p"
              className="text-lg md:text-xl text-forest-light font-cormorant italic mb-8 max-w-md mx-auto"
              delay={0.7}
              type="block"
            />

            <div className="space-y-4">
              <button
                onClick={() => setSubmissionStatus(null)}
                className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {t("form.tryAgainButton")}
              </button>

              <div className="pt-4">
                <Link
                  href={`/${currentLocale}`}
                  className="text-gold-600 hover:text-gold-700 hover:underline transition-colors"
                >
                  {tHome("backToHome")}
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-cream-100 to-blush-300/20">
        {/* Background Pattern */}
        <AnimatedBackgroundPattern
          pattern="dots"
          opacity={0.03}
          color="text-gold-500"
          density="medium"
        />

        {/* Decorative Elements */}
        <FloralElement
          position="top-right"
          size="lg"
          opacity={0.08}
          rotate={15}
          delay={1.2}
          className="text-champagne-gold hidden md:block"
          animation="float"
        />

        <FloralElement
          position="bottom-left"
          size="lg"
          opacity={0.08}
          rotate={-10}
          delay={1.6}
          className="text-champagne-gold hidden md:block"
          animation="float"
        />

        <FloralElement
          position="center-left"
          size="md"
          opacity={0.06}
          rotate={20}
          delay={2.0}
          className="text-champagne-gold hidden lg:block"
          animation="float"
        />

        <div className="flex flex-col items-center py-16 px-4">
          {/* Page Title and Description Section */}
          <AnimatedSection
            delay={0.1}
            className="text-center mb-10 max-w-3xl w-full px-4 relative"
          >
            {/* Gold ornamental divider above title */}
            <GoldenAccent
              animation="shimmer"
              delay={0.4}
              width="w-24 md:w-32"
              className="mx-auto mb-6"
            />

            <AnimatedHeading
              text={t("title")}
              level={1}
              className="text-5xl md:text-6xl lg:text-7xl font-dancing-script text-gold-600 mb-4"
              textType="letters"
              decorative={true}
            />

            <AnimatedText
              text={t("description")}
              tag="p"
              className="text-lg md:text-xl text-forest-light font-cormorant italic tracking-wider"
              delay={0.7}
              type="block"
            />

            {/* Gold ornamental divider below description */}
            <OrnamentalDivider
              className="mt-6 mb-4"
              animation="shimmer"
              variant="diamond"
            />
          </AnimatedSection>

          {/* RSVP Form Card Section */}
          <AnimatedSection
            delay={0.3}
            tag="main"
            className="max-w-2xl w-full bg-white/90 backdrop-blur-xl p-10 sm:p-12 rounded-2xl shadow-2xl border border-gold-200 relative overflow-hidden mb-16"
          >
            {/* Subtle decorative background element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <FloralElement
                position="center"
                size="xl"
                opacity={0.07}
                rotate={0}
                delay={0.5}
                className="text-forest"
                animation="float"
              />
            </div>

            {/* Subtle gold accent lines */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
              aria-hidden="true"
            ></div>
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
              aria-hidden="true"
            ></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {submissionStatus === "success" && (
                <RsvpConfirmationDisplay t={t} tHome={tHome} currentLocale={currentLocale} />
              )}
              
              {submissionStatus !== "success" && (
              <>
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-forest mb-2">
                    {t("form.nameLabel")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t("form.namePlaceholder")}
                    className={`block w-full px-4 py-3 border ${
                      errors.name ? "border-red-500" : "border-gold-300"
                    } rounded-lg shadow-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 bg-white/70 placeholder-forest-light/70 text-forest transition-all duration-200`}
                    {...(errors.name && { "aria-invalid": "true" })}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600">
                      {errors.name}
                    </p>
                  )}
                </motion.div>

                {/* Email and Phone Fields in 2 columns on larger screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-forest mb-2">
                      {t("form.emailLabel")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t("form.emailPlaceholder")}
                      className="block w-full px-4 py-3 border border-gold-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 bg-white/70 placeholder-forest-light/70 text-forest transition-all duration-200"
                    />
                  </motion.div>

                  {/* Phone Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label htmlFor="phone" className="block text-sm font-medium text-forest mb-2">
                      {t("form.phoneLabel")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t("form.phonePlaceholder")}
                      className="block w-full px-4 py-3 border border-gold-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 bg-white/70 placeholder-forest-light/70 text-forest transition-all duration-200"
                    />
                  </motion.div>
                </div>

                {/* Attending Options */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-forest mb-3">
                    {t("form.attendingLabel")} <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {(['yes', 'no'] as const).map((val) => (
                      <label
                        key={val}
                        htmlFor={`attending-${val}`}
                        className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ease-in-out shadow-sm 
                          ${
                            formData.attending === val
                              ? "bg-gold-500 border-gold-600 text-white ring-2 ring-offset-2 ring-gold-500 shadow-lg scale-105"
                              : "bg-white/50 border-gold-300 hover:border-gold-500 hover:bg-gold-500/10 text-forest"
                          }`}
                      >
                        <input
                          type="radio"
                          id={`attending-${val}`}
                          name="attending"
                          value={val}
                          checked={formData.attending === val}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className="text-base font-medium">
                          {t(val === "yes" ? "form.attendingYes" : "form.attendingNo")}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.attending && (
                    <p className="mt-2 text-sm text-red-600" id="attending-error">
                      {errors.attending}
                    </p>
                  )}
                </motion.div>

                {/* Number of Guests Field (conditional) */}
                {formData.attending === "yes" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }} // Adjusted delay, should be after attending options if shown
                  >
                    <label htmlFor="guests" className="block text-sm font-medium text-forest mb-2">
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
                      className={`block w-full px-4 py-3 border ${
                        errors.guests ? "border-red-500" : "border-gold-300"
                      } rounded-lg shadow-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 bg-white/70 placeholder-forest-light/70 text-forest transition-all duration-200`}
                      {...(errors.guests && { "aria-invalid": "true" })}
                      aria-describedby={errors.guests ? "guests-error" : undefined}
                    />
                    {errors.guests && (
                      <p id="guests-error" className="mt-1 text-sm text-red-600">
                        {errors.guests}
                      </p>
                    )}
                  </motion.div>
                )}

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-forest mb-2">
                    {t("form.messageLabel")}
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t("form.messagePlaceholder")}
                    className="block w-full px-4 py-3 border border-gold-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 bg-white/70 placeholder-forest-light/70 text-forest transition-all duration-200"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  className="pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? t("form.submittingButton")
                      : t("form.submitButton")}
                  </button>

                  <div className="text-center mt-8">
                    <Link
                      href={`/${currentLocale}`}
                      className="text-gold-600 hover:text-gold-700 hover:underline transition-colors font-medium"
                    >
                      ‹ {tHome("backToHome")}
                    </Link>
                  </div>
                </motion.div>
              </>
            )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
}
