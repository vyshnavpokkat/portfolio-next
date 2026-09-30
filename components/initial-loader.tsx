"use client";

import { useEffect, useState } from "react";

export function InitialLoader() {
  const [phase, setPhase] = useState<"visible" | "leaving" | "hidden">(
    "visible",
  );

  useEffect(() => {
    const startedAt = performance.now();
    let leaveTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const finish = () => {
      const minimumDisplay = Math.max(0, 450 - (performance.now() - startedAt));
      leaveTimer = setTimeout(() => {
        setPhase("leaving");
        hideTimer = setTimeout(() => setPhase("hidden"), 380);
      }, minimumDisplay);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(leaveTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className={`initial-loader ${phase === "leaving" ? "is-leaving" : ""}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="loader-mark" aria-hidden="true">
        <span>Y</span>
        <svg viewBox="0 0 150 24" preserveAspectRatio="none">
          <path d="M3 15C40 5 100 7 147 12" />
        </svg>
      </div>
      <span className="loader-caption">portfolio / twenty twenty-six</span>
    </div>
  );
}
