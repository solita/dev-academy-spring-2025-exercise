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
        // A start to pagination
        const currentPageNumber = parseInt(url.searchParams.get('page') || '1', 10); // Default to page 1
        const countResult = await pool.query('SELECT COUNT(*) FROM ElectricityData');
        const totalRecords = parseInt(countResult.rows[0].count, 10);
        const rowsPerPage = totalRecords / 10;
        const offset = (currentPageNumber - 1) * rowsPerPage;
        const totalPages = Math.ceil(totalRecords / rowsPerPage);

        // Fetch all columns from the ElectricityData table
        const result = await pool.query(" \
            SELECT \
            DATE(date) AS day, \
            COALESCE(SUM(consumptionamount), 0) AS total_consumption, \
            COALESCE(SUM(productionamount), 0) AS total_production, \
            COALESCE(AVG(hourlyprice), 0) AS avg_hourly_price \
            FROM \
                ElectricityData \
            GROUP BY \
                DATE(date) \
            ORDER BY \
                day ASC; \
            "
        );


        // Send the data as JSON
        return new Response(JSON.stringify(result.rows), { status: 200 });
    } catch (error) {
        console.error('Error fetching data:', error);
        return new Response('Error fetching data', { status: 500 });
    }
  };
