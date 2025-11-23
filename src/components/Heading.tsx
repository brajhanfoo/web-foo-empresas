import Image from "next/image"

interface HeadingProps {
  text: string
}

export default function Heading({ text }: HeadingProps) {
  return (
    <div className="flex justify-center mb-16">
      <div className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-white">
        <span className="absolute top-0 left-1/2 w-[55%] h-0.5 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/70 to-transparent rounded-full" />

        <span className="grid place-items-center size-10 rounded-full bg-[radial-gradient(circle,#b042ff,#7a0bb4)] shadow-[0_0_20px_rgba(176,66,255,0.4)] ring-1 ring-white/20">
          <Image src="/setting.svg" width={20} height={20} alt="Icono servicios" />
        </span>

        <span className="text-lg font-medium">{text}</span>
      </div>
    </div>
  )
}


