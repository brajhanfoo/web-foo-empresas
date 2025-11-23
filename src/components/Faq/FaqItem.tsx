'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { Faq } from '@/app/services/_data/faqData'

interface Properties {
  faq: Faq
}

export default function FaqItem({ faq }: Properties) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full mx-auto border-b border-white/10">
      {/* QUESTION BUTTON */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left font-medium 
        text-gray-200 hover:text-white transition-colors"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${faq.id}`}
        id={`faq-heading-${faq.id}`}
      >
        <span className="text-lg">{faq.question}</span>

        <FiChevronDown
          className={`shrink-0 text-2xl text-violet-500 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          aria-hidden="true"
        />
      </button>

      {/* ANSWER */}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={`faq-panel-${faq.id}`}
            role="region"
            aria-labelledby={`faq-heading-${faq.id}`}
            initial={{ height: 0, opacity: 0, y: -8 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pb-6 text-gray-400 leading-relaxed text-base">
              <p className="whitespace-pre-line">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
