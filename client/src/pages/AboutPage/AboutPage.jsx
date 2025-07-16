import owners from '../../assets/img/owners.png';

export default function AboutPage() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${owners})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center flex-col pt-10 px-4">
        {/* Move heading higher */}
        <div className="mt-10">
          <h1 className="text-5xl font-bold text-primary">All Da Smoke Family</h1>
        </div>

        {/* Keep paragraph and button lower */}
        <div className="max-w-md mt-10">
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}