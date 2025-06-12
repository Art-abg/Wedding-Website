import { getI18n } from "@/locales/server";
import PageTransition from "@/components/ui/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedImage from "@/components/ui/AnimatedImage";
import Button from "@/components/ui/Button";
import {
  FloralElement,
  GoldenAccent,
  OrnamentalDivider,
  CornerAccents
} from "@/components/ui/DecorativeElements";

export default async function HomePage() {
  const t = await getI18n();

    const imageUrl = "/Anna-Artur.jpeg";
  const weddingDate = "September 12, 2025";
  const weddingTime = "5:00 PM";
  const rsvpDeadline = "August 20, 2025";

  return (
    <PageTransition>
      {/* Decorative elements */}
      <FloralElement
        position="top-right"
        size="lg"
        opacity={0.08}
        rotate={15}
        delay={1.2}
        className="text-champagne-gold hidden md:block"
      />
      <FloralElement
        position="bottom-left"
        size="lg"
        opacity={0.08}
        rotate={-10}
        delay={1.6}
        className="text-champagne-gold hidden md:block"
      />

      <div className="min-h-screen bg-gradient-to-br from-cream-100 to-blush-300/20 text-green-900 flex flex-col items-center py-16 px-4">
        {/* Hero Section */}
        <AnimatedSection
          tag="header"
          className="text-center mb-16 max-w-5xl mx-auto"
          delay={0.2}
          type="fadeIn"
          direction="up"
        >
          <h1 className="text-6xl md:text-8xl font-parisienne text-forest mb-4 tracking-wide leading-tight">
            {t("home.title", { brideName: "Anna", groomName: "Artur" })}
          </h1>

          <GoldenAccent />

          <p className="text-xl md:text-2xl text-forest-light mb-6 font-cormorant italic">
            {t("home.tagline")}
          </p>

          <p className="text-lg md:text-xl text-rose-dusty font-light tracking-widest uppercase mt-6">
            {weddingDate}
          </p>
        </AnimatedSection>

        {/* Main Content Card */}
        <main className="bg-sage-light/60 backdrop-blur-md shadow-2xl rounded-2xl max-w-4xl w-full mx-auto mb-16 overflow-hidden relative">
          {/* Card decorative corners */}
          <CornerAccents />

          {/* Couple Image Section */}
          <AnimatedSection
            className="p-4 md:p-6"
            delay={0.4}
            type="fadeIn"
            direction="up"
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg border-4 border-gold-champagne/30 transform transition-all duration-500 hover:shadow-xl">
              <AnimatedImage
                src={imageUrl}
                alt={t("home.coupleImageAlt")}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg object-cover transition-transform duration-700 hover:scale-105"
                priority
                revealDelay={0.5}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <div className="text-white text-center w-full">
                  <h2 className="text-3xl md:text-4xl font-parisienne">
                    {t("home.celebrate")}
                  </h2>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content Sections */}
          <div className="px-8 md:px-16 py-10 space-y-12">
            {/* Date & Time Section */}
            <AnimatedSection
              tag="section"
              delay={0.6}
              type="fadeIn"
              direction="up"
            >
              <OrnamentalDivider className="mb-6" />
              <h2 className="text-3xl md:text-4xl font-parisienne text-gold-500 text-center mb-4">
                {t("home.dateLabel")}
              </h2>
              <div className="text-center space-y-1 text-forest">
                <p className="text-xl font-cormorant">
                  {t("home.weddingDate", {
                    date: weddingDate,
                    time: weddingTime
                  })}
                </p>
                <p className="text-lg font-light">{t("home.addToCalendar")}</p>
              </div>
            </AnimatedSection>

            {/* Venue Section */}
            <AnimatedSection
              tag="section"
              delay={0.7}
              type="fadeIn"
              direction="up"
            >
              <OrnamentalDivider className="mb-6" />
              <h2 className="text-3xl md:text-4xl font-parisienne text-gold-500 text-center mb-4">
                {t("home.venueLabel")}
              </h2>
              <div className="text-center space-y-3">
                <p className="text-xl font-cormorant text-forest">
                  {t("home.venueName")}
                </p>
                <p className="text-md text-forest">
                  {t("home.venueAddress")}
                </p>
                <a
                  href="https://g.co/kgs/2AFVJhp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-rose-dusty hover:text-berry-600 underline transition-colors duration-300"
                >
                  {t("home.venueMapLink")}
                </a>
              </div>
            </AnimatedSection>

            {/* Dress Code Section */}
            <AnimatedSection
              tag="section"
              delay={0.75}
              type="fadeIn"
              direction="up"
            >
              <OrnamentalDivider className="mb-6" />
              <h2 className="text-3xl md:text-4xl font-parisienne text-gold-500 text-center mb-4">
                {t('home.dressCodeTitle')}
              </h2>
              <div className="text-center space-y-3 text-forest">
                <p className="text-lg font-cormorant">
                  {t('home.dressCodeText')}
                </p>
              </div>
            </AnimatedSection>

            {/* RSVP Call to Action */}
            <AnimatedSection
              tag="section"
              delay={0.8}
              type="fadeIn"
              direction="up"
              className="pb-4"
            >
              <OrnamentalDivider className="mb-6" />
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-parisienne text-gold-500">
                  {t("home.rsvpTitle")}
                </h2>
                <p className="text-lg text-forest-light">
                  {t("home.rsvpDeadline", { date: rsvpDeadline })}
                </p>
                <div className="pt-4">
                  <Button
                    href="/rsvp"
                    variant="primary"
                    size="lg"
                    className="mt-2"
                  >
                    {t("home.rsvpButton")}
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Footer */}
          <AnimatedSection
            tag="footer"
            className="mt-8 border-t border-gold-200 py-6 px-8 text-center bg-cream-100/40"
            delay={0.9}
            type="fadeIn"
            direction="up"
          >
            <p className="text-sm text-green-700">{t("home.footer")}</p>
          </AnimatedSection>
        </main>
      </div>
    </PageTransition>
  );
}
