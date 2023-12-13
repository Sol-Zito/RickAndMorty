import { useAppDispatch } from "../../store";
import { Datos } from "../../globalStates/types&interfaces";
import { TOGGLE_FAVORITE } from "../../store/rickySlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * @param {boolean} esFavorito variable donde determina si el personaje esta en el array de favoritos
 * @param {DatosPersonaje} idCharacter informacion del personaje
 * @param {funcion} setCharacterFav funcion donde se cambia el valor de la variable esFavorito
 *
 * @returns un TSX element
 */
const BotonFavorito = ({ esFavorito, idCharacter, setCharacterFav }: Datos) => {
  const dispatch = useAppDispatch();
  return (
    <button
      style={{ cursor: "pointer" }}
      onClick={() => {
        dispatch(TOGGLE_FAVORITE(idCharacter));
        setCharacterFav(!esFavorito);
      }}
    >
      {esFavorito ? (
        <FontAwesomeIcon icon={faStarHalf} />
      ) : (
        <FontAwesomeIcon icon={faStar} />
      )}
    </button>
  );
};

export default BotonFavorito;
