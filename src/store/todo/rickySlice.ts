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

export const obtenerPersonajes = createAsyncThunk(
  `personajes/list/`,
  async (page: number): Promise<DatosPersonaje[]> => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&limit=20`
    );
    const parseRes = await response.json();
    return parseRes.results;
  }
);

export const personajePorNombre = createAsyncThunk(
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

export const personajesSlice = createSlice({
  name: "personajes",
  initialState,
  reducers: {
    BUSCAR_PERSONAJES: (state, action) => {
      state.busqueda = action.payload;
    },
    AGREGAR_FAVORITO: (state, action) => {
      const existe = state.favoritos.find(
        (item) => item.id === action.payload.id
      );
      if (!existe) {
        state.favoritos.push(action.payload);
      } else {
        const sinItem = state.favoritos.filter(
          (item) => item.id !== action.payload.id
        );
        state.favoritos = sinItem;
      }
    },
    ELIMINAR_FAVORITOS: (state) => {
      state.favoritos = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(obtenerPersonajes.pending, (state) => {
        state.loading = true;
      })
      .addCase(obtenerPersonajes.fulfilled, (state, action) => {
        state.loading = false;
        state.personajes = action.payload;
      })
      .addCase(obtenerPersonajes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Se genero un error";
      });
    builder
      .addCase(personajePorNombre.fulfilled, (state, action) => {
        state.loading = false;
        state.personajes = action.payload;
      })
      .addCase(personajePorNombre.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ?? "Surgio problema al buscar personaje";
      });
  },
});

export const { BUSCAR_PERSONAJES, AGREGAR_FAVORITO, ELIMINAR_FAVORITOS } =
  personajesSlice.actions;
const RickyReducer = personajesSlice.reducer;
export default RickyReducer;
