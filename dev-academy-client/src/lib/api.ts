// src/lib/api.ts
import type { ElectricityData } from "./types";

export async function fetchElectricityData(page: number): Promise<ElectricityData[]> {
    const response = await fetch(`/api/daily-stats?page=${page}`);

    if (!response.ok) {
        throw new Error("Failed to fetch electricity data");
    }

    return response.json();
}
