import OpenChatButton from "./OpenChatButton";

const features = [
  "Agente IA personalizado para tu empresa",
  "Atención 24/7 sin interrupciones",
  "Respuestas consistentes y profesionales",
  "Sin costos de implementación",
  "Soporte y ajustes incluidos",
];

export default function PricingSection() {
  return (
    <section id="precio" className="grain relative overflow-hidden bg-gradient-to-b from-primary-50/30 via-light to-white px-4 py-16 md:py-24">
      <div className="relative mx-auto max-w-6xl">
        <div className="glow-card mx-auto max-w-lg rounded-2xl border border-primary-100/50 bg-white p-8 transition-shadow duration-300 md:p-10">
          <h2 className="text-center font-heading text-2xl font-extrabold tracking-tight text-dark md:text-3xl">
            Precio del servicio
          </h2>
          <p className="mt-6 text-center font-heading text-4xl font-extrabold text-primary md:text-5xl">
            Gs. 1.950.000
          </p>
          <p className="mt-1 text-center text-lg text-gray-500">
            / mes &mdash; IVA incluido
          </p>
          <ul className="mt-8 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <OpenChatButton className="rounded-xl bg-primary px-8 py-3.5 text-lg font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-600 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.97]">
              Probá el Agente IA
            </OpenChatButton>
          </div>
        </div>
      </div>
    </section>
  );
}
