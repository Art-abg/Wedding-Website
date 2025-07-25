'use client';

import Countdown, { CountdownRendererFn } from 'react-countdown';
import { useI18n } from '@/locales/client';

const CountdownTimer = () => {
  const t = useI18n();
  const weddingDate = new Date('2025-09-12T17:00:00');

  const translations = {
    days: t('Countdown.days'),
    hours: t('Countdown.hours'),
    minutes: t('Countdown.minutes'),
    seconds: t('Countdown.seconds'),
    completed: t('Countdown.completed'),
  };

  const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="text-2xl md:text-4xl font-bold text-center text-forest px-4">
          {translations.completed}
        </div>
      );
    } else {
      return (
        <div className="w-full max-w-4xl mx-auto px-4">
          {/* Mobile-first responsive grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 justify-items-center">
            <div className="flex flex-col items-center p-3 md:p-6 bg-gradient-to-br from-cream-100/90 to-sage-light/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-forest w-full max-w-[120px] md:max-w-[140px] group hover:scale-105">
              <span className="countdown font-mono text-3xl md:text-5xl lg:text-6xl font-bold text-gold-600 group-hover:text-gold-700 transition-colors duration-300">
                <span style={{'--value':days} as React.CSSProperties}></span>
              </span>
              <span className="text-xs md:text-sm lg:text-base font-medium text-forest-light mt-1 md:mt-2 uppercase tracking-wider">
                {translations.days}
              </span>
            </div>
            
            <div className="flex flex-col items-center p-3 md:p-6 bg-gradient-to-br from-cream-100/90 to-sage-light/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-forest w-full max-w-[120px] md:max-w-[140px] group hover:scale-105">
              <span className="countdown font-mono text-3xl md:text-5xl lg:text-6xl font-bold text-gold-600 group-hover:text-gold-700 transition-colors duration-300">
                <span style={{'--value':hours} as React.CSSProperties}></span>
              </span>
              <span className="text-xs md:text-sm lg:text-base font-medium text-forest-light mt-1 md:mt-2 uppercase tracking-wider">
                {translations.hours}
              </span>
            </div>
            
            <div className="flex flex-col items-center p-3 md:p-6 bg-gradient-to-br from-cream-100/90 to-sage-light/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-forest w-full max-w-[120px] md:max-w-[140px] group hover:scale-105">
              <span className="countdown font-mono text-3xl md:text-5xl lg:text-6xl font-bold text-gold-600 group-hover:text-gold-700 transition-colors duration-300">
                <span style={{'--value':minutes} as React.CSSProperties}></span>
              </span>
              <span className="text-xs md:text-sm lg:text-base font-medium text-forest-light mt-1 md:mt-2 uppercase tracking-wider">
                {translations.minutes}
              </span>
            </div>
            
            <div className="flex flex-col items-center p-3 md:p-6 bg-gradient-to-br from-cream-100/90 to-sage-light/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-forest w-full max-w-[120px] md:max-w-[140px] group hover:scale-105">
              <span className="countdown font-mono text-3xl md:text-5xl lg:text-6xl font-bold text-gold-600 group-hover:text-gold-700 transition-colors duration-300">
                <span style={{'--value':seconds} as React.CSSProperties}></span>
              </span>
              <span className="text-xs md:text-sm lg:text-base font-medium text-forest-light mt-1 md:mt-2 uppercase tracking-wider">
                {translations.seconds}
              </span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <Countdown date={weddingDate} renderer={renderer} />;
};

export default CountdownTimer;
