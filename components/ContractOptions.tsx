'use client';

import { useI18n } from '@/lib/i18n/context';

export default function ContractOptions() {
  const { t } = useI18n();

  const options = [
    {
      number: '1',
      title: t('contractOptions.options.option1.title'),
      description: t('contractOptions.options.option1.description'),
    },
    {
      number: '2',
      title: t('contractOptions.options.option2.title'),
      description: t('contractOptions.options.option2.description'),
    },
    {
      number: '3',
      title: t('contractOptions.options.option3.title'),
      description: t('contractOptions.options.option3.description'),
    },
    {
      number: '4',
      title: t('contractOptions.options.option4.title'),
      description: t('contractOptions.options.option4.description'),
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, #603361, #2070B3)',
        }}
      />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 
          className="mb-12 text-center font-medium leading-[100%] tracking-[0%]"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '40px',
            color: '#DFDBC8',
          }}
        >
          {t('contractOptions.title')}
        </h2>
        
        {/* Options grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {options.map((option, index) => (
            <div key={index} className="flex flex-col">
              {/* Option number */}
              <div className="mb-4">
                <span 
                  className="font-medium leading-[100%] tracking-[0%]"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '25px',
                    color: '#DFDBC8',
                  }}
                >
                  {option.number}. {option.title}
                </span>
              </div>
              
              {/* Option description */}
              <p 
                className="font-normal leading-[1.4] tracking-[0%]"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  color: '#DFDBC8',
                }}
              >
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

