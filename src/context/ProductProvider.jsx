import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  

  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=150");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log("Error fetching API", error);
      }
    };
    fetchData();
  }, []);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentProducts = products.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <ProductContext.Provider
      value={{
        products,
        currentProducts,
        currentPage,
        setCurrentPage,
        totalPages,
        pageNumbers,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;