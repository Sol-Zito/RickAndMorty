import { EpisodeDates } from "../../store/todo/rickySlice";
import "./tarjeta-episodio.css";

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 *
 * @param name string --> nombre del episodio
 * @param episode string --> codigo del episodio
 * @param air_date string --> fecha de lanzamiento
 *
 * @returns un TSX element
 */

const TarjetaEpisodio = ({ name, episode, air_date, id }: EpisodeDates) => {
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
