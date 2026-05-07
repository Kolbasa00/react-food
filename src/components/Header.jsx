import { Link } from "react-router";

function Header() {
  return (
    <nav className="bg-[#43A047] text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5)]">
      <div className="px-4 flex justify-between items-center">
        <Link to="/" className="text-3xl">
          React Shop
        </Link>
        <ul className="flex">
          <li>
            <Link
              to="/about"
              className="py-5 px-4 block text-sm transition hover:bg-black/10"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              className="py-5 px-4 block text-sm transition hover:bg-black/10"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
