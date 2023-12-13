export enum Favorites {
  favs = "Favorites",
}

/***
 * Datos de los personajes
 */
export type DatosPersonaje = {
  id?: number;
  name: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;

  origin?: {
    name: string;
    url: string;
  };

  location?: {
    name: string;
    url: string;
  };

  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
};

/***
 * Datos de episodios
 */
export interface EpisodeDates {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

/***
 * Datos iniciales de la app
 */
export interface initialType {
  characters: DatosADevolver;
  loading: boolean;
  error: string | null;
  favorites: DatosPersonaje[];
  episodes: EpisodeDates[];
  darkMode: string;
}

export type DatosRecibidos = {
  page: number;
  name: string;
};

export type DatosADevolver = {
  pageTotales: number;
  characters: DatosPersonaje[];
};

/**
 * @param {boolean} esFavorito variable donde determina si el personaje esta en el array de favoritos
 * @param {DatosPersonaje} idCharacter informacion del personaje
 * @param {funcion} setCharacterFav funcion donde se cambia el valor de la variable esFavorito
 */

export type Datos = {
  esFavorito: boolean;
  idCharacter?: DatosPersonaje;
  setCharacterFav: React.Dispatch<React.SetStateAction<boolean>>;
};

export type personajesRecibidos = { personajes: Array<DatosPersonaje> };

/**
 * @param {number} maxPage  valor maximo de paginas
 * @param {number} page valor de la pagina actual
 * @param {function} setPage funcion para cambiar valor a page
 */

export type paginacion = {
  maxpage: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

/**
 * @param {function} changeName funcion que toma un parametro string
 * @param {string} defaultName string que sirve para poder cambiar el valor al input en caso de Limpiar filtro
 * @param {function} resetValue funcion que sirve para resetear los valores del input y de la busqueda
 */

export type filtro = {
  changeName: (name: string) => void;
  defaultValue: string;
  resetValue: () => void;
};
