export default function BrainIcon({
  className = "h-8 w-8",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const brain = variant === "dark" ? "#1E4B8E" : "#E8F4FD";
  const fold = variant === "dark" ? "#E8F4FD" : "#1E4B8E";
  const accent = "#3B82F6";

  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left hemisphere */}
      <path
        d="M32 12C32 12 28 8 22 8C16 8 10 12 10 20C10 20 6 22 6 28C6 34 10 38 10 38C10 38 8 42 10 46C12 50 16 52 20 52C20 52 22 56 28 56C32 56 32 52 32 52"
        fill={brain}
      />
      {/* Right hemisphere */}
      <path
        d="M32 12C32 12 36 8 42 8C48 8 54 12 54 20C54 20 58 22 58 28C58 34 54 38 54 38C54 38 56 42 54 46C52 50 48 52 44 52C44 52 42 56 36 56C32 56 32 52 32 52"
        fill={brain}
      />
      {/* Center line */}
      <path d="M32 12V52" stroke={fold} strokeWidth="1.5" opacity="0.4" />
      {/* Brain folds - left */}
      <path d="M14 24C18 22 24 24 30 22" stroke={fold} strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
      <path d="M12 32C17 30 23 33 30 30" stroke={fold} strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
      <path d="M14 40C18 38 24 41 30 38" stroke={fold} strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
      {/* Brain folds - right */}
      <path d="M34 22C40 24 46 22 50 24" stroke={fold} strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
      <path d="M34 30C41 33 47 30 52 32" stroke={fold} strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
      <path d="M34 38C40 41 46 38 50 40" stroke={fold} strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
      {/* Circuit nodes */}
      <circle cx="20" cy="24" r="2.5" fill={accent} />
      <circle cx="44" cy="24" r="2.5" fill={accent} />
      <circle cx="16" cy="34" r="2.5" fill={accent} />
      <circle cx="48" cy="34" r="2.5" fill={accent} />
      <circle cx="22" cy="44" r="2.5" fill={accent} />
      <circle cx="42" cy="44" r="2.5" fill={accent} />
      <circle cx="32" cy="32" r="3" fill={accent} />
      {/* Circuit connections */}
      <line x1="20" y1="24" x2="32" y2="32" stroke={accent} strokeWidth="1" opacity="0.5" />
      <line x1="44" y1="24" x2="32" y2="32" stroke={accent} strokeWidth="1" opacity="0.5" />
      <line x1="16" y1="34" x2="32" y2="32" stroke={accent} strokeWidth="1" opacity="0.5" />
      <line x1="48" y1="34" x2="32" y2="32" stroke={accent} strokeWidth="1" opacity="0.5" />
      <line x1="22" y1="44" x2="32" y2="32" stroke={accent} strokeWidth="1" opacity="0.5" />
      <line x1="42" y1="44" x2="32" y2="32" stroke={accent} strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
