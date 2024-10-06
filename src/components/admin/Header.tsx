import BrandLogo from "../../../public/icons/logo.svg";

const Header = () => {
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="flex items-center justify-between py-2 px-6 mx-auto"
      >
        <div>
          <a href="/admin">
            <span className="sr-only">E-commerce Admin</span>
            <img className="h-8 w-auto" src={BrandLogo.src} alt="Brand logo" />
          </a>
        </div>
        <div>
          <a href="/admin/logout">Log out</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
