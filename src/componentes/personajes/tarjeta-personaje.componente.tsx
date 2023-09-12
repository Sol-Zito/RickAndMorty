import { useAppSelector } from "../../store";
import { DatosPersonaje } from "../../globalStates/globalVariables";
import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * @param {DatosPersonaje} url  id del personaje,
 * @param {DatosPersonaje} name name de los personaje,
 *@param {DatosPersonaje} id name del personaje,
 *
 * @returns un JSX element
 */

const TarjetaPersonaje = ({ url, name, id }: DatosPersonaje) => {
  const favorites = useAppSelector((state) => state.RickyReducer.favorites);
  const allCharacters = useAppSelector(
    (state) => state.RickyReducer.characters.characters
  );

  const isFav = favorites.find((item: DatosPersonaje) => item.id === id)
    ? true
    : false;
  const [characterFav, setCharacterFav] = useState(isFav);

  /**
   * Va a devolver el personaje y su informacion, en caso de encontrarlo dentro de la applicacion
   */
  const workWith =
    allCharacters.find((item) => item.id === id) ??
    favorites.find((item: DatosPersonaje) => item.id === id);

  return (
    <div className="tarjeta-personaje">
      <Link to={`/detalle/${id}`}>
        <img src={url} alt={name} />
      </Link>
      <div className="tarjeta-personaje-body">
        <span>{name}</span>
        <BotonFavorito
          esFavorito={characterFav}
          setCharacterFav={setCharacterFav}
          idCharacter={workWith}
        />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
