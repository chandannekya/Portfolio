"use client";
import { useState, useEffect } from "react";

export interface GFGStats {
  codingScore: number;
  problemsSolved: number;
  instituteRank: string;
}

export function useGFGStats() {
  const [data, setData]       = useState<GFGStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  useEffect(() => {
    fetch("https://geeks-for-geeks-stats-api.vercel.app/?userName=chandannekya")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((json) => {
        setData({
          codingScore:    json.codingScore        ?? 0,
          problemsSolved: json.totalProblemsSolved ?? 0,
          instituteRank:  json.instituteRank       ?? "N/A",
        });
      })
      .catch(() => setError("Failed to load GFG stats"))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
