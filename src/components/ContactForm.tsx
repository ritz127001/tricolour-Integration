'use client';

import { useState } from 'react';
import businessData from '../data/business_details.json';

interface ContactFormProps {
  compact?: boolean;
}

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  return (
    <div className={`bg-dark-lighter/90 backdrop-blur-md rounded-2xl border border-gray-700 ${compact ? 'p-6' : 'p-8'} animate-slide-in-left`}>
      <h3 className={`${compact ? 'text-xl' : 'text-2xl'} font-bold text-text-light mb-2`}>Get In Touch</h3>
      <p className="text-text-muted mb-6 text-sm">Fill out the form and we&apos;ll respond promptly.</p>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center space-x-3 animate-fade-in">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-green-500 text-sm">Message sent successfully!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={compact ? 'space-y-4' : 'grid md:grid-cols-2 gap-4'}>
          <div>
            <label htmlFor="cf-name" className="block text-text-light font-medium mb-1.5 text-sm">
              Full Name <span className="text-secondary">*</span>
            </label>
            <input
              type="text"
              id="cf-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-dark border border-gray-700 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all duration-300 text-sm"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="cf-email" className="block text-text-light font-medium mb-1.5 text-sm">
              Email <span className="text-secondary">*</span>
            </label>
            <input
              type="email"
              id="cf-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-dark border border-gray-700 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all duration-300 text-sm"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className={compact ? 'space-y-4' : 'grid md:grid-cols-2 gap-4'}>
          <div>
            <label htmlFor="cf-phone" className="block text-text-light font-medium mb-1.5 text-sm">
              Phone
            </label>
            <input
              type="tel"
              id="cf-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-dark border border-gray-700 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all duration-300 text-sm"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
            <label htmlFor="cf-service" className="block text-text-light font-medium mb-1.5 text-sm">
              Service
            </label>
            <select
              id="cf-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-dark border border-gray-700 rounded-lg text-text-light focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all duration-300 appearance-none cursor-pointer text-sm"
            >
              <option value="">Select a service</option>
              {businessData.services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="cf-message" className="block text-text-light font-medium mb-1.5 text-sm">
            Message <span className="text-secondary">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={compact ? 3 : 4}
            className="w-full px-4 py-2.5 bg-dark border border-gray-700 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all duration-300 resize-none text-sm"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed hover:animate-glow"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
