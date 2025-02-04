<script lang="ts">
    import type { ElectricityData } from "../types";

    export let data: ElectricityData[] = [];
  </script>

  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Total Consumption (kWh)</th>
        <th>Total Production (MWh)</th>
        <th>Average Hourly Price (€)</th>
        <th>Longest consecutive negative price (hrs)</th>
      </tr>
    </thead>
    <tbody>
      {#each data as item}
        <tr>
          <td>{new Date(item.day).toLocaleDateString()}</td>
          <td>{item.total_consumption !== null && !isNaN(item.total_consumption) ? item.total_consumption : 'N/A'}</td>
          <td>{item.total_production !== null && !isNaN(item.total_production) ? item.total_production : 'N/A'}</td>
          <td>{item.avg_hourly_price !== null && !isNaN(item.avg_hourly_price) ? item.avg_hourly_price : 'N/A'}</td>
          <td>{item.longest_negative_price_hrs !== null && !isNaN(item.longest_negative_price_hrs) ? item.longest_negative_price_hrs : 'N/A'}</td>
        </tr>
      {/each}
    </tbody>
  </table>
