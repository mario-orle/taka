import { Pokemon } from '../domain/Pokemon';
import { PokemonRepository } from '../domain/PokemonRepository';

export const getAllPokemons = (repo: PokemonRepository): Promise<Pokemon[]> => {
  return repo.getAll();
}; 