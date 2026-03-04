import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";
import { useNavigate } from "react-router-dom";
function Shop() {
  const {
    products,
    currentPage,
  
    setCurrentPage,
    pageNumbers,
    addToCart,
  } = useContext(ProductContext);

  const navigate = useNavigate();
  return (
    <section className="py-16 bg-gray-100">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-gray-500 text-lg">Our Services List</p>
        <h1 className="font-bold text-3xl text-blue-900">
          What We’re Offering
        </h1>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
        {products?.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center"
          >
            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                src={item.images[0]}
                alt={item.title}
                className="h-40 object-contain"
              />
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>

            {/* Brand (if available) */}
            <p className="text-gray-500 text-sm mt-1">
              {item.brand || "Brand Name"}
            </p>

            {/* Price */}
            <p className="text-orange-500 font-bold text-lg mt-2">
              ${item.price}
            </p>

            {/* Stock */}
            <p className="text-green-600 text-sm font-medium">In Stock</p>

            <div className="mt-4 flex flex-col gap-3 items-center">
              {/* View Details */}
              <button
                onClick={() => navigate(`/product/${item.id}`)}
                className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-800 transition w-40"
              >
                View Details
              </button>

              {/* Add To Cart */}
              <button
                onClick={() => addToCart(item)}
                className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-600 transition w-40"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

{/* Pagination */}
<div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-10 md:mt-14 px-4">
  {pageNumbers?.map((number) => (
    <button
      key={number}
      onClick={() => setCurrentPage(number)}
      className={`px-3 md:px-4 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-medium transition ${
        currentPage === number
          ? "bg-blue-900 text-white"
          : "bg-white border hover:bg-gray-200"
      }`}
    >
      {number}
    </button>
  ))}
</div>
    </section>
  );
}

export default Shop;
