import "./paginacion.css";

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */

type paginacion = {
  maxpage: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

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
