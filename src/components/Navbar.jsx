import logo from "../assets/LogoFerreteria (Copy).png";

function Navbar() {
  return (
    <nav>
      <img src={logo} className="logo" alt="Ferreteria La Promo" />
      <h1>Ferretería La Promo H & C</h1>
    </nav>
  );
}

export default Navbar;