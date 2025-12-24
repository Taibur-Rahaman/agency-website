'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex flex-col items-center gap-2 text-brand-primary"
      >
        <span className="text-sm font-medium">Scroll</span>
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </motion.div>
  )
}

