'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useLanguage } from '@/components/LanguageProvider'

const Scene3D = dynamic(() => import('@/components/3D/Scene3D'), { ssr: false })
const Rocket = dynamic(() => import('@/components/3D/Rocket'), { ssr: false })

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left lg:text-left"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block text-white mb-2">{t('heroTitleBrand')}</span>
              <span className="block mt-2 text-3xl md:text-5xl text-dark-text/90">
                {t('heroLine1')}
              </span>
              <span className="block text-4xl md:text-6xl neon-text-subtle text-brand-primary mt-2">
                {t('heroLine2')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-dark-text/80 mb-8 leading-relaxed"
            >
              {t('heroSubtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg font-semibold text-lg text-white flex items-center gap-2 relative overflow-hidden group"
              >
                <span className="relative z-10">{t('heroPrimaryCta')}</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-brand-primary rounded-lg font-semibold text-lg text-brand-primary hover:bg-brand-primary/10 transition-all"
              >
                {t('heroSecondaryCta')}
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {([
                { key: 'heroFeature1' as const, icon: '✨' },
                { key: 'heroFeature2' as const, icon: '📈' },
                { key: 'heroFeature3' as const, icon: '👥' },
                { key: 'heroFeature4' as const, icon: '💎' },
              ] as const).map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 bg-dark-card/60 backdrop-blur-sm rounded-lg border border-brand-primary/20 hover:border-brand-primary/40 transition-all"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-xs md:text-sm text-dark-text/70 font-medium">{t(item.key)}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-brand-primary/30 glow-border bg-gradient-to-br from-dark-card to-dark-bg">
              <Scene3D cameraPosition={[0, 0, 5]} className="absolute inset-0">
                <Rocket position={[0, 0, 0]} />
                <mesh position={[-2, 1, 0]} rotation={[0, 0.5, 0]}>
                  <sphereGeometry args={[0.3, 16, 16]} />
                  <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={0.5} />
                </mesh>
                <mesh position={[2, -1, 0]} rotation={[0, -0.5, 0]}>
                  <sphereGeometry args={[0.25, 16, 16]} />
                  <meshStandardMaterial color="#9333ea" emissive="#9333ea" emissiveIntensity={0.5} />
                </mesh>
              </Scene3D>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-dark-text/60 text-sm font-medium">{t('heroVisualLabel')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating 3D elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              background: `radial-gradient(circle, rgba(${i % 2 === 0 ? '0, 255, 255' : '168, 85, 247'}, 0.2), transparent)`,
              filter: 'blur(40px)',
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  )
}

