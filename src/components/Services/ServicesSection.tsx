import { Service } from "@/app/services/_types/services.types"
import ServiceCard from "./ServiceCard"
import Heading from "../Heading"

interface PropertiesServices {
  services: Service[]
}

export default function ServicesSection({ services }: PropertiesServices) {
  return (
    <section
    id='services' 
      className="
        px-6 
        py-24 
        mx-auto 
        max-w-7xl 
    
      "
    >
      <Heading text="Servicios" />

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} service={s} />
        ))}
      </div>
    </section>
  )
}







