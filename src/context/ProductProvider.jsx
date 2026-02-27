import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider=({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ProductAlldata = await fetch(" https://dummyjson.com/products");

        const ProductData = await ProductAlldata.json();

        setProducts(ProductData.products);
      } catch (error) {
        console.log("error fecthing api");
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <ProductContext.Provider value={{ products }}>
        {children}
      </ProductContext.Provider>
    </>
  );
}

export default ProductProvider;
