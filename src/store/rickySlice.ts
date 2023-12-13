import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setStorage, getStorage } from "../globalStates/localStorage";
import {
  DatosADevolver,
  DatosPersonaje,
  DatosRecibidos,
  EpisodeDates,
  Favorites,
  initialType,
} from "../globalStates/types&interfaces";

const initialState: initialType = {
  characters: {
    pageTotales: 0,
    characters: [],
  },
  loading: true,
  error: null,
  favorites: getStorage<DatosPersonaje[]>(Favorites.favs) || [],
  episodes: [],
  darkMode: "light",
};

export const getAllCharacters = createAsyncThunk(
  "personajes/byName",
  async ({ page, name: nombre }: DatosRecibidos): Promise<DatosADevolver> => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${nombre}&page=${page}`
    );
    const parseRes = await response.json();
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
      setStorage(Favorites.favs, JSON.stringify(state.favorites));
    },
    DELETE_FAVORITES: (state) => {
      state.favorites = [];
      setStorage(Favorites.favs, JSON.stringify(state.favorites));
    },
    CHANGE_MODE: (state) => {
      state.darkMode = state.darkMode = "light" ? "dark" : "light";
      console.log("darkMode: ", state.darkMode);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.characters = action.payload;
      state.error = "";
    });
    builder.addCase(getAllCharacters.rejected, (state, action) => {
      state.loading = false;
      state.characters.characters = [];
      state.characters.pageTotales = 1;
      state.error =
        action.error.message ?? "Surgio problema al buscar personaje";
    });
    builder.addCase(getEpisodes.fulfilled, (state, action) => {
      state.loading = false;
      state.episodes = action.payload;
      state.error = "";
    });
    builder.addCase(getEpisodes.rejected, (state, action) => {
      state.loading = false;
      state.episodes = [];
      state.error =
        action.error.message ?? "No se pudieron cargar los episodios";
    });
  },
});

export const { TOGGLE_FAVORITE, DELETE_FAVORITES, CHANGE_MODE } =
  personajesSlice.actions;
const RickyReducer = personajesSlice.reducer;
export default RickyReducer;
