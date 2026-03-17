import BrainIcon from "./BrainIcon";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 px-4 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <BrainIcon className="h-9 w-9" />
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-xl font-bold text-dark">AvanzIA</span>
            <span className="hidden text-[10px] tracking-wider text-gray-400 sm:block">
              Pensar. Ejecutar. Avanzar.
            </span>
          </div>
        </a>
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#beneficios"
            className="hidden text-sm font-medium text-gray-600 transition hover:text-primary md:block"
          >
            Beneficios
          </a>
          <a
            href="#implementacion"
            className="hidden text-sm font-medium text-gray-600 transition hover:text-primary md:block"
          >
            Implementación
          </a>
          <a
            href="#precio"
            className="hidden text-sm font-medium text-gray-600 transition hover:text-primary md:block"
          >
            Precio
          </a>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "595000000000"}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary-600 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97]"
          >
            Contactanos
          </a>
        </div>
      </div>
    </nav>
  );
}
