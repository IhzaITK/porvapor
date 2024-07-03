import { Link } from "react-router-dom";

function TransferComplete() {
  return (
    <>
      <div className="w-full">
        <h1 className="font-base text-3xl text-center pt-24 pb-10">
          por-vapor<span className="text-xs relative -top-2 md:-top-4">™</span>
        </h1>
        <h2 className="font-base text-xs lg:text-2xl text-center text-white bg-[url('/img/transfer.gif')] bg-cover bg-center py-10 mx-10 lg:py-20 rounded-[170px] lg:mx-72">Thank You For Your Purchase</h2>
      </div>
      <p className="mt-8 text-center">Order #123RGR231567Y Confirmed</p>
      <div className="max-w-[15rem] mx-auto">
        <Link to="/home">
          <button className="w-full mx-auto mt-8 border px-8 py-1 rounded-full text-white bg-dark">Back To Home</button>
        </Link>
      </div>
    </>
  );
}

export default TransferComplete;
