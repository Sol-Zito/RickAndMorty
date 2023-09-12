import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { DatosPersonaje } from "../../store/rickySlice";

type personajesRecibidos = { personajes: Array<DatosPersonaje> };

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *@param {DatosPersonaje} personajes = Array con los datos de los personajes obtenidos,
 * estos seran pasados a TarjetaPersonaje
 * @returns un TSX element
 */

const GrillaPersonajes = ({ personajes }: personajesRecibidos) => {
  return (
    <div className="grilla-personajes">
      {personajes.map((personaje: DatosPersonaje) => {
        const { name, image, id } = personaje;
        return <TarjetaPersonaje name={name} url={image} id={id} key={id} />;
      })}
    </div>
  );
};

export default GrillaPersonajes;
