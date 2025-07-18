export default function OrderButtons() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* SECTION TITLE */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            How Would You Like to Order?
          </h2>
          <p className="text-base-content opacity-70">
            Choose your preferred ordering method
          </p>
        </div>

        {/* ORDER BUTTONS CONTAINER */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
          {/* ORDER PICKUP BUTTON */}
          <div className="w-full lg:w-auto">
            <button className="btn btn-primary btn-lg w-full lg:w-auto group hover:btn-secondary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-3">
                <i className="bi bi-truck text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                <div className="text-left">
                  <div className="font-bold">Order Pickup</div>
                  <div className="text-sm opacity-80">Ready in 15-20 min</div>
                </div>
              </div>
            </button>
          </div>

          {/* ORDER DELIVERY BUTTON */}
          <div className="w-full lg:w-auto">
            <button className="btn btn-primary btn-lg w-full lg:w-auto group hover:btn-secondary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-3">
                <i className="bi bi-bag text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                <div className="text-left">
                  <div className="font-bold">Order Delivery</div>
                  <div className="text-sm opacity-80">30-45 min delivery</div>
                </div>
              </div>
            </button>
          </div>

          {/* ORDER CATERING BUTTON */}
          <div className="w-full lg:w-auto">
            <button className="btn btn-primary btn-lg w-full lg:w-auto group hover:btn-secondary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-3">
                <i className="bi bi-fork-knife text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                <div className="text-left">
                  <div className="font-bold">Order Catering</div>
                  <div className="text-sm opacity-80">24hr advance notice</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
