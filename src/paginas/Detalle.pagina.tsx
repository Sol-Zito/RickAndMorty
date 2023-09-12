import "./Detalle.css";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { EpisodeDates, getEpisodes } from "../store/rickySlice";
import { useParams } from "react-router-dom";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado
 *  junto con la lista de episodios en los que aparece
 *
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * Uso:
 * ``` <PaginaDetalle /> ```
 *
 * @returns la pagina de detalle
 */

const PaginaDetalle = () => {
  const { id } = useParams();
  const episodesDispatch = useAppDispatch();

  const [functionExecuted, setFunctionExecuted] = useState(false);
  const favorites = useAppSelector((state) => state.RickyReducer.favorites);
  const allCharacters = useAppSelector(
    (state) => state.RickyReducer.characters.characters
  );
  const characterToUse =
    allCharacters.find((item) => item.id === Number(id)) ??
    favorites.find((item) => item.id === Number(id));

  const isFav = favorites.find((item) => item.id === Number(id)) ? true : false;
  const [characterFav, setCharacterFav] = useState(isFav);

  const allEpisodes = useAppSelector((state) => state.RickyReducer.episodes);

  /**
   * Toma todos los episodios del personaje, por cada uno a su vez hace un nuevo array donde separa
   * segun los "/" que encuentre. Luego se utiliza el "at()" para tomar el ultimo valor de
   * cada nuevo array creado con el "split()".
   * Finalmente se utiliza el array con los numeros de los episodios, segun cada personaje,
   * para buscar la informacion de los episodios
   */
  const episodeNumber = characterToUse?.episode?.map((element) =>
    Number(element.split("/").at(-1))
  );
  /**
   * Se buscaran los episodios siempre y cuando exista episodeNumber.
   * Tambien se tendra en cuenta si ya fueron solicitados los episodios utilizando functionExecuted,
   * para asi evitar un loop infinito.
   * */
  const searchEpisodes = () => {
    if (episodeNumber && !functionExecuted) {
      episodesDispatch(getEpisodes(episodeNumber));
      setFunctionExecuted(true);
    }
  };
  searchEpisodes();

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
          <BotonFavorito
            esFavorito={characterFav}
            setCharacterFav={setCharacterFav}
            idCharacter={characterToUse}
          />
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
