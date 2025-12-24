'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Particles from '@/components/Particles'
import { useLanguage } from '@/components/LanguageProvider'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const { t, lang } = useLanguage()

  const plans = [
    {
      name: t('pricingPlan1Name'),
      price: t('pricingPlan1Price'),
      description: t('pricingPlan1Desc'),
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO',
        'Contact form',
        'Email support',
        '1 month free support'
      ],
      featuresBn: [
        '৫টি পেজ পর্যন্ত',
        'রেসপন্সিভ ডিজাইন',
        'বেসিক SEO',
        'কন্টাক্ট ফর্ম',
        'ইমেইল সাপোর্ট',
        '১ মাস বিনামূল্যে সাপোর্ট'
      ],
      popular: false,
      color: 'from-brand-primary to-brand-secondary'
    },
    {
      name: t('pricingPlan2Name'),
      price: t('pricingPlan2Price'),
      description: t('pricingPlan2Desc'),
      features: [
        'Up to 15 pages',
        'Custom design',
        'Advanced SEO',
        'Multiple forms',
        'Priority support',
        '3 months free support',
        'Analytics setup',
        'Social media integration'
      ],
      featuresBn: [
        '১৫টি পেজ পর্যন্ত',
        'কাস্টম ডিজাইন',
        'এডভান্সড SEO',
        'একাধিক ফর্ম',
        'অগ্রাধিকার সাপোর্ট',
        '৩ মাস বিনামূল্যে সাপোর্ট',
        'অ্যানালিটিক্স সেটআপ',
        'সোশ্যাল মিডিয়া ইন্টিগ্রেশন'
      ],
      popular: true,
      color: 'from-brand-secondary to-brand-accent'
    },
    {
      name: t('pricingPlan3Name'),
      price: t('pricingPlan3Price'),
      description: t('pricingPlan3Desc'),
      features: [
        'Unlimited pages',
        'Fully custom solution',
        'Enterprise SEO',
        'Custom integrations',
        '24/7 dedicated support',
        '6 months free support',
        'Advanced analytics',
        'API development',
        'Custom features'
      ],
      featuresBn: [
        'সীমাহীন পেজ',
        'সম্পূর্ণ কাস্টম সমাধান',
        'এন্টারপ্রাইজ SEO',
        'কাস্টম ইন্টিগ্রেশন',
        '২৪/৭ নিবেদিত সাপোর্ট',
        '৬ মাস বিনামূল্যে সাপোর্ট',
        'এডভান্সড অ্যানালিটিক্স',
        'API ডেভেলপমেন্ট',
        'কাস্টম ফিচার'
      ],
      popular: false,
      color: 'from-brand-accent to-brand-primary'
    }
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
              <span className="block text-white">{t('pricingTitle')}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-dark-text/80 max-w-3xl mx-auto"
            >
              {t('pricingSubtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const features = lang === 'bn' ? plan.featuresBn : plan.features
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative p-8 bg-dark-card rounded-2xl border-2 ${
                    plan.popular 
                      ? 'border-brand-primary shadow-lg shadow-brand-primary/20 scale-105' 
                      : 'border-brand-primary/20 hover:border-brand-primary/40'
                  } transition-all`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                    <span className="text-2xl font-bold text-white">{plan.name.charAt(0)}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-dark-text/70 text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-brand-primary">{plan.price}</span>
                    {plan.price !== 'Custom' && plan.price !== 'কাস্টম' && (
                      <span className="text-dark-text/60 text-sm ml-2">/project</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-dark-text/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/new#book"
                    className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg shadow-brand-primary/40 hover:shadow-brand-primary/60'
                        : 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/10'
                    }`}
                  >
                    {plan.price === 'Custom' || plan.price === 'কাস্টম' ? t('pricingContact') : t('pricingCTA')}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10 rounded-3xl border border-brand-primary/30"
          >
            <h2 className="text-3xl font-bold mb-4">{t('pricingContact')}</h2>
            <p className="text-lg text-dark-text/70 mb-8">
              {t('newPagePlanDesc')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/new#book"
                className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg font-semibold text-white shadow-lg shadow-brand-primary/40 hover:shadow-brand-primary/60 transition-all flex items-center gap-2"
              >
                {t('newPageBookCall')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:01601677122"
                className="px-8 py-4 border-2 border-brand-primary rounded-lg font-semibold text-brand-primary hover:bg-brand-primary/10 transition-all"
              >
                {t('contactCall')}: 01601677122
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

