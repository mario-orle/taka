import { Pokemon } from '../domain/Pokemon';
import { PokemonRepository } from '../domain/PokemonRepository';
import { pokemonsMock } from '../mocks/pokemons.mock';

export class MockPokemonRepository implements PokemonRepository {
  async getAll(): Promise<Pokemon[]> {
    return pokemonsMock;
  }
} 