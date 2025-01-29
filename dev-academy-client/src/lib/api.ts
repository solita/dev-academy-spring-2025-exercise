// src/lib/api.ts
import type { ElectricityData } from "./types";

export async function fetchElectricityData(page: number): Promise<ElectricityData[]> {
    const response = await fetch(`/api/daily-stats?page=${page}`);

    if (!response.ok) {
        throw new Error("Failed to fetch electricity data");
    }

    return response.json();
}


// // import { fetch, type ClientOptions } from '@tauri-apps/plugin-http';
// import type { WasteCode } from './types';
// // import { log } from "@tauri-apps/api/logger";

// const API_BASE = 'http://localhost:8000/api';

// enum ApiEndpoint {
// 	CONTAINERS = 'containers'
// }

// const createURL = (endpoint: ApiEndpoint) => {
// 	return `${API_BASE}/${endpoint}/`;
// };

// export const saveWasteContainer = async (
// 	wasteCode: WasteCode,
// 	weight: number
// ): Promise<WasteContainerResponse> => {
// 	const url = createURL(ApiEndpoint.CONTAINERS); // Ensure `createURL` is compatible with browser-based URL handling.

// 	// log("info", "This is a log from the Svelte frontend");
// 	// Options for the fetch request
// 	const options: RequestInit = {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({
// 			waste_type: wasteCode,
// 			weight_kilograms: weight
// 		}),
// 	};
// 	try {
// 		// Perform the fetch request
// 		const response = await fetch(url, options);

// 		if (!response.ok) {
// 		  throw new Error(
// 			`Failed to save waste container. Server responded with status: ${response.status}`
// 		  );
// 		}

// 		// Parse the JSON response
// 		const data: WasteContainerResponse = await response.json();
// 		return data;
// 	  } catch (error) {
// 		console.error('Error while saving variables:', error);
// 		throw error; // Re-throw the error for the caller to handle
// 	  }
// 	};

// 	interface WasteContainerResponse {
// 		id: string;
// 		waste_type: WasteCode;
// 		created_at: Date;
// 		weight_kilograms: number;
// 		volume_approximation_m3?: number;
// 	}
