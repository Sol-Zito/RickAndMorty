import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { agregaFavorito } from "../../store/todo/rickySlice";
import "./boton-favorito.css";
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 *
 *
 * @returns un JSX element
 */

type Datos = {
  esFavorito: boolean;
  idPersonaje?: number;
  setAgregadoAFav: React.Dispatch<React.SetStateAction<boolean>>;
};

const BotonFavorito = ({ esFavorito, idPersonaje, setAgregadoAFav }: Datos) => {
  const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";
  const personaje = useAppSelector((state) => state.RickyReducer.personajes);
  const personajeRecibido = personaje.find((item) => item.id === idPersonaje);
  const dispatch = useAppDispatch();
  const addToFav = () => {
    dispatch(agregaFavorito(personajeRecibido));
    setAgregadoAFav(!esFavorito);
  };

  useEffect(() => {}, [esFavorito]);

  return (
    <div className="boton-favorito" onClick={addToFav}>
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotonFavorito;
