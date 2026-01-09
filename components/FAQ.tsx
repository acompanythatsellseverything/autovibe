'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';

export default function FAQ() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(3); // Last question open by default

  const questions = [
    {
      question: t('faq.questions.q1.question'),
      answer: t('faq.questions.q1.answer'),
    },
    {
      question: t('faq.questions.q2.question'),
      answer: t('faq.questions.q2.answer'),
    },
    {
      question: t('faq.questions.q3.question'),
      answer: t('faq.questions.q3.answer'),
    },
    {
      question: t('faq.questions.q4.question'),
      answer: t('faq.questions.q4.answer'),
    },
  ];

  return (
    <section className="bg-[#DFDBC8] py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2
          className="mb-12 text-center font-medium leading-[100%] tracking-[0%]"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '40px',
            color: '#000000',
          }}
        >
          {t('faq.title')}
        </h2>

        {/* FAQ Items */}
        <div className="space-y-0">
          {questions.map((faq, index) => (
            <div key={index}>
              {/* Separator line */}
              {index > 0 && (
                <div
                  className="my-0"
                  style={{
                    borderTop: '2px solid #C4C4C4',
                    width: '100%',
                  }}
                />
              )}

              {/* Question and Answer */}
              <div className="py-6">
              <button
                  className="flex w-full items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                  <span
                    className="font-medium leading-[100%] tracking-[0%]"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '25px',
                      color: '#0C0C0C',
                    }}
                  >
                  {faq.question}
                </span>
                <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                    style={{ color: '#0C0C0C' }}
                />
              </button>

                {/* Answer */}
              {openIndex === index && (
                  <div className="mt-4 pr-8">
                    <p
                      className="font-light leading-[100%] tracking-[0%]"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '20px',
                        color: '#0C0C0C',
                      }}
                    >
                      {faq.answer}
                    </p>
                </div>
              )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

