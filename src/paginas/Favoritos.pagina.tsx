import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { DELETE_FAVORITES } from "../store/todo/rickySlice";

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
  const personajesFavoritos = useAppSelector(
    (state) => state.RickyReducer.favorites
  );

  const eliminarTodos = () => {
    if (window.confirm("Desea eliminar todos?")) {
      dispatch(DELETE_FAVORITES());
      alert("se han eliminado los favoritos");
    }
  };
  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button
          className="danger"
          disabled={personajesFavoritos.length > 0 ? false : true}
          onClick={eliminarTodos}
        >
          Borrar favoritos
        </button>
      </div>
      <GrillaPersonajes personajes={personajesFavoritos} />
    </div>
  );
};

export default PaginaFavoritos;
