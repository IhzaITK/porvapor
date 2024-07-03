import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

function Product1() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8888/api/products", {
          params: {
            searchTerm,
            category
          }
        });
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFilteredProducts();
  }, [searchTerm, category]);

  const handleSearchChange = event => setSearchTerm(event.target.value);
  const handleCategoryChange = event => setCategory(event.target.value);
  const handlePageChange = pageNumber => setCurrentPage(pageNumber);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <>
      <section className="mt-14 pb-10">
        <div className="container">
          <div className="flex justify-between items-center mb-6 pt-32">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="border rounded-lg p-2 w-1/3"
            />
            <select value={category} onChange={handleCategoryChange} className="border rounded-lg p-2 w-1/4">
              <option value="">All Categories</option>
              <option value="Liquid">Liquid</option>
              <option value="Vape">Vape</option>
              <option value="Coil">Coil</option>
              <option value="Kapas">Kapas</option>
              <option value="Mod">Mod</option>
              <option value="Pod">Pod</option>
              <option value="Catridge">Catridge</option>
              {/* Add more categories as needed */}
            </select>
          </div>
          <div className="flex flex-wrap justify-between mb-0 md:mb-10 md:gap-1 lg:gap-6 md:mx-4 lg:mx-48">
            {currentProducts.map(product => (
              <div className="card-items" key={product.id}>
                <Link to={`/detail/${product.id}`}>
                  <img
                    src={`http://localhost:8888${product.image}`}
                    alt={product.name}
                    className="card-img"
                  />
                  <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">
                    {product.name}
                  </h2>
                  <img src="img/bintang.png" alt="" className="card-bintang" />
                  <p className="card-p">{`Rp.${product.price}`}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full text-center mb-10">
            <button
              className="font-medium text-sm py-3 px-3 text-white border rounded-full lg:text-xl"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaChevronLeft />
            </button>
            {[...Array(totalPages).keys()].map(number => (
              <button
                key={number + 1}
                className={`font-medium mx-2 text-sm py-3 px-3 border rounded-full lg:text-xl ${currentPage === number + 1 ? 'bg-white text-dark' : 'text-white'}`}
                onClick={() => handlePageChange(number + 1)}
              >
                {number + 1}
              </button>
            ))}
            <button
              className="font-medium text-sm py-3 px-3 text-white border rounded-full lg:text-xl"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product1;
