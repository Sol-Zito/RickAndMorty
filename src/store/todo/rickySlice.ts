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
  personajes: DatosADevolver;
  loading: boolean;
  error: string | null;
  favoritos: DatosPersonaje[];
}

export type DatosRecibidos = {
  page: number;
  nombre: string;
};

type DatosADevolver = {
  pageTotales: number;
  personajes: DatosPersonaje[];
};

export const obtenerPersonajes = createAsyncThunk(
  "personajes/byName",
  async ({ page, nombre }: DatosRecibidos): Promise<DatosADevolver> => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${nombre}&page=${page}`
    );
    const parseRes = await response.json();
    console.log("parseRes", parseRes);
    const paginasTotales = parseRes.info.pages;
    const personajesObtenidos = parseRes.results;
    const recibido: DatosADevolver = {
      pageTotales: paginasTotales,
      personajes: personajesObtenidos,
    };
    return recibido;
  }
);

const initialState: initialType = {
  personajes: {
    pageTotales: 0,
    personajes: [],
  },
  loading: true,
  error: null,
  favoritos: [],
};

export const personajesSlice = createSlice({
  name: "personajes",
  initialState,
  reducers: {
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
      .addCase(obtenerPersonajes.fulfilled, (state, action) => {
        state.loading = false;
        state.personajes = action.payload;
      })
      .addCase(obtenerPersonajes.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ?? "Surgio problema al buscar personaje";
      });
  },
});

export const { AGREGAR_FAVORITO, ELIMINAR_FAVORITOS } = personajesSlice.actions;
const RickyReducer = personajesSlice.reducer;
export default RickyReducer;
