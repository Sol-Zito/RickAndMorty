import "./filtros.css";

type filtro = {
  changeName: (name: string) => void;
  defaultValue: string;
  resetValue: () => void;
};

const Filtros = ({ changeName, defaultValue, resetValue }: filtro) => {
  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        value={defaultValue}
        onChange={(e) => {
          resetValue();
          changeName(e.target.value);
        }}
      />
    </div>
  );
};

export default Filtros;
