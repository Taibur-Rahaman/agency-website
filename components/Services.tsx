'use client'

import { motion } from 'framer-motion'
import { Globe, Palette, TrendingUp, Video, Brain, Code } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useLanguage } from '@/components/LanguageProvider'

const Scene3D = dynamic(() => import('@/components/3D/Scene3D'), { ssr: false })
const Laptop = dynamic(() => import('@/components/3D/Laptop'), { ssr: false })
const Palette3D = dynamic(() => import('@/components/3D/Palette'), { ssr: false })
const Chart = dynamic(() => import('@/components/3D/Chart'), { ssr: false })
const VideoCamera = dynamic(() => import('@/components/3D/VideoCamera'), { ssr: false })
const BrandCube = dynamic(() => import('@/components/3D/BrandCube'), { ssr: false })
const CodeBlock = dynamic(() => import('@/components/3D/CodeBlock'), { ssr: false })
const Rocket = dynamic(() => import('@/components/3D/Rocket'), { ssr: false })

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Business websites, E-commerce platforms, Portfolio & landing pages. Fast, secure & mobile-friendly design.',
    color: 'from-neon-cyan to-neon-blue',
    gradientColors: ['#00d9ff', '#3b82f6'],
    features: ['Business Websites', 'E-commerce', 'Portfolio Pages', 'Mobile-Friendly'],
    model: Laptop,
  },
  {
    icon: Palette,
    title: 'UI/UX & Graphic Design',
    description: 'Logo & brand identity, Social media designs, Website UI/UX, Marketing creatives.',
    color: 'from-neon-purple to-neon-pink',
    gradientColors: ['#9333ea', '#d946ef'],
    features: ['Logo Design', 'Brand Identity', 'Social Media', 'UI/UX Design'],
    model: Palette3D,
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Facebook & Instagram Ads, Google Ads, SEO, Social Media Management.',
    color: 'from-neon-pink to-neon-purple',
    gradientColors: ['#d946ef', '#9333ea'],
    features: ['Social Media Ads', 'Google Ads', 'SEO', 'SMM'],
    model: Chart,
  },
  {
    icon: Video,
    title: 'Video Editing & Motion',
    description: 'Promotional videos, Reels & short videos, YouTube editing, Motion graphics.',
    color: 'from-neon-blue to-neon-cyan',
    gradientColors: ['#3b82f6', '#00d9ff'],
    features: ['Promotional Videos', 'Reels', 'YouTube Editing', 'Motion Graphics'],
    model: VideoCamera,
  },
  {
    icon: Brain,
    title: 'Branding & Strategy',
    description: 'Brand positioning, Content strategy, Digital growth planning.',
    color: 'from-neon-green to-neon-cyan',
    gradientColors: ['#10b981', '#00d9ff'],
    features: ['Brand Positioning', 'Content Strategy', 'Growth Planning'],
    model: BrandCube,
  },
  {
    icon: Code,
    title: 'Custom Solutions',
    description: 'Tailored digital solutions to meet your unique business needs.',
    color: 'from-neon-purple to-neon-blue',
    gradientColors: ['#9333ea', '#3b82f6'],
    features: ['Custom Development', 'API Integration', 'Automation'],
    model: CodeBlock,
  },
]

export default function Services() {
  const { t } = useLanguage()
  
  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg md:text-xl text-dark-text/80 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: '0 10px 40px rgba(0, 217, 255, 0.2)'
                }}
                className="relative group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${service.gradientColors[0]}, ${service.gradientColors[1]})`,
                  }}
                />
                <div className="relative p-6 bg-dark-card rounded-2xl border border-brand-primary/20 hover:border-brand-primary/40 transition-all h-full backdrop-blur-sm">
                  {/* Service 3D Model Area */}
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-dark-card to-dark-bg border border-brand-primary/10">
                    <Scene3D cameraPosition={[0, 0, 4]} className="absolute inset-0">
                      {service.model && (
                        <service.model position={[0, 0, 0]} />
                      )}
                    </Scene3D>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card/90 via-dark-card/50 to-transparent pointer-events-none"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-dark-text/70 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-dark-text/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.div
                    className="mt-4 pt-4 border-t border-brand-primary/10"
                  >
                    <span className="text-brand-primary text-sm font-semibold group-hover:underline cursor-pointer">
                      Learn More →
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

