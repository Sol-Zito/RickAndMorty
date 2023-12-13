import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 30px;
  color: black;
`;

export const Detalle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetalleHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const DetalleHeaderTexto = styled.div`
  margin-left: 30px;
  font-size: 26px;
  font-weight: 500;

  p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  p:nth-child(1) {
    font-size: 32px;
  }
`;

export const EpisodiosGrilla = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
