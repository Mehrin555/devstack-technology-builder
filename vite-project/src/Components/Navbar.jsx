import logo from "../assets/logo-text.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">

      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="DevStack logo"
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Menu */}
      <div className="flex gap-5">
        <a href="#" className="gradient-text text-xl font-semibold">
          Home
        </a>

        <a href="#technologies" className="text-black text-xl">
          Technologies
        </a>

        <a href="#projects" className="text-black text-xl">
          Projects
        </a>

        <a href="#about" className="text-black text-xl">
          About
        </a>

        <a href="#contact" className="text-black text-xl">
          Contact
        </a>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <button className="rounded-xl border border-gray-300 px-4 py-2">
          Sign in
        </button>

        <button className="brand-gradient rounded-xl px-4 py-2 font-semibold text-white hover:opacity-90">
          Sign Up
        </button>
      </div>

    </nav>
  );
}

export default Navbar;