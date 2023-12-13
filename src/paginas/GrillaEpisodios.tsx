import React from "react";
import { EpisodiosGrilla } from "./Style";
import { useAppSelector } from "../store";
import { EpisodeDates } from "../globalStates/types&interfaces";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";

export const GrillaEpisodios = () => {
  const allEpisodes = useAppSelector((state) => state.RickyReducer.episodes);
  return (
    <>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <EpisodiosGrilla>
        {allEpisodes.length < 1 ? (
          <h3>No hay episodios</h3>
        ) : (
          allEpisodes?.map((data: EpisodeDates) => {
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
          })
        )}
      </EpisodiosGrilla>
    </>
  );
};
