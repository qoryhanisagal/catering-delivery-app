

const TopBanner = () => {
  return (
    <div className="w-full bg-base-300 text-sm text-neutral-content px-4 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span>Victorville, California 92392</span>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:underline">
          Login
        </a>
        <span className="text-gray-400">or</span>
        <a href="#" className="hover:underline">
          Register
        </a>
      </div>
    </div>
  );
};

export default TopBanner;