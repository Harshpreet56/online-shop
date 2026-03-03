import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";

function Shop() {
  const {
    currentProducts,
    currentPage,
    setCurrentPage,
    pageNumbers,
  } = useContext(ProductContext);

  return (
    <>
      <section className="py-20 bg-gray-100">
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-xl">Our Services List</p>
          <h1 className="font-bold text-3xl text-blue-900">
            What We’re Offering
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6 p-10">
          {currentProducts?.map((item) => (
            <div
              key={item.id}
              className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white mt-14"
            >
              <img
                className="w-full h-68 "
                src={item.images}
                alt={item.title}
              />

              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-600 line-clamp-2">
                  {item.description}
                </p>

                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>

     
        <div className="flex justify-center gap-2 mt-6">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`px-3 py-1 border rounded ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export default Shop;