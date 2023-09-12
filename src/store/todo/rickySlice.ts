import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
export interface EpisodeDates {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

interface initialType {
  characters: DatosADevolver;
  loading: boolean;
  error: string | null;
  favorites: DatosPersonaje[];
  episodes: EpisodeDates[];
}

export type DatosRecibidos = {
  page: number;
  name: string;
};

type DatosADevolver = {
  pageTotales: number;
  characters: DatosPersonaje[];
};

export const getAllCharacters = createAsyncThunk(
  "personajes/byName",
  async ({ page, name: nombre }: DatosRecibidos): Promise<DatosADevolver> => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${nombre}&page=${page}`
    );
    const parseRes = await response.json();
    console.log("parseRes", parseRes);
    const paginasTotales = parseRes.info.pages;
    const personajesObtenidos = parseRes.results;
    const recibido: DatosADevolver = {
      pageTotales: paginasTotales,
      characters: personajesObtenidos,
    };
    return recibido;
  }
);
export const getEpisodes = createAsyncThunk(
  "episodes/byId",
  async (idEpisodes: number[]): Promise<EpisodeDates[]> => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${idEpisodes}`
    );
    const parseRes = await response.json();
    return parseRes.length ? parseRes : [parseRes];
  }
);

const initialState: initialType = {
  characters: {
    pageTotales: 0,
    characters: [],
  },
  loading: true,
  error: null,
  favorites: [],
  episodes: [],
};

export const personajesSlice = createSlice({
  name: "personajes",
  initialState,
  reducers: {
    TOGGLE_FAVORITE: (state, action) => {
      const existe = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (!existe) {
        state.favorites.push(action.payload);
      } else {
        const sinItem = state.favorites.filter(
          (item) => item.id !== action.payload.id
        );
        state.favorites = sinItem;
      }
    },
    DELETE_FAVORITES: (state) => {
      state.favorites = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.characters = action.payload;
    });
    builder.addCase(getAllCharacters.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message ?? "Surgio problema al buscar personaje";
    });
    builder.addCase(getEpisodes.fulfilled, (state, action) => {
      state.loading = false;
      state.episodes = action.payload;
    });
    builder.addCase(getEpisodes.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message ?? "No se pudieron cargar los episodios";
    });
  },
});

export const { TOGGLE_FAVORITE, DELETE_FAVORITES } = personajesSlice.actions;
const RickyReducer = personajesSlice.reducer;
export default RickyReducer;
