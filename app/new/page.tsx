'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Particles from '@/components/Particles'
import { useLanguage } from '@/components/LanguageProvider'

export default function NewWorldClassPage() {
  const { t } = useLanguage()
  
  const industries = [
    t('newPageIndustry1'),
    t('newPageIndustry2'),
    t('newPageIndustry3'),
    t('newPageIndustry4'),
  ]
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  })

  return (
    <main className="relative min-h-screen bg-dark-bg text-white overflow-hidden">
      <Particles />
      <Navigation />

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-12 items-center"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase mb-4"
            >
              {t('newPageTagline')}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              {t('newPageTitle')}
              <span className="block text-brand-primary">{t('newPageTitleHighlight')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-base md:text-lg text-dark-text/80 max-w-xl mb-8"
            >
              {t('newPageDescription')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 items-center mb-8"
            >
              <a
                href="#book"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-sm font-semibold shadow-lg shadow-brand-primary/40 hover:shadow-brand-primary/60 transition-transform hover:-translate-y-0.5"
              >
                {t('newPageBookCall')}
              </a>
              <a
                href="#work"
                className="px-8 py-3 rounded-full border border-brand-primary/40 text-sm font-semibold text-dark-text/80 hover:text-white hover:border-brand-primary transition"
              >
                {t('newPageViewWork')}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 text-xs text-dark-text/60"
            >
              <span>{t('newPagePerfectFor')}</span>
              <div className="flex flex-wrap gap-2">
                {industries.map((i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] tracking-wide"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-brand-primary/30 bg-gradient-to-br from-brand-primary/15 via-brand-secondary/10 to-brand-accent/10"
          >
            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_0_0,#00d9ff33,transparent_55%),radial-gradient(circle_at_100%_0,#9333ea33,transparent_55%),radial-gradient(circle_at_50%_100%,#d946ef33,transparent_55%)]" />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div>
                <p className="text-[11px] text-dark-text/60 mb-2">{t('newPageConversionSnapshot')}</p>
                <h3 className="text-lg font-semibold mb-4">{t('newPageDashboardTitle')}</h3>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <StatCard label={t('newPageLeads')} value="128" trend="+34%" />
                  <StatCard label={t('newPageSession')} value="3m 12s" trend="+18%" />
                  <StatCard label={t('newPageConversion')} value="4.9%" trend="+22%" />
                </div>
              </div>

              <div className="text-[11px] text-dark-text/70">
                <p>{t('newPageTestimonial')}</p>
                <p className="text-dark-text/50 mt-1">{t('newPageTestimonialAuthor')}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* VALUE STRIP */}
      <section className="border-y border-white/5 bg-black/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm text-dark-text/70">
          <ValuePill title={t('newPageDoneForYou')} text={t('newPageDoneForYouText')} />
          <ValuePill title={t('newPageLaunch14')} text={t('newPageLaunch14Text')} />
          <ValuePill title={t('newPageWhatsApp')} text={t('newPageWhatsAppText')} />
        </div>
      </section>

      {/* RESULTS / WORK */}
      <section id="work" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase mb-3">{t('newPageSelectedResults')}</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('newPageResultsTitle')}</h2>
              <p className="text-sm md:text-base text-dark-text/80 max-w-xl">
                {t('newPageResultsDesc')}
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            <CaseCard
              tag={t('newPageEcommerce')}
              title={t('newPageFashionBrand')}
              result={t('newPageFashionResult')}
              details={t('newPageFashionDetails')}
            />
            <CaseCard
              tag={t('newPagePersonalBrand')}
              title={t('newPageCoachTitle')}
              result={t('newPageCoachResult')}
              details={t('newPageCoachDetails')}
            />
            <CaseCard
              tag={t('newPageB2BSaaS')}
              title={t('newPageSoftwareTitle')}
              result={t('newPageSoftwareResult')}
              details={t('newPageSoftwareDetails')}
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-gradient-to-b from-black/40 to-black/10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase mb-3"
          >
            {t('newPageSimpleProcess')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t('newPageProcessTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm md:text-base text-dark-text/80"
          >
            {t('newPageProcessDesc')}
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
          <StepCard
            step={t('newPageStep1')}
            title={t('newPageStep1Title')}
            text={t('newPageStep1Text')}
          />
          <StepCard
            step={t('newPageStep2')}
            title={t('newPageStep2Title')}
            text={t('newPageStep2Text')}
          />
          <StepCard
            step={t('newPageStep3')}
            title={t('newPageStep3Title')}
            text={t('newPageStep3Text')}
          />
        </div>
      </section>

      {/* BOOKING / CTA */}
      <section id="book" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl border border-brand-primary/30 bg-gradient-to-br from-brand-primary/15 via-brand-secondary/10 to-brand-accent/15 p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{t('newPagePlanTitle')}</h2>
            <p className="text-sm md:text-base text-dark-text/80 mb-4">
              {t('newPagePlanDesc')}
            </p>
            <ul className="text-xs md:text-sm text-dark-text/70 space-y-1">
              <li>{t('newPagePlanList1')}</li>
              <li>{t('newPagePlanList2')}</li>
              <li>{t('newPagePlanList3')}</li>
            </ul>
          </div>

            <form
              className="w-full md:w-80 space-y-3 text-xs md:text-sm"
              onSubmit={(e) => {
                e.preventDefault()
                // Connect this form to your email service or CRM
                // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
                setFormData({ name: '', contact: '', message: '' })
              }}
            >
              <div>
                <label className="block mb-1 text-dark-text/70">{t('newPageFormName')}</label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg bg-dark-bg border border-white/10 px-3 py-2 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/40 text-white"
                  placeholder={t('newPageFormName')}
                />
              </div>
              <div>
                <label className="block mb-1 text-dark-text/70">{t('newPageFormContact')}</label>
                <input
                  required
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full rounded-lg bg-dark-bg border border-white/10 px-3 py-2 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/40 text-white"
                  placeholder={t('newPageFormContact')}
                />
              </div>
              <div>
                <label className="block mb-1 text-dark-text/70">{t('newPageFormHelp')}</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg bg-dark-bg border border-white/10 px-3 py-2 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/40 resize-none text-white"
                  placeholder={t('newPageFormHelp')}
                />
              </div>
              <button
                type="submit"
                className="w-full mt-2 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary py-2.5 font-semibold text-white text-xs md:text-sm shadow-lg shadow-brand-primary/40 hover:shadow-brand-primary/60"
              >
                {t('newPageFormSubmit')}
              </button>
              <p className="text-[11px] text-dark-text/60 mt-1">
                {t('newPageFormResponse')}
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

function StatCard({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="rounded-2xl bg-black/40 border border-white/10 px-3 py-2 flex flex-col gap-0.5">
      <span className="text-[10px] text-dark-text/60">{label}</span>
      <span className="text-sm font-semibold">{value}</span>
      <span className="text-[10px] text-emerald-400">{trend}</span>
    </div>
  )
}

function ValuePill({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-col gap-1 min-w-[180px]">
      <span className="text-[11px] font-semibold text-dark-text/80">{title}</span>
      <span className="text-[11px] text-dark-text/60">{text}</span>
    </div>
  )
}

function CaseCard({
  tag,
  title,
  result,
  details,
}: {
  tag: string
  title: string
  result: string
  details: string
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-2xl border border-white/10 bg-dark-card/80 p-5 flex flex-col gap-3 hover:border-brand-primary/40 hover:-translate-y-1 transition"
    >
      <span className="inline-flex h-6 items-center rounded-full border border-white/10 px-3 text-[10px] text-dark-text/60">
        {tag}
      </span>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="text-sm text-emerald-400 font-semibold">{result}</p>
      <p className="text-xs text-dark-text/70 flex-1">{details}</p>
      <p className="text-[11px] text-dark-text/50 mt-1">Designed, written and built by Omix Solutions.</p>
    </motion.article>
  )
}

function StepCard({ step, title, text }: { step: string; title: string; text: string }) {
  const stepNumber = step.includes('০১') ? '০১' : step.includes('01') ? '01' : step.includes('০২') ? '০২' : step.includes('02') ? '02' : step.includes('০৩') ? '০৩' : '03'
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl border border-white/10 bg-dark-card/80 p-6 text-left overflow-hidden"
    >
      <span className="absolute -top-6 -right-2 text-6xl font-bold text-white/5">{stepNumber}</span>
      <p className="text-[11px] font-semibold text-brand-primary mb-1">{step}</p>
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <p className="text-xs text-dark-text/70">{text}</p>
    </motion.div>
  )
}
