import { Service } from "@/app/services/_types/services.types"

interface Props {
  service: Service
}

export default function ServiceCard({ service }: Props) {
  const Icon = service.icon

  return (
    <div
      className="
        rounded-2xl 
        p-6 
        flex 
        flex-col 
        transition 
        backdrop-blur-sm

        bg-linear-to-br 
        from-[#2e2a2a80] 
        via-[#3a2f3380] 
        to-[#241f2880]

        border border-white/10 
        shadow-[0_0_25px_rgba(0,0,0,0.3)]
        hover:shadow-[0_0_35px_rgba(0,0,0,0.45)]
      "
    >
      {/* ICON */}
      <div className="text-violeta mb-4">
        <Icon size={30} />
      </div>

      {/* TITLE */}
      <h3 className="text-2xl font-semibold mb-2 text-white">
        {service.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-300 grow">
        {service.description}
      </p>

      <hr className="my-4 border-white/20" />

      {/* BUTTON — no modificado */}
      <button className="self-start bg-linear-to-b from-[#780B90] to-[#31053A] font-medium px-4 py-2 rounded-xl text-white transition cursor-pointer hover:from-[#910CB0] hover:to-[#4A0A57]">
        Saber más
      </button>
    </div>
  )
}



