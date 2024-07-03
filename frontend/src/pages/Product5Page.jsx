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

function Product5() {
  return (
    <div className="bg-coklat">
      <Header />

      <section className="mt-14 pb-10">
        <div className="container ">
          <div className="flex flex-wrap justify-between mb-0 pt-32 md:mb-10 md:gap-1 lg:gap-6 md:mx-4 lg:mx-48">
            <div className="card-items">
              <img src="img/product5_img1.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Master DIY Nicotine Booster</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.300.000</p>
            </div>
            <div className="card-items">
              <img src="img/product5_img2.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Vinci Bar Lime</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.60.000</p>
            </div>
            <div className="card-items">
              <img src="img/product5_img3.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Oxbar RRD purple</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.79.000</p>
            </div>
            <div className="card-items">
              <img src="img/product5_img4.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Swoke Clonejuice</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.200.000</p>
            </div>
            <div className="card-items">
              <img src="img/product5_img5.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">W Puff Nano Mint</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.90.000</p>
            </div>
            <div className="card-items">
              <img src="img/product5_img6.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Dinner Lady Water Melon</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.60.000</p>
            </div>
            <div className="card-items">
              <img src="img/product5_img7.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">RELX BUBBLEMON banana</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.120.000</p>
            </div>
            <div className="card-items">
              <img src="img/product5_img8.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">600 puffs / Watermelon Mojito</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.159.000</p>
            </div>
            <div className="card-items">
              <img src="img/product5_img9.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Click Puff Cartridge Lemon</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.40.000</p>
            </div>
            <div className="card-items">
              <img src="img/product5_img10.png" alt="" className="card-img" />
              <h2 className="text-[7px] md:text-[10px] lg:text-sm mt-2">Pulp Flip Mint</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.190.000</p>
            </div>
            <div className="card-items">
              <img src="img/product5_img11.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Pod X WILD Purple prefilled</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.298.000</p>
            </div>
            <div className="card-items">
              <img src="img/product5_img12.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Montreal Oasis</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.519.000</p>
            </div>
          </div>
          <div className="w-full text-center mb-10  ">
            <button className="font-medium text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product4">
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
            <button className="font-medium text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product4">
                <RiNumber4 />
              </Link>
            </button>
            <button className="font-medium mx-2 text-sm py-3 px-3 text-dark bg-white border rounded-full lg:text-xl">
              <Link to="#">
                <RiNumber5 />
              </Link>
            </button>
            <button className="font-medium text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="#">
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

export default Product5;
