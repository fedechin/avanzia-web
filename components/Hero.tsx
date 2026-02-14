import Image from "next/image";
import CalendlyButton from "./CalendlyButton";

export default function Hero() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold leading-tight text-dark md:text-4xl lg:text-5xl">
              Agente de Inteligencia Artificial para Ventas y Atención al
              Cliente
            </h1>
            <p className="mt-4 text-lg text-gray-600 md:text-xl">
              Respondé consultas 24/7, filtrá oportunidades reales y
              profesionalizá la atención de tu empresa con inteligencia
              artificial.
            </p>
            <p className="mt-2 text-base font-medium text-primary">
              AvanzIA no reemplaza personas. Potencia equipos.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <button className="rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-white transition hover:bg-primary-600 active:scale-95">
                Probá el Agente IA
              </button>
              <CalendlyButton className="rounded-lg border-2 border-primary px-6 py-3 text-lg font-semibold text-primary transition hover:bg-primary-50 active:scale-95">
                Agendá una reunión
              </CalendlyButton>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/images/robot.svg"
              alt="Robot IA de AvanzIA"
              width={400}
              height={400}
              className="mx-auto h-auto w-full max-w-sm md:max-w-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
