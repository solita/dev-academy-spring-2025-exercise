<script lang="ts">
    export let page: number = 1;
    export let totalPages: number = 10;
    export let onPageChange: (newPage: number) => void;

    const prevPage = () => page > 1 && onPageChange(page - 1);
    const nextPage = () => page < totalPages && onPageChange(page + 1);
</script>

<div class="pagination">
    <button on:click={prevPage} disabled={page === 1}>Previous</button>
    <span>Page {page} of {totalPages}</span>
    <button on:click={nextPage} disabled={page === totalPages}>Next</button>
</div>

<style>
    .pagination { margin-top: 10px; text-align: center; }
    button { margin: 5px; padding: 5px 10px; }
</style>
