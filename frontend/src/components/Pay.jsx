import { Link } from "react-router-dom";

function Pay() {
  return (
    <>
      <section className="">
        <div className="w-full flex items-center justify-between py-2 px-5 ">
          <div className="flex">
            <h3 className="lg:text-lg font-semibold text-coklat text-xs">
              Subtotal <span className="block text-[6px] lg:text-[10px] font-normal ">Delivery & taxes calculated at checkout</span>
            </h3>
          </div>
          <p className="text-coklat text-xs lg:text-xl font-bold ml-4 lg:ml-24">Rp.1,895,000</p>
          <button className="w-24 text-xs lg:w-64 bg-coklat p-1 text-white font-semibold lg:text-lg border-1 rounded-xl">
            <Link to="/checkout">Checkout Now</Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Pay;
