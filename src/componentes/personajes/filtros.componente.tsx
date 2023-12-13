import { filtro } from "../../globalStates/types&interfaces";
import "./filtros.css";

/**
 *
 * Componente que toma el valor del input, para buscar personajes en la API
 *
 * @param {function} changeName funcion que toma un parametro string
 * @param {string} defaultName string que sirve para poder cambiar el valor al input en caso de Limpiar filtro
 * @param {function} resetValue funcion que sirve para resetear los valores del input y de la busqueda
 *
 * @return devulve un string, el mismo sera utilizado para buscar personajes
 *
 */

const Filtros = ({ changeName, defaultValue, resetValue }: filtro) => {
  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        value={defaultValue}
        onChange={(e) => {
          resetValue();
          changeName(e.target.value);
        }}
      />
    </div>
  );
};

export default Filtros;
