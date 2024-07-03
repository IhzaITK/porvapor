import { Link } from "react-router-dom";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { myFunction } from "../javascript/script";

function Header() {
  return (
    <>
      <header className="bg-[#F7F6EC] border-b-[1px] border-[#242323] fixed top-0 w-full z-50">
        <div className="bg-black p-2 "></div>
        <nav className="flex justify-between text-[#242323] lg:py-2">
          <div className="flex items-center py-[6px] px-4 gap-1 md:gap-4">
            <Link to="/profile">
              <img src="../img/cart1.png" alt="profile" className="w-4 md:w-6" />
            </Link>
            <ul className="flex items-center py-1 px-0 md:px-4 gap-2 md:gap-4">
              <li className="text-[7px] md:text-sm font-normal leading-[24px] ml-3 uppercase">
                <Link to="/home">Home</Link>
              </li>
              <li className="text-[7px] md:text-sm font-normal leading-[24px] uppercase">
                <Link to="/product1">Products</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <Link to="/home">
            <img src="../img/cart3.png" alt="vapor" className="md:w-32 w-14  text-center" />
            </Link>
          </div>
          <div className="flex items-center gap-2 md:gap-4 mr-4">
            <input type="text" placeholder="Search" className="pl-2 md:pl-4 placeholder:text-[10px] pb-1 rounded-lg border-[1px] border-[#242323] w-24 md:w-44 lg:w-60 lg:h-6 lg:placeholder:text-[12px] h-5 " />
            <Link>
              <img src="../img/cart2.png" alt="cart" className="w-4 md:w-6" id="cart" onClick={myFunction} />
            </Link>
          </div>

          <div className="hidden overflow-auto absolute bg-white shadow-lg max-w-[200px] h-60 w-full right-0 top-full pb-12 lg:h-[26rem] lg:max-w-[450px]" id="itemCards">
            <div className="flex mt-3 bg-[#242323] py-3 pl-2 text-white border rounded-lg mx-4">
              <div className="flex items-center gap-2">
                <img src="../img/cart4.png" alt="" className="rounded-sm w-8 lg:w-20" />
                <p className="text-[5px] font-normal leading-normal lg:text-sm ">
                  Pod X Signature green satin <span className="block text-[5px] tracking-tight mt-1 lg:text-sm">Rp.116.800</span>
                </p>
              </div>
              <div className="flex justify-end items-end ml-5 gap-1 lg:w-24">
                <CiSquareMinus className="w-2 pt-2" />
                <p className="text-[6px]">1</p>
                <CiSquarePlus className="w-2 pt-2" />
              </div>
              <div className="absolute top-3 right-6 lg:top-4">
                <FaRegTrashAlt className="w-2" />
              </div>
            </div>
            <div className="flex mt-3 bg-[#242323] py-3 pl-2 text-white border rounded-lg mx-4">
              <div className="flex items-center gap-2">
                <img src="./img/cart5.png" alt="" className="rounded-sm w-8 lg:w-20" />
                <p className="text-[5px] font-normal leading-normal lg:text-sm ">
                  RELX Artisan Metal Silver <span className="block text-[5px] tracking-tight mt-1 lg:text-sm">Rp.280.000</span>
                </p>
              </div>
              <div className="flex justify-end items-end ml-7 gap-1 lg:w-[105px]">
                <CiSquareMinus className="w-2 pt-2" />
                <p className="text-[6px]">1</p>
                <CiSquarePlus className="w-2 pt-2" />
              </div>
              <div className="absolute top-[84px] right-6 lg:top-[132px] ">
                <FaRegTrashAlt className="w-2 " />
              </div>
            </div>
            <div className="flex mt-3 bg-[#242323] py-3 pl-2 text-white border rounded-lg mx-4">
              <div className="flex items-center gap-2">
                <img src="./img/cart6.png" alt="" className="rounded-sm w-8 lg:w-20" />
                <p className="text-[5px] font-normal leading-normal max-w-[60px] lg:max-w-full lg:text-sm ">
                  NITROUS ZAION KIT - ISABELLA <span className="block text-[5px] tracking-tight mt-1 lg:text-sm">Rp.1.260.000</span>
                </p>
              </div>
              <div className="flex justify-end items-end ml-6 gap-1 lg:w-[55px]">
                <CiSquareMinus className="w-2 pt-2" />
                <p className="text-[6px]">1</p>
                <CiSquarePlus className="w-2 pt-2" />
              </div>
              <div className="absolute top-[152px] right-6 lg:top-[249px] ">
                <FaRegTrashAlt className="w-2 " />
              </div>
            </div>
            <div className="flex mt-3 bg-[#242323] py-3 pl-2 text-white border rounded-lg mx-4 ">
              <div className="flex items-center gap-2">
                <img src="./img/cart7.png" alt="" className="rounded-sm w-8 lg:w-20" />
                <p className="text-[5px] font-normal leading-normal max-w-[60px] lg:max-w-full lg:text-sm ">
                  Menthe Fraîche Le Petit -Verger <span className="block text-[5px] tracking-tight mt-1 lg:text-sm">Rp.89.500</span>
                </p>
              </div>
              <div className="flex justify-end items-end ml-6 gap-1 lg:w-[70px]">
                <CiSquareMinus className="w-2 pt-2" />
                <p className="text-[6px]">1</p>
                <CiSquarePlus className="w-2 pt-2" />
              </div>
              <div className="absolute top-[224px] right-6 lg:top-[374px]">
                <FaRegTrashAlt className="w-2 " />
              </div>
            </div>
            <div className="flex mt-3 bg-[#242323] py-3 pl-2 text-white border rounded-lg mx-4">
              <div className="flex items-center gap-2">
                <img src="./img/cart8.png" alt="" className="rounded-sm w-8 lg:w-20" />
                <p className="text-[5px] font-normal leading-normal max-w-[60px] lg:max-w-full lg:text-sm ">
                  WAKA soMatch Mini Device Teal Green <span className="block text-[5px] tracking-tight mt-1 lg:text-sm">Rp.150.000</span>
                </p>
              </div>
              <div className="flex justify-end items-end ml-6 gap-1">
                <CiSquareMinus className="w-2 pt-2" />
                <p className="text-[6px]">1</p>
                <CiSquarePlus className="w-2 pt-2" />
              </div>
              <div className="absolute top-[295px] right-6 lg:top-[500px] ">
                <FaRegTrashAlt className="w-2 " />
              </div>
            </div>
            <div className="mx-4 mt-4">
              <div className="flex justify-between text-coklat text-[8px] font-bold mb-2 lg:text-sm ">
                <h3>Subtotal</h3>
                <p>1,895,00</p>
              </div>
              <Link to="/checkout">
                <button className="w-full h-6 bg-coklat text-white font-semibold text-[8px] border-1 rounded-xl lg:text-sm lg:h-10">Checkout</button>
              </Link>
              <Link to="/cartpage">
                <button className="w-full h-6 mt-2 text-dark font-semibold text-[8px] border-2 border-coklat rounded-xl lg:text-sm lg:h-10">Review Cart</button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
