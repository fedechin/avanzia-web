const commercialBenefits = [
  "Atención inmediata y constante (24/7)",
  "Respuestas claras y consistentes",
  "Posibilidad de transferir a un humano",
];

const operativeBenefits = [
  "Conocimiento comercial documentado",
  "Menos dependencia de personas clave",
  "Organización y centralización del saber interno",
];

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <svg
        className="mt-1 h-5 w-5 shrink-0 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

export default function TwoColumnBenefits() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <div className="rounded-xl bg-light p-6 md:p-8">
          <h3 className="text-xl font-bold text-dark">
            Desde el área comercial:
          </h3>
          <ul className="mt-4 space-y-3">
            {commercialBenefits.map((b) => (
              <CheckItem key={b} text={b} />
            ))}
          </ul>
        </div>
        <div className="rounded-xl bg-light p-6 md:p-8">
          <h3 className="text-xl font-bold text-dark">
            Desde el área operativa:
          </h3>
          <ul className="mt-4 space-y-3">
            {operativeBenefits.map((b) => (
              <CheckItem key={b} text={b} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
