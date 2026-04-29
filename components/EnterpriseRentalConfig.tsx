'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Car } from '@/types';
import { useI18n } from '@/lib/i18n/context';
import { trackLead } from '@/lib/analytics/events';

const VAT_RATE = 1.21; // Strapi prices are with IVA; display without: price / 1.21

interface EnterpriseRentalConfigProps {
  car: Car;
}

export default function EnterpriseRentalConfig({ car }: EnterpriseRentalConfigProps) {
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
  
  // Rental configuration (days)
  const minDays = 1;
  const maxDays = 31;
  const [selectedDays, setSelectedDays] = useState(minDays);

  // Calculate price based on selected days
  const selectedPrice = useMemo(() => {
    if (car.rentalPrices && car.rentalPrices.length > 0) {
      // Find exact match or closest lower price
      const exactMatch = car.rentalPrices.find(p => p.months === selectedDays);
      if (exactMatch) return exactMatch.price;

      // Find closest lower price
      const sortedPrices = [...car.rentalPrices].sort((a, b) => b.months - a.months);
      const closest = sortedPrices.find(p => p.months <= selectedDays);
      if (closest) return closest.price;

      // Use first price as fallback
      return sortedPrices[0]?.price || car.pricePerMonthEmpresas || car.pricePerMonth;
    }
    return car.pricePerMonthEmpresas || car.pricePerMonth;
  }, [selectedDays, car.rentalPrices, car.pricePerMonth]);

  const totalPrice = selectedPrice * selectedDays;
  // Display prices without IVA (Strapi stores with tax), rounded to whole euros
  const selectedPriceDisplay = Math.round(selectedPrice / VAT_RATE);
  const totalPriceDisplay = Math.round(totalPrice / VAT_RATE);

  const handleDaysChange = (delta: number) => {
    const newDays = selectedDays + delta;
    if (newDays >= minDays && newDays <= maxDays) {
      setSelectedDays(newDays);
    }
  };
  
  // Handle Continue button click - flip the card
  const handleContinue = () => {
    setIsFlipped(true);
  };
  
  // Handle phone input change - only allow numbers and spaces, preserve +34 prefix
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
          rentalDays: selectedDays,
          pricePerDay: selectedPrice,
          totalPrice: totalPrice,
          name: formData.name,
          phone: `+34 ${formData.phone.trim()}`,
          email: formData.email.trim() || undefined,
          type: 'empresas',
        }),
      });
      
      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      trackLead({
        lead_type: 'enterprise',
        form_name: 'enterprise_rental_config',
        placement: 'car_detail',
        content_name: car.name,
        content_category: 'empresas',
        value: totalPrice,
        currency: 'EUR',
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div id="rental-form" className="relative h-full w-full" style={{ perspective: '1000px' }}>
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
                {t('carPage.configuraRenta')}
              </h2>
              
              {/* Months Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3 text-gray-900 text-left">
                  {t('carPage.duracionRenta')}
                </h3>
                <div className="bg-[#EAEAEA] rounded-lg p-3" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={() => handleDaysChange(-1)}
                      disabled={selectedDays <= minDays}
                      className={`w-10 h-10 rounded-lg font-bold text-xl flex items-center justify-center transition-all ${
                        selectedDays <= minDays
                          ? 'bg-[#C3C3C3] text-gray-500 cursor-not-allowed'
                          : 'bg-[#603361] text-white hover:opacity-90'
                      }`}
                    >
                      −
                    </button>
                    <div className="text-center min-w-[120px]">
                      <div className="text-3xl font-bold text-gray-900">{selectedDays}</div>
                      <div className="text-sm text-gray-700">{selectedDays === 1 ? t('carPage.dia') : t('carPage.dias')}</div>
                    </div>
                    <button
                      onClick={() => handleDaysChange(1)}
                      disabled={selectedDays >= maxDays}
                      className={`w-10 h-10 rounded-lg font-bold text-xl flex items-center justify-center transition-all ${
                        selectedDays >= maxDays
                          ? 'bg-[#C3C3C3] text-gray-500 cursor-not-allowed'
                          : 'bg-[#603361] text-white hover:opacity-90'
                      }`}
                    >
                      +
                    </button>
                  </div>
                  <div className="mt-3 text-center text-xs text-gray-600">
                    {minDays}-{maxDays} {t('carPage.diasDisponibles')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom block - #F3F2EC */}
          <div className="bg-[#F3F2EC] rounded-b-[20px] flex-1 flex flex-col -mt-5 relative z-0">
            <div className="px-10 pt-10 pb-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900">
                {t('carPage.resumenRenta')}
              </h3>
              <div className="space-y-2 text-gray-700 mb-4">
                <div className="flex justify-between">
                  <span>{t('carPage.precioDia')}:</span>
                  <span className="font-semibold">{selectedPriceDisplay}€</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('carPage.duracion')}:</span>
                  <span className="font-semibold">{selectedDays} {selectedDays === 1 ? t('carPage.dia') : t('carPage.dias')}</span>
                </div>
              </div>
              <div className="flex justify-between items-start pt-2 border-t-2 border-[#B4B4B4] mb-4">
                <span className="text-lg font-semibold text-gray-900">{t('carPage.total')}:</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{totalPriceDisplay}€</div>
                  <div className="text-sm text-gray-700">{t('carPage.masIva')}</div>
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
                <div className="flex flex-col items-center justify-center py-12 px-4">
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 bg-[#28a745] rounded-full flex items-center justify-center animate-scale-in">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-[#28a745] rounded-full opacity-20 animate-ping"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                    {t('carPage.graciasTitle')}
                    <br />
                    <span className="text-xl font-normal">{t('carPage.graciasSubtitle')}</span>
                  </h3>
                  <p className="text-base text-gray-600 text-center max-w-md">
                    {t('carPage.mensajeEnvioExitoso') || 'Nos pondremos en contacto contigo muy pronto.'}
                  </p>
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
                  
                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-lg font-medium mb-3 text-gray-900 text-left">
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
          <div className="bg-[#F3F2EC] rounded-b-[20px] flex-1 flex flex-col -mt-5 relative z-0">
            <div className="px-10 pt-10 pb-6 flex-1">
              <h3 className="text-lg font-medium mb-3 text-gray-900">
                {t('carPage.resumenRenta')}
              </h3>
              <div className="space-y-2 text-gray-700 mb-4">
                <div className="flex justify-between">
                  <span>{t('carPage.precioDia')}:</span>
                  <span className="font-semibold">{selectedPriceDisplay}€</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('carPage.duracion')}:</span>
                  <span className="font-semibold">{selectedDays} {selectedDays === 1 ? t('carPage.dia') : t('carPage.dias')}</span>
                </div>
              </div>
              <div className="flex justify-between items-start pt-2 border-t-2 border-[#B4B4B4] mb-4">
                <span className="text-lg font-semibold text-gray-900">{t('carPage.total')}:</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{totalPriceDisplay}€</div>
                  <div className="text-sm text-gray-700">{t('carPage.masIva')}</div>
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
