<script lang="ts">
    import { onMount } from "svelte";
</script>

<main>
    <h1>Electricity Data Dashboard ⚡</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
    <slot /> <!-- This renders the current page -->
</main>


<style>
    main {
        text-align: center;
        padding: 2rem;
        max-width: 900px;
        margin: auto;
    }
    nav a {
        margin: 0 1rem;
        text-decoration: none;
        font-weight: bold;
    }
</style>
