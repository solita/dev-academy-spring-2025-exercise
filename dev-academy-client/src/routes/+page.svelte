<script lang="ts">
    import { onMount } from "svelte";
    import Table from "../lib/components/Table.svelte";
    import Pagination from "../lib/components/Pagination.svelte";
    import { electricityData, loading } from "../lib/stores/dataStore";
    import { fetchElectricityData } from "../lib/api";
    import type { ElectricityData } from "../lib/types";

    let page: number = 1;
    let totalPages: number = 1;

    async function loadData() {
        try {
            loading.set(true);
            const data: ElectricityData[] = await fetchElectricityData(page);
            electricityData.set(data);
            totalPages = Math.ceil(100 / 10); // Replace with real total pages
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            loading.set(false);
        }
    }

    function changePage(newPage: number) {
        if (newPage >= 1 && newPage <= totalPages) {
            page = newPage;
            loadData();
        }
    }

    onMount(loadData);
</script>

<style>
    .container {
        background-color: var(--color-white);
        padding: var(--spacing-default);
        border-radius: var(--border-radius-default);
        color: var(--color-abyss-blue);
        margin: 1rem;
    }

    .loading {
        font-size: var(--font-size-default);
        color: var(--color-turquoise);
    }
</style>

{#if $loading}
    <p class="loading">Loading...</p>
{:else}
    <div class="container">
        <Table data={$electricityData} />
        <Pagination {page} {totalPages} onPageChange={changePage} />
    </div>
{/if}
