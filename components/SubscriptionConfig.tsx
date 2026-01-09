'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Car } from '@/types';
import { useI18n } from '@/lib/i18n/context';

interface SubscriptionConfigProps {
  car: Car;
}

export default function SubscriptionConfig({ car }: SubscriptionConfigProps) {
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
  
  // Default permanence options - always show all options
  const defaultPermanenceOptions = [
    { months: 6, price: car.pricePerMonth, available: false },
    { months: 12, price: car.pricePerMonth, available: true },
    { months: 24, price: car.pricePerMonth, available: true },
    { months: 36, price: car.pricePerMonth, available: true },
  ];

  // Merge Strapi data with defaults to ensure all options are shown
  const allMonths = [6, 12, 24, 36];
  const permanenceOptions = allMonths.map(months => {
    const strapiOption = car.permanenceOptions?.find(opt => opt.months === months);
    const defaultOption = defaultPermanenceOptions.find(opt => opt.months === months);
    
    // Use Strapi data if available, otherwise use default
    return strapiOption || defaultOption || { months, price: car.pricePerMonth, available: false };
  });
  const defaultMileageOptions = [
    { km: 800, included: true, price: undefined },
    { km: 1000, included: false, price: 50 },
    { km: 1500, included: false, price: 100 },
  ];
  const mileageOptions = car.mileageOptions || defaultMileageOptions;

  console.log('[SubscriptionConfig] Data:', {
    hasPermanenceOptions: !!car.permanenceOptions,
    permanenceOptionsCount: permanenceOptions.length,
    permanenceOptions: permanenceOptions,
    hasMileageOptions: !!car.mileageOptions,
    mileageOptionsCount: mileageOptions.length,
    mileageOptions: mileageOptions,
  });

  const [selectedPermanence, setSelectedPermanence] = useState(
    permanenceOptions.find(opt => opt.available)?.months || 12
  );
  const [selectedMileage, setSelectedMileage] = useState(
    mileageOptions.find(opt => opt.included)?.km || 800
  );

  const selectedPermanenceOption = permanenceOptions.find(opt => opt.months === selectedPermanence);
  const selectedMileageOption = mileageOptions.find(opt => opt.km === selectedMileage);
  
  const basePrice = selectedPermanenceOption?.price || car.pricePerMonth;
  const mileagePrice = selectedMileageOption?.price || 0;
  const discount = car.originalPrice && car.originalPrice > basePrice 
    ? car.originalPrice - basePrice 
    : 0;
  const finalPrice = basePrice + mileagePrice - discount;

  // Calculate original price for each option (for strikethrough)
  const getOriginalPrice = (optionPrice: number) => {
    return car.originalPrice && car.originalPrice > optionPrice ? car.originalPrice : undefined;
  };

  // Handle Continue button click - flip the card
  const handleContinue = () => {
    setIsFlipped(true);
  };

  // Handle phone input change - only allow numbers and spaces, preserve +34 prefix
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove +34 if user tries to delete it, keep only the number part
    let cleanValue = value.replace(/^\+34\s*/, '').replace(/[^\d\s]/g, '');
    // Limit to reasonable length (9 digits for Spanish numbers)
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

    // Validate email format only if email is provided
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
          permanence: selectedPermanence,
          mileage: selectedMileage,
          finalPrice,
          name: formData.name,
          phone: `+34 ${formData.phone.trim()}`,
          email: formData.email.trim() || undefined,
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
    <div className="relative h-full w-full" style={{ perspective: '1000px' }}>
      <div
        className="relative h-full w-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front side - Configuration */}
        <div
          className="relative h-full w-full rounded-2xl flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            transform: 'rotateY(0deg)',
          }}
        >
          {/* Top block - #EAEAEA */}
          <div className="bg-[#EAEAEA] rounded-[20px] relative z-10" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}>
            <div className="px-10 pt-6 pb-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
                {t('carPage.configuraSuscripcion')}
              </h2>

              {/* Permanence Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3 text-gray-900 text-left">
                  {t('carPage.permanencia')}
                </h3>
                <div className="bg-[#EAEAEA] rounded-lg p-3" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                  <div className="grid grid-cols-4 gap-2">
                    {permanenceOptions.map((option, index) => {
                      const originalPrice = getOriginalPrice(option.price);
                      const isSelected = selectedPermanence === option.months && option.available;
                      const isAvailable = option.available;
                      
                      return (
                        <button
                          key={`permanence-${option.months}-${index}`}
                          onClick={() => isAvailable && setSelectedPermanence(option.months)}
                          disabled={!isAvailable}
                          className={`p-3 rounded-lg text-xs font-medium transition-all h-20 flex flex-col items-center justify-center ${
                            !isAvailable
                              ? 'bg-[#C3C3C3] text-gray-900 cursor-not-allowed'
                              : isSelected
                              ? 'bg-[#603361] text-white'
                              : 'bg-[#F3F2EC] text-gray-900 hover:opacity-90'
                          }`}
                        >
                          <div>{option.months} {t('carPage.meses')}</div>
                          {!isAvailable ? (
                            <div className="text-[10px] mt-1 text-center">
                              <div>No</div>
                              <div>disponible</div>
                            </div>
                          ) : (
                            <div className="text-[10px] mt-1 text-center">
                              {originalPrice ? (
                                <>
                                  <div className="font-bold">{option.price}€</div>
                                  <div className="line-through" style={{ color: '#E10000' }}>{originalPrice}€</div>
                                </>
                              ) : (
                                <div className="font-bold">{option.price}€</div>
                              )}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Mileage Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3 text-gray-900 text-left">
                  {t('carPage.personalizaKilometraje')}
                </h3>
                <select
                  value={selectedMileage}
                  onChange={(e) => setSelectedMileage(Number(e.target.value))}
                  className="w-full p-3 bg-white rounded-lg text-gray-900 focus:outline-none"
                  style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}
                >
                  {mileageOptions.map((option, index) => (
                    <option key={`mileage-${option.km}-${index}`} value={option.km}>
                      {option.km} {t('carPage.kmMesIncluido')}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Bottom block - #F3F2EC */}
          <div className="bg-[#F3F2EC] rounded-b-[20px] flex-1 flex flex-col -mt-4 relative z-0">
            <div className="px-10 pt-10 pb-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900">
                {t('carPage.resumenSuscripcion')}
              </h3>
              <div className="space-y-2 text-gray-700 mb-4">
                <div className="flex justify-between">
                  <span>{t('carPage.precioMes')}:</span>
                  <span className="font-semibold">{basePrice}€</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-700">{t('carPage.descuentoOferta')}:</span>
                    <span className="font-semibold" style={{ color: '#E10000' }}>-{discount}€</span>
                  </div>
                )}
                {mileagePrice > 0 && (
                  <div className="flex justify-between">
                    <span>{t('carPage.kmAdicionales')}:</span>
                    <span className="font-semibold">+{mileagePrice}€</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-end pt-2 border-t-2 border-[#B4B4B4] mb-4">
                <span className="text-lg font-semibold text-gray-900">{t('carPage.cuotaMensual')}:</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{finalPrice}€</div>
                  <div className="text-sm text-gray-700">{t('carPage.ivaIncluido')}</div>
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <div className="px-10 pb-6">
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
          className="absolute inset-0 h-full w-full rounded-2xl flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Top block - #EAEAEA */}
          <div className="bg-[#EAEAEA] rounded-[20px] relative z-10" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}>
            <div className="px-10 pt-6 pb-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
                {t('carPage.contactoFormulario')}
              </h2>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <p className="text-lg text-gray-900 mb-4">{t('carPage.graciasEnvio')}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium mb-3 text-gray-900 text-left">
                      {t('carPage.nombre')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-white rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#603361]"
                      style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}
                      placeholder={t('carPage.nombre')}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="flex items-baseline text-lg font-medium mb-3 text-gray-900 text-left gap-1">
                      <span>{t('carPage.email')}</span>
                      <span className="text-gray-500 text-sm font-normal">{t('carPage.opcional')}</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-white rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#603361]"
                      style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}
                      placeholder={t('carPage.email')}
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Phone Input with Spanish flag and +34 */}
                  <div>
                    <label htmlFor="phone" className="block text-lg font-medium mb-3 text-gray-900 text-left">
                      {t('carPage.telefono')}
                    </label>
                    <div className="relative">
                      {/* Flag and country code - positioned absolutely */}
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none z-10">
                        <Image
                          src="/icons/spain.png"
                          alt="España"
                          width={24}
                          height={24}
                          className="rounded-sm"
                          style={{ 
                            width: '24px', 
                            height: '24px',
                            objectFit: 'cover',
                            borderRadius: '2px'
                          }}
                        />
                        <span className="text-gray-900 font-medium text-base">+34</span>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className="w-full p-3 bg-white rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#603361]"
                        style={{ 
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                          paddingLeft: '82px'
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

          {/* Bottom block - #F3F2EC */}
          <div className="bg-[#F3F2EC] rounded-b-[20px] flex-1 flex flex-col -mt-4 relative z-0">
            <div className="px-10 pt-10 pb-6 flex-1">
              <h3 className="text-lg font-medium mb-3 text-gray-900">
                {t('carPage.resumenSuscripcion')}
              </h3>
              <div className="space-y-2 text-gray-700 mb-4">
                <div className="flex justify-between">
                  <span>{t('carPage.precioMes')}:</span>
                  <span className="font-semibold">{basePrice}€</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-700">{t('carPage.descuentoOferta')}:</span>
                    <span className="font-semibold" style={{ color: '#E10000' }}>-{discount}€</span>
                  </div>
                )}
                {mileagePrice > 0 && (
                  <div className="flex justify-between">
                    <span>{t('carPage.kmAdicionales')}:</span>
                    <span className="font-semibold">+{mileagePrice}€</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-end pt-2 border-t-2 border-[#B4B4B4] mb-4">
                <span className="text-lg font-semibold text-gray-900">{t('carPage.cuotaMensual')}:</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{finalPrice}€</div>
                  <div className="text-sm text-gray-700">{t('carPage.ivaIncluido')}</div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            {!isSubmitted && (
              <div className="px-10 pb-6">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.name.trim() || !formData.phone.trim()}
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

