function Hero() {
  return (
    <section className="pt-28 pb-20 bg-[#f4f1ea]">
      <div className="max-w-lg mx-auto px-6">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hey 👋 <br />
            I'm <span className="text-blue-900">Harshpreet</span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Full Stack Developer | React & Laravel Enthusiast
          </p>

          <p className="mt-2 text-gray-500">📧 dhanoaharshpreet701@gmail.com</p>

          <div className="mt-6">
            <button
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              onClick={() =>
                window.open("https://online-shopes.onrender.com/", "_blank")
              }
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
