import { useAppDispatch } from "../../store";
import { TOGGLE_FAVORITE, DatosPersonaje } from "../../store/todo/rickySlice";
import "./boton-favorito.css";
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 * @param {boolean} esFavorito variable donde determina si el personaje esta en el array de favoritos
 * @param {DatosPersonaje} idCharacter informacion del personaje
 * @param {funcion} setCharacterFav funcion donde se cambia el valor de la variable esFavorito
 *
 *
 * @returns un TSX element
 */

type Datos = {
  esFavorito: boolean;
  idCharacter?: DatosPersonaje;
  setCharacterFav: React.Dispatch<React.SetStateAction<boolean>>;
};

const BotonFavorito = ({ esFavorito, idCharacter, setCharacterFav }: Datos) => {
  const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";
  const dispatch = useAppDispatch();
  return (
    <div
      className="boton-favorito"
      onClick={() => {
        dispatch(TOGGLE_FAVORITE(idCharacter));
        setCharacterFav(!esFavorito);
      }}
    >
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotonFavorito;
