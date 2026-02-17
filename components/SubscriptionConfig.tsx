'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Car } from '@/types';
import { useI18n } from '@/lib/i18n/context';

// Duration ranges from Strapi: 1-3 +20%, 3-6 +10%, 6-12 (12 not inclusive) +5%, 12+ (12 inclusive) +0%
const DURATION_RANGES = [
  { range: '1-3', multiplier: 1.20 },
  { range: '3-6', multiplier: 1.10 },
  { range: '6-12', multiplier: 1.05 },
  { range: '12+', multiplier: 1.00 },
] as const;

// Mileage: 800 no change, 1250 +10€/mes, 1500 +6%, 2500 +25%
const MILEAGE_OPTIONS = [
  { km: 800, monthlyAddEuro: 0, percentAdd: 0 },
  { km: 1250, monthlyAddEuro: 10, percentAdd: 0 },
  { km: 1500, monthlyAddEuro: 0, percentAdd: 6 },
  { km: 2500, monthlyAddEuro: 0, percentAdd: 25 },
] as const;

interface SubscriptionConfigProps {
  car: Car;
}

export default function SubscriptionConfig({ car }: SubscriptionConfigProps) {
  const { t } = useI18n();
  
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  // Strapi: pricePerMonthSuscripcion = price with discount for 12+, priceOriginalSuscripcion = original (full) price for 12+
  const originalPrice12 = car.priceOriginalSuscripcion ?? car.pricePerMonth ?? 0;
  const discountedBase12 = car.pricePerMonthSuscripcion;
  const discountAmount = (typeof discountedBase12 === 'number' && discountedBase12 < originalPrice12)
    ? originalPrice12 - discountedBase12
    : 0;

  // Available ranges from Strapi permanenceOptions ["1-3", "3-6", "6-12", "12+"] or default all
  const availableRanges = useMemo(() => {
    const fromStrapi = car.subscriptionRangeOptions?.length
      ? car.subscriptionRangeOptions
      : ['1-3', '3-6', '6-12', '12+'];
    return DURATION_RANGES.filter((r) => fromStrapi.includes(r.range));
  }, [car.subscriptionRangeOptions]);

  const [selectedRange, setSelectedRange] = useState<string>(() => availableRanges[availableRanges.length - 1]?.range ?? '12+');
  const [selectedMileage, setSelectedMileage] = useState(800);

  // All calculations from original price: range → then mileage → then subtract discount
  const rangeConfig = DURATION_RANGES.find((r) => r.range === selectedRange);
  const priceAfterRange = rangeConfig ? Math.round(originalPrice12 * rangeConfig.multiplier) : originalPrice12;

  const mileageConfig = MILEAGE_OPTIONS.find((m) => m.km === selectedMileage);
  const mileageAddEuro = mileageConfig?.monthlyAddEuro ?? 0;
  const mileageAddPercent = mileageConfig?.percentAdd ?? 0;
  const mileageAddOn = mileageAddEuro + Math.round(priceAfterRange * (mileageAddPercent / 100));

  const subtotalBeforeDiscount = priceAfterRange + mileageAddOn;
  const finalPrice = subtotalBeforeDiscount - discountAmount;
  const displayMileageAddOn = mileageAddOn > 0;

  const priceForRangeOption = (range: string) => {
    const cfg = DURATION_RANGES.find((r) => r.range === range);
    return cfg ? Math.round(originalPrice12 * cfg.multiplier) : originalPrice12;
  };

  // Handle Continue button click - flip the card
  const handleContinue = () => {
    setIsFlipped(true);
  };

  // Handle phone input change
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let cleanValue = value.replace(/^\+34\s*/, '').replace(/[^\d\s]/g, '');
    cleanValue = cleanValue.slice(0, 12);
    setFormData({ ...formData, phone: cleanValue });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Por favor, completa los campos obligatorios (Nombre y Teléfono)');
      return;
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        alert('Por favor, introduce un email válido');
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          carName: car.name,
          permanence: selectedRange,
          mileage: selectedMileage,
          finalPrice,
          name: formData.name,
          phone: `+34 ${formData.phone.trim()}`,
          email: formData.email.trim() || undefined,
          type: 'suscripcion',
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="subscription-form" className="relative h-full w-full" style={{ perspective: '1000px' }}>
      <div
        className="relative h-full w-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front side - Configuration */}
        <div
          className="
            relative 
            w-full 
            h-[720px] 
            min-h-[600px] 
            max-h-[800px] 
            rounded-2xl 
            flex 
            flex-col 
            overflow-hidden
          "
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            transform: 'rotateY(0deg)',
          }}
        >
          {/* Top block - #EAEAEA */}
          <div
            className="bg-[#EAEAEA] rounded-t-[20px] relative z-10 shrink-0"
            style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="px-10 pt-6 pb-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
                {t('carPage.configuraSuscripcion')}
              </h2>

              {/* Permanence Selection - ranges 1-3, 3-6, 6-12, 12+ (price changes, range not shown in summary) */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3 text-gray-900">
                  {t('carPage.permanencia')}
                </h3>
                <div className="bg-[#EAEAEA] rounded-lg p-3 shadow-sm">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {availableRanges.map(({ range }) => {
                      const price = priceForRangeOption(range);
                      const isSelected = selectedRange === range;
                      return (
                        <button
                          key={`permanence-${range}`}
                          onClick={() => setSelectedRange(range)}
                          className={`p-3 rounded-lg text-xs font-medium transition-all min-h-[5rem] flex flex-col items-center justify-center gap-0.5 ${
                            isSelected ? 'bg-[#603361] text-white' : 'bg-[#F3F2EC] text-gray-900 hover:opacity-90'
                          }`}
                        >
                          <div>{range}</div>
                          <div>{t('carPage.meses')}</div>
                          <div className="text-[10px] font-bold">{price}€</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Mileage Selection - fixed 800, 1250, 1500, 2500 km */}
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-900">
                  {t('carPage.personalizaKilometraje')}
                </h3>
                <select
                  value={selectedMileage}
                  onChange={(e) => setSelectedMileage(Number(e.target.value))}
                  className="w-full p-3 bg-white rounded-lg text-gray-900 focus:outline-none"
                  style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}
                >
                  {MILEAGE_OPTIONS.map((opt) => (
                    <option key={`mileage-${opt.km}`} value={opt.km}>
                      {opt.km} {t('carPage.kmMesIncluido')}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Bottom block - #F3F2EC */}
          <div className="bg-[#F3F2EC] flex-1 flex flex-col overflow-y-auto">
            <div className="px-10 pt-8 pb-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900">
                {t('carPage.resumenSuscripcion')}
              </h3>
              <div className="space-y-2 text-gray-700 mb-4">
                <div className="flex justify-between">
                  <span>{t('carPage.precioMes')}:</span>
                  <span className="font-semibold">{priceAfterRange}€</span>
                </div>
                {displayMileageAddOn && (
                  <div className="flex justify-between">
                    <span>{t('carPage.kmAdicionales')} ({selectedMileage} km):</span>
                    <span className="font-semibold">+{mileageAddOn}€</span>
                  </div>
                )}
                {discountAmount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-700">{t('carPage.descuentoOferta')}:</span>
                    <span className="font-semibold" style={{ color: '#E10000' }}>-{discountAmount}€</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start pt-3 border-t border-[#B4B4B4]">
                <span className="text-lg font-semibold text-gray-900">{t('carPage.cuotaMensual')}:</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{finalPrice}€</div>
                  <div className="text-sm text-gray-700">{t('carPage.ivaIncluido')}</div>
                </div>
              </div>
            </div>

            {/* Sticky CTA */}
            <div className="px-10 pb-6 mt-auto">
              <button
                onClick={handleContinue}
                className="w-full bg-[#FB3B55] text-white py-4 rounded-3xl font-semibold text-lg hover:bg-[#E02A44] transition-colors"
              >
                {t('carPage.continuar')}
              </button>
            </div>
          </div>
        </div>

        {/* Back side - Contact Form */}
        <div
          className="
            absolute inset-0 
            w-full 
            h-[720px] 
            min-h-[600px] 
            max-h-[800px]
            rounded-2xl 
            flex 
            flex-col 
            overflow-hidden
          "
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* ================= TOP BLOCK ================= */}
          <div
            className="bg-[#EAEAEA] rounded-t-[20px] relative z-10 shrink-0"
            style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="px-10 pt-6 pb-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
                {t('carPage.contactoFormulario')}
              </h2>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 px-4">
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 bg-[#28a745] rounded-full flex items-center justify-center animate-scale-in">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-[#28a745] rounded-full opacity-20 animate-ping" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                    ¡Gracias!
                    <br />
                    <span className="text-xl font-normal">
                      Te contactaremos pronto.
                    </span>
                  </h3>

                  <p className="text-base text-gray-600 text-center max-w-md">
                    {t('carPage.mensajeEnvioExitoso') ||
                      'Nos pondremos en contacto contigo muy pronto.'}
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-medium mb-3 text-gray-900"
                    >
                      {t('carPage.nombre')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full p-3 bg-white rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#603361]"
                      style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}
                      placeholder={t('carPage.nombre')}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="flex items-baseline text-lg font-medium mb-3 text-gray-900 gap-1"
                    >
                      <span>{t('carPage.email')}</span>
                      <span className="text-gray-500 text-sm font-normal">
                        {t('carPage.opcional')}
                      </span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full p-3 bg-white rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#603361]"
                      style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}
                      placeholder={t('carPage.email')}
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-lg font-medium mb-3 text-gray-900"
                    >
                      {t('carPage.telefono')}
                    </label>

                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none z-10">
                        <Image
                          src="/icons/spain.png"
                          alt="España"
                          width={24}
                          height={24}
                          className="rounded-sm"
                        />
                        <span className="text-gray-900 font-medium text-base">
                          +34
                        </span>
                      </div>

                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className="w-full p-3 bg-white rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#603361]"
                        style={{
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                          paddingLeft: '82px',
                        }}
                        placeholder="123 456 789"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ================= BOTTOM BLOCK (SCROLLABLE) ================= */}
          <div className="bg-[#F3F2EC] flex-1 flex flex-col overflow-y-auto -mt-4 relative z-0">
            <div className="px-10 pt-10 pb-6 flex-1">
              <h3 className="text-lg font-medium mb-3 text-gray-900">
                {t('carPage.resumenSuscripcion')}
              </h3>

              <div className="space-y-2 text-gray-700 mb-4">
                <div className="flex justify-between">
                  <span>{t('carPage.precioMes')}:</span>
                  <span className="font-semibold">{priceAfterRange}€</span>
                </div>
                {displayMileageAddOn && (
                  <div className="flex justify-between">
                    <span>{t('carPage.kmAdicionales')} ({selectedMileage} km):</span>
                    <span className="font-semibold">+{mileageAddOn}€</span>
                  </div>
                )}
                {discountAmount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-700">{t('carPage.descuentoOferta')}:</span>
                    <span className="font-semibold" style={{ color: '#E10000' }}>-{discountAmount}€</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-start pt-3 border-t border-[#B4B4B4]">
                <span className="text-lg font-semibold text-gray-900">
                  {t('carPage.cuotaMensual')}:
                </span>

                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    {finalPrice}€
                  </div>
                  <div className="text-sm text-gray-700">
                    {t('carPage.ivaIncluido')}
                  </div>
                </div>
              </div>
            </div>

            {!isSubmitted && (
              <div className="px-10 pb-6 mt-auto">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={
                    isSubmitting ||
                    !formData.name.trim() ||
                    !formData.phone.trim()
                  }
                  className="w-full bg-[#FB3B55] text-white py-4 rounded-3xl font-semibold text-lg hover:bg-[#E02A44] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('carPage.enviando') : t('carPage.enviar')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}