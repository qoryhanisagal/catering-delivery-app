import owners from '../../assets/img/owners.png';

export default function AboutPage() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${owners})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content flex flex-col justify-start pt-10 text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-primary">The All Da Smoke Family</h1>
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