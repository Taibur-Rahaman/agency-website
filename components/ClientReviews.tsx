'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/components/LanguageProvider'

interface Review {
  name: string
  role: string
  text: string
  textBn: string
  avatar: string
}

const reviews: Review[] = [
  {
    name: 'Rahim Uddin',
    role: 'Founder, Dhaka Mart',
    text: 'Omix Solutions completely transformed our online store. Sales and trust both went up.',
    textBn: 'ওমিক্স সলিউশনস আমাদের অনলাইন স্টোরকে সম্পূর্ণরূপে রূপান্তরিত করেছে। বিক্রয় এবং বিশ্বাস উভয়ই বেড়েছে।',
    avatar: '/clients/client-1.jpg',
  },
  {
    name: 'Sarah Ahmed',
    role: 'Personal Brand & Coach',
    text: 'The website feels premium and the marketing strategy brought real clients, not just traffic.',
    textBn: 'ওয়েবসাইটটি প্রিমিয়াম মনে হয় এবং মার্কেটিং কৌশল আসল ক্লায়েন্ট এনেছে, শুধু ট্রাফিক নয়।',
    avatar: '/clients/client-2.jpg',
  },
  {
    name: 'Global Tech Ltd.',
    role: 'SaaS Startup',
    text: 'From branding to landing pages, everything looks world-class and performs great.',
    textBn: 'ব্র্যান্ডিং থেকে ল্যান্ডিং পেজ পর্যন্ত, সবকিছু বিশ্ব-মানের দেখায় এবং দুর্দান্ত কাজ করে।',
    avatar: '/clients/client-3.jpg',
  },
]

export default function ClientReviews() {
  const { t, lang } = useLanguage()
  
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8" id="reviews">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-brand-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            {t('reviewsStories')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('reviewsTitle')}
          </h2>
          <p className="text-lg text-dark-text/70 max-w-2xl mx-auto">
            {t('reviewsSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-dark-card/80 rounded-2xl border border-brand-primary/20 overflow-hidden backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10 opacity-70" />
              <div className="relative p-7 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-brand-primary/40 bg-dark-bg">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-dark-text/60">{review.role}</p>
                  </div>
                </div>
                <p className="text-sm text-dark-text/80 leading-relaxed flex-1">
                  &ldquo;{lang === 'bn' ? review.textBn : review.text}&rdquo;
                </p>
                <div className="flex items-center gap-1 text-brand-primary text-xs mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  <span className="text-dark-text/60 ml-1">5.0</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
