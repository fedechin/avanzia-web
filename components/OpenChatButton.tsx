"use client";

export default function OpenChatButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("open-chat"))}
      className={className}
    >
      {children}
    </button>
  );
}
