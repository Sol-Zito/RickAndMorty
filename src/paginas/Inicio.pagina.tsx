import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect, useState } from "react";
import { fetchCharacter } from "../store/todo/rickySlice";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
  const personajes = useAppSelector((state) => state.RickyReducer.personajes);
  console.log("personajes", personajes);

  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacter(page));
  }, [dispatch, page]);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger">Limpiar Filtro</button>
      </div>
      <Filtros />
      <Paginacion page={page} setPage={setPage} />
      <GrillaPersonajes personajes={personajes} />
      <Paginacion page={page} setPage={setPage} />
    </div>
  );
};

export default PaginaInicio;
