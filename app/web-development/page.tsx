'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Particles from '@/components/Particles'
import { useLanguage } from '@/components/LanguageProvider'
import { Code, Zap, Shield, Smartphone, Search, Headphones, Check } from 'lucide-react'
import Link from 'next/link'

export default function WebDevelopmentPage() {
  const { t } = useLanguage()

  const features = [
    { icon: Smartphone, text: t('webDevFeature1') },
    { icon: Zap, text: t('webDevFeature2') },
    { icon: Search, text: t('webDevFeature3') },
    { icon: Shield, text: t('webDevFeature4') },
    { icon: Code, text: t('webDevFeature5') },
    { icon: Headphones, text: t('webDevFeature6') },
  ]

  const processSteps = [
    { step: '01', title: t('webDevProcessStep1'), desc: 'We understand your business needs and create a detailed plan.' },
    { step: '02', title: t('webDevProcessStep2'), desc: 'Our designers create beautiful, user-friendly interfaces.' },
    { step: '03', title: t('webDevProcessStep3'), desc: 'We build your website with clean, efficient code.' },
    { step: '04', title: t('webDevProcessStep4'), desc: 'We launch your site and provide ongoing support.' },
  ]

  const technologies = [
    'Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL',
    'Tailwind CSS', 'Framer Motion', 'Three.js', 'AWS', 'Vercel', 'Docker'
  ]

  return (
    <main className="relative min-h-screen bg-dark-bg text-white overflow-hidden">
      <Particles />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block text-white">{t('webDevHeroTitle')}</span>
              <span className="block text-brand-primary mt-2">{t('webDevHeroSubtitle')}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-dark-text/80 max-w-3xl mx-auto mb-8"
            >
              {t('webDevHeroDescription')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/pricing"
                className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg font-semibold text-white shadow-lg shadow-brand-primary/40 hover:shadow-brand-primary/60 transition-all"
              >
                {t('webDevHeroCta')}
              </Link>
              <Link
                href="/new#book"
                className="px-8 py-4 border-2 border-brand-primary rounded-lg font-semibold text-brand-primary hover:bg-brand-primary/10 transition-all"
              >
                {t('heroSecondaryCta')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('webDevWhyTitle')}</h2>
            <p className="text-lg text-dark-text/70">{t('webDevWhySubtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="p-6 bg-dark-card rounded-xl border border-brand-primary/20 hover:border-brand-primary/40 transition-all text-center"
                >
                  <Icon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
                  <p className="text-sm text-dark-text/80">{feature.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('webDevProcessTitle')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-6 bg-dark-card rounded-xl border border-brand-primary/20 hover:border-brand-primary/40 transition-all h-full">
                  <div className="text-4xl font-bold text-brand-primary/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-dark-text/70 text-sm">{step.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-brand-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('webDevTechTitle')}</h2>
            <p className="text-lg text-dark-text/70">{t('webDevTechSubtitle')}</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-dark-card rounded-lg border border-brand-primary/20 hover:border-brand-primary/40 transition-all"
              >
                <span className="text-sm font-semibold text-white">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-brand-accent/20 rounded-3xl border border-brand-primary/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('newPagePlanTitle')}
            </h2>
            <p className="text-lg text-dark-text/70 mb-8">
              {t('newPagePlanDesc')}
            </p>
            <Link
              href="/new#book"
              className="inline-block px-10 py-5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg font-semibold text-white text-lg shadow-lg shadow-brand-primary/40 hover:shadow-brand-primary/60 transition-all"
            >
              {t('newPageBookCall')}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

