'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Particles from '@/components/Particles'
import ScrollIndicator from '@/components/ScrollIndicator'
import ImageGallery from '@/components/ImageGallery'
import { useLanguage } from '@/components/LanguageProvider'

export default function ShowcasePage() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.3, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const sections = [
    {
      id: 'hero',
      title: t('showcaseHeroTitle'),
      subtitle: t('showcaseDigitalExcellence'),
      description: t('showcaseExcellenceDesc'),
      image: '🚀',
      color: 'from-brand-primary to-brand-secondary'
    },
    {
      id: 'vision',
      title: t('aboutVision'),
      subtitle: t('showcaseBeyondLimits'),
      description: t('showcaseLimitsDesc'),
      image: '💡',
      color: 'from-brand-secondary to-brand-accent'
    },
    {
      id: 'mission',
      title: t('aboutMission'),
      subtitle: t('showcaseGrowthDriven'),
      description: t('showcaseGrowthDesc'),
      image: '🎯',
      color: 'from-brand-accent to-brand-primary'
    },
    {
      id: 'results',
      title: t('showcaseProvenSuccess'),
      subtitle: t('showcaseProvenSuccess'),
      description: t('showcaseSuccessDesc'),
      image: '📈',
      color: 'from-brand-primary via-brand-secondary to-brand-accent'
    }
  ]

  return (
    <main className="relative min-h-screen bg-dark-bg overflow-hidden">
      <Particles />
      <Navigation />
      
      <div ref={containerRef} className="relative">
        {/* Hero Section - Fixed */}
        <motion.section
          style={{ y, opacity, scale }}
          className="fixed inset-0 flex items-center justify-center z-10"
        >
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-7xl md:text-9xl font-bold mb-4 text-white">
                {t('showcaseHeroTitle')}
              </h1>
              <p className="text-2xl md:text-4xl text-brand-primary font-light">
                {t('showcaseHeroSubtitle')}
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl text-dark-text/70 max-w-2xl mx-auto mb-12"
            >
              {t('showcaseHeroDescription')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg font-semibold text-white"
              >
                {t('showcaseGetStarted')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-brand-primary rounded-lg font-semibold text-brand-primary"
              >
                {t('showcaseLearnMore')}
              </motion.button>
            </motion.div>
          </div>
          <ScrollIndicator />
        </motion.section>

        {/* Scrollable Content */}
        <div className="relative z-20 pt-[100vh]">
          {sections.map((section, index) => (
            <SectionBlock key={section.id} section={section} index={index} />
          ))}
          
          {/* Image Gallery Section */}
          <ImageGallery 
            images={[
              {
                id: '1',
                title: t('showcaseWebDevTitle'),
                description: t('showcaseWebDevDesc'),
                gradient: 'from-brand-primary/30 to-brand-secondary/30'
              },
              {
                id: '2',
                title: t('showcaseDesignTitle'),
                description: t('showcaseDesignDesc'),
                gradient: 'from-brand-secondary/30 to-brand-accent/30'
              },
              {
                id: '3',
                title: t('showcaseMarketingTitle'),
                description: t('showcaseMarketingDesc'),
                gradient: 'from-brand-accent/30 to-brand-primary/30'
              }
            ]}
          />
        </div>
      </div>
    </main>
  )
}

function SectionBlock({ section, index }: { section: any, index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4 py-32"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center text-6xl mb-6 shadow-2xl`}
          >
            {section.image}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-brand-primary text-sm font-semibold uppercase tracking-wider mb-2"
          >
            {section.subtitle}
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            {section.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-dark-text/80 leading-relaxed"
          >
            {section.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`relative h-96 rounded-2xl overflow-hidden border border-brand-primary/20 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-20`}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl opacity-50">{section.image}</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

