// src/routes/api/daily-stats/+server.ts
import pkg from 'pg';
const { Pool } = pkg;
import type { RequestHandler } from "@sveltejs/kit";


const pool = new Pool({
    user: 'academy',
    host: 'localhost',
    database: 'electricity',
    password: 'academy',
    port: 5432,
  });

export const GET: RequestHandler = async ({ url }) => {
    try {
        const page = parseInt(url.searchParams.get('page') || '1', 10); // Default to page 1
        const limit = 25; // Set the number of records per page
        const offset = (page - 1) * limit; // Calculate offset for pagination

        // Fetch all columns from the ElectricityData table
        const result = await pool.query(" \
            SELECT \
                productionamount \
            FROM ElectricityData \
            ORDER BY date DESC");

        // Get the total number of records to calculate total pages
        const countResult = await pool.query('SELECT COUNT(*) FROM ElectricityData');
        const totalRecords = parseInt(countResult.rows[0].count, 10);
        const totalPages = Math.ceil(totalRecords / limit);

        // Send the data as JSON
        return new Response(JSON.stringify(result.rows), { status: 200 });
    } catch (error) {
        console.error('Error fetching data:', error);
        return new Response('Error fetching data', { status: 500 });
    }
  };
