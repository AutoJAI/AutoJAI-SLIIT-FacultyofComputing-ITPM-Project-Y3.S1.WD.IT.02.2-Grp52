import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import User from "../../../assets/images/user.png";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";
import Logo from "../../../assets/images/logo.png";

const initialState = {
  employee_id: "",
  employee_name: "",
  employee_address: "",
  employee_phone: "",
  employee_email: "",
  employee_status: "",
  employee_nic: "",
  employee_education: "",
  employee_department: "",
  employee_post: "",
  employee_basicSalary: "",
};

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    let EmployeeDetails = {
      employee_id: this.state.employee_id,
      employee_name: this.state.employee_name,
      employee_address: this.state.employee_address,
      employee_phone: this.state.employee_phone,
      employee_email: this.state.employee_email,
      employee_status: this.state.employee_status,
      employee_nic: this.state.employee_nic,
      employee_education: this.state.employee_education,
      employee_department: this.state.employee_department,
      employee_post: this.state.employee_post,
      employee_basicSalary: this.state.employee_basicSalary,
    };

    axios
      .post(`${APIURL}/employee/register-employee`, EmployeeDetails)
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
              href="/employee-dash"
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
              <a className="nav-link" href="/employee-dash">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>Dashboard</span>
              </a>
            </li>
            <br />
            <div className="sidebar-heading">Employee Management</div>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/add-new-employee">
                  <button className="dropbtn">
                    <i className="fa fa-plus-circle" /> New Employee
                  </button>
                </Link>
              </div>
            </li>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/get-all-employee">
                  <button className="dropbtn">
                    <i className="fa fa-bars" /> Employee List
                  </button>
                </Link>
              </div>
            </li>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/get_all_salary">
                  <button className="dropbtn">
                    <i className="fa fa-bars" /> Salary List
                  </button>
                </Link>
              </div>
            </li>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/get_all_salary_pay">
                  <button className="dropbtn">
                    <i className="fa fa-bars" /> Payeed List
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
                  Newly Employee Record Add
                </h1>
                <ul className="navbar-nav ml-auto">
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
                                  'url("../../../assets/images/JAIEmp3.jpg")',
                              }}
                            />
                            <div className="col-lg-6">
                              <div className="p-5">
                                <div className="text-center">
                                  <h1 className="h4 text-gray-900 mb-4">
                                    New Employee Details
                                  </h1>
                                </div>
                                <form
                                  className="user"
                                  onSubmit={this.onSubmit}
                                  method="post"
                                >
                                  <div className="form-group">
                                    <label>Employee ID</label>
                                    <input
                                      type="text"
                                      name="employee_id"
                                      value={this.state.employee_id}
                                      onChange={this.onChange}
                                      placeholder = "EMP-000"
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Employee Name</label>
                                    <input
                                      type="text"
                                      name="employee_name"
                                      value={this.state.employee_name}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label>Address</label>
                                    <input
                                      type="text"
                                      name="employee_address"
                                      value={this.state.employee_address}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                      type="text"
                                      name="employee_phone"
                                      value={this.state.employee_phone}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                      type="text"
                                      name="employee_email"
                                      value={this.state.employee_email}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Marital Status</label>
                                    <select
                                      className="form-control "
                                      style={{ borderRadius: 25, height: 50 }}
                                      name="employee_status"
                                      value={this.state.employee_status}
                                      onChange={this.onChange}
                                    >
                                      <option>Select Marital Status</option>
                                      <option value="Single">Single</option>
                                      <option value="Married">Married</option>
                                    </select>
                                  </div>

                                  <div className="form-group">
                                    <label>NIC Number</label>
                                    <input
                                      type="text"
                                      name="employee_nic"
                                      value={this.state.employee_nic}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Education Qualification</label>
                                    <input
                                      type="text"
                                      name="employee_education"
                                      value={this.state.employee_education}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Assign Section</label>
                                    <input
                                      type="text"
                                      name="employee_department"
                                      value={this.state.employee_department}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Assign Post</label>
                                    <input
                                      type="text"
                                      name="employee_post"
                                      value={this.state.employee_post}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Basic Salary(Rs.)</label>
                                    <input
                                      type="text"
                                      name="employee_basicSalary"
                                      value={this.state.employee_basicSalary}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  {/* <div className="form-group">
                                    <label>Images</label>
                                    <input
                                      type="file"
                                      name="image"
                                      accept="image/*"
                                      onChange={this.onFileChange}
                                      className=" images-upload"
                                    />
                                  </div> */}

                                  <button
                                    type="submit"
                                    className="btn btn-primary btn-user btn-block"
                                  >
                                    Add
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
export default AddEmployee;