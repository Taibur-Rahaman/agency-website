'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Particles from '@/components/Particles'
import { useLanguage } from '@/components/LanguageProvider'

interface Booking {
  id: number
  clientName: string
  projectType: string
  budget: string
  status: 'New' | 'In Progress' | 'Completed'
}

export default function AdminPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<'bookings' | 'content'>('bookings')
  const [bookings, setBookings] = useState<Booking[]>([
    { id: 1, clientName: 'Dhaka Mart', projectType: 'E-commerce Website', budget: '$2,000', status: 'In Progress' },
    { id: 2, clientName: 'Sarah Ahmed', projectType: 'Personal Brand Site', budget: '$1,200', status: 'New' },
  ])

  const [heroTitle, setHeroTitle] = useState('Digital Solutions That Power Growth')
  const [heroSubtitle, setHeroSubtitle] = useState('Update this text to instantly change your homepage hero content.')

  const addDemoBooking = () => {
    setBookings((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        clientName: 'New Client',
        projectType: 'Custom Project',
        budget: '$1,000+',
        status: 'New',
      },
    ])
  }

  return (
    <main className="relative min-h-screen bg-dark-bg">
      <Particles />
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase mb-2">
              {t('adminPortal')}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{t('adminTitle')}</h1>
            <p className="text-sm text-dark-text/70 max-w-xl">
              {t('adminDescription')}
            </p>
          </div>
          <div className="text-xs text-dark-text/60">
            <p className="font-semibold text-dark-text/80">{t('adminNote')}</p>
            <p>{t('adminNoteText')}</p>
          </div>
        </motion.div>

        <div className="mb-6 inline-flex rounded-full border border-brand-primary/20 bg-dark-card/80 p-1">
          {[
            { key: 'bookings', label: t('adminBookings') },
            { key: 'content', label: t('adminContent') },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as 'bookings' | 'content')}
              className={`px-5 py-2 text-xs md:text-sm rounded-full transition-all ${
                activeTab === tab.key
                  ? 'bg-brand-primary text-white'
                  : 'text-dark-text/70 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'bookings' ? <BookingsTab bookings={bookings} onAddBooking={addDemoBooking} /> : null}
        {activeTab === 'content' ? (
          <ContentTab
            heroTitle={heroTitle}
            heroSubtitle={heroSubtitle}
            onHeroTitleChange={setHeroTitle}
            onHeroSubtitleChange={setHeroSubtitle}
          />
        ) : null}
      </div>
    </main>
  )
}

function BookingsTab({ bookings, onAddBooking }: { bookings: Booking[]; onAddBooking: () => void }) {
  const { t } = useLanguage()
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-white">{t('adminClientBookings')}</h2>
        <button
          onClick={onAddBooking}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary text-xs font-semibold text-white hover:opacity-90 transition"
        >
          {t('adminAddBooking')}
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-brand-primary/20 bg-dark-card/80">
        <table className="min-w-full text-sm">
          <thead className="bg-white/5 text-left text-xs uppercase tracking-wide text-dark-text/60">
            <tr>
              <th className="px-4 py-3">{t('adminClient')}</th>
              <th className="px-4 py-3">{t('adminProjectType')}</th>
              <th className="px-4 py-3">{t('adminBudget')}</th>
              <th className="px-4 py-3">{t('adminStatus')}</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-t border-white/5 hover:bg-white/5 transition">
                <td className="px-4 py-3 text-white text-xs md:text-sm">{b.clientName}</td>
                <td className="px-4 py-3 text-dark-text/80 text-xs md:text-sm">{b.projectType}</td>
                <td className="px-4 py-3 text-dark-text/80 text-xs md:text-sm">{b.budget}</td>
                <td className="px-4 py-3 text-xs md:text-sm">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                      b.status === 'New'
                        ? 'bg-brand-primary/20 text-brand-primary'
                        : b.status === 'In Progress'
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'bg-emerald-500/15 text-emerald-400'
                    }`}
                  >
                    {b.status === 'New' ? t('adminStatusNew') : b.status === 'In Progress' ? t('adminStatusProgress') : t('adminStatusCompleted')}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

function ContentTab({
  heroTitle,
  heroSubtitle,
  onHeroTitleChange,
  onHeroSubtitleChange,
}: {
  heroTitle: string
  heroSubtitle: string
  onHeroTitleChange: (v: string) => void
  onHeroSubtitleChange: (v: string) => void
}) {
  const { t } = useLanguage()
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4"
    >
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-white mb-2">{t('adminHomepageContent')}</h2>
        <p className="text-xs text-dark-text/70 mb-4">
          {t('adminContentDesc')}
        </p>
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-dark-text/70 mb-1">{t('adminHeroTitle')}</label>
            <input
              value={heroTitle}
              onChange={(e) => onHeroTitleChange(e.target.value)}
              className="w-full rounded-lg border border-brand-primary/30 bg-dark-bg px-3 py-2 text-xs text-white outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/40"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-dark-text/70 mb-1">{t('adminHeroSubtitle')}</label>
            <textarea
              value={heroSubtitle}
              onChange={(e) => onHeroSubtitleChange(e.target.value)}
              rows={4}
              className="w-full rounded-lg border border-brand-primary/30 bg-dark-bg px-3 py-2 text-xs text-white outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/40 resize-none"
            />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-brand-primary/20 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10 p-6 flex flex-col justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-brand-primary uppercase mb-3">{t('adminLivePreview')}</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{heroTitle}</h3>
          <p className="text-sm text-dark-text/80 mb-6">{heroSubtitle}</p>
        </div>
        <p className="text-[11px] text-dark-text/60">
          {t('adminPreviewDesc')}
        </p>
      </div>
    </motion.div>
  )
}
