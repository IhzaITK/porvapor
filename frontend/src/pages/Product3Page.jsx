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

function Product3() {
  return (
    <div className="bg-coklat">
      <Header />

      <section className="mt-14 pb-10">
        <div className="container ">
          <div className="flex flex-wrap justify-between mb-0 pt-32 md:mb-10 md:gap-1 lg:gap-6 md:mx-4 lg:mx-48">
            <div className="card-items">
              <img src="img/product3_img1.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Vinci Bar Lime</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.60.000</p>
            </div>
            <div className="card-items">
              <img src="img/product3_img2.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">XLIM GO Red</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.510.000</p>
            </div>
            <div className="card-items">
              <img src="img/product3_img3.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Just Juice Banana Mango</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.79.000</p>
            </div>
            <div className="card-items">
              <img src="img/product3_img4.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Swoke Clonejuice</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.200.000</p>
            </div>
            <div className="card-items">
              <img src="img/product3_img5.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Montreal Oasis</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.519.000</p>
            </div>
            <div className="card-items">
              <img src="img/product3_img6.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Vozol Cola Ice</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.89.000</p>
            </div>
            <div className="card-items">
              <img src="img/product3_img7.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">W Salt W-melon</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.149.000</p>
            </div>
            <div className="card-items">
              <img src="img/product3_img8.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Oxbar Mini Kiwi</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.79.000</p>
            </div>
            <div className="card-items">
              <img src="img/product3_img9.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">FOOM Refillable Cartridge X</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.59.00</p>
            </div>
            <div className="card-items">
              <img src="img/product3_img10.png" alt="" className="card-img" />
              <h2 className="text-[7px] md:text-[10px] lg:text-sm mt-2">Montreal Rodeo</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.519.000</p>
            </div>
            <div className="card-items">
              <img src="img/product3_img11.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Montreal French</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.409.000</p>
            </div>
            <div className="card-items">
              <img src="img/product3_img12.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">French La Chose</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.229.000</p>
            </div>
          </div>
          <div className="w-full text-center mb-10  ">
            <button className="font-medium text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product2">
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
            <button className="font-medium mx-2 text-sm py-3 px-3 text-dark bg-white border rounded-full lg:text-xl">
              <Link to="#">
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
              <Link to="/product4">
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

export default Product3;
