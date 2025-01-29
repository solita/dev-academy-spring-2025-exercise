import type { ElectricityData } from "./types";

export async function fetchElectricityData(): Promise<ElectricityData[]> {
    const response = await fetch("/api/daily-stats");

    if (!response.ok) {
        throw new Error("Failed to fetch electricity data");
    }

    return response.json();
}
