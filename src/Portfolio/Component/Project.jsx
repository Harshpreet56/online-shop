function Projects() {
  const projects = [
    "Myonline-shop",
    "Portfolio Website",
    "Money Tracker",
    "Weather App",
    "Task Manager",
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <h2 className="text-center text-2xl font-bold mb-10">My Projects</h2>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
        {projects.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="h-24 bg-gray-200 rounded mb-4"></div>
            <p className="text-center font-medium">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;