import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { EpisodeDates, getEpisodes } from "../store/todo/rickySlice";
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
  const { id } = useParams();
  const episodesDispatch = useAppDispatch();
  const [functionExecuted, setFunctionExecuted] = useState(false);
  const allCharacters = useAppSelector(
    (state) => state.RickyReducer.characters.characters
  );
  const characterToUse = allCharacters.find((item) => item.id === Number(id));

  const allEpisodes = useAppSelector((state) => state.RickyReducer.episodes);

  const episodeNumber = characterToUse?.episode?.map((element) =>
    Number(element.split("/").at(-1))
  );
  if (episodeNumber && !functionExecuted) {
    episodesDispatch(getEpisodes(episodeNumber));
    setFunctionExecuted(true);
  }

  return (
    <div className="container">
      <h3>{characterToUse?.name}</h3>
      <div className={"detalle"}>
        <div className={"detalle-header"}>
          <img src={characterToUse?.image} alt="Rick Sanchez" />
          <div className={"detalle-header-texto"}>
            <p>{characterToUse?.name}</p>
            <p>Planeta: {characterToUse?.origin?.name}</p>
            <p>Genero: {characterToUse?.gender}</p>
          </div>
          {/* <BotonFavorito setCharacterFav={} esFavorito={false} /> */}
        </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={"episodios-grilla"}>
        {allEpisodes?.map((data: EpisodeDates) => {
          const { name, episode, air_date, id } = data;
          return (
            <TarjetaEpisodio
              air_date={air_date}
              episode={episode}
              name={name}
              id={id}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PaginaDetalle;
