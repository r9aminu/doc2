import { useState } from "react";

export function Services() {
  const [selectedService, setSelectedService] = useState();

  const handleSelectedService = (selected) => {
    if (!selectedService || selectedService?.name !== selected.name) {
      setSelectedService(selected);
      return;
    }

    if (selectedService?.name === selected.name) {
      setSelectedService(null);
    }
  };

  return (
    <section id="services" className="service" aria-label="service">
      <div className="container service-list-wrapper">
        <ul className="service-list">
          {servicesData.map((service) => (
            <li key={service.name}>
              <div className="service-card">
                <div className="card-icon">
                  <img src={service.imageURL} width={71} height={71} loading="lazy" alt="icon" />
                </div>
                <h3 className="headline-sm card-title">
                  <span className="cursor" onClick={() => handleSelectedService(service)}>
                    {service.name}
                  </span>
                </h3>
                <p className="card-text">{service.shortDescription}</p>
              </div>
            </li>
          ))}
        </ul>
        {selectedService && <p className="service-description">{selectedService.description}</p>}
      </div>
    </section>
  );
}

const servicesData = [
  {
    name: "Psychiatry",
    imageURL: "/images/icon-1.png",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos placeat ratione vero at provident sit alias quae eligendi perferendis corporis aliquid sed earum consectetur, commodi maxime omnis cumque itaque!.",
  },
  {
    name: "Gynecology",
    imageURL: "/images/icon-2.png",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
  },
  {
    name: "Pulmonology",
    imageURL: "/images/icon-3.png",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.",
  },
  {
    name: "Orthopedics",
    imageURL: "/images/icon-4.png",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
];
