<script lang="ts">
  import Header from '$lib/header.svelte';

  import '../app.css';
</script>

<Header />
<main class="flex flex-col bg-black h-screen">
    <slot />
  <div class="block bg-cali-blue p-1 mt-auto ml-auto border-white border-t-4 border-l-4">
    <img class="w-28" src="calicomp-logo.png" alt="Calicomp Logo" />
  </div>
</main>
