import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { DELETE_FAVORITES } from "../store/rickySlice";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
  const dispatch = useAppDispatch();
  const allCharactersFav = useAppSelector(
    (state) => state.RickyReducer.favorites
  );
  /**
   * Funcion para eliminar todos los personajes marcados en favoritos.
   * La misma consultara si el usuario quiere confirmar dicha accion.
   */
  const deleteAll = () => {
    if (window.confirm("Desea eliminar todos?")) {
      dispatch(DELETE_FAVORITES());
      alert("Se han eliminado los favoritos");
    }
  };
  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button
          className="danger"
          disabled={allCharactersFav.length > 0 ? false : true}
          onClick={deleteAll}
        >
          Borrar favoritos
        </button>
      </div>
      <GrillaPersonajes personajes={allCharactersFav} />
    </div>
  );
};

export default PaginaFavoritos;
