import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { DatosPersonaje } from "./../../store/todo/rickySlice";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */
type personajesRecibidos = { personajes: Array<DatosPersonaje> };

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