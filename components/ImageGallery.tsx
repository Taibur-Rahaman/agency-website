'use client'

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/components/LanguageProvider'

interface ImageGalleryProps {
  images: Array<{
    id: string
    title: string
    description: string
    gradient: string
  }>
}

interface ImageItemProps {
  image: {
    id: string
    title: string
    description: string
    gradient: string
  }
  index: number
  scrollYProgress: MotionValue<number>
}

function ImageItem({ image, index, scrollYProgress }: ImageItemProps) {
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [index * 50, index % 2 === 0 ? -150 : 150]
  )
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.7, 0.9, 1],
    [0, 0.5, 1, 1, 0.5, 0]
  )
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.8, 1, 1, 1, 0.9]
  )

  return (
    <motion.div
      style={{ y: imageY, opacity: imageOpacity, scale: imageScale }}
      className="relative"
    >
      <div className={`h-[600px] rounded-2xl overflow-hidden border border-brand-primary/20 bg-gradient-to-br ${image.gradient} relative`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-4">{image.title}</h3>
          <p className="text-lg text-white/80 max-w-2xl">{image.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  return (
    <section ref={containerRef} className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {t('galleryWorkTitle')}
          </h2>
          <p className="text-lg text-dark-text/70">
            {t('galleryWorkSubtitle')}
          </p>
        </motion.div>

        <div className="space-y-32">
          {images.map((image, index) => (
            <ImageItem
              key={image.id}
              image={image}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

