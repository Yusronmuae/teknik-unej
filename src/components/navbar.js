import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">
          <Link to="/" className="text-white hover:underline">
            IMM Komisariat Teknik
          </Link>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to="/articles" className="hover:underline">
              Artikel
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
