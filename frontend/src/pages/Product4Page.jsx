import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";
import { RiNumber5 } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Product4() {
  return (
    <div className="bg-coklat">
      <Header />

      <section className="mt-14 pb-10">
        <div className="container ">
          <div className="flex flex-wrap justify-between mb-0 pt-32 md:mb-10 md:gap-1 lg:gap-6 md:mx-4 lg:mx-48">
            <div className="card-items">
              <img src="img/product4_img1.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Montreal American</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.539.000</p>
            </div>
            <div className="card-items">
              <img src="img/product4_img2.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Dinner Lady Banana Ice</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.139.000</p>
            </div>
            <div className="card-items">
              <img src="img/product4_img3.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Oxbar Mini apple pear</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.59.000</p>
            </div>
            <div className="card-items">
              <img src="img/product4_img4.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Pod X Signature green satin</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.59.00</p>
            </div>
            <div className="card-items">
              <img src="img/product4_img5.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Dinner Lady Peach</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.139.000</p>
            </div>
            <div className="card-items">
              <img src="img/product4_img6.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Oxbar magic maze blue raz</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.299.000</p>
            </div>
            <div className="card-items">
              <img src="img/product4_img7.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Pulp Caramel</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.266.000</p>
            </div>
            <div className="card-items">
              <img src="img/product4_img8.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Pulp Flip Mint</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.190.000</p>
            </div>
            <div className="card-items">
              <img src="img/product4_img9.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Old Nuts Moon Shine</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.314.000</p>
            </div>
            <div className="card-items">
              <img src="img/product4_img10.png" alt="" className="card-img" />
              <h2 className="text-[7px] md:text-[10px] lg:text-sm mt-2">W Puff Berriess</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.90.000</p>
            </div>
            <div className="card-items">
              <img src="img/product4_img11.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Coco Puff Mango Glace</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.160.000</p>
            </div>
            <div className="card-items">
              <img src="img/product4_img12.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Oxbar Slim Pink Lemonade</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.70.000</p>
            </div>
          </div>
          <div className="w-full text-center mb-10  ">
            <button className="font-medium text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product3">
                <FaChevronLeft />
              </Link>
            </button>
            <button className="font-medium mx-2 text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product1">
                <RiNumber1 />
              </Link>
            </button>
            <button className="font-medium text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product2">
                <RiNumber2 />
              </Link>
            </button>
            <button className="font-medium mx-2 text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product3">
                <RiNumber3 />
              </Link>
            </button>
            <button className="font-medium text-sm py-3 px-3 text-dark bg-white border rounded-full lg:text-xl">
              <Link to="#">
                <RiNumber4 />
              </Link>
            </button>
            <button className="font-medium mx-2 text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product5">
                <RiNumber5 />
              </Link>
            </button>
            <button className="font-medium text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product5">
                <FaChevronRight />
              </Link>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Product4;
