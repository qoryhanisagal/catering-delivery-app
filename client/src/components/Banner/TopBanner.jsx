const TopBanner = () => {
  return (
    <div className="w-full bg-base-300 text-sm base-content px-4 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span>Victorville, California 92392</span>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:underline">Login</a>
        <span className="opacity-50">or</span>
        <a href="#" className="hover:underline">Register</a>
      </div>
    </div>
  );
};

export default TopBanner;