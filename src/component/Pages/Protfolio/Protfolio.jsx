import React, { useEffect, useState } from 'react'

function Protfolio() {
    const [products, setProducts] = useState([]);
        
          useEffect(() => {
            fetch("https://dummyjson.com/products")
              .then((res) => res.json())
              .then((data) => setProducts(data.products));
          }, []);
  return (
      <>
            <section className="bg-[url('/Images/homebg.webp')] h-[70vh] bg-cover bg-top flex items-center justify-center">
        <div className="text-center text-white font-bold text-6xl">
          <h1>Portfolio</h1>
        </div>
      </section>
      <section>
              <div>
                  <ul  className="flex  gap-20 m-9 text-xl uppercase">
                      <a>All</a>
                      <a>Branding</a>
                      <a>Illustration</a>
                      <a>Photography</a>
                      <a>Web Design</a>
                  </ul>  
              </div>
              <div className="grid md:grid-cols-3 gap-6 p-10  ">

      {products.map((item) => (
        <div
          key={item.id}
          className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white mt-24"
        >
          <img
            className="w-full h-48 object-cover"
            src={item.thumbnail}
            alt=""
          />

          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>

            <p className="text-gray-600 line-clamp-2">{item.description}</p>

            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
              Explore
            </button>
          </div>
        </div>
      ))}
      </div>
      </section>
    </>
  )
}

export default Protfolio