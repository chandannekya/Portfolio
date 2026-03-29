"use client";
import { useState, useEffect } from "react";

export interface GitHubStats {
  totalCommits: number;
  repos: string;
  stars: string;
  contributions: { date: string; count: number }[];
}

export function useGitHubStats() {
  const [data, setData]       = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/chandannekya?y=last")
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((json) => {
        const contributions = json.contributions as { date: string; count: number }[];
        const total = contributions.reduce((a: number, d: { count: number }) => a + d.count, 0);
        setData({ totalCommits: total, repos: "20+", stars: "40+", contributions });
      })
      .catch(() => setError("Failed to load GitHub stats"))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
