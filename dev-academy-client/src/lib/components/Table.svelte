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
            <th>Avg Price ($/kWh)</th>
            <th>Longest Negative Price (hrs)</th>
        </tr>
    </thead>
    <tbody>
        {#each data as item}
        <tr>
            <td>{item.date}</td>
            <td>{item.total_consumption}</td>
            <td>{item.total_production}</td>
            <td>{item.avg_price}</td>
            <td>{item.longest_negative_period}</td>
        </tr>
        {/each}
    </tbody>
</table>
