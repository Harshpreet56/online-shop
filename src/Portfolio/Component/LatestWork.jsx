function Works() {
  return (
    <section id="works" className="py-16 bg-gray-100">
      <h2 className="text-center text-2xl font-bold mb-10">
        My Latest Works
      </h2>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white p-6 rounded-lg shadow text-center"
          >
            Project {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;