export function Hero() {
  return (
    <section
      className="section hero"
      style={{ backgroundImage: 'url("/images/hero-bg.png")' }}
      aria-label="home"
    >
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle has-before">Welcome To Doclab</p>
          <h1 className="headline-lg hero-title">
            Find Nearest <br />
            Doctor.
          </h1>
          <p style={{ color: "#fff" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, laudantium, ipsum labore
            libero exercitationem accusantium dolorum quia minus vel, dolores commodi vitae quae
            debitis atque. Quo voluptatibus ullam consequatur omnis.
          </p>
        </div>
        <figure className="hero-banner">
          <img
            src="/images/hero-banner.png"
            width={590}
            height={517}
            loading="eager"
            alt="hero banner"
            className="w-100"
          />
        </figure>
      </div>
    </section>
  );
}
