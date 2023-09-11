import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { DatosPersonaje } from "./../../store/todo/rickySlice";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *@param {DatosPersonaje} personajes --> Aray con los datos de los personajes obtenidos
 * @returns un TSX element
 */

const GrillaPersonajes = (personajes: DatosPersonaje[]) => {
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
