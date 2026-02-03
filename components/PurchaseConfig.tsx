'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Car } from '@/types';
import { useI18n } from '@/lib/i18n/context';

interface PurchaseConfigProps {
  car: Car;
}

type PurchaseOption = 'fixed' | 'installment';

export default function PurchaseConfig({ car }: PurchaseConfigProps) {
  const { t } = useI18n();

  // State for card flip
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  // Purchase option state
  const [purchaseOption, setPurchaseOption] = useState<PurchaseOption>('fixed');
  const [selectedInstallmentMonths, setSelectedInstallmentMonths] = useState<number>(
    car.installmentOptions?.[0]?.months || 12
  );

  // Calculate prices
  const fixedPrice = car.purchasePrice || 0;
  const selectedInstallment = car.installmentOptions?.find(opt => opt.months === selectedInstallmentMonths);
  const finalPrice = purchaseOption === 'fixed'
    ? fixedPrice
    : (selectedInstallment?.totalPrice || fixedPrice);
  const monthlyPayment = purchaseOption === 'installment' && selectedInstallment
    ? selectedInstallment.monthlyPayment
    : undefined;

  // Handle Continue button click - flip the card and dispatch event
  const handleContinue = () => {
    setIsFlipped(true);
    // Dispatch custom event to notify parent component
    const event = new CustomEvent('cardFlip', { detail: { isFlipped: true } });
    window.dispatchEvent(event);
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
          purchaseOption: purchaseOption,
          price: finalPrice,
          installmentMonths: purchaseOption === 'installment' ? selectedInstallmentMonths : undefined,
          monthlyPayment: monthlyPayment,
          name: formData.name,
          phone: `+34 ${formData.phone.trim()}`,
          email: formData.email.trim() || undefined,
          type: 'compra',
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
    <div id="purchase-form" className="relative h-full w-full" style={{ perspective: '1000px' }}>
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

          <div
            className="bg-[#EAEAEA] rounded-t-[20px] relative z-10 shrink-0"
            style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="px-10 pt-6 pb-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
                {t('carPage.configuraCompra')}
              </h2>

              {/* Purchase Option */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3 text-gray-900">
                  {t('carPage.opcionCompra')}
                </h3>

                <div className="bg-[#EAEAEA] rounded-lg p-3 shadow-sm">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setPurchaseOption('fixed')}
                      className={`p-4 rounded-lg text-sm font-medium transition-all ${purchaseOption === 'fixed'
                        ? 'bg-[#603361] text-white'
                        : 'bg-[#F3F2EC] text-gray-900 hover:opacity-90'
                        }`}
                    >
                      <div className="font-bold mb-1">{t('carPage.pagoUnico')}</div>
                      <div className="text-xs">{fixedPrice}€</div>
                    </button>

                    <button
                      onClick={() => setPurchaseOption('installment')}
                      disabled={!car.installmentOptions?.length}
                      className={`p-4 rounded-lg text-sm font-medium transition-all ${!car.installmentOptions?.length
                        ? 'bg-[#C3C3C3] text-gray-500 cursor-not-allowed'
                        : purchaseOption === 'installment'
                          ? 'bg-[#603361] text-white'
                          : 'bg-[#F3F2EC] text-gray-900 hover:opacity-90'
                        }`}
                    >
                      <div className="font-bold mb-1">{t('carPage.financiacion')}</div>
                      <div className="text-xs">
                        {t('carPage.desde')} {car.installmentOptions?.[0]?.monthlyPayment}€/mes
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Installments */}
              {purchaseOption === 'installment' && (car.installmentOptions?.length ?? 0) > 0 && (
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-900">
                    {t('carPage.plazoFinanciacion')}
                  </h3>

                  <div className="bg-[#EAEAEA] rounded-lg p-3 shadow-sm">
                    <div className="grid grid-cols-3 gap-2">
                      {car.installmentOptions?.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedInstallmentMonths(option.months)}
                          className={`p-3 rounded-lg text-xs font-medium transition-all ${selectedInstallmentMonths === option.months
                            ? 'bg-[#603361] text-white'
                            : 'bg-[#F3F2EC] text-gray-900 hover:opacity-90'
                            }`}
                        >
                          <div>{option.months} {t('carPage.meses')}</div>
                          <div className="text-[10px] mt-1">
                            {option.monthlyPayment}€/mes
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>


          <div className="bg-[#F3F2EC] flex-1 flex flex-col overflow-y-auto">
            <div className="px-10 pt-8 pb-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900">
                {t('carPage.resumenCompra')}
              </h3>

              <div className="space-y-2 text-gray-700 mb-4">
                {purchaseOption === 'installment' && (
                  <>
                    <div className="flex justify-between">
                      <span>{t('carPage.cuotaMensual')}:</span>
                      <span className="font-semibold">{monthlyPayment}€</span>
                    </div>

                    <div className="flex justify-between">
                      <span>{t('carPage.duracion')}:</span>
                      <span className="font-semibold">
                        {selectedInstallmentMonths} {t('carPage.meses')}
                      </span>
                    </div>
                  </>
                )}
              </div>

              <div className="flex justify-between items-end pt-3 border-t border-[#B4B4B4]">
                <span className="text-lg font-semibold text-gray-900">
                  {t('carPage.precioTotal')}:
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
                {t('carPage.resumenCompra')}
              </h3>

              <div className="space-y-2 text-gray-700 mb-4">
                {purchaseOption === 'installment' && monthlyPayment && (
                  <div className="flex justify-between">
                    <span>{t('carPage.cuotaMensual')}:</span>
                    <span className="font-semibold">{monthlyPayment}€</span>
                  </div>
                )}

                {purchaseOption === 'installment' && selectedInstallment && (
                  <div className="flex justify-between">
                    <span>{t('carPage.duracion')}:</span>
                    <span className="font-semibold">
                      {selectedInstallmentMonths} {t('carPage.meses')}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-end pt-3 border-t border-[#B4B4B4]">
                <span className="text-lg font-semibold text-gray-900">
                  {t('carPage.precioTotal')}:
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