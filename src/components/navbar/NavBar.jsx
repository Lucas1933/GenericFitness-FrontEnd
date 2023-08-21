import CartWidget from "./CartWidget";
import logo from "/generic_fitness_logo.svg";
function NavBar() {
  return (
    <div className="flex justify-between px-10">
      <div className="flex flex-col justify-center items-center font-extrabold">
        <span>Generic Fitness</span>
        <img src={logo} className="w-20" />
      </div>

      <nav className="text-black flex items-center">
        <ul className="flex">
          <li className="mx-4">
            <a href="">Inicio</a>
          </li>
          <li className="mx-4">
            <a href="">Suplementos</a>
          </li>
          <li className="mx-4">
            <a href="">Equipamiento</a>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </div>
  );
}

export default NavBar;
