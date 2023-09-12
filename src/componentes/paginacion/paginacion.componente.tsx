import "./paginacion.css";

/**
 *
 * @param {number} maxPage  valor maximo de paginas
 * @param {number} page valor de la pagina actual
 * @param {function} setPage funcion para cambiar valor a page
 */

type paginacion = {
  maxpage: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

/**
 * Componente que contiene los botones para paginar
 * @param {paginacion} page valor de la pagina actual
 * @param {paginacion} setPage funcion para cambiar valor a page
 * @param {paginacion} maxPage  valor maximo de paginas - varia segun datos obtenidos
 * @returns un TSX element
 */

const Paginacion = ({ page, setPage, maxpage }: paginacion) => {
  return (
    <div className="paginacion">
      <button
        disabled={page === 1 ? true : false}
        className={"primary"}
        onClick={() => setPage(page - 1)}
      >
        Anterior
      </button>
      <button
        disabled={page === maxpage ? true : false}
        className={"primary"}
        onClick={() => setPage(page + 1)}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
