"use client";

import { useState } from "react";

type LeadFormProps = {
  onSuccess: () => void;
};

export default function LeadForm({ onSuccess }: LeadFormProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      return "Todos los campos son obligatorios.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Ingresá un email válido.";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submit failed");

      onSuccess();
    } catch {
      setError("Error al enviar. Intentá de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border-t border-gray-200 bg-gray-50 p-4">
      <p className="mb-3 text-sm font-semibold text-dark">
        Dejanos tus datos para seguir chateando
      </p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-dark outline-none focus:border-primary"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-dark outline-none focus:border-primary"
        />
        <input
          type="tel"
          name="phone"
          placeholder="WhatsApp (ej: 0981123456)"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-dark outline-none focus:border-primary"
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-primary py-2 text-sm font-semibold text-white transition hover:bg-primary-600 disabled:opacity-50"
        >
          {isSubmitting ? "Enviando..." : "Continuar"}
        </button>
      </form>
    </div>
  );
}
