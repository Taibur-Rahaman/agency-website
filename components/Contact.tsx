'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { useLanguage } from '@/components/LanguageProvider'

const Scene3D = dynamic(() => import('@/components/3D/Scene3D'), { ssr: false })
const BrandCube = dynamic(() => import('@/components/3D/BrandCube'), { ssr: false })

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - connect to your email service or API
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('contactTitle')}
          </h2>
          <p className="text-lg text-dark-text/80 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact 3D Scene */}
            <div className="relative h-48 rounded-2xl overflow-hidden border border-brand-primary/20 mb-6 bg-gradient-to-br from-dark-card to-dark-bg">
              <Scene3D cameraPosition={[0, 0, 4]} className="absolute inset-0">
                <BrandCube position={[0, 0, 0]} />
                <mesh position={[-1.5, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
                  <octahedronGeometry args={[0.4, 0]} />
                  <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={0.4} />
                </mesh>
                <mesh position={[1.5, 0, 0]} rotation={[0, -Math.PI / 4, 0]}>
                  <octahedronGeometry args={[0.4, 0]} />
                  <meshStandardMaterial color="#9333ea" emissive="#9333ea" emissiveIntensity={0.4} />
                </mesh>
              </Scene3D>
            </div>

            <div className="p-6 bg-dark-card rounded-2xl border border-brand-primary/20 hover:border-brand-primary/40 transition-all">
              <Phone className="w-8 h-8 text-brand-primary mb-3" />
              <h3 className="text-xl font-bold mb-2 text-white">{t('contactCall')}</h3>
              <a href="tel:01601677122" className="text-brand-primary hover:text-brand-secondary transition-colors text-base">
                01601677122
              </a>
            </div>

            <div className="p-6 bg-dark-card rounded-2xl border border-brand-secondary/20 hover:border-brand-secondary/40 transition-all">
              <Mail className="w-8 h-8 text-brand-secondary mb-3" />
              <h3 className="text-xl font-bold mb-2 text-white">{t('contactEmail')}</h3>
              <a href="mailto:omixsolutions@gmail.com" className="text-brand-secondary hover:text-brand-accent transition-colors text-base break-all">
                omixsolutions@gmail.com
              </a>
            </div>

            <div className="p-6 bg-dark-card rounded-2xl border border-brand-accent/20 hover:border-brand-accent/40 transition-all">
              <MapPin className="w-8 h-8 text-brand-accent mb-3" />
              <h3 className="text-xl font-bold mb-2 text-white">{t('contactAddress')}</h3>
              <p className="text-dark-text/70 leading-relaxed text-sm">
                House-11, Road-7, Block-F<br />
                Bashundhara R/A, Dhaka, Bangladesh
              </p>
            </div>

            <div className="p-6 bg-dark-card rounded-2xl border border-brand-primary/20 hover:border-brand-primary/40 transition-all">
              <Clock className="w-8 h-8 text-brand-primary mb-3" />
              <h3 className="text-xl font-bold mb-2 text-white">{t('contactHours')}</h3>
              <p className="text-dark-text/70">Saturday – Thursday</p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="p-6 bg-dark-card rounded-2xl border border-brand-primary/20 hover:border-brand-primary/40 transition-all space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-dark-text/80 mb-2">
                {t('contactFormName')}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-dark-bg border border-brand-primary/30 rounded-lg text-white focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/50 transition-all"
                placeholder={t('contactFormName')}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-dark-text/80 mb-2">
                {t('contactFormEmail')}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-dark-bg border border-brand-secondary/30 rounded-lg text-white focus:outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/50 transition-all"
                placeholder={t('contactFormEmail')}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-dark-text/80 mb-2">
                {t('contactFormMessage')}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 bg-dark-bg border border-brand-accent/30 rounded-lg text-white focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/50 transition-all resize-none"
                placeholder={t('contactFormMessage')}
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg font-semibold text-base text-white flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {t('contactFormSubmit')}
            </motion.button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-6 bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10 rounded-2xl border border-brand-primary/30">
            <h3 className="text-xl font-bold mb-4 text-brand-primary">Tagline</h3>
            <div className="flex flex-wrap justify-center gap-3 text-dark-text/70">
              {['Smart Digital Solutions', 'Where Ideas Become Digital', 'Build. Brand. Grow.', 'Premium Digital Growth Partner'].map((tagline, index) => (
                <motion.span
                  key={tagline}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, color: '#00d9ff' }}
                  className="px-3 py-2 bg-dark-card rounded-lg border border-brand-primary/20 cursor-pointer text-sm"
                >
                  {tagline}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

