export type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "rounded-br-md bg-primary text-white"
            : "rounded-bl-md bg-gray-100 text-dark"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
