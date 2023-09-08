import { useAppSelector } from "../../store";
import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
// import { AGREGARFAVORITO } from "../../store/todo/rickySlice";
import { DatosPersonaje } from "./../../store/todo/rickySlice";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */

const TarjetaPersonaje = ({ url, name }: DatosPersonaje) => {
  //const personaje = useAppSelector((state) => state.RickyReducer.personajes);
  const favorito = useAppSelector((state) => state.RickyReducer.favoritos);
  // const dispatch = useAppDispatch();

  const isFavorite = favorito.find((item) => item.id);

  return (
    <div className="tarjeta-personaje">
      <img src={url} alt={name} />
      <div className="tarjeta-personaje-body">
        <span>{name}</span>
        <BotonFavorito
          esFavorito={!isFavorite ? false : true}
          // onClick={personaje}
        />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
