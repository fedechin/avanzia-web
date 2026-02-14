const steps = [
  {
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "Sin costos de implementación",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    text: "Sin carga para tu equipo de TI",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    text: "Sin aprendizaje de herramientas nuevas",
  },
];

export default function ImplementationSection() {
  return (
    <section id="implementacion" className="bg-light px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-dark md:text-3xl lg:text-4xl">
          Implementación simple, sin dolores de cabeza
        </h2>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          {steps.map((step) => (
            <div
              key={step.text}
              className="flex flex-1 items-start gap-4 rounded-xl bg-white p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                {step.icon}
              </div>
              <p className="text-lg font-medium text-dark">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
