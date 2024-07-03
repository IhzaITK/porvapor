import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/order.css";
import { Link } from "react-router-dom";

function Order() {
  return (
    <div className="body-order">
      <Header />

      <h1 className="header">Orders</h1>
      <div className="order">
        <div className="sidebar_pro">
          <ul className="order-ul">
            <Link to="/profile">
              <a className="side-link">Account Details</a>
            </Link>

            <br />
            <Link to="#">
              <a className="side-link">Orders</a>
            </Link>
            <br />
            <Link to="/change">
              <a className="side-link">Change Password</a>
            </Link>
            <br />
            <Link to="/login">
              <a className="side-link">Log Out</a>
            </Link>
          </ul>
        </div>
        <div className="riwayat">
          <table className="table mt-5">
            <thead className="order-thead">
              <tr>
                <th scope="col" className="order-th">
                  Tanggal <i className="fa fa-calendar-o" aria-hidden="true"></i>
                </th>
                <th scope="col" className="order-th">
                  Produk
                </th>
                <th scope="col" className="order-th center">
                  Jumlah
                </th>
                <th scope="col" className="order-th center">
                  Total
                </th>
                <th scope="col" className="order-th center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="tbody-order"></tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Order;
