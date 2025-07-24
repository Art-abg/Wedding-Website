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
import ChildhoodPhotos from "@/components/ui/ChildhoodPhotos";
import CountdownTimer from '@/components/Countdown';

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

          {/* Modern Elegant Hero Section */}
          <div className="relative overflow-hidden">
            {/* Main content container with modern asymmetric design */}
            <div className="flex flex-col lg:flex-row min-h-[80vh]">
              {/* Left side - Modern Image Container */}
              <div className="relative w-full lg:w-3/5 h-[60vh] lg:h-auto overflow-hidden">
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 z-10"></div>

                {/* Main image with modern styling */}
                <div className="relative w-full h-full">
                  <Image
                    src={imageUrl}
                    alt={t("home.coupleImageAlt")}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                    style={{ transformOrigin: "center center" }}
                  />
                </div>

                {/* Elegant floating accent elements */}
                <div className="absolute top-8 right-8 w-24 h-24 border border-white/20 rounded-full backdrop-blur-sm bg-white/5 animate-pulse hidden lg:block"></div>
                <div className="absolute bottom-12 left-8 w-16 h-16 border border-white/15 rounded-full backdrop-blur-sm bg-white/5 animate-pulse delay-1000 hidden lg:block"></div>
              </div>

              {/* Right side - Modern Text Content */}
              <div className="relative w-full lg:w-2/5 bg-gradient-to-br from-cream-100/95 to-sage-light/30 backdrop-blur-xl flex items-center justify-center p-8 lg:p-12">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <AnimatedBackgroundPattern
                    pattern="dots"
                    opacity={0.03}
                    color="text-gold-500"
                    density="low"
                  />
                </div>

                <ScrollAnimationWrapper
                  delay={0.3}
                  type="reveal"
                  direction="up"
                  className="text-center z-10 w-full max-w-md space-y-8"
                >
                  {/* Main heading with modern typography */}
                  <div className="space-y-4">
                    <AnimatedHeading
                      text={t("home.celebrate")}
                      level={1}
                      className="text-4xl lg:text-6xl font-dancing-script text-forest leading-tight"
                      textType="words"
                      decorative={false}
                    />

                    {/* Minimalist accent line */}
                    <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
                  </div>

                  {/* Date and time with elegant spacing */}
                  <div className="space-y-3">
                    <AnimatedText
                      text={weddingDate}
                      tag="p"
                      className="text-2xl lg:text-3xl font-cormorant text-forest font-light tracking-wide"
                      delay={0.5}
                      type="block"
                    />

                    <AnimatedText
                      text={weddingTime}
                      tag="p"
                      className="text-lg lg:text-xl text-forest-light font-light tracking-widest uppercase"
                      delay={0.7}
                      type="letters"
                    />
                  </div>

                  {/* Modern CTA button */}
                  <ScrollAnimationWrapper
                    delay={0.9}
                    type="reveal"
                    className="pt-6"
                  >
                    <Button
                      href="/attend"
                      variant="primary"
                      size="lg"
                      className="px-12 py-4 font-medium tracking-wider transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-0 rounded-none relative overflow-hidden group"
                    >
                      <span className="relative z-10">
                        {t("home.rsvpButton")}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </ScrollAnimationWrapper>
                </ScrollAnimationWrapper>
              </div>
            </div>

            {/* Modern bottom accent - subtle and clean */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"></div>
          </div>

          {/* Countdown Section */}
          <section className="py-16 text-center">
            <ScrollAnimationWrapper delay={0.2} type="reveal" direction="up">
              <CountdownTimer />
            </ScrollAnimationWrapper>
          </section>

          <ChildhoodPhotos
            title={t("home.childhoodPhotos.title")}
            text={t("home.childhoodPhotos.text")}
          />

          {/* Content Sections with scroll animations */}
          <div className="px-8 md:px-16 py-10 space-y-12">
            {/* Date & Time Section */}
            <ScrollAnimationWrapper
              delay={0.1}
              type="reveal"
              direction="up"
              threshold={0.3}
            >
              {/* Add your content here or remove this wrapper if not needed */}
              <></>
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
                  text={`${churchTime}`}
                  tag="p"
                  className="text-xl text-forest font-large"
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

              {/* Elegant divider before next section */}
              <div className="mt-12 mb-8">
                <div className="relative flex items-center">
                  <div className="flex-grow border-t border-gold-300/50"></div>
                  <div className="mx-4 text-gold-500 text-sm font-cormorant italic">
                    And Then
                  </div>
                  <div className="flex-grow border-t border-gold-300/50"></div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Marriage Registration Section */}
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
                text={t("home.registrationCeremony.title")}
                level={2}
                className="text-3xl md:text-4xl text-gold-500 text-center mb-4"
                textType="letters"
                decorative={false}
              />

              {/* Wedding Arch icon depiction */}
              <div className="my-6 flex justify-center">
                <Image
                  src="/wedding-arch.png"
                  alt={t("home.registrationCeremony.title")}
                  width={120}
                  height={120}
                  className="h-auto opacity-90"
                  priority
                />
              </div>

              <div className="text-center space-y-3 mt-6">
                <AnimatedText
                  text={t("home.registrationCeremony.time")}
                  tag="p"
                  className="text-xl font-cormorant text-forest"
                  delay={0.2}
                  type="block"
                />
                <AnimatedText
                  text={t("home.registrationCeremony.description")}
                  tag="p"
                  className="text-md text-forest font-medium max-w-2xl mx-auto"
                  delay={0.3}
                  type="block"
                />
              </div>

              {/* Elegant divider before next section */}
              <div className="mt-12 mb-8">
                <div className="relative flex items-center">
                  <div className="flex-grow border-t border-gold-300/50"></div>
                  <div className="mx-4 text-gold-500 text-sm font-cormorant italic">
                    And Then
                  </div>
                  <div className="flex-grow border-t border-gold-300/50"></div>
                </div>
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
                  text={`${weddingTime}`}
                  tag="p"
                  className="text-xl text-forest font-medium"
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
                  text={rsvpDeadline}
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
