import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import User from "../../../assets/images/user.png";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";
import Logo from "../../../assets/images/logo.png";

const initialState = {
  item_id: "",
  item_name: "",
  item_brand: "",
  item_status: "",
  item_price: "",
  image: null,
};

class AddStoreItem extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange = (event) => {
    this.setState({ image: event.target.files[0] });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append("image", this.state.image);
    formData.append("item_id", this.state.item_id);
    formData.append("item_name", this.state.item_name);
    formData.append("item_brand", this.state.item_brand);
    formData.append("item_status", this.state.item_status);
    formData.append("item_price", this.state.item_price);

    console.log("formData", formData);
    axios
      .post(`${APIURL}/stores/add-stores-details`, formData)
      .then((res) => {
        console.log("res", res);

        if (res.data.code === 200) {
          toast.success(res.data.message);
          window.location.reload();
          //this.props.history.push("/get-all-food-menu");
        } else {
          toast.error(res.data.message);
        }
      });
  }


  render() {
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
            </ul>
      
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <nav className="navbar navbar-expand topbar mb-4 static-top">
                <h1 className="h3 mb-2 text-gray-800">
                  Newly Spare Item Parts Add
                </h1>
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
                        {" "}
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              <div
                className="container-fluid"
                style={{
                  backgroundImage: 'url("../../../assets/images/MI13.jpg")',
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                }}
              >
                <div className="d-sm-flex align-items-center justify-content-between mb-4"></div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                      <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                          <div className="row">
                            <div
                              className="col-lg-6 d-none d-lg-block"
                              style={{
                                backgroundImage:
                                  'url("../../../assets/images/store4.jpg")',
                              }}
                            />
                            <div className="col-lg-6">
                              <div className="p-5">
                                <div className="text-center">
                                  <h1 className="h4 text-gray-900 mb-4">
                                    New Spare Item Parts Details
                                  </h1>
                                </div>
                                <form
                                  className="user"
                                  onSubmit={this.onSubmit}
                                  method="post"
                                >
                                  <div className="form-group">
                                    <label>Item Id</label>
                                    <input
                                      type="text"
                                      required="required"
                                      name="item_id"
                                      value={this.state.item_id}
                                      placeholder="SPI-000"
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label>Item Name</label>
                                    <input
                                      type="text"
                                      required="required"
                                      pattern="^[A-Za-zÀ-ÿ ,.'-]+$"
                                      name="item_name"
                                      value={this.state.item_name}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label>Item Brand</label>
                                    <input
                                      type="text"
                                      required="required"
                                      name="item_brand"
                                      value={this.state.item_brand}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label>Item Status</label>
                                    <select
                                      className="form-control "
                                      style={{ borderRadius: 25, height: 50 }}
                                      name="item_status"
                                      value={this.state.item_status}
                                      onChange={this.onChange}
                                    >
                                      <option>Select Type</option>
                                      <option value="Brandnew">Brand New</option>
                                      <option value="Used">
                                        Used
                                      </option>
                                    </select>
                                  </div>

                                  <div className="form-group">
                                    <label>Item Price (Rs.)</label>
                                    <input
                                      type="text"
                                      name="item_price"
                                      required="required"
                                      pattern="[0-9]*"
                                      value={this.state.item_price}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Images</label>
                                    <input
                                      type="file"
                                      name="image"
                                      accept="image/*"
                                      onChange={this.onFileChange}
                                      className=" images-upload"
                                      required
                                    />
                                  </div>

                                  <button
                                    type="submit"
                                    className="btn btn-primary btn-user btn-block"
                                  >
                                    Add New Item Part
                                  </button>
                                </form>
                                <hr />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto text-black ">
                  <span>Copyright © JAI AUTO MART </span>
                </div>
              </div>
            </footer>
          </div>
        </div>
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
  }
}
export default AddStoreItem;
