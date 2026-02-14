"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "avanzia_lead_captured";
const MESSAGE_THRESHOLD = 3;

export function useLeadCapture(userMessageCount: number) {
  const [leadCaptured, setLeadCaptured] = useState(true); // default true to avoid flash

  useEffect(() => {
    setLeadCaptured(localStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  const shouldShowForm =
    !leadCaptured && userMessageCount >= MESSAGE_THRESHOLD;

  const markLeadCaptured = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setLeadCaptured(true);
  };

  return { shouldShowForm, leadCaptured, markLeadCaptured };
}
