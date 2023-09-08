import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import "./filtros.css";
import { busqueda, getCharacterByName } from "../../store/todo/rickySlice";

const Filtros = () => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector((state) => state.RickyReducer.busqueda);
  const [buscarPersonaje, setBuscarPersonaje] = useState("");

  const buscar = (e: { target: { value: string } }) => {
    dispatch(busqueda(e.target.value));
    dispatch(getCharacterByName(e.target.value));
    setBuscarPersonaje(e.target.value);
  };
  console.log(buscarPersonaje);
  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        value={buscarPersonaje}
        onChange={buscar}
      />
    </div>
  );
};

export default Filtros;
