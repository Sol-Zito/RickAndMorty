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
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Paginacion = ({ page, setPage }: paginacion) => {
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
        disabled={false}
        className={"primary"}
        onClick={() => setPage(page + 1)}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
