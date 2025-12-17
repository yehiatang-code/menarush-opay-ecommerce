'use client'

import { useState } from 'react'
import type { TranslationKeys } from '@/lib/i18n'

interface ContactFormProps {
  locale: string
  t: TranslationKeys
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactForm({ locale, t }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = locale === 'ar' ? 'الاسم مطلوب' : 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = locale === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = locale === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = locale === 'ar' ? 'الرسالة مطلوبة' : 'Message is required'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = locale === 'ar' ? 'الرسالة يجب أن تكون 20 حرفاً على الأقل' : 'Message must be at least 20 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('idle')

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      // TODO: Implement actual form submission API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      })
    }
  }

  return (
    <div className="bg-dark-card border border-dark-border rounded-lg p-8 animate-slide-up">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg animate-fade-in">
          <p className="text-green-400 text-sm font-medium flex items-center">
            <svg className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {locale === 'ar' ? 'تم إرسال الرسالة بنجاح. سنتواصل معك قريباً.' : 'Message sent successfully. We will contact you soon.'}
          </p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg animate-fade-in">
          <p className="text-red-400 text-sm font-medium flex items-center">
            <svg className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            {locale === 'ar' ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.'}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            {t.contact.form.name} <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-dark-surface border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary transition-colors ${
              errors.name ? 'border-red-500' : 'border-dark-border'
            }`}
            placeholder={t.contact.form.name}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400 animate-fade-in">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            {t.contact.form.email} <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-dark-surface border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary transition-colors ${
              errors.email ? 'border-red-500' : 'border-dark-border'
            }`}
            placeholder={t.contact.form.email}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400 animate-fade-in">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
            {t.contact.form.company} <span className="text-gray-500 text-xs">({locale === 'ar' ? 'اختياري' : 'Optional'})</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary transition-colors"
            placeholder={t.contact.form.company}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            {t.contact.form.message} <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            maxLength={1000}
            className={`w-full px-4 py-3 bg-dark-surface border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary transition-colors resize-none ${
              errors.message ? 'border-red-500' : 'border-dark-border'
            }`}
            placeholder={t.contact.form.message}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400 animate-fade-in">{errors.message}</p>
          )}
          <p className={`mt-1 text-xs ${formData.message.length > 900 ? 'text-orange-400' : 'text-gray-500'}`}>
            {formData.message.length}/1000 {locale === 'ar' ? 'حرف' : 'characters'}
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {locale === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
            </>
          ) : (
            t.contact.form.submit
          )}
        </button>
      </form>
    </div>
  )
}


