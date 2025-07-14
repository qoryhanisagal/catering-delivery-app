const TopBanner = () => {
  return (
    <div className="w-full bg-base-300 text-base-content text-sm px-0 py-0 overflow-x-hidden">
      <div className="flex justify-between items-center w-full px-4">
        {/* Social Icons */}
        <div className="flex-1 flex justify-start">
          <div className="bg-primary px-4 py-2 h-full flex items-center space-x-3 text-primary-content">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-youtube"></i>
          </div>
        </div>

        {/* Location */}
        <div className="flex-1 flex justify-center items-center space-x-2">
          <i className="bi bi-geo-alt-fill text-primary"></i>
          <span>Victorville, California 92392</span>
        </div>

        {/* Phone Icon with number */}
        <div className="hidden md:flex items-center space-x-2 text-sm">
          <i className="bi bi-telephone text-primary text-base"></i>
          <span className="text-xs font-semibold text-primary-content">+1 (760) 885–7425</span>
        </div>

        {/* Login / Register */}
        <div className="flex-1 flex justify-end items-center space-x-3">
          <i className="bi bi-person-circle text-primary"></i>
          <a href="#" className="hover:underline">Login or Register</a>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;