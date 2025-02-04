export interface ElectricityData {
    day: string;               // Date of the measurement
    total_consumption: number | null; // Total consumption for the day
    total_production: number | null;  // Total production for the day
    avg_hourly_price: number | null;  // Average hourly price for the day
    longest_negative_price_hrs: number | null;  // Longest consecutive negative price (hrs)
}
