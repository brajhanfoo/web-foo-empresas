import Image from 'next/image'
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import { LOGOWEB } from '@/lib/imagePaths'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + texto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <Image
            src={LOGOWEB}
            alt="Logo"
            width={120}
            height={80}
            className="object-contain"
          />
          <p className="text-sm text-gray-400 max-w-xs">
            Impulsando soluciones tecnológicas centradas en talento.
          </p>
        </div>

        {/* Redes sociales */}
        <div className="flex space-x-4">
          {[
            {
              Icon: FaYoutube,
              url: "https://www.youtube.com/@FooTalentGroup",
              hover: "hover:text-red-500"
            },
            {
              Icon: FaInstagram,
              url: "https://www.instagram.com/footalentgroup/",
              hover: "hover:text-pink-500"
            },
            {
              Icon: FaLinkedin,
              url: "https://www.linkedin.com/company/footalentgroup",
              hover: "hover:text-blue-400"
            },
            {
              Icon: FaTiktok,
              url: "https://www.tiktok.com/@footalentgroup",
              hover: "hover:text-white" // TikTok suele ir en blanco
            }
          ].map(({ Icon, url, hover }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full bg-gray-900 transition ${hover}`}
            >
              <Icon className="text-xl" />
            </a>
          ))}
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-800 mt-8 pt-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          {/* Derechos */}
          <p>
            © {new Date().getFullYear()} Foo Talent Group. Todos los derechos reservados.
          </p>

          {/* Enlaces legales */}
          <div className="flex space-x-4">
            <a href="/terminos" className="hover:text-white transition">
              Términos y Condiciones
            </a>
            <a href="/privacidad" className="hover:text-white transition">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
