"use client";

export default function CalendlyButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const handleClick = () => {
    window.open(
      process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
