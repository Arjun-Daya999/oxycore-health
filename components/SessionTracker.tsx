"use client";

import { useEffect } from "react";

export default function SessionTracker() {
  useEffect(() => {
    if (!sessionStorage.getItem("hbot_session_id")) {
      sessionStorage.setItem("hbot_session_id", Math.random().toString(36).substring(2, 15));
    }
  }, []);
  return null;
}
