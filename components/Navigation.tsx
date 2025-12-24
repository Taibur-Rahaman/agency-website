'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { key: 'navHome' as const, href: '/new' },
    { key: 'navWebDev' as const, href: '/web-development' },
    { key: 'navEcommerce' as const, href: '/storex-style' },
    { key: 'navPricing' as const, href: '/pricing' },
    { key: 'navShowcase' as const, href: '/showcase' },
    { key: 'navAbout' as const, href: '/new#about' },
    { key: 'navContact' as const, href: '/new#contact' },
  ] as const

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-card/80 backdrop-blur-md border-b border-brand-primary/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white"
          >
            <span className="neon-text-subtle text-brand-primary">Omix</span> Solutions
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                }}
                className="text-dark-text/80 hover:text-brand-primary transition-colors relative group"
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg font-semibold text-white shadow-lg hover:shadow-brand-primary/30 transition-all"
          >
            {t('navCta')}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
