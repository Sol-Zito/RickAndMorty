import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect, useState } from "react";
import { getAllCharacters } from "../store/rickySlice";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();

  const characters = useAppSelector(
    (state) => state.RickyReducer.characters.characters
  );
  const pageTotals = useAppSelector(
    (state) => state.RickyReducer.characters.pageTotales
  );

  const [filteredName, changeName] = useState("");
  /**
   * Resetea los valores de busqueda
   */
  const resetValue = () => {
    changeName("");
    setPage(1);
  };

  useEffect(() => {
    dispatch(getAllCharacters({ page, name: filteredName }));
  }, [dispatch, page, filteredName]);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={() => resetValue()}>
          Limpiar Filtro
        </button>
      </div>
      <Filtros
        changeName={changeName}
        defaultValue={filteredName}
        resetValue={resetValue}
      />

      <Paginacion page={page} setPage={setPage} maxpage={pageTotals} />
      <GrillaPersonajes personajes={characters} />
      <Paginacion page={page} setPage={setPage} maxpage={pageTotals} />
    </div>
  );
};

export default PaginaInicio;
