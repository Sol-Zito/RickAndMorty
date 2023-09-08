import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useState } from "react";
import { useAppSelector } from "../store";
import { DatosPersonaje } from "../store/todo/rickySlice";
import { useParams } from "react-router-dom";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 *
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalle /> ```
 *
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {
  const propiedades = useParams();
  console.log("propiedades", propiedades);

  const favorito = useAppSelector((state) => state.RickyReducer.favoritos);
  const isFavorite = favorito.includes((item: DatosPersonaje) => item.id === 8);
  const [agregadoAFav, setAgregadoAFav] = useState(isFavorite);
  return (
    <div className="container">
      <h3>Rick Sanchez</h3>
      <div className={"detalle"}>
        <div className={"detalle-header"}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Rick Sanchez"
          />
          <div className={"detalle-header-texto"}>
            <p>Rick Sanchez</p>
            <p>Planeta: Earth</p>
            <p>Genero: Male</p>
          </div>
          <BotonFavorito
            esFavorito={agregadoAFav}
            setAgregadoAFav={setAgregadoAFav}
          />
        </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={"episodios-grilla"}>
        <TarjetaEpisodio />
        <TarjetaEpisodio />
        <TarjetaEpisodio />
      </div>
    </div>
  );
};

export default PaginaDetalle;
