"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/health");
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);

        const result: { status?: string } = await response.json();
        if (!result.status) throw new Error("Missing status in API response");
        setData(result.status);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      {!loading && error ? <p>Error: {error}</p> : null}
      {!loading && !error ? <p>{data}</p> : null}
    </div>
  );
}
