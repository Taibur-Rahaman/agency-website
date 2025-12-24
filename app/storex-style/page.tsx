'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Particles from '@/components/Particles'
import { useLanguage } from '@/components/LanguageProvider'
import { ArrowRight, Check, Zap, ShoppingCart, BarChart3, Gift, TrendingUp, Shield } from 'lucide-react'

export default function StorexStylePage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Zap,
      title: t('storexFeature1Title'),
      description: t('storexFeature1Desc'),
      color: 'from-brand-primary to-brand-secondary'
    },
    {
      icon: ShoppingCart,
      title: t('storexFeature2Title'),
      description: t('storexFeature2Desc'),
      color: 'from-brand-secondary to-brand-accent'
    },
    {
      icon: BarChart3,
      title: t('storexFeature3Title'),
      description: t('storexFeature3Desc'),
      color: 'from-brand-accent to-brand-primary'
    },
    {
      icon: Gift,
      title: t('storexFeature4Title'),
      description: t('storexFeature4Desc'),
      color: 'from-brand-primary via-brand-secondary to-brand-accent'
    },
    {
      icon: TrendingUp,
      title: t('storexFeature5Title'),
      description: t('storexFeature5Desc'),
      color: 'from-brand-secondary via-brand-accent to-brand-primary'
    },
    {
      icon: Shield,
      title: t('storexFeature6Title'),
      description: t('storexFeature6Desc'),
      color: 'from-brand-accent via-brand-primary to-brand-secondary'
    }
  ]

  const templates = [
    { name: 'গ্যাজেট', icon: '📱' },
    { name: 'ফ্যাশন', icon: '👗' },
    { name: 'ইলেক্ট্রনিক্স', icon: '💻' },
    { name: 'প্রসাধনী', icon: '💄' },
    { name: 'অর্গানিক ফুড', icon: '🥗' },
    { name: 'ডিজিটাল প্রোডাক্ট', icon: '🎮' },
    { name: 'হোম ডেকর', icon: '🏠' },
    { name: 'ইসলামিক', icon: '📿' },
    { name: 'ফিটনেস', icon: '💪' },
    { name: 'গিফট আইটেম', icon: '🎁' },
    { name: 'বই ও স্টেশনারি', icon: '📚' }
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
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="block text-white">{t('storexHeroTitle')}</span>
              <span className="block text-brand-primary mt-2">{t('storexHeroSubtitle')}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-dark-text/80 max-w-3xl mx-auto mb-8"
            >
              {t('storexHeroDescription')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="/pricing"
                className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg font-semibold text-white shadow-lg shadow-brand-primary/40 hover:shadow-brand-primary/60 transition-all flex items-center gap-2"
              >
                {t('storexHeroCta')}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/new#book"
                className="px-8 py-4 border-2 border-brand-primary rounded-lg font-semibold text-brand-primary hover:bg-brand-primary/10 transition-all"
              >
                {t('heroPrimaryCta')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Use Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t('storexWhyTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-dark-text/70 mb-8"
          >
            {t('storexWhySubtitle')}
          </motion.p>

          {/* Brand Logos Placeholder */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 opacity-60">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="w-20 h-20 rounded-lg bg-dark-card border border-brand-primary/20 flex items-center justify-center">
                <span className="text-xs text-dark-text/50">Brand {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready Store Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('storexReadyTitle')}
              <br />
              <span className="text-brand-primary">{t('storexReadySubtitle')}</span>
            </h2>
            <p className="text-lg text-dark-text/70 max-w-2xl mx-auto mb-8">
              {t('storexSystemDescription')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg font-semibold text-white shadow-lg shadow-brand-primary/40 hover:shadow-brand-primary/60 transition-all flex items-center gap-2 mx-auto"
            >
              {t('storexReadyCta')}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Templates Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
            {templates.map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-dark-card rounded-xl border border-brand-primary/20 hover:border-brand-primary/40 transition-all text-center cursor-pointer"
              >
                <div className="text-4xl mb-2">{template.icon}</div>
                <p className="text-sm text-dark-text/80">{template.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Explanation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-card/30 to-dark-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('storexSystemTitle')}
            </h2>
            <p className="text-2xl md:text-3xl text-brand-primary mb-6">
              {t('storexSystemSubtitle')}
            </p>
            <p className="text-lg text-dark-text/70 max-w-3xl mx-auto mb-8">
              {t('storexSystemDescription')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-brand-primary rounded-lg font-semibold text-brand-primary hover:bg-brand-primary/10 transition-all"
            >
              {t('storexViewFeatures')}
            </motion.button>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative p-6 bg-dark-card rounded-2xl border border-brand-primary/20 hover:border-brand-primary/40 transition-all"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 rounded-2xl`} />
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="text-dark-text/70 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('storexStatsTitle')}
              </h2>
              <div className="space-y-6 mb-8">
                <div className="p-6 bg-dark-card rounded-xl border border-brand-primary/20">
                  <div className="text-3xl font-bold text-brand-primary mb-2">৩.৫ লক্ষ +</div>
                  <div className="text-dark-text/70">{t('storexStatsSave')}</div>
                </div>
                <div className="p-6 bg-dark-card rounded-xl border border-brand-secondary/20">
                  <div className="text-3xl font-bold text-brand-secondary mb-2">30%</div>
                  <div className="text-dark-text/70">{t('storexStatsCustomers')}</div>
                </div>
              </div>
              <p className="text-dark-text/80 leading-relaxed mb-6">
                {t('storexStatsDesc')}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-brand-primary rounded-lg font-semibold text-brand-primary hover:bg-brand-primary/10 transition-all"
              >
                {t('storexLearnMore')}
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden border border-brand-primary/20 bg-gradient-to-br from-dark-card to-dark-bg"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Shield className="w-24 h-24 text-brand-primary mx-auto mb-4 opacity-50" />
                  <p className="text-dark-text/60">Fraud Checker Visualization</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('storexTestimonialsTitle')}
            </h2>
            <p className="text-lg text-dark-text/70">
              {t('storexTestimonialsSubtitle')}
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-dark-card rounded-xl border border-brand-primary/20 hover:border-brand-primary/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Client {index + 1}</p>
                    <p className="text-xs text-dark-text/60">Business Owner</p>
                  </div>
                </div>
                <p className="text-dark-text/80 text-sm leading-relaxed">
                  &ldquo;Omix Solutions helped us automate our entire e-commerce business. Sales increased significantly!&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              {t('storexTestimonialsSubtitle')}
            </h2>
            <p className="text-lg text-dark-text/70 mb-8">
              {t('storexFinalCtaDesc')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg font-semibold text-white text-lg shadow-lg shadow-brand-primary/40 hover:shadow-brand-primary/60 transition-all"
            >
              {t('storexFinalCta')}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

