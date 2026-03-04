function Services() {
  const services = [
    {
      title: "Website Development",
      desc: "Modern, responsive and high-performance websites using React, Tailwind and latest technologies.",
    },
    {
      title: "UI/UX Design",
      desc: "Clean, user-friendly and professional interface designs with modern UI trends.",
    },
    {
      title: "Full Stack Development",
      desc: "Complete web solutions using MERN Stack (MongoDB, Express, React, Node).",
    },
    {
      title: "E-Commerce Development",
      desc: "Online store with product management, authentication and payment integration.",
    },
    {
      title: "Portfolio & Business Websites",
      desc: "Professional personal portfolio and company business websites.",
    },
    {
      title: "Website Maintenance",
      desc: "Bug fixing, performance improvement and ongoing support.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center mb-4">
          what do i help
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          I provide high-quality web development services to help businesses
          grow online with modern, scalable and user-friendly applications.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-teal-600">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;