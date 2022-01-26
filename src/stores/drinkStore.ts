import { writable } from 'svelte/store';

export const drink = writable<{
  name: string;
  description: string;
  flavor: string;
  type: string;
  techniques: string;
  ingredients: Record<string, number>;
  price: string;
}>({
  name: 'test',
  description: 'test',
  flavor: 'test',
  type: 'test',
  techniques: 'test',
  ingredients: {},
  price: 'test',
});
