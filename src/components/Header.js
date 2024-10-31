import logo from "../assets/logo.svg"

const Header = () =>{
    return (
      <header className="p-4 grid grid-cols-2 items-center mx-12">
        <picture>
          <a href="#">
            <img src={logo} alt="Little Lemon Logo" />
          </a>
        </picture>
        <nav>
          <ul className="flex justify-start gap-4">
            <li>
              <a
                href="#"
                className="text-center p-2 bold rounded-lg hover:bg-[#495E57] hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-center p-2 bold rounded-lg hover:bg-[#495E57] hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-center p-2 bold rounded-lg hover:bg-[#495E57] hover:text-white"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-center p-2 bold rounded-lg hover:bg-[#495E57] hover:text-white"
              >
                Reservations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-center p-2 bold rounded-lg hover:bg-[#495E57] hover:text-white"
              >
                Order Online
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-center p-2 bold rounded-lg hover:bg-[#495E57] hover:text-white"
              >
                Login
              </a>
            </li>
          </ul>
          {/* <i class="fa-solid fa-bars "></i> */}
        </nav>
      </header>
    );
}

export default Header