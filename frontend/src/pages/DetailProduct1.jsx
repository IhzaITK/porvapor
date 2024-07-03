import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/detailproduct1.css";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [randomProducts, setRandomProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8888/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log('API Error:', err);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchRandomProducts = async () => {
      try {
        const res = await axios.get('http://localhost:8888/products');
        const products = res.data;
        const shuffled = products.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);
        setRandomProducts(selected);
      } catch (err) {
        console.log('API Error:', err);
      }
    };
    fetchRandomProducts();
  }, []);

  const handleAddToCart = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8888/api/cart",
        { product_id: id, quantity },
        { withCredentials: true }
      );
      alert("Product added to cart successfully");
    } catch (err) {
      console.log("Error adding to cart:", err);
      alert("Failed to add product to cart");
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <main className="detail-body">
        <section className="product-hero">
          <div className="detail">
            <div className="product-details">
              <div className="product-image">
                <img
                  src={`http://localhost:8888${product.image}`}
                  alt={product.name}
                  className="oxbar-image"
                />
              </div>
              <div className="product-info">
                <h2>{product.name}</h2>
                <p className="price">Rp. {product.price}</p>
                <div className="flex gap-1 ">
                  <CiSquareMinus size={24} onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)} />
                  <p className="text-[24px] ">{quantity}</p>
                  <CiSquarePlus size={24} onClick={() => setQuantity(prev => prev + 1)} />
                </div>
                <button className="cart" onClick={handleAddToCart}>Add to Cart</button>
                <div className="description">
                  <h3>DESCRIPTION</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="product-reviews">
          <div className="detail">
            <h2 className="product-review">Product Reviews</h2>
            <div className="reviews">
              <div className="review">
                <div className="rating">5/5</div>
                <img className="star" src="../../public/img/black_star.png" />
                <p> Shipping was super fast and the price was unbeatable. Highly recommend!</p>
                <p className="mt-2">Shelli</p>
              </div>
              <div className="review">
                <div className="rating">5/5</div>
                <img className="star" src="../../public/img/black_star.png" />
                <p>The Oxbar Magic Maze Blue Raz is a fantastic vape. I love the blue raz flavor, it's very refreshing. Por-Vapor delivered it quickly and the packaging was secure.</p>
                <p className="mt-2">Sophia T</p>
              </div>
              <div className="review">
                <div className="rating">5/5</div>
                <img className="star" src="../../public/img/black_star.png" />
                <p>Por-Vapor is my go-to for all my vaping needs. The Oxbar Magic Maze Blue Raz is a game-changer. Smooth flavor, great design, and the best price I've found online.</p>
                <p className="mt-2">Will</p>
              </div>
              <div className="review">
                <div className="rating">5/5</div>
                <img className="star" src="../../public/img/black_star.png" />
                <p>Incredible flavor and a great hit! The Oxbar Magic Maze Blue Raz from Por-Vapor arrived earlier than expected, and the price was fantastic.</p>
                <p className="mt-2">Emma r.</p>
              </div>
              <div className="review">
                <div className="rating">5/5</div>
                <img className="star" src="../../public/img/black_star.png" />
                <p>The whole shopping experience was seamless. Will definitely buy again</p>
                <p className="mt-2">DEENY010</p>
              </div>
              <div className="review">
                <div className="rating">5/5</div>
                <img className="star" src="../../public/img/black_star.png" />
                <p>he Oxbar Magic Maze Blue raz is one of the best vapes i've tried. Por-Vapor service was execellent, and the shipping was fast</p>
                <p>JACKY77</p>
              </div>
            </div>
          </div>
        </section>

        <section className="related-products">
          <div className="detail">
            <h2>More Like This</h2>
            <div className="products">
              {Array.isArray(randomProducts) && randomProducts.map((item) => (
                <div className="product" key={item.id}>
                  <button className="product-link" onClick={() => window.location.href = `/detail/${item.id}`}>
                    <img
                      src={`http://localhost:8888${item.image}`}
                      alt={item.name}
                      className="product-image"       
                    />
                  </button>
                  <h3>{item.name}</h3>
                  <img className="ratings" src="/img/bintang.png" alt="star" />
                  <div className="price">Rp. {item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
