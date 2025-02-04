<script lang="ts">
    import { onMount } from "svelte";
    import '../app.css';
</script>

<main>
    <h1>Electricity Data Dashboard ⚡</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
    <slot />
</main>


<style>
    main {
        text-align: center;
        padding: 2rem;
        margin: auto;
        background-color: var(--color-abyss-blue);
    }
    nav a {
        margin: 0 1rem;
        text-decoration: none;
        font-weight: bold;
        font-size: var(--font-size-default);
        color: var(--color-white);
        background-color: var(--color-grey);
    }
    h1 {
        font-size: var(--font-size-large);
        font-weight: var(--font-weight-bold);
        color: var(--color-white);
        margin: 3rem;
    }
</style>
