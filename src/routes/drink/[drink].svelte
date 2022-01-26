<script lang="ts" context="module">
  import { drink } from '$store/drinkStore';
</script>

<h1 class="p-2 text-3xl">{$drink.name}</h1>
<h2 class="p-2 text-base max-w-xs">{$drink.description}</h2>
<h2 class="p-2 text-base max-w-xs">{$drink.flavor}</h2>
<h2 class="p-2 text-base max-w-xs">{$drink.type}</h2>
<h2 class="p-2 text-base max-w-xs">{$drink.techniques}</h2>
