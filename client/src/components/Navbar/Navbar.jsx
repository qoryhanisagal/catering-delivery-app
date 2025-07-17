import logo from '/src/assets/img/logo1.png';

export default function Navbar() {
  return (
    <>
      <div className="navbar sticky top-0 z-40 bg-black px-6 py-4">
        <div className="relative flex items-center justify-between w-full max-w-8xl mx-auto">
          {/* Left Links */}
          <div className="hidden lg:flex gap-8 items-center font-[var(--font-anton)] text-white uppercase tracking-wide">
            <a className="hover:text-primary transition-colors duration-200 text-lg font-bold">Our Menu</a>
            <button className="btn btn-primary rounded-full px-6 py-2 text-white font-bold uppercase text-lg">
              Order Online
            </button>
            <a className="hover:text-primary transition-colors duration-200 text-lg font-bold">Our Story</a>
            <a className="hover:text-primary transition-colors duration-200 text-lg font-bold">Catering</a>
          </div>

          {/* Center Logo  Hanging over navbar*/}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 z-50">
            <img 
              src={logo} 
              alt="All Da Smoke Logo" 
              className="h-56 w-auto object-contain drop-shadow-ghost hover:drop-shadow-ghostransition-shadow duration-300"
            />
          </div>

          {/* Right Links + Cart + Hamburger */}
          <div className="hidden lg:flex gap-6 items-center font-[var(--font-anton)] text-white uppercase tracking-wide">
            <a className="hover:text-primary transition-colors duration-200 text-lg font-bold">Gallery</a>
            <a className="hover:text-primary transition-colors duration-200 text-lg font-bold">Contact</a>
            <a className="hover:text-primary transition-colors duration-200 text-lg font-bold">Sign In</a>
            <a className="hover:text-primary transition-colors duration-200 text-lg font-bold">Become a VIP</a>
            
            {/* Cart */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
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

            {/* Hamburger Menu */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-white p-2"
              >
                <i className="bi bi-list text-2xl"></i>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-1 mt-3 p-2 shadow-lg w-52"
              >
                <li><a className="hover:text-primary">Menu</a></li>
                <li><a className="hover:text-primary">Book Catering</a></li>
                <li><a className="hover:text-primary">Login</a></li>
                <li><a className="hover:text-primary">About</a></li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="btn btn-ghost text-white">
              <i className="bi bi-list text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Hidden by default, toggle with state */}
      <div className="lg:hidden hidden bg-black text-white">
        <div className="flex flex-col p-4 space-y-3 font-[var(--font-anton)] uppercase text-sm">
          <a className="hover:text-primary transition-colors">Our Menu</a>
          <button className="btn btn-primary btn-sm rounded-full w-fit">Order Online</button>
          <a className="hover:text-primary transition-colors">Catering</a>
          <a className="hover:text-primary transition-colors">Gallery</a>
          <a className="hover:text-primary transition-colors">Contact</a>
          <a className="hover:text-primary transition-colors">Sign In</a>
          <a className="hover:text-primary transition-colors">Become a VIP</a>
        </div>
      </div>

      {/* Mobile Dock Navigation */}
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
    </>
  );
}
