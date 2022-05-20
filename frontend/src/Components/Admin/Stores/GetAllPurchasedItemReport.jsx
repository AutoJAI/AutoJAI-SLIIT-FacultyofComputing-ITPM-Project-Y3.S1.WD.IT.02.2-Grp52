import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { APIURL } from "../../API/environment";
import User from "../../../assets/images/user.png";
import Logo from "../../../assets/images/logo.png";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Loader from "react-loader-spinner";

const GetAllPurchasedItemReport = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [order, SetOrder] = useState([]);
  const [baseData, setBaseData] = useState([]);
  const [deleted, setDeleted] = useState(0);
  const doc = new jsPDF("landscape");
  useEffect(() => {
    async function gedData() {
      try {
        const response = await axios.get(
          `${APIURL}/purchase/get-all-purchased-details`
        );
        if (response.status === 200) {
          SetOrder(response.data.PurchasedItemDetails);
          setBaseData(response.data.PurchasedItemDetails);
        }
      } catch (error) {
        //  toast(error.response.data.message, { type: toast.TYPE.ERROR });
      }
      setIsLoading(false);
    }
    gedData();
  }, [deleted]);

  const downloadReport = () => {
    doc.text("Purchased Items Report", 30, 10);

    let array = [];
    order.map((orders, index) => {
      let row = [];
      row.push(index + 1);
      row.push(orders.purchase_id);
      row.push(orders.purchase_item_name);
      row.push(orders.supplier);
      row.push(orders.item_type);
      row.push(orders.item_add_date);
      row.push(orders.item_qnty);
      row.push(orders.purchased_price);
      row.push(orders.total_item_price);
      array.push(row);
      return row;
    });

    doc.autoTable({
      head: [
        [
          "#",
          "Purchase Id",
          "Purchased Item Name",
          "Supplier",
          "Item Type",
          "Added Date",
          "Quantity",
          "Purchased Price (Rs.)",
          "Total Price (Rs.)",

        ],
      ],

      body: array,
    });

    doc.save("Purchased_Items.pdf");
    //window.location.reload();
  };

  const search = (inp) => {
    if (!inp.target.value) {
      SetOrder(baseData);
    } else {
      let searchList = baseData.filter(
        (data) =>
          data.purchase_id
            .toLowerCase()
            .includes(inp.target.value.toLowerCase()) ||
          data.purchase_item_name
            .toLowerCase()
            .includes(inp.target.value.toLowerCase()) ||
          data.supplier.toLowerCase().includes(inp.target.value.toLowerCase())
      );
      SetOrder(searchList);
    }
  };

  return (
    <div>
      <header id="home"></header>
      <div id="wrapper">
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <br />
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="/stores-dash"
          >
            <div
              className="sidebar-brand-icon rotate-n-0"
              style={{
                width: 50,
                height: 50,
                marginRight: 140,
                marginBottom: 100,
              }}
            >
              <img src={Logo} alt="" />
            </div>
            <div className="sidebar-brand-text mx-3"></div>
          </a>
          <br />
          <br />
          <br />
          <hr className="sidebar-divider my-0" />
          <li className="nav-item active">
            <a className="nav-link" href="/stores-dash">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Dashboard</span>
            </a>
          </li>
          <br />
          <div className="sidebar-heading">Stores Management</div>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/add-stores-item">
                  <button className="dropbtn">
                    <i className="fa fa-plus-circle" /> New Spare Item Parts
                  </button>
                </Link>
              </div>
            </li>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/add-purchase-item">
                  <button className="dropbtn">
                    <i className="fa fa-plus-circle" /> Purchase Items
                  </button>
                </Link>
              </div>
            </li>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/get-all-stores-item">
                  <button className="dropbtn">
                    <i className="fa fa-bars" /> Spare Item Parts List
                  </button>
                </Link>
              </div>
            </li>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/get-all-purchased-items">
                  <button className="dropbtn">
                    <i className="fa fa-bars" /> Purchased Items List
                  </button>
                </Link>
              </div>
            </li>
            <br />
            <li className="nav-item">
            <div className="dropdown">
              <Link to="/get_purchased_items_report">
                <button className="dropbtn">
                  <i className="fa fa-bars" /> Purchased Items Report
                </button>
              </Link>
            </div>
          </li>
          <br />
          <li className="nav-item">
            <div className="dropdown">
              <Link to="/get_purchased_items_report">
                <button className="dropbtn">
                  <i className="fa fa-bars" /> Purchased Items Report
                </button>
              </Link>
            </div>
          </li>
          <br />
        </ul>

        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <nav className="navbar navbar-expand topbar mb-4 static-top">
              <h1 className="h3 mb-2 text-gray-800">All Purchased Items List</h1>
              <ul className="navbar-nav ml-auto">
                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      className="img-profile rounded-circle"
                      src={User}
                      alt=""
                    />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <div className="dropdown-divider" />
                    <a
                      className="dropdown-item"
                      href="/"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="container-fluid">
              <p className="mb-4">All Purchased Items available in here.</p>
              <div className="row" style={{ marginBottom: 20 }}>
                <div className="col-6">
                  <div>
                    <button
                      onClick={downloadReport}
                      style={{ marginLeft: 70, fontSize: 20 }}
                    >
                      Download Report
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div style={{ marginLeft: 190 }}>
                    <input
                      type="search"
                      placeholder="Search.."
                      name="searchQuery"
                      style={{ height: 40 }}
                      onChange={search}
                    />
                  </div>
                </div>
              </div>

              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Check Purchased Items Details
                  </h6>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellSpacing={0}
                    >
                      <thead>
                        <tr>
                          <th>Purchase ID</th>
                          <th>Purchased Item Name</th>
                          <th>Supplier</th>
                          <th>Item Type</th>
                          <th>Added Date</th>
                          <th>Quantity</th>
                          <th>Purchased Price (Rs.)</th>
                          <th>Total Price (Rs.)</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Purchase ID</th>
                          <th>Purchased Item Name</th>
                          <th>Supplier</th>
                          <th>Item Type</th>
                          <th>Added Date</th>
                          <th>Quantity</th>
                          <th>Purchased Price (Rs.)</th>
                          <th>Total Price (Rs.)</th>
                        </tr>
                      </tfoot>
                      {order.length > 0 &&
                        order.map((item, index) => (
                          <tbody key={index}>
                            <tr>
                              <td>{item.purchase_id}</td>
                              <td>{item.purchase_item_name}</td>
                              <td>{item.supplier}</td>
                              <td>{item.item_type}</td>
                              <td>{item.item_add_date}</td>
                              <td>{item.item_qnty}</td>
                              <td>{item.purchased_price}</td>
                              <td>{item.total_item_price}</td>
                            </tr>
                          </tbody>
                        ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}
          {/* Footer */}
          <footer className="footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto text-black ">
                <span>Copyright © JAI AUTO MART </span>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}
      {/* Scroll to Top Button*/}
      <a className="scroll-to-top rounded" href="#home">
        <i className="fas fa-angle-up" />
      </a>
      <a href="#home" className="move-top text-center">
        <span className="fa fa-level-up" aria-hidden="true" />
      </a>
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="/">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAllPurchasedItemReport;

