import React, { useState } from 'react';
import { officesData, OfficeRegion } from '../content/offices';

interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  spacesCount: string;
  timeline: string;
  spaceTypes: string[];
  projectDetails: string;
  honeypot: string; // Anti-spam honeypot
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  spacesCount?: string;
  projectDetails?: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    spacesCount: '6 to 20 rooms',
    timeline: 'Within 3 months',
    spaceTypes: ['Meeting rooms'],
    projectDetails: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<OfficeRegion | 'All'>('All');

  const spaceTypeOptions = [
    'Meeting rooms',
    'Training rooms',
    'Command centres',
    'Customer experience centres',
    'Digital signage',
    'Auditoriums'
  ];

  const handleTypeToggle = (type: string) => {
    setFormData((prev) => {
      const exists = prev.spaceTypes.includes(type);
      return {
        ...prev,
        spaceTypes: exists
          ? prev.spaceTypes.filter((t) => t !== type)
          : [...prev.spaceTypes, type]
      };
    });
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your work email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please provide a valid work email address (e.g. name@company.com).";
    }

    if (!formData.company.trim()) {
      errs.company = "Please provide your company or organisation name.";
    }

    if (!formData.projectDetails.trim()) {
      errs.projectDetails = "Please provide a brief description of the rooms, locations, or requirements.";
    } else if (formData.projectDetails.trim().length < 15) {
      errs.projectDetails = "Please provide at least 15 characters describing your project.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch & generate unique enterprise tracking reference
    setTimeout(() => {
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const ref = `OI-ENQ-2026-${randomNum}`;
      setSubmittedRef(ref);
      setIsSubmitting(false);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 700);
  };

  const filteredOffices = officesData.filter((o) => {
    if (selectedRegion === 'All') return true;
    return o.region === selectedRegion;
  });

  return (
    <div className="space-y-0">
      {/* Intro Header */}
      <section className="py-16 sm:py-20 border-b border-[#D5DDDB] bg-[#F6F8F7]">
        <div className="max-w-[1200px] mx-auto px-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#10201F] leading-[1.15]">
              Contact our engineering team
            </h1>
            <span className="text-sm font-semibold text-[#007A75] tabular-nums">
              Global headquarters: Bengaluru
            </span>
          </div>
          <p className="text-lg sm:text-xl text-[#54625F] leading-relaxed max-w-[64ch]">
            Tell us about your spaces, locations, and delivery timeline. A systems engineer will review your brief and return with single-line schematics or preliminary design guidance.
          </p>
        </div>
      </section>

      {/* Main Form & Office Directory Grid */}
      <section className="py-16 sm:py-24 border-b border-[#D5DDDB] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column: (Columns 1-7) */}
            <div className="lg:col-span-7">
              {submittedRef ? (
                <div className="p-8 bg-[#F6F8F7] border border-[#D5DDDB] space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#2E8B57]/15 text-[#2E8B57] flex items-center justify-center font-bold text-sm">
                      ✓
                    </span>
                    <h2 className="text-2xl font-semibold text-[#10201F]">
                      Project enquiry acknowledged
                    </h2>
                  </div>

                  <div className="p-4 bg-white border border-[#D5DDDB] space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#54625F] block">
                      Enquiry Reference ID
                    </span>
                    <span className="text-lg font-mono font-semibold text-[#007A75]">
                      {submittedRef}
                    </span>
                  </div>

                  <div className="space-y-3 text-sm text-[#10201F] leading-relaxed">
                    <p>
                      Thank you, <span className="font-semibold">{formData.fullName}</span>. Your project brief for <span className="font-semibold">{formData.company}</span> has been logged directly with our Bengaluru Technology &amp; Solutions Engineering desk.
                    </p>
                    <p className="text-[#54625F] text-xs">
                      A senior project engineer will review your room parameters ({formData.spacesCount}) and contact you at <span className="font-medium text-[#10201F]">{formData.email}</span> within 1 business day.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#D5DDDB]">
                    <button
                      onClick={() => {
                        setSubmittedRef(null);
                        setFormData({
                          fullName: '',
                          email: '',
                          company: '',
                          phone: '',
                          spacesCount: '6 to 20 rooms',
                          timeline: 'Within 3 months',
                          spaceTypes: ['Meeting rooms'],
                          projectDetails: '',
                          honeypot: '',
                        });
                      }}
                      className="rounded-[4px] px-5 py-2.5 text-xs font-medium bg-[#10201F] text-[#F6F8F7] hover:bg-[#007A75] transition-colors"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Honeypot field (hidden from users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_url">Website URL</label>
                    <input
                      type="text"
                      id="website_url"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  <div className="border-b border-[#D5DDDB] pb-3">
                    <h2 className="text-xl font-semibold text-[#10201F] tracking-tight">
                      Project enquiry form
                    </h2>
                    <p className="text-xs text-[#54625F] pt-0.5">
                      All communications are protected under standard enterprise non-disclosure.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="fullName" className="text-xs font-semibold text-[#10201F]">
                        Full Name <span className="text-[#007A75]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-[4px] text-[#10201F] focus:outline-hidden focus:ring-1 focus:ring-[#007A75] ${
                          errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#D5DDDB]'
                        }`}
                        placeholder="e.g. Rahul Sharma"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 pt-0.5">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs font-semibold text-[#10201F]">
                        Work Email <span className="text-[#007A75]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-[4px] text-[#10201F] focus:outline-hidden focus:ring-1 focus:ring-[#007A75] ${
                          errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#D5DDDB]'
                        }`}
                        placeholder="name@company.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 pt-0.5">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Company and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="company" className="text-xs font-semibold text-[#10201F]">
                        Company / Organization <span className="text-[#007A75]">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-[4px] text-[#10201F] focus:outline-hidden focus:ring-1 focus:ring-[#007A75] ${
                          errors.company ? 'border-red-500 bg-red-50/20' : 'border-[#D5DDDB]'
                        }`}
                        placeholder="e.g. Tech Enterprises"
                      />
                      {errors.company && (
                        <p className="text-xs text-red-600 pt-0.5">{errors.company}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-xs font-semibold text-[#10201F]">
                        Contact Phone <span className="text-xs font-normal text-[#54625F]">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D5DDDB] rounded-[4px] text-[#10201F] focus:outline-hidden focus:ring-1 focus:ring-[#007A75]"
                        placeholder="+91 98000 00000"
                      />
                    </div>
                  </div>

                  {/* Room Scale and Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="spacesCount" className="text-xs font-semibold text-[#10201F]">
                        Projected Room Count
                      </label>
                      <select
                        id="spacesCount"
                        value={formData.spacesCount}
                        onChange={(e) => setFormData({ ...formData, spacesCount: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D5DDDB] rounded-[4px] text-[#10201F] focus:outline-hidden focus:ring-1 focus:ring-[#007A75]"
                      >
                        <option value="1 to 5 rooms">1 to 5 rooms</option>
                        <option value="6 to 20 rooms">6 to 20 rooms</option>
                        <option value="21 to 50 rooms">21 to 50 rooms</option>
                        <option value="50 to 100 rooms">50 to 100 rooms</option>
                        <option value="100+ rooms (Enterprise rollout)">100+ rooms (Enterprise rollout)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="timeline" className="text-xs font-semibold text-[#10201F]">
                        Target Delivery Timeline
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D5DDDB] rounded-[4px] text-[#10201F] focus:outline-hidden focus:ring-1 focus:ring-[#007A75]"
                      >
                        <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                        <option value="Within 3 months">Within 3 months</option>
                        <option value="3 to 6 months">3 to 6 months</option>
                        <option value="Annual RFP / Long term">Annual RFP / Long term</option>
                      </select>
                    </div>
                  </div>

                  {/* Space Types Checkboxes */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-[#10201F] block">
                      Space Types Contemplated
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {spaceTypeOptions.map((type) => {
                        const checked = formData.spaceTypes.includes(type);
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleTypeToggle(type)}
                            className={`px-3 py-2 text-xs font-medium border text-left flex items-center gap-2 transition-colors rounded-[4px] ${
                              checked
                                ? 'bg-[#007A75]/10 text-[#007A75] border-[#007A75]'
                                : 'bg-white text-[#54625F] border-[#D5DDDB] hover:border-[#10201F]'
                            }`}
                          >
                            <span className={`w-3.5 h-3.5 rounded-none border flex items-center justify-center text-[10px] ${
                              checked ? 'bg-[#007A75] text-white border-[#007A75]' : 'border-[#54625F]'
                            }`}>
                              {checked ? '✓' : ''}
                            </span>
                            <span className="truncate">{type}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1">
                    <label htmlFor="projectDetails" className="text-xs font-semibold text-[#10201F]">
                      Project Requirements &amp; Scope <span className="text-[#007A75]">*</span>
                    </label>
                    <textarea
                      id="projectDetails"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-[4px] text-[#10201F] focus:outline-hidden focus:ring-1 focus:ring-[#007A75] ${
                        errors.projectDetails ? 'border-red-500 bg-red-50/20' : 'border-[#D5DDDB]'
                      }`}
                      placeholder="Outline room locations, preferred collaboration ecosystem (Teams / Zoom / Cisco), architectural drawings availability, or specific technical constraints..."
                    />
                    {errors.projectDetails && (
                      <p className="text-xs text-red-600 pt-0.5">{errors.projectDetails}</p>
                    )}
                  </div>

                  {/* Submit button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-[4px] px-8 py-3.5 text-sm font-medium bg-[#007A75] text-[#F6F8F7] hover:bg-[#006965] active:bg-[#005a56] transition-colors focus-visible:outline-[#007A75] focus-visible:outline-offset-2 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Transmitting enquiry...' : 'Send project enquiry'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Office Directory Column: (Columns 8-12) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-b border-[#D5DDDB] pb-3 flex items-baseline justify-between">
                <h2 className="text-xl font-semibold text-[#10201F] tracking-tight">
                  Regional office network
                </h2>
                <span className="text-xs text-[#54625F]">18 locations</span>
              </div>

              {/* Region filter */}
              <div className="flex flex-wrap gap-1.5" aria-label="Region filter">
                {(['All', 'India', 'Middle East', 'Rest of Asia', 'USA'] as const).map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-3 py-1 text-xs font-medium border rounded-[4px] transition-colors ${
                      selectedRegion === reg
                        ? 'bg-[#10201F] text-[#F6F8F7] border-[#10201F]'
                        : 'bg-white text-[#54625F] border-[#D5DDDB] hover:text-[#10201F]'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>

              {/* Offices listing */}
              <div className="max-h-[500px] overflow-y-auto space-y-3 pr-2 border border-[#D5DDDB] p-4 bg-[#F6F8F7]">
                {filteredOffices.map((office) => (
                  <div key={office.city} className="p-3 bg-white border border-[#D5DDDB] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-[#10201F]">
                        {office.city}
                      </span>
                      <span className="text-xs text-[#54625F]">
                        {office.country}
                      </span>
                    </div>
                    {office.hq && (
                      <span className="text-[10px] font-semibold text-[#007A75] uppercase tracking-wider block">
                        Global Headquarters &amp; 40-Rack Staging Facility
                      </span>
                    )}
                    {office.addressNote && (
                      <p className="text-xs text-[#54625F] leading-tight">
                        {office.addressNote}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#10201F] text-[#F6F8F7] text-xs space-y-2">
                <span className="font-semibold text-[#2CCFC0] block">
                  Enterprise RFP Submissions
                </span>
                <p className="text-[#D5DDDB] leading-relaxed">
                  To invite Online Instruments to formal vendor RFPs or tender pre-qualification audits, email our tender response desk or request our PSNI compliance documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
