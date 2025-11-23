import { Project } from '@/app/services/_data/projectsData'
import Image from 'next/image'

interface Properties {
  project: Project
}

export default function ProjectCard({ project }: Properties) {
  return (
    <div className="bg-black/20 rounded-xl overflow-hidden border border-white/10 shadow-lg">
      
      {/* Número */}
      <div className="px-3 py-2 text-xs text-white/70">
        [{project.id.toString().padStart(2, '0')}]
      </div>

      {/* Imagen */}
      <div className="relative w-full h-64">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Footer negro */}
      <div className="bg-black px-4 py-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-white/70">{project.subtitle}</p>
      </div>

      {/* Año (abajo derecha) */}
      <div className="text-right px-4 pb-3 text-xs text-white/60">
        {project.year}
      </div>
    </div>
  )
}

