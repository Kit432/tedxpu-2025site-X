"use client";

import { useEffect } from "react";

let hasLoggedSignature = false;

export default function ConsoleSignature() {
  useEffect(() => {
    if (hasLoggedSignature) {
      return;
    }

    hasLoggedSignature = true;

    console.log(
      "%cBuilt by Λιν Χονγκ Τσε (Κιτ) - TEDxPanteion University X Website\nGithub: https://github.com/Kit432",
      "font-size: 14px; font-weight: bold; color: #009b50;"
    );
  }, []);

  return null;
}
