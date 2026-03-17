import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AvanzIA - Agente de Inteligencia Artificial";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1E4B8E 0%, #122D55 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "#3B82F6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            A
          </div>
          <span
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            AvanzIA
          </span>
        </div>
        <div
          style={{
            fontSize: "36px",
            color: "#E8F4FD",
            textAlign: "center",
            lineHeight: 1.4,
            maxWidth: "900px",
          }}
        >
          Agente de Inteligencia Artificial para Ventas y Atención al Cliente
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#A3BBDD",
            marginTop: "24px",
          }}
        >
          Pensar. Ejecutar. Avanzar.
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "#7599CC",
            marginTop: "32px",
          }}
        >
          www.avanzia.com.py
        </div>
      </div>
    ),
    { ...size }
  );
}
