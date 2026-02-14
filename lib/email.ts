type LeadData = {
  name: string;
  email: string;
  phone: string;
  company?: string;
};

export async function notifyNewLead(lead: LeadData) {
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFICATION_EMAIL;

  const subject = `Nuevo lead: ${lead.name}`;
  const body = [
    `Nombre: ${lead.name}`,
    `Email: ${lead.email}`,
    `Teléfono: ${lead.phone}`,
    lead.company ? `Empresa: ${lead.company}` : null,
    ``,
    `Fecha: ${new Date().toLocaleString("es-PY", { timeZone: "America/Asuncion" })}`,
  ]
    .filter(Boolean)
    .join("\n");

  // If Resend is configured, send email
  if (resendKey && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "AvanzIA <onboarding@resend.dev>",
        to,
        subject,
        text: body,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      throw new Error("Failed to send email");
    }

    return;
  }

  // Fallback: log to console
  console.log("=== NUEVO LEAD ===");
  console.log(body);
  console.log("==================");
}
