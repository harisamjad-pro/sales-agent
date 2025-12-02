import React from "react";

export type Domains = {
  id: number;
  url: string;
  slug: string;
  created_at: string;
  image: string | null;
  user_id: string;
}

export type DomainsResponse = { data: Domains[]; error?: undefined } | { error: string; data?: undefined };
