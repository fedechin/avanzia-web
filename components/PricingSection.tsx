const features = [
  "Agente IA personalizado para tu empresa",
  "Atención 24/7 sin interrupciones",
  "Respuestas consistentes y profesionales",
  "Sin costos de implementación",
  "Soporte y ajustes incluidos",
];

export default function PricingSection() {
  return (
    <section id="precio" className="bg-light px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 shadow-lg md:p-10">
          <h2 className="text-center text-2xl font-bold text-dark md:text-3xl">
            Precio del servicio
          </h2>
          <p className="mt-6 text-center text-4xl font-bold text-primary md:text-5xl">
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
            <button className="rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white transition hover:bg-primary-600 active:scale-95">
              Probá el Agente IA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
