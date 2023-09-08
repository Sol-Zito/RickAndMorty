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

interface initialType {
  personajes: DatosPersonaje[];
  loading: boolean;
  error: string | null;
  busqueda: string;
  favoritos: DatosPersonaje[];
}

export const fetchCharacter = createAsyncThunk(
  `personajes/list/`,
  async (page: number): Promise<DatosPersonaje[]> => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&limit=10`
    );
    const parseRes = await response.json();
    return parseRes.results;
  }
);

export const getCharacterByName = createAsyncThunk(
  "personajes/byName",
  async (name: string): Promise<DatosPersonaje[]> => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    const parseRes = await response.json();
    return parseRes.results;
  }
);

const initialState: initialType = {
  personajes: [],
  loading: true,
  error: null,
  busqueda: "",
  favoritos: [],
};

export const characterSlice = createSlice({
  name: "personajes",
  initialState,
  reducers: {
    BUSCAR_PERSONAJES: (state, action) => {
      state.busqueda = action.payload;
    },
    AGREGARFAVORITO: (state, action) => {
      if (!state.favoritos.find((item) => item.id === action.payload.id)) {
        state.favoritos.push(action.payload);
      } else {
        state.favoritos = state.favoritos.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacter.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.loading = false;
        state.personajes = action.payload;
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Se genero un error";
      });
    builder
      .addCase(getCharacterByName.fulfilled, (state, action) => {
        state.loading = false;
        state.personajes = action.payload;
      })
      .addCase(getCharacterByName.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ?? "Surgio problema al buscar personaje";
      });
  },
});

export const { BUSCAR_PERSONAJES: busqueda, AGREGARFAVORITO: agregaFavorito } =
  characterSlice.actions;
const RickyReducer = characterSlice.reducer;
export default RickyReducer;
