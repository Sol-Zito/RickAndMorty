import { useAppSelector } from "../../store";
import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import { DatosPersonaje } from "./../../store/todo/rickySlice";
import { useEffect, useState } from "react";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */

const TarjetaPersonaje = ({ url, name, id }: DatosPersonaje) => {
  const favoritos = useAppSelector((state) => state.RickyReducer.favoritos);
  const isFavorito = favoritos.includes((item: DatosPersonaje) =>
    console.log(item.id === id)
  );
  console.log("isFavorite ", isFavorito, id);
  const [agregadoAFav, setAgregadoAFav] = useState(isFavorito);

  useEffect(() => {}, [favoritos]);

  return (
    <div className="tarjeta-personaje">
      <img src={url} alt={name} />
      <div className="tarjeta-personaje-body">
        <span>{name}</span>
        <BotonFavorito
          esFavorito={agregadoAFav}
          setAgregadoAFav={setAgregadoAFav}
          idPersonaje={id}
        />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
