'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideIn } from '@/app/util/animations'

const Hero = () => {
  return (
    <section className="relative bg-black min-h-screen flex items-center px-10 md:px-12 lg:px-20 overflow-hidden">
      
      {/* BACKGROUND GLOW SUPERIOR */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-0 right-0 h-[350px]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(158,110,230,0.28)_0%,rgba(158,110,230,0)_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.85)_100%)]" />
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center w-full">
        
        {/* TEXTOS */}
        <div className="text-white">
          <motion.h1
            className="text-5xl lg:[54px] font-semibold leading-tight pb-6"
            variants={slideIn('left', 0.3)}
            initial="hidden"
            animate="show"
          >
            Transforma tu visión en{' '}
            <motion.span
              className="bg-linear-to-r from-fuchsia-500 via-violet-600 to-purple-800 bg-clip-text text-transparent"
              variants={slideIn('left', 0.4)}
              initial="hidden"
              animate="show"
            >
              Realidad digital
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl lg:text-[20px] font-normal max-w-lg pb-10"
            variants={slideIn('left', 0.5)}
            initial="hidden"
            animate="show"
          >
            Desarrollamos sitios y aplicaciones web que conectan con tu público y potencian tu negocio.
          </motion.p>

          <motion.button
            className="bg-linear-to-b from-[#780B90] to-[#31053A] px-10 py-3 text-xl font-semibold rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition"
            variants={slideIn('left', 0.6)}
            initial="hidden"
            animate="show"
          >
            Hablemos
          </motion.button>
        </div>

        {/* IMAGEN */}
        <motion.div
          className="relative hidden lg:flex justify-center"
          variants={slideIn('right', 0.3)}
          initial="hidden"
          animate="show"
        >
          <Image
            src="/computer.png"
            alt="Computadora representando desarrollo web"
            width={800}
            height={800}
            className="drop-shadow-[0_0_40px_rgba(158,110,230,0.3)] -mt-16"
          />
        </motion.div>
      </div>

      {/* GLOW INFERIOR */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px]">
        <div className="flex h-full">
          <div className="flex-1 opacity-30 mix-blend-screen bg-[radial-gradient(ellipse_at_center,hsl(var(--blue-500)_/_0.28)_0%,hsl(var(--blue-500)_/_0)_90%)]" />
          <div className="flex-1 opacity-30 mix-blend-screen bg-[radial-gradient(ellipse_at_center,hsl(var(--purple-500)_/_0.28)_0%,hsl(var(--purple-500)_/_0)_90%)]" />
        </div>
      </div>

    </section>
  )
}

export default Hero
