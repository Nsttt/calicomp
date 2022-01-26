<script lang="ts">
  import { drinkSelection } from '../stores/store';
  import { drink } from '../stores/drinkStore';
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

  const setSelectedCocktail = (name: string) => {
    Object.keys(Cocktails).map((key) => {
      if (key === name) {
        $drink.name = name;
        $drink.description = Cocktails[key].Description;
        $drink.flavor = Cocktails[key].Flavor;
        $drink.price = Cocktails[key].Price;
        $drink.techniques = Cocktails[key].Techniques;
        $drink.type = Cocktails[key].Type;
        $drink.ingredients = Cocktails[key].Ingredients;
      }
    });
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
      <a
        on:click={() => setSelectedCocktail(name)}
        href={`/drink/${name.toLowerCase().replace(/\s+/g, '')}`}
      >
        {name}
      </a>
    {/each}
  </div>
{/if}
