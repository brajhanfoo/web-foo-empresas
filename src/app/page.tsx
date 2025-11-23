import Hero from "@/components/Hero/Hero";
import ServicesSection from "@/components/Services/ServicesSection";
import { services } from "./services/_data/servicesData";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import TestimoniosSection from "@/components/Testimony/TestimonioSection";
import FaqSection from "@/components/Faq/FaqSection";


export default function Home() {
 
  return (
    <main className=" bg-black">
      <Hero />
      <ServicesSection services={services} />
      <ProjectsSection />
      <TestimoniosSection />
      <FaqSection />
     </main>
  );
}
