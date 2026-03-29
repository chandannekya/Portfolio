"use client";
import { useState, useEffect } from "react";

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
}

export function useLeetCodeStats() {
  const [data, setData]       = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/chandannekya")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((json) => {
        setData({
          totalSolved:  json.totalSolved  ?? 0,
          easySolved:   json.easySolved   ?? 0,
          mediumSolved: json.mediumSolved ?? 0,
          hardSolved:   json.hardSolved   ?? 0,
          totalEasy:    json.totalEasy    ?? 800,
          totalMedium:  json.totalMedium  ?? 1600,
          totalHard:    json.totalHard    ?? 700,
        });
      })
      .catch(() => setError("Failed to load LeetCode stats"))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
