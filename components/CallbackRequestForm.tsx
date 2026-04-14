'use client';

import { useState, useRef, useEffect } from 'react';
import { useI18n } from '@/lib/i18n/context';
import { trackLead } from '@/lib/analytics/events';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CallbackRequestForm({ isOpen, onClose }: Props) {
  const { t } = useI18n();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorText, setErrorText] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setStatus('idle');
      setErrorText('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    const trimName = name.trim();
    const trimPhone = phone.trim();
    if (!trimName || !trimPhone) {
      setErrorText('Nombre y teléfono son obligatorios');
      setStatus('error');
      return;
    }
    setErrorText('');
    setStatus('sending');
    try {
      const res = await fetch('/api/send-callback-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: trimName,
          phone: trimPhone,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorText(data.error || 'Error al enviar');
        setStatus('error');
        return;
      }
      trackLead({
        lead_type: 'callback',
        form_name: 'callback_request',
        placement: 'modal',
        phone: trimPhone,
      });
      setStatus('success');
      setName('');
      setPhone('');
    } catch {
      setErrorText('Error de conexión');
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="callback-form-title"
      className="fixed inset-0 z-[100] flex items-end lg:items-center justify-center bg-black/50 p-0 lg:p-4"
      onClick={handleOverlayClick}
    >
      <div
        className="w-full max-h-[90vh] overflow-y-auto rounded-t-2xl lg:rounded-2xl bg-[#DFDBC8] shadow-2xl lg:max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between px-4 py-3 lg:px-5 lg:pt-5 lg:pb-2 bg-[#DFDBC8] border-b border-gray-300/50 rounded-t-2xl lg:rounded-t-2xl z-10">
          <h2 id="callback-form-title" className="text-lg lg:text-xl font-semibold text-gray-900">
            {t('callbackRequest.title')}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-gray-600 hover:bg-gray-200/80 hover:text-gray-900 transition-colors"
            aria-label={t('callbackRequest.close')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-4 pb-6 pt-2 lg:px-5 lg:pb-8">
          {status === 'success' ? (
            <div className="py-8 text-center">
              <p className="text-gray-800 text-base lg:text-lg mb-6">{t('callbackRequest.successMessage')}</p>
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl bg-[#603361] px-5 py-2.5 text-white font-medium hover:bg-[#4e2a52] transition-colors"
              >
                {t('callbackRequest.close')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorText && (
                <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{errorText}</p>
              )}
              <div>
                <label htmlFor="callback-name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('callbackRequest.name')} *
                </label>
                <input
                  id="callback-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-[#603361] focus:ring-1 focus:ring-[#603361] outline-none transition"
                  placeholder={t('callbackRequest.name')}
                  autoComplete="name"
                  disabled={status === 'sending'}
                />
              </div>
              <div>
                <label htmlFor="callback-phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('callbackRequest.phone')} *
                </label>
                <input
                  id="callback-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-[#603361] focus:ring-1 focus:ring-[#603361] outline-none transition"
                  placeholder="+34 600 000 000"
                  autoComplete="tel"
                  disabled={status === 'sending'}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-xl bg-[#603361] py-3 text-white font-medium hover:bg-[#4e2a52] disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
              >
                {status === 'sending' ? t('callbackRequest.sending') : t('callbackRequest.submit')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
