import type { Pokemon } from '../domain/Pokemon';
import type { PokemonRepository } from '../domain/PokemonRepository';

export const getAllPokemons = (repo: PokemonRepository): Promise<Pokemon[]> => {
  return repo.getAll();
}; 