import { Link } from "react-router-dom";
import "./encabezado.css";
import { CHANGE_MODE } from "../../store/rickySlice";
import { useAppSelector } from "../../store";
import { ToggleButton } from "../../globalStates/togglebutton";

/**
 * Encabezado que contiene los links para navegar entre las páginas
 *
 * Uso: `<Encabezado />`
 *
 * @returns {JSX.Element}
 */
const Encabezado = () => {
  const useDarkMode = useAppSelector((state) => state.RickyReducer.darkMode);
  return (
    <header>
      <div>
        <div>
          <h2>Examen Final de Frontend IV</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
            <li>
              <Link to="/detalle">Detalle</Link>
            </li>
            <ToggleButton />
            <button onClick={() => CHANGE_MODE()}>{useDarkMode} mode</button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Encabezado;
