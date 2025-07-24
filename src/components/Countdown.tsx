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
      return <div className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200">{translations.completed}</div>;
    } else {
      return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
          <div className="flex flex-col p-4 bg-cream-100/70 rounded-lg shadow-lg text-green-900 min-w-[90px]">
            <span className="countdown font-mono text-5xl">
              <span style={{'--value':days} as React.CSSProperties}></span>
            </span>
            {translations.days}
          </div> 
          <div className="flex flex-col p-4 bg-cream-100/70 rounded-lg shadow-lg text-green-900 min-w-[90px]">
            <span className="countdown font-mono text-5xl">
              <span style={{'--value':hours} as React.CSSProperties}></span>
            </span>
            {translations.hours}
          </div> 
          <div className="flex flex-col p-4 bg-cream-100/70 rounded-lg shadow-lg text-green-900 min-w-[90px]">
            <span className="countdown font-mono text-5xl">
              <span style={{'--value':minutes} as React.CSSProperties}></span>
            </span>
            {translations.minutes}
          </div> 
          <div className="flex flex-col p-4 bg-cream-100/70 rounded-lg shadow-lg text-green-900 min-w-[90px]">
            <span className="countdown font-mono text-5xl">
              <span style={{'--value':seconds} as React.CSSProperties}></span>
            </span>
            {translations.seconds}
          </div>
        </div>
      );
    }
  };

  return <Countdown date={weddingDate} renderer={renderer} />;
};

export default CountdownTimer;
