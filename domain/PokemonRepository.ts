import { Pokemon } from './Pokemon';

export interface PokemonRepository {
  getAll(): Promise<Pokemon[]>;
  // Puedes agregar más métodos como getById, save, etc.
} 