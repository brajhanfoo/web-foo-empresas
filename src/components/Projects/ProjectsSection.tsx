'use client'

import { useState } from 'react'
import ProjectCard from './ProjectCard'
import Heading from '../Heading'
import { projectsData } from '@/app/services/_data/projectsData'

export default function ProjectsSection() {
  const categories = Array.from(new Set(projectsData.map((p) => p.category)))
  const [active, setActive] = useState(categories[0])

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">

      <Heading text="Proyectos" />

      {/* Categorías estilo etiqueta pequeña como en screenshot */}
      <div className="flex gap-4 mt-6 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`
              px-4 py-1.5 rounded-full text-sm transition cursor-pointer
              ${active === cat
                ? 'bg-purple-600 text-white'
                : 'bg-white/10 text-white hover:bg-white/20'}
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid limpia EXACTA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData
          .filter((p) => p.category === active)
          .map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
      </div>
    </section>
  )
}

