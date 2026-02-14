import { NextRequest, NextResponse } from "next/server";
import { notifyNewLead } from "@/lib/email";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company } = await req.json();

    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { success: false, error: "name, email y phone son obligatorios" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Email inválido" },
        { status: 400 }
      );
    }

    await notifyNewLead({ name, email, phone, company });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Leads API error:", error);
    return NextResponse.json(
      { success: false, error: "Error al procesar el lead" },
      { status: 500 }
    );
  }
}
