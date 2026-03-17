import Image from "next/image";
import CalendlyButton from "./CalendlyButton";
import OpenChatButton from "./OpenChatButton";

export default function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-gradient-to-br from-white via-primary-50 to-light px-4 py-14 md:py-20">
      {/* Decorative blurred orb */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-dark md:text-4xl lg:text-5xl">
              Agente de Inteligencia Artificial para Ventas y Atención al
              Cliente
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 md:text-xl">
              Respondé consultas 24/7, filtrá oportunidades reales y
              profesionalizá la atención de tu empresa.
            </p>
            <p className="mt-2 text-base font-semibold text-primary">
              AvanzIA no reemplaza personas. Potencia equipos.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <OpenChatButton className="rounded-xl bg-primary px-7 py-3.5 text-lg font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-600 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.97]">
                Probá el Agente IA
              </OpenChatButton>
              <CalendlyButton className="rounded-xl border-2 border-primary/20 bg-white px-7 py-3.5 text-lg font-semibold text-primary transition hover:border-primary/40 hover:bg-primary-50 active:scale-[0.97]">
                Agendá una reunión
              </CalendlyButton>
            </div>
          </div>
          <div className="flex-1 animate-fade-up">
            <Image
              src="/images/robot.svg"
              alt="Robot IA de AvanzIA"
              width={400}
              height={400}
              className="mx-auto h-auto w-full max-w-xs sm:max-w-sm md:max-w-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
