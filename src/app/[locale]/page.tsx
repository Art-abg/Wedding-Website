import { getI18n } from "@/locales/server";
import PageTransition from "@/components/ui/PageTransition";
import Button from "@/components/ui/Button";
import ScrollAnimationWrapper from "@/components/ui/ScrollAnimationWrapper";
import Image from "next/image";
import AnimatedText, { AnimatedHeading } from "@/components/ui/AnimatedText";
import {
  FloralElement,
  GoldenAccent,
  OrnamentalDivider,
  AnimatedBackgroundPattern
} from "@/components/ui/EnhancedDecorativeElements";

export default async function HomePage() {
  const t = await getI18n();

  const imageUrl = "/Anna-Artur.jpeg";
  const weddingDate = t("home.weddingDateValue");
  const weddingTime = t("home.weddingTimeValue");
  const churchTime = t("home.churchTimeValue");
  const rsvpDeadline = t("home.rsvpDeadlineValue");

  return (
    <PageTransition>
      {/* Enhanced decorative elements with animations */}
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
      <FloralElement
        position="center-right"
        size="md"
        opacity={0.06}
        rotate={-20}
        delay={2.2}
        className="text-champagne-gold hidden lg:block"
        animation="float"
      />

      {/* Background pattern */}
      <AnimatedBackgroundPattern
        pattern="dots"
        opacity={0.03}
        color="text-gold-500"
        density="medium"
      />

      <div className="min-h-screen bg-gradient-to-br from-cream-100 to-blush-300/20 text-green-900 flex flex-col items-center py-16 px-4">
        {/* Hero Section with enhanced animations */}
        <ScrollAnimationWrapper
          className="text-center mb-16 max-w-5xl mx-auto"
          delay={0.2}
          type="reveal"
        >
          <div className="flex flex-col items-center px-4">
            <div className="inline-block text-center">
              <h1 className="text-5xl md:text-7xl text-forest font-dancing-script inline-block drop-shadow-sm">
                {t("home.heroTitleL1")}
              </h1>
            </div>
            <div className="inline-block text-center mt-2">
              <h1 className="text-5xl md:text-7xl text-forest font-dancing-script inline-block drop-shadow-sm">
                {t("home.heroTitleL2")}
              </h1>
            </div>
          </div>

          <GoldenAccent animation="shimmer" delay={0.6} width="w-48" />

          <AnimatedText
            text={t("home.tagline")}
            tag="p"
            className="text-xl md:text-2xl text-forest-light mb-6 font-cormorant italic"
            delay={0.7}
            type="block"
          />

          <AnimatedText
            text={weddingDate}
            tag="p"
            className="text-lg md:text-xl text-rose-dusty font-light tracking-widest uppercase mt-6"
            delay={0.9}
            type="letters"
          />
        </ScrollAnimationWrapper>

        {/* Main Content Card with enhanced styling */}
        <main className="bg-sage-light/60 backdrop-blur-md shadow-2xl rounded-2xl max-w-4xl w-full mx-auto mb-16 overflow-hidden relative">
          {/* Subtle decorative elements instead of corner accents */}
          <GoldenAccent
            animation="shimmer"
            delay={0.4}
            width="w-24"
            className="absolute top-4 right-4 opacity-30"
          />
          <GoldenAccent
            animation="shimmer"
            delay={0.5}
            width="w-24"
            className="absolute bottom-4 left-4 opacity-30"
          />

          {/* Elegant Split Hero Section with circular design */}
          <div className="relative overflow-hidden rounded-t-xl">
            {/* Golden border frame */}
            <div className="absolute inset-0 border-2 border-gold-400/30 rounded-t-xl z-30 pointer-events-none"></div>
            
            {/* Main content container with split design - improved mobile layout */}
            <div className="flex flex-col md:flex-row h-auto md:h-[70vh]">
              {/* Left side - Image */}
              <div className="relative w-full md:w-3/5 h-[50vh] md:h-full overflow-hidden py-6 md:py-0">
                {/* Circular mask and decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="relative w-[85%] h-[85%] md:w-[90%] md:h-[90%] rounded-full overflow-hidden border-4 md:border-8 border-cream-100/30 shadow-2xl">
                    <Image 
                      src={imageUrl}
                      alt={t("home.coupleImageAlt")}
                      fill
                      priority
                      sizes="(max-width: 768px) 85vw, 50vw"
                      className="object-cover object-center scale-105 transition-transform duration-10000 ease-in-out hover:scale-110"
                      style={{ transformOrigin: 'center center' }}
                    />
                  </div>
                  
                  {/* Decorative ring around the circle */}
                  <div className="absolute w-[95%] h-[95%] md:w-[100%] md:h-[100%] rounded-full border-2 border-dashed border-gold-300/40 animate-spin-slow"></div>
                </div>
              </div>
              
              {/* Right side - Elegant text content with improved spacing */}
              <div className="relative w-full md:w-2/5 h-auto py-10 md:h-full bg-gradient-to-br from-sage-light/90 to-cream-100/95 flex items-center justify-center p-4 md:p-10">
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
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
                
                <ScrollAnimationWrapper
                  delay={0.4}
                  type="reveal"
                  direction="up"
                  className="text-center z-10 w-full max-w-md"
                >
                  <AnimatedHeading
                    text={t("home.celebrate")}
                    level={2}
                    className="text-3xl sm:text-4xl md:text-5xl font-dancing-script text-forest drop-shadow-sm mb-4 md:mb-6"
                    textType="letters"
                    decorative={true}
                  />
                  
                  <GoldenAccent animation="shimmer" delay={0.6} width="w-24 md:w-32" className="mx-auto my-3 md:my-4" />
                  
                  <AnimatedText
                    text={t("home.weddingDate", { date: weddingDate, time: weddingTime })}
                    tag="p"
                    className="text-lg sm:text-xl md:text-2xl text-forest-light font-cormorant italic tracking-wide mb-6 md:mb-8 px-2"
                    delay={0.7}
                    type="block"
                  />
                  
                  <ScrollAnimationWrapper
                    delay={0.9}
                    type="reveal"
                    className="mt-4 md:mt-8"
                  >
                    <Button
                      href="/attend"
                      variant="primary"
                      size="lg"
                      className="transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg"
                    >
                      {t("home.rsvpButton")}
                    </Button>
                  </ScrollAnimationWrapper>
                </ScrollAnimationWrapper>
              </div>
            </div>
            
            {/* Decorative bottom accent */}
            <div className="h-1 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"></div>
          </div>

          {/* Content Sections with scroll animations */}
          <div className="px-8 md:px-16 py-10 space-y-12">
            {/* Date & Time Section */}
            <ScrollAnimationWrapper
              delay={0.1}
              type="reveal"
              direction="up"
              threshold={0.3}
            >
              <OrnamentalDivider
                className="mb-6"
                animation="shimmer"
                variant="diamond"
              />

              <AnimatedHeading
                text={t("home.dateLabel")}
                level={2}
                className="text-3xl md:text-4xl text-gold-500 text-center mb-4"
                textType="letters"
                decorative={false}
              />

              <div className="text-center space-y-1 text-forest">
                <AnimatedText
                  text={t("home.weddingDate", {
                    date: weddingDate,
                    time: weddingTime
                  })}
                  tag="p"
                  className="text-xl font-cormorant"
                  delay={0.2}
                  type="block"
                />
                <AnimatedText
                  text={t("home.addToCalendar")}
                  tag="p"
                  className="text-lg font-light"
                  delay={0.3}
                  type="block"
                />
              </div>
            </ScrollAnimationWrapper>

            {/* Church Ceremony Section with Image */}
            <ScrollAnimationWrapper
              delay={0.1}
              type="reveal"
              direction="up"
              threshold={0.3}
            >
              <OrnamentalDivider
                className="mb-6"
                animation="shimmer"
                variant="leaves"
              />

              <AnimatedHeading
                text={t("home.church.title")}
                level={2}
                className="text-3xl md:text-4xl text-gold-500 text-center mb-4"
                textType="letters"
                decorative={false}
              />
              
              {/* Church icon depiction */}
              <div className="my-6 flex justify-center">
                <Image
                  src="/church.png"
                  alt={t("home.church.name")}
                  width={120}
                  height={120}
                  className="h-auto opacity-90"
                  priority
                />
              </div>

              <div className="text-center space-y-3 mt-6">
                <AnimatedText
                  text={t("home.church.name")}
                  tag="p"
                  className="text-xl font-cormorant text-forest"
                  delay={0.2}
                  type="block"
                />
                <AnimatedText
                  text={t("home.weddingDate", { date: weddingDate, time: churchTime })}
                  tag="p"
                  className="text-md text-forest font-medium"
                  delay={0.3}
                  type="block"
                />
                <ScrollAnimationWrapper delay={0.4} type="reveal">
                  <a
                    href="https://maps.app.goo.gl/CcAnZaiU5WkvXLhi9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-rose-dusty hover:text-berry-600 underline transition-colors duration-300"
                  >
                    {t("home.church.mapLink")}
                  </a>
                </ScrollAnimationWrapper>
              </div>
            </ScrollAnimationWrapper>

            {/* Venue Section */}
            <ScrollAnimationWrapper
              delay={0.1}
              type="reveal"
              direction="up"
              threshold={0.3}
            >
              <OrnamentalDivider
                className="mb-6"
                animation="shimmer"
                variant="leaves"
              />

              <AnimatedHeading
                text={t("home.venueLabel")}
                level={2}
                className="text-3xl md:text-4xl text-gold-500 text-center mb-4"
                textType="letters"
                decorative={false}
              />

              <div className="text-center space-y-3">
                <AnimatedText
                  text={t("home.venueName")}
                  tag="p"
                  className="text-xl font-cormorant text-forest"
                  delay={0.2}
                  type="block"
                />
                <AnimatedText
                  text={t("home.venueAddress")}
                  tag="p"
                  className="text-md text-forest"
                  delay={0.3}
                  type="block"
                />
                <AnimatedText
                  text={`${weddingDate} at ${weddingTime}`}
                  tag="p"
                  className="text-md text-forest font-medium"
                  delay={0.3}
                  type="block"
                />
                <ScrollAnimationWrapper delay={0.4} type="reveal">
                  <a
                    href="https://g.co/kgs/2AFVJhp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-rose-dusty hover:text-berry-600 underline transition-colors duration-300"
                  >
                    {t("home.venueMapLink")}
                  </a>
                </ScrollAnimationWrapper>
              </div>
            </ScrollAnimationWrapper>

            {/* Dress Code Section */}
            <ScrollAnimationWrapper
              delay={0.1}
              type="reveal"
              direction="up"
              threshold={0.3}
            >
              <OrnamentalDivider
                className="mb-6"
                animation="shimmer"
                variant="dots"
              />

              <AnimatedHeading
                text={t("home.dressCodeTitle")}
                level={2}
                className="text-3xl md:text-4xl text-gold-500 text-center mb-4"
                textType="letters"
                decorative={false}
              />

              <div className="text-center space-y-3 text-forest">
                <AnimatedText
                  text={t("home.dressCodeText")}
                  tag="p"
                  className="text-lg font-cormorant"
                  delay={0.2}
                  type="block"
                />
              </div>
            </ScrollAnimationWrapper>

            {/* RSVP Call to Action with enhanced animations */}
            <ScrollAnimationWrapper
              delay={0.1}
              type="reveal"
              direction="up"
              threshold={0.3}
              className="pb-4"
            >
              <OrnamentalDivider
                className="mb-6"
                animation="shimmer"
                variant="diamond"
              />

              <div className="text-center space-y-4">
                <AnimatedHeading
                  text={t("home.rsvpTitle")}
                  level={2}
                  className="text-3xl md:text-4xl text-gold-500"
                  textType="letters"
                  decorative={false}
                />

                <AnimatedText
                  text={t("home.rsvpDeadline", { date: rsvpDeadline })}
                  tag="p"
                  className="text-lg text-forest-light"
                  delay={0.2}
                  type="block"
                />

                <ScrollAnimationWrapper
                  delay={0.4}
                  type="reveal"
                  className="pt-4"
                >
                  <Button
                    href="/rsvp"
                    variant="primary"
                    size="lg"
                    className="mt-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    {t("home.rsvpButton")}
                  </Button>
                </ScrollAnimationWrapper>
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Enhanced Footer with animation */}
          <ScrollAnimationWrapper
            className="mt-8 border-t border-gold-200 py-6 px-8 text-center bg-cream-100/40"
            delay={0.1}
            type="reveal"
            direction="up"
          >
            <AnimatedText
              text={t("home.footer")}
              tag="p"
              className="text-sm text-green-700"
              delay={0.2}
              type="block"
            />
          </ScrollAnimationWrapper>
        </main>
      </div>
    </PageTransition>
  );
}
