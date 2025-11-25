"use client";

import { useEffect, useState, useCallback } from "react";

export default function useDomains() {
  const [domains, setDomains] = useState([]);

  const load = useCallback(() => {
    fetch(`/api/domains`, { cache: "no-store" })
      .then(res => res.json())
      .then(data => setDomains(data));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { domains, refresh: load };
}
