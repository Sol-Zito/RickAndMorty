import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { ELIMINAR_FAVORITOS } from "../store/todo/rickySlice";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
  const personajesFavoritos = useAppSelector(
    (state) => state.RickyReducer.favoritos
  );
  const dispatch = useAppDispatch();

  const eliminarTodos = () => {
    if (window.confirm("Desea eliminar todos?")) {
      dispatch(ELIMINAR_FAVORITOS());
      alert("se han eliminado los favoritos");
    }
  };
  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={eliminarTodos}>
          Borrar favoritos
        </button>
      </div>
      <GrillaPersonajes personajes={personajesFavoritos} />
    </div>
  );
};

export default PaginaFavoritos;
