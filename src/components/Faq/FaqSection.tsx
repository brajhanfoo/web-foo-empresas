import { faqData } from '@/app/services/_data/faqData'
import Heading from '../Heading'
import FaqItem from './FaqItem'

export default function FaqSection() {
  return (
    <section className="bg-black relative px-10 md:px-12 lg:px-16 pt-20 pb-24 overflow-hidden">
      {/* TITLE */}
      <Heading text="Preguntas Frecuentes" />

      {/* CONTAINER */}
      <div className="w-full text-white max-w-4xl mx-auto mt-10 space-y-4">
        {faqData.map((faq) => (
          <FaqItem key={faq.id} faq={faq} />
        ))}
      </div>

      {/* COLOR GLOW / GRADIENTS */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[380px]">
        <div className="flex h-full w-full justify-between opacity-40">
          <div
            className="flex-1 mix-blend-screen 
            bg-[radial-gradient(ellipse_at_center,hsl(var(--blue-500)_/_0.22)_40%,transparent_90%)]"
          />
          <div
            className="flex-1 mix-blend-screen 
            bg-[radial-gradient(ellipse_at_center,hsl(var(--purple-500)_/_0.22)_40%,transparent_90%)]"
          />
        </div>
      </div>
    </section>
  )
}
