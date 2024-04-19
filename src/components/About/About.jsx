export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-label">
      <div className="container">
        <div className="about-content">
          <p className="section-subtitle title-lg has-after" id="about-label">
            About Us
          </p>
          <h2 className="headline-md">Experienced Workers</h2>
          <p className="section-text">
            Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante
            lectus dapibus est. Aliquam
          </p>
          <p className="tab-text">
            Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante
            lectus dapibus est. Aliquam a bibendum mi, sed condimentum
          </p>
          <div className="wrapper">
            <ul className="about-list">
              <li className="about-item">
                <ion-icon name="checkmark-circle-outline" />
                <span className="span">Sonsectetur adipisicing elit</span>
              </li>
              <li className="about-item">
                <ion-icon name="checkmark-circle-outline" />
                <span className="span">Exercitation ullamco laboris</span>
              </li>
              <li className="about-item">
                <ion-icon name="checkmark-circle-outline" />
                <span className="span">Eiusmod tempor incididunt</span>
              </li>
              <li className="about-item">
                <ion-icon name="checkmark-circle-outline" />
                <span className="span">Aolore magna aliqua</span>
              </li>
            </ul>
          </div>
        </div>
        <figure className="about-banner">
          <img
            src="/images/about-banner.png"
            width={554}
            height={678}
            loading="lazy"
            alt="about banner"
            className="w-100"
          />
        </figure>
      </div>
    </section>
  );
}
