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

function Product2() {
  return (
    <div className="bg-coklat">
      <Header />

      <section className="mt-14 pb-10">
        <div className="container ">
          <div className="flex flex-wrap justify-between mb-0 pt-32 md:mb-10 md:gap-1 lg:gap-6 md:mx-4 lg:mx-48">
            <div className="card-items">
              <img src="img/product2_img1.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">WAKA Hello Banana Freeze</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.80.000</p>
            </div>
            <div className="card-items">
              <img src="img/product2_img2.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">JOOZE - Menthol</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.149.000</p>
            </div>
            <div className="card-items">
              <img src="img/product2_img3.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Pod X Signature green satin</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.59.00</p>
            </div>
            <div className="card-items">
              <img src="img/product2_img4.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Swoke Flirt</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.359.000</p>
            </div>
            <div className="card-items">
              <img src="img/product2_img5.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">RELX BUBBLEMON banana</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.120.000</p>
            </div>
            <div className="card-items">
              <img src="img/product2_img6.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Oxbar Mini apple pear</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.59.000</p>
            </div>
            <div className="card-items">
              <img src="img/product2_img7.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Paperland Yellow</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.220.000</p>
            </div>
            <div className="card-items">
              <img src="img/product2_img8.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Old Nuts Moon Shine</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.314.000</p>
            </div>
            <div className="card-items">
              <img src="img/product2_img9.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Innokin Z Coil Zenith</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.40.000</p>
            </div>
            <div className="card-items">
              <img src="img/product2_img10.png" alt="" className="card-img" />
              <h2 className="text-[7px] md:text-[10px] lg:text-sm mt-2">E Vapor Salt Woody</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.249.000</p>
            </div>
            <div className="card-items">
              <img src="img/product2_img11.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Oxbar RRD purple</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.79.000</p>
            </div>
            <div className="card-items">
              <img src="img/product2_img12.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Essalt Blueberry</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.217.000</p>
            </div>
          </div>
          <div className="w-full text-center mb-10  ">
            <button className="font-medium text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product1">
                <FaChevronLeft />
              </Link>
            </button>
            <button className="font-medium mx-2 text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product1">
                <RiNumber1 />
              </Link>
            </button>
            <button className="font-medium text-sm py-3 px-3 text-dark bg-white border rounded-full lg:text-xl">
              <Link to="#">
                <RiNumber2 />
              </Link>
            </button>
            <button className="font-medium mx-2 text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product3">
                <RiNumber3 />
              </Link>
            </button>
            <button className="font-medium text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product4">
                <RiNumber4 />
              </Link>
            </button>
            <button className="font-medium mx-2 text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product5">
                <RiNumber5 />
              </Link>
            </button>
            <button className="font-medium text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product3">
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

export default Product2;
