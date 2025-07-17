import { Pokemon } from '../domain/Pokemon';

export const pokemonsMock: Pokemon[] = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: ['Planta', 'Veneno'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    description: 'Bulbasaur puede sobrevivir durante días alimentándose solo de la luz del sol.'
  },
  {
    id: 4,
    name: 'Charmander',
    type: ['Fuego'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    description: 'La llama de su cola indica su fuerza vital. Si está débil, la llama arde débilmente.'
  },
  {
    id: 7,
    name: 'Squirtle',
    type: ['Agua'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    description: 'Cuando retrae su largo cuello en su caparazón, dispara agua a una presión increíble.'
  }
]; 