import BrandLogo from "../../../../public/icons/logo.svg";
import { UserIcon } from "@heroicons/react/24/outline";
import Cart from "./Cart";

const Header = () => (
  <header className="bg-white w-full">
    <nav className="flex items-center justify-between py-6 px-8 shadow">
      <div>
        <a href="/">
          <span className="sr-only">E-commerce Admin</span>
          <img className="h-8 w-auto" src={BrandLogo.src} alt="Brand logo" />
        </a>
      </div>
      <div>Search</div>
      <div className="flex gap-4">
        <Cart />
        <div>
          <UserIcon className="size-6" />
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
