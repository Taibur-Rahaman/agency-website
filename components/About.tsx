'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Users, Award } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useLanguage } from '@/components/LanguageProvider'

const Scene3D = dynamic(() => import('@/components/3D/Scene3D'), { ssr: false })
const BrandCube = dynamic(() => import('@/components/3D/BrandCube'), { ssr: false })
const Rocket = dynamic(() => import('@/components/3D/Rocket'), { ssr: false })

export default function About() {
  const { t } = useLanguage()
  
  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('aboutTitle')}
          </h2>
          <p className="text-lg text-dark-text/70 max-w-2xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* About 3D Scene */}
            <div className="relative h-64 rounded-2xl overflow-hidden border border-brand-primary/20 mb-6 bg-gradient-to-br from-dark-card to-dark-bg">
              <Scene3D cameraPosition={[0, 0, 5]} className="absolute inset-0">
                <BrandCube position={[-1, 0, 0]} />
                <Rocket position={[1, 0, 0]} />
                <mesh position={[0, 1.5, 0]}>
                  <torusGeometry args={[0.3, 0.1, 16, 32]} />
                  <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={0.4} />
                </mesh>
              </Scene3D>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-dark-text/60 text-sm font-medium">Omix Solutions</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-brand-primary mb-4">{t('aboutWhoWeAre')}</h3>
            <p className="text-base text-dark-text/80 leading-relaxed">
              <strong className="text-white">{t('heroTitleBrand')}</strong> {t('aboutWhoWeAreText1')}
            </p>
            <p className="text-base text-dark-text/80 leading-relaxed">
              {t('aboutWhoWeAreText2')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="p-6 bg-dark-card rounded-2xl border border-brand-primary/20 hover:border-brand-primary/40 transition-all">
              <Target className="w-10 h-10 text-brand-primary mb-4" />
              <h4 className="text-xl font-bold mb-3 text-white">{t('aboutMission')}</h4>
              <p className="text-dark-text/70 leading-relaxed">
                {t('aboutMissionText')}
              </p>
            </div>

            <div className="p-6 bg-dark-card rounded-2xl border border-brand-secondary/20 hover:border-brand-secondary/40 transition-all">
              <Eye className="w-10 h-10 text-brand-secondary mb-4" />
              <h4 className="text-xl font-bold mb-3 text-white">{t('aboutVision')}</h4>
              <p className="text-dark-text/70 leading-relaxed">
                {t('aboutVisionText')}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">{t('aboutTeamTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { role: 'Founder / Managing Director', desc: 'Handles planning, client communication, and business management', icon: '👔' },
              { role: 'Project Manager', desc: 'Oversees project execution and client relations', icon: '📋' },
              { role: 'Web Developer', desc: 'Builds powerful and scalable web solutions', icon: '💻' },
              { role: 'UI/UX & Graphic Designer', desc: 'Creates stunning visual experiences', icon: '🎨' },
              { role: 'Digital Marketer', desc: 'Drives growth through strategic marketing', icon: '📊' },
              { role: 'Video Editor', desc: 'Produces engaging video content', icon: '🎬' },
            ].map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="p-5 bg-dark-card rounded-xl border border-brand-primary/20 hover:border-brand-primary/40 transition-all"
              >
                <div className="text-3xl mb-3">{member.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-white">{member.role}</h4>
                <p className="text-dark-text/60 text-xs leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center p-8 bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10 rounded-2xl border border-brand-primary/30"
        >
          <Award className="w-12 h-12 text-brand-primary mx-auto mb-4" />
          <p className="text-base md:text-lg text-dark-text/80 max-w-3xl mx-auto">
            You don&apos;t need technical skills — your role is <strong className="text-white">management & decision-making</strong>. 
            We handle the technical expertise while you focus on growing your business.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

