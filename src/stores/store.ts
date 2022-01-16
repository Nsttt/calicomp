import { writable } from 'svelte/store';

export const drinkSelection = writable<{
  isOpen: boolean;
  letter: string;
  flavor: string;
  type: string;
}>({
  isOpen: false,
  letter: '',
  flavor: '',
  type: '',
});
