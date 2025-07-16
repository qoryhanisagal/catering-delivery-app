import logo from '/src/assets/img/logo1.png';

export default function Navbar() {
  return (
    <>
      {/* === Logo and Navbar Wrapper === */}
      <div className="relative w-full">
        {/* Spacer to offset absolute logo and avoid overlap */}
        <div className="h-[25px]"></div>

        {/* === Top Navbar (Sticky) === */}
        <div className="navbar sticky top-0 z-40 bg-base-100 px-6 shadow-sm">
          <div className="flex items-center justify-between w-full">
            {/* Left Links */}
            <div className="hidden lg:flex gap-4">
              <a className="link link-hover">Our Story</a>
              <a className="link link-hover">Our Chefs</a>
              <a className="link link-hover">Menu</a>
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-50 h-32 flex items-center">
              <img src={logo} alt="All Da Smoke Logo" className="h-full w-auto object-contain" />
            </div>

            {/* Right Links + Icons */}
            <div className="hidden lg:flex gap-4 items-center">
              <a className="link link-hover">Pickup</a>
              <a className="link link-hover">Delivery</a>
              <a className="link link-hover">Catering</a>

              {/* Search */}
              <label className="input input-sm input-bordered w-32 md:w-48 flex items-center gap-2">
                <i className="bi bi-search text-primary"></i>
                <input type="search" className="grow bg-transparent text-sm" placeholder="Search..." />
              </label>

              {/* Cart */}
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-primary">
                  <div className="indicator">
                    <i className="bi bi-bag text-2xl"></i>
                  </div>
                </div>
                <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $0.00</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">View Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hamburger Menu (Large screens only) */}
        <div className="hidden lg:flex">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm btn-ghost text-base-content p-2 hover:bg-transparent"
            >
              <i className="bi bi-list text-xl"></i>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content top-full bg-base-100 text-base-content rounded-box z-1 mt-3 p-2 shadow-lg w-52 whitespace-normal break-words"
            >
              <li>
                <a className="hover:text-primary transition-colors duration-150">Menu</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors duration-150">Book Catering</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors duration-150">Login</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors duration-150">About</a>
              </li>
            </ul>
          </div>
        </div>

      {/* === Mobile Dock Navigation (Small Screens Only) === */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-base-100 shadow-md dock border-t border-base-300">
        <button>
          <i className="bi bi-house text-xl text-primary"></i>
          <span className="dock-label text-xs">Home</span>
        </button>
        <button>
          <i className="bi bi-people text-xl text-primary"></i>
          <span className="dock-label text-xs">Chefs</span>
        </button>
        <button>
          <i className="bi bi-list text-xl text-primary"></i>
          <span className="dock-label text-xs">Menu</span>
        </button>
        <button>
          <i className="bi bi-bag-check text-xl text-primary"></i>
          <span className="dock-label text-xs">Pickup</span>
        </button>
        <button>
          <i className="bi bi-car-front-fill text-xl text-primary"></i>
          <span className="dock-label text-xs">Delivery</span>
        </button>
        <button>
          <i className="bi bi-fork-knife text-xl text-primary"></i>
          <span className="dock-label text-xs">Catering</span>
        </button>
      </div>
    </div> 
    </>
  );
}
