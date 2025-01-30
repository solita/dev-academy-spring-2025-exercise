import { writable } from "svelte/store";
import type { ElectricityData } from "../types";

export const electricityData = writable<ElectricityData[]>([]);
export const loading = writable<boolean>(true);
        