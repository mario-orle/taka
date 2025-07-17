<template>
  <div>
    <h1>Pokémon List</h1>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        <img :src="pokemon.image" :alt="pokemon.name" width="80" height="80" />
        <strong>{{ pokemon.name }}</strong> <span>({{ pokemon.type.join(', ') }})</span>
        <p>{{ pokemon.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getAllPokemons } from '../application/getAllPokemons';
import { MockPokemonRepository } from '../infrastructure/pokemonRepository';

const pokemons = ref([]);

onMounted(async () => {
  const repo = new MockPokemonRepository();
  pokemons.value = await getAllPokemons(repo);
});
</script>
