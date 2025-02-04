<script lang="ts">
    let message: string = "This is the About Page.";
</script>

<style>
    h2 {
        font-size: var(--font-size-default);
        font-weight: var(--font-weight-bold );
        color: var(--color-grey);
        margin: 2rem;
    }

    p {
        font-size: var(--font-size-small);
        color: var(--color-grey);
    }
</style>

<h2>{message}</h2>
<p>The main view "Home" shows a table of Electricity Data. </p>
