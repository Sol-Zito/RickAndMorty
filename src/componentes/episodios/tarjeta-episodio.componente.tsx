import { EpisodeDates } from "../../globalStates/globalVariables";
import "./tarjeta-episodio.css";

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 *
 * @param {string} name nombre del episodio
 * @param {string} episode codigo del episodio
 * @param {string} air_date fecha de lanzamiento
 *
 * @returns un TSX element
 */

const TarjetaEpisodio = ({ name, episode, air_date }: EpisodeDates) => {
  return (
    <div className="tarjeta-episodio">
      <h4>{name}</h4>
      <div>
        <span>{episode}</span>
        <span>Lanzado el: {air_date}</span>
      </div>
    </div>
  );
};

export default TarjetaEpisodio;
