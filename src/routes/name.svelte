<script lang="ts">
  import { drinkSelection } from '../stores/store';
  import Cocktails from '../../static/cocktails.json';

  let list = {};
  const letters = ['B', 'C', 'F', 'G', 'M', 'P', 'S', 'Z'];

  const getCocktails = (param: string) => {
    Object.keys(Cocktails)
      .filter((key) => key.startsWith(param))
      .reduce((obj, key) => {
        obj[key] = Cocktails[key];
        return (list = obj);
      }, {});
  };

  const openList = (letter: string) => {
    if ($drinkSelection.isOpen === false) {
      $drinkSelection.isOpen = true;
    }

    $drinkSelection.letter = letter;
    getCocktails(letter);
  };
</script>

<h1 class="p-2 text-xl">Search by: Name</h1>
<div class="grid grid-cols-2 gap-x-20 gap-y-12 mt-3 text-xl text-center">
  {#each letters as letter}
    <button
      on:click={() => {
        openList(letter);
      }}>{letter}</button
    >
  {/each}
</div>
{#if $drinkSelection.isOpen}
  <div class="grid grid-cols-2 gap-x-20 gap-y-12 mt-10 text-xl px-2">
    {#each Object.keys(list) as name}
      <a href={`/drink/${name.toLowerCase().replace(/\s+/g, '')}`}>
        {name}
      </a>
    {/each}
  </div>
{/if}
